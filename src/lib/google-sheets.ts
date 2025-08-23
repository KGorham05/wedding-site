import { GoogleAuth } from 'google-auth-library';
import { sheets_v4, google } from 'googleapis';
import { Guest, GuestData } from './guest-list';

interface RSVPResponse {
  timestamp: string;
  guestId: string;
  firstName: string;
  lastName: string;
  email: string;
  totalGuests: number;
  adults: number;
  children: number;
  childrenAges: string[];
  dietaryRestrictions: string;
  specialRequests: string;
  completedAt: string;
}

// Initialize Google Sheets API
const getGoogleSheetsClient = async (): Promise<sheets_v4.Sheets> => {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '';
  
  const credentials = {
    type: 'service_account' as const,
    project_id: process.env.GOOGLE_PROJECT_ID!,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID!,
    private_key: privateKey,
    client_email: process.env.GOOGLE_CLIENT_EMAIL!,
    client_id: process.env.GOOGLE_CLIENT_ID!,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`,
  };

  const auth = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
};

// Guest List Management Functions
export async function fetchGuestListFromSheets(): Promise<Guest[]> {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GUEST_LIST_SHEET_ID;
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Guest_List!A2:G', // Skip header row, columns A-G
    });

    const rows = response.data.values || [];
    
    return rows.map((row, index) => ({
      id: row[0] || `guest-${index + 1}`,
      firstName: row[1] || '',
      lastName: row[2] || '',
      email: row[3] || '',
      category: (row[4] || 'friends') as 'family' | 'friends' | 'colleagues' | 'plus-one' | 'admin',
      notes: row[5] || '',
      isAdmin: row[6]?.toLowerCase() === 'true' || false,
    }));
  } catch (error) {
    console.error('Error fetching guest list from sheets:', error);
    throw error;
  }
}

// RSVP Submission Functions
export async function submitRSVPToSheets(guestData: GuestData): Promise<void> {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.RSVP_RESPONSES_SHEET_ID;
    
    // Prepare the row data for RSVP responses
    const rowData = [
      new Date().toISOString(), // Timestamp
      guestData.guest.id,
      guestData.guest.firstName,
      guestData.guest.lastName,
      guestData.email,
      guestData.totalGuests,
      guestData.adults,
      guestData.children,
      guestData.childrenAges.join(', '),
      guestData.dietaryRestrictions,
      
      // Day 1 - Arrival & Welcome (yoga/sound bath attendees)
      (guestData.day1?.adults || 0) + (guestData.day1?.children || 0),

      // Day 2 - Adventures
      guestData.day2?.whitewaterRafting || 0,
      guestData.day2?.scenicFloat || 0,
      guestData.day2?.horsebackRiding || 0,
      guestData.day2?.hatMaking || 0,

      // Day 3 - Reception (TODO: Update when day3 structure is defined)
      0, // guestData.day3?.receptionAttendees || 0,

      // Day 4 - Yellowstone (TODO: Update when day4 structure is defined)
      0, // guestData.day4?.yellowstoneAttendees || 0,

      // Day 5 - Farewell (TODO: Update when day5 structure is defined)
      0, // guestData.day5?.farewellAttendees || 0,
      
      guestData.completedAt || '',
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'RSVP_Responses!A:S', // Adjusted range
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('RSVP data submitted to Google Sheets successfully');
  } catch (error) {
    console.error('Error submitting RSVP to sheets:', error);
    throw error;
  }
}

// Function to get all RSVP responses (for admin viewing)
export async function fetchAllRSVPResponses(): Promise<RSVPResponse[]> {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.RSVP_RESPONSES_SHEET_ID;
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'RSVP_Responses!A2:S', // Adjusted range
    });

    const rows = response.data.values || [];
    
    return rows.map((row) => ({
      timestamp: row[0] || '',
      guestId: row[1] || '',
      firstName: row[2] || '',
      lastName: row[3] || '',
      email: row[4] || '',
      totalGuests: parseInt(row[5]) || 0,
      adults: parseInt(row[6]) || 0,
      children: parseInt(row[7]) || 0,
      childrenAges: row[8]?.split(', ').filter(Boolean) || [],
      dietaryRestrictions: row[9] || '',
      specialRequests: row[10] || '',
      // Add more fields as needed...
      completedAt: row[43] || '', // Adjust index based on actual column count
    }));
  } catch (error) {
    console.error('Error fetching RSVP responses from sheets:', error);
    throw error;
  }
}
