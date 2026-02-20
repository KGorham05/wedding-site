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
  declined?: boolean;
}

// Initialize Google Sheets API
const getGoogleSheetsClient = async (): Promise<sheets_v4.Sheets> => {
  const requiredEnv = [
    'GOOGLE_PROJECT_ID',
    'GOOGLE_PRIVATE_KEY_ID',
    'GOOGLE_PRIVATE_KEY',
    'GOOGLE_CLIENT_EMAIL',
    'GOOGLE_CLIENT_ID'
  ] as const;
  const missing = requiredEnv.filter(k => !process.env[k]);
  if (missing.length) {
    throw new Error(`Missing Google service account env vars: ${missing.join(', ')}`);
  }

  // Normalize private key (handle escaped newlines & optional surrounding quotes)
  let privateKey = process.env.GOOGLE_PRIVATE_KEY as string;
  privateKey = privateKey.replace(/\\n/g, '\n');
  if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
    privateKey = privateKey.slice(1, -1);
  }

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
// IMPORTANT: These must match the actual Google Sheet column order exactly!
export function getSheetHeaders(): string[] {
  return [
    'Timestamp',              // A
    'Guest ID',               // B
    'First Name',             // C
    'Last Name',              // D
    'Email',                  // E
    'Total Guests',           // F
    'Adults',                 // G
    'Children',               // H
    'Children Ages',          // I
    'Children Names',         // J
    'Dietary Restrictions',   // K
    'Special Requests',       // L
    'Day 1 Attendees',        // M
    'Day 2 Whitewater Rafting', // N
    'Day 2 Scenic Float',     // O
    'Day 2 Horseback Riding', // P
    'Day 2 Hat Making',       // Q
    'Day 3 Adults',           // R
    'Day 3 Children',         // S
    'Day 4 Adults',           // T
    'Day 4 Children',         // U
    'Day 5 Departure Time',   // V
    'Completed At',           // W
    'Declined RSVP',          // X
  ];
}

// Helper function to initialize sheet with proper headers
export async function initializeSheetHeaders(): Promise<void> {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.RSVP_RESPONSES_SHEET_ID;
    
    await sheets.spreadsheets.values.update({
      spreadsheetId,
  range: 'RSVP_Responses!A1:X1',
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
  const startedAt = Date.now();
  try {
    const spreadsheetId = process.env.RSVP_RESPONSES_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error('Missing RSVP_RESPONSES_SHEET_ID env var');
    }
  const sheetName = process.env.RSVP_RESPONSES_SHEET_NAME || 'RSVP_Responses';
    const sheets = await getGoogleSheetsClient();

    const safeChildrenAges = Array.isArray(guestData.childrenAges) ? guestData.childrenAges : [];

    const rowData = [
      new Date().toISOString(),
      guestData.guest.id,
      guestData.guest.firstName,
      guestData.guest.lastName,
      guestData.email,
      guestData.totalGuests,
      guestData.adults,
      guestData.children,
      safeChildrenAges.join(', '),
  (guestData.childrenNames || []).join(', '),
  guestData.dietaryRestrictions || '',
  guestData.specialRequests || '',
      (guestData.day1?.adults || 0) + (guestData.day1?.children || 0),
      guestData.day2?.whitewaterRafting || 0,
      guestData.day2?.scenicFloat || 0,
      guestData.day2?.horsebackRiding || 0,
      guestData.day2?.hatMaking || 0,
      guestData.day3?.adults || 0,
      guestData.day3?.children || 0,
      guestData.day4?.adults || 0,
      guestData.day4?.children || 0,
  guestData.day5?.departureTime || '',
  guestData.completedAt || '',
  guestData.declined ? 'TRUE' : 'FALSE',
    ];

  const escapedName = sheetName.replace(/'/g, "''").trim();
  const sheetRef = /[\s!]/.test(escapedName) ? `'${escapedName}'` : escapedName; // quote if spaces or special
  const primaryRange = `${sheetRef}!A:X`;
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: primaryRange,
        valueInputOption: 'RAW',
        requestBody: { values: [rowData] },
      });
    } catch (appendErr: unknown) {
      // Retry with sheet name only (let API auto-find range) if parse error
      const message = appendErr instanceof Error ? appendErr.message : String(appendErr);
      if (/Unable to parse range/i.test(message)) {
        console.warn(`[RSVP→Sheets] Range parse failed for "${primaryRange}" – retrying with sheet name only.`);
        await sheets.spreadsheets.values.append({
          spreadsheetId,
            range: sheetName,
            valueInputOption: 'RAW',
            requestBody: { values: [rowData] },
        });
      } else {
        throw appendErr;
      }
    }

  console.log('[RSVP→Sheets] Success in', Date.now() - startedAt, 'ms for guest', guestData.guest.id);
  } catch (error: unknown) {
    type PossibleError = { response?: { data?: unknown }; message?: string } | string | undefined | null;
    const extract = (e: PossibleError): string => {
      if (!e) return 'Unknown error';
      if (typeof e === 'string') return e;
      if (typeof e === 'object') {
        const respData = (e as { response?: { data?: unknown } }).response?.data;
        if (respData) return typeof respData === 'string' ? respData : JSON.stringify(respData);
        const msg = (e as { message?: string }).message;
        if (msg) return msg;
        return JSON.stringify(e);
      }
      return String(e);
    };
    const details = extract(error as PossibleError);
    console.error('[RSVP→Sheets] Failure:', details);
    throw new Error(details);
  }
}

