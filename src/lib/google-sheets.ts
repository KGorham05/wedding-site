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

// Helper function to get the expected column headers for the Google Sheet
export function getSheetHeaders(): string[] {
  return [
    'Timestamp', // A
    'Guest ID', // B
    'First Name', // C
    'Last Name', // D
    'Email', // E
    'Total Guests', // F
    'Adults', // G
    'Children', // H
    'Children Ages', // I
    'Dietary Restrictions', // J
    'Special Requests', // K
    'Day 1 Attendees', // L
    'Day 2 Whitewater Rafting', // M
    'Day 2 Scenic Float', // N
    'Day 2 Horseback Riding', // O
    'Day 2 Hat Making', // P
    'Day 3 Adults', // Q
    'Day 3 Children', // R
    'Day 4 Adults', // S
    'Day 4 Children', // T
    'Day 5 Departure Time', // U
    'Completed At', // V
  ];
}

// Helper function to initialize sheet with proper headers
export async function initializeSheetHeaders(): Promise<void> {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.RSVP_RESPONSES_SHEET_ID;
    
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'RSVP_Responses!A1:V1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [getSheetHeaders()],
      },
    });

    console.log('Sheet headers initialized successfully');
  } catch (error) {
    console.error('Error initializing sheet headers:', error);
    throw error;
  }
}

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
    
    // Define the column structure for the Google Sheet
    // Column headers should be:
    // A: Timestamp, B: Guest ID, C: First Name, D: Last Name, E: Email
    // F: Total Guests, G: Adults, H: Children, I: Children Ages, J: Dietary Restrictions
    // K: Special Requests, L: Day 1 Attendees, M: Day 2 Whitewater Rafting
    // N: Day 2 Scenic Float, O: Day 2 Horseback Riding, P: Day 2 Hat Making
    // Q: Day 3 Adults, R: Day 3 Children, S: Day 4 Adults, T: Day 4 Children
    // U: Day 5 Departure Time, V: Completed At
    
    const rowData = [
      new Date().toISOString(), // A: Timestamp
      guestData.guest.id, // B: Guest ID
      guestData.guest.firstName, // C: First Name
      guestData.guest.lastName, // D: Last Name
      guestData.email, // E: Email
      guestData.totalGuests, // F: Total Guests
      guestData.adults, // G: Adults
      guestData.children, // H: Children
      guestData.childrenAges.join(', '), // I: Children Ages
      guestData.dietaryRestrictions, // J: Dietary Restrictions
      guestData.specialRequests || '', // K: Special Requests
      
      // Day 1 - Arrival & Welcome (yoga/sound bath attendees)
      (guestData.day1?.adults || 0) + (guestData.day1?.children || 0), // L: Day 1 Attendees

      // Day 2 - Adventures
      guestData.day2?.whitewaterRafting || 0, // M: Day 2 Whitewater Rafting
      guestData.day2?.scenicFloat || 0, // N: Day 2 Scenic Float
      guestData.day2?.horsebackRiding || 0, // O: Day 2 Horseback Riding
      guestData.day2?.hatMaking || 0, // P: Day 2 Hat Making

      // Day 3 - Wedding Reception
      guestData.day3?.adults || 0, // Q: Day 3 Adults
      guestData.day3?.children || 0, // R: Day 3 Children

      // Day 4 - Yellowstone & BBQ
      guestData.day4?.adults || 0, // S: Day 4 Adults
      guestData.day4?.children || 0, // T: Day 4 Children

      // Day 5 - Farewell
      guestData.day5?.departureTime || '', // U: Day 5 Departure Time
      
      guestData.completedAt || '', // V: Completed At
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'RSVP_Responses!A:V', // Updated range to match new column structure
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
      range: 'RSVP_Responses!A2:V', // Updated range to match new column structure
    });

    const rows = response.data.values || [];
    
    return rows.map((row) => ({
      timestamp: row[0] || '', // A
      guestId: row[1] || '', // B
      firstName: row[2] || '', // C
      lastName: row[3] || '', // D
      email: row[4] || '', // E
      totalGuests: parseInt(row[5]) || 0, // F
      adults: parseInt(row[6]) || 0, // G
      children: parseInt(row[7]) || 0, // H
      childrenAges: row[8]?.split(', ').filter(Boolean) || [], // I
      dietaryRestrictions: row[9] || '', // J
      specialRequests: row[10] || '', // K
      completedAt: row[21] || '', // V: Completed At
    }));
  } catch (error) {
    console.error('Error fetching RSVP responses from sheets:', error);
    throw error;
  }
}
