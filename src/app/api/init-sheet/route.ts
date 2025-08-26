import { NextRequest, NextResponse } from 'next/server';
import { initializeSheetHeaders, getSheetHeaders } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    // Check if this is being called by an admin
    // In a real app, you'd want proper authentication here
    const { adminKey } = await request.json();
    
    if (adminKey !== process.env.ADMIN_INIT_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await initializeSheetHeaders();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Sheet headers initialized successfully',
      headers: getSheetHeaders()
    });
  } catch (error) {
    console.error('Error initializing sheet headers:', error);
    return NextResponse.json(
      { error: 'Failed to initialize sheet headers' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return the expected headers for reference
  return NextResponse.json({
    headers: getSheetHeaders(),
    instructions: [
      'To set up your Google Sheet:',
      '1. Create a new Google Sheet',
      '2. Name the first sheet "RSVP_Responses"',
      '3. Copy the headers below into row 1 (A1:V1)',
      '4. Or use the POST endpoint with admin key to auto-initialize'
    ]
  });
}
