import { NextResponse } from 'next/server';

export async function GET() {
  const envVars = {
    GOOGLE_TYPE: process.env.GOOGLE_TYPE ? 'SET' : 'MISSING',
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID ? 'SET' : 'MISSING',
    GOOGLE_PRIVATE_KEY_ID: process.env.GOOGLE_PRIVATE_KEY_ID ? 'SET' : 'MISSING', 
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY ? 'SET (length: ' + process.env.GOOGLE_PRIVATE_KEY.length + ')' : 'MISSING',
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL ? 'SET' : 'MISSING',
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ? 'SET' : 'MISSING',
    GUEST_LIST_SHEET_ID: process.env.GUEST_LIST_SHEET_ID ? 'SET' : 'MISSING',
    RSVP_RESPONSES_SHEET_ID: process.env.RSVP_RESPONSES_SHEET_ID ? 'SET' : 'MISSING',
  };

  return NextResponse.json({ 
    environment: process.env.NODE_ENV,
    envVars 
  });
}
