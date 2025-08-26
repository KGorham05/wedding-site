import { NextRequest, NextResponse } from 'next/server';
import { submitRSVPToSheets } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    const guestData = await request.json();
    
    // Submit to Google Sheets
    await submitRSVPToSheets(guestData);
    
    return NextResponse.json({ 
      success: true, 
      message: 'RSVP submitted successfully' 
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error submitting RSVP:', msg);
    return NextResponse.json(
      { 
        success: false, 
        message: `Failed to submit RSVP: ${msg}` 
      },
      { status: 500 }
    );
  }
}
