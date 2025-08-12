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
      guestData.specialRequests,
      
      // Day 1 - Arrival
      guestData.day1?.arrivalTime || '',
      guestData.day1?.accommodationNeeds || '',
      guestData.day1?.transportationHelp || false,
      guestData.day1?.specialRequests || '',
      guestData.day1?.excitement || '',
      
      // Day 2 - Wedding
      guestData.day2?.weddingAttendance || '',
      guestData.day2?.ceremonySeating || '',
      guestData.day2?.receptionActivities?.join(', ') || '',
      guestData.day2?.photographyPreferences || '',
      guestData.day2?.specialMoments || '',
      guestData.day2?.energyLevel || '',
      
      // Day 3 - Adventure
      guestData.day3?.recoveryPlan || '',
      guestData.day3?.outdoorActivities?.join(', ') || '',
      guestData.day3?.hikingLevel || '',
      guestData.day3?.groupActivities?.join(', ') || '',
      guestData.day3?.relaxationPreference || '',
      guestData.day3?.energyRecovery || '',
      
      // Day 4 - Memories
      guestData.day4?.farewellStyle || '',
      guestData.day4?.groupMemories?.join(', ') || '',
      guestData.day4?.finalActivities?.join(', ') || '',
      guestData.day4?.memorabilia || '',
      guestData.day4?.futureConnections || '',
      guestData.day4?.overallExperience || '',
      guestData.day4?.specialMoments || '',
      
      // Day 5 - Departure
      guestData.day5?.departureTime || '',
      guestData.day5?.transportationNeeds || false,
      guestData.day5?.finalWishes || '',
      guestData.day5?.testimonial || '',
      guestData.day5?.futureEvents?.join(', ') || '',
      guestData.day5?.gratitude || '',
      guestData.day5?.stayConnected || '',
      guestData.day5?.finalRating || '',
      
      guestData.completedAt || '',
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'RSVP_Responses!A:ZZ',
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
      range: 'RSVP_Responses!A2:ZZ', // Skip header row
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
