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
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit RSVP' 
      },
      { status: 500 }
    );
  }
}