// Function to get all RSVP responses (for admin viewing)
export async function fetchAllRSVPResponses(): Promise<RSVPResponse[]> {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.RSVP_RESPONSES_SHEET_ID;
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
  range: 'RSVP_Responses!A2:X', // Updated range to match new column structure (+ Children Names + Declined)
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
  dietaryRestrictions: row[10] || '', // K (shifted by one due to Children Names)
  specialRequests: row[11] || '', // L
  completedAt: row[22] || '', // W: Completed At
  declined: (row[23] || '').toString().toLowerCase() === 'true', // X
    }));
  } catch (error) {
    console.error('Error fetching RSVP responses from sheets:', error);
    throw error;
  }
}

// ---------------------------------------------------------------------------
// Per-page upsert helpers
// ---------------------------------------------------------------------------

export type RSVPPage = 'check-in' | 'day-1' | 'day-2' | 'day-3' | 'day-4' | 'day-5';

/**
 * Scan column B of the RSVP sheet for a matching guest ID.
 * Returns the 1-indexed row number, or null if not found.
 */
async function findRowByGuestId(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetRef: string,
  guestId: string,
): Promise<number | null> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetRef}!B:B`,
  });
  const rows = res.data.values || [];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i][0] === guestId) return i + 1; // 1-indexed
  }
  return null;
}

/** Build the A:X row used when creating a brand-new entry (check-in). */
function buildFullRow(guestData: GuestData): (string | number)[] {
  const safeChildrenAges = Array.isArray(guestData.childrenAges) ? guestData.childrenAges : [];
  return [
    new Date().toISOString(),                            // A  Timestamp
    guestData.guest.id,                                  // B  Guest ID
    guestData.guest.firstName,                           // C  First Name
    guestData.guest.lastName,                            // D  Last Name
    guestData.email,                                     // E  Email
    guestData.totalGuests,                               // F  Total Guests
    guestData.adults,                                    // G  Adults
    guestData.children,                                  // H  Children
    safeChildrenAges.join(', '),                         // I  Children Ages
    (guestData.childrenNames || []).join(', '),           // J  Children Names
    guestData.dietaryRestrictions || '',                  // K  Dietary Restrictions
    guestData.specialRequests || '',                      // L  Special Requests
    '',                                                  // M  Day 1 Attendees
    '',                                                  // N  Day 2 Whitewater
    '',                                                  // O  Day 2 Scenic Float
    '',                                                  // P  Day 2 Horseback
    '',                                                  // Q  Day 2 Hat Making
    '',                                                  // R  Day 3 Adults
    '',                                                  // S  Day 3 Children
    '',                                                  // T  Day 4 Adults
    '',                                                  // U  Day 4 Children
    '',                                                  // V  Day 5 Departure
    '',                                                  // W  Completed At
    guestData.declined ? 'TRUE' : 'FALSE',               // X  Declined RSVP
  ];
}

/** Return the column values for a given page (excluding check-in which uses the full row). */
function columnsForPage(guestData: GuestData, page: RSVPPage): { range: string; values: (string | number)[] } {
  switch (page) {
    case 'check-in': {
      const safeChildrenAges = Array.isArray(guestData.childrenAges) ? guestData.childrenAges : [];
      return {
        range: 'A{row}:L{row}',
        values: [
          new Date().toISOString(),
          guestData.guest.id,
          guestData.guest.firstName,
          guestData.guest.lastName,
          guestData.email,
          guestData.totalGuests,
          guestData.adults,
          guestData.children,
          safeChildrenAges.join(', '),
          (guestData.childrenNames || []).join(', '),
          guestData.dietaryRestrictions || '',
          guestData.specialRequests || '',
        ],
      };
    }
    case 'day-1':
      return {
        range: 'M{row}:M{row}',
        values: [(guestData.day1?.adults || 0) + (guestData.day1?.children || 0)],
      };
    case 'day-2':
      return {
        range: 'N{row}:Q{row}',
        values: [
          guestData.day2?.whitewaterRafting || 0,
          guestData.day2?.scenicFloat || 0,
          guestData.day2?.horsebackRiding || 0,
          guestData.day2?.hatMaking || 0,
        ],
      };
    case 'day-3': {
      // Actual stored value is { receptionAttendees: number }
      const receptionAttendees = (guestData.day3 as { receptionAttendees?: number } | undefined)?.receptionAttendees
        ?? guestData.day3?.adults ?? 0;
      return {
        range: 'R{row}:S{row}',
        values: [receptionAttendees, 0],
      };
    }
    case 'day-4': {
      // Actual stored value is { yellowstoneAttendees: number }
      const yellowstoneAttendees = (guestData.day4 as { yellowstoneAttendees?: number } | undefined)?.yellowstoneAttendees
        ?? guestData.day4?.adults ?? 0;
      return {
        range: 'T{row}:U{row}',
        values: [yellowstoneAttendees, 0],
      };
    }
    case 'day-5':
      return {
        range: 'V{row}:W{row}',
        values: [
          guestData.day5?.departureTime || '',
          guestData.completedAt || new Date().toISOString(),
        ],
      };
  }
}

/**
 * Upsert a single page's worth of RSVP data for the given guest.
 * - check-in + no existing row → append full A:X row
 * - existing row → update only the columns owned by this page
 * - non-check-in + no existing row (edge case) → create row first, then update
 */
export async function upsertRSVPPage(guestData: GuestData, page: RSVPPage): Promise<void> {
  const startedAt = Date.now();
  const spreadsheetId = process.env.RSVP_RESPONSES_SHEET_ID;
  if (!spreadsheetId) throw new Error('Missing RSVP_RESPONSES_SHEET_ID env var');

  const sheetName = process.env.RSVP_RESPONSES_SHEET_NAME || 'RSVP_Responses';
  const escapedName = sheetName.replace(/'/g, "''").trim();
  const sheetRef = /[\s!]/.test(escapedName) ? `'${escapedName}'` : escapedName;
  const sheets = await getGoogleSheetsClient();

  let rowNum = await findRowByGuestId(sheets, spreadsheetId, sheetRef, guestData.guest.id);

  if (rowNum === null) {
    // No existing row — append a full row (works for check-in & edge-case non-check-in)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetRef}!A:X`,
      valueInputOption: 'RAW',
      requestBody: { values: [buildFullRow(guestData)] },
    });

    // If this is check-in we're done (the full row already has check-in data).
    if (page === 'check-in') {
      console.log(`[RSVP upsert] Created row for ${guestData.guest.id} (check-in) in ${Date.now() - startedAt}ms`);
      return;
    }

    // For non-check-in edge case, re-find the row so we can update the page columns.
    rowNum = await findRowByGuestId(sheets, spreadsheetId, sheetRef, guestData.guest.id);
    if (rowNum === null) throw new Error('Failed to locate newly appended row');
  }

  // Existing row (or just-created row for non-check-in) — update the relevant columns
  const { range: rangeTemplate, values } = columnsForPage(guestData, page);
  const targetRange = `${sheetRef}!${rangeTemplate.replace(/\{row\}/g, String(rowNum))}`;

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: targetRange,
    valueInputOption: 'RAW',
    requestBody: { values: [values] },
  });

  // Also update column X (Declined) on check-in re-edits
  if (page === 'check-in') {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetRef}!X${rowNum}`,
      valueInputOption: 'RAW',
      requestBody: { values: [[guestData.declined ? 'TRUE' : 'FALSE']] },
    });
  }

  console.log(`[RSVP upsert] Updated ${page} for ${guestData.guest.id} (row ${rowNum}) in ${Date.now() - startedAt}ms`);
}

// Utility: list sheet titles for a spreadsheet (troubleshooting aid)
export async function listSheetTitles(spreadsheetId: string): Promise<string[]> {
  const sheets = await getGoogleSheetsClient();
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  return (meta.data.sheets || []).map(s => s.properties?.title || '');
}
