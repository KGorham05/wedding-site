import { NextResponse } from 'next/server';
import { fetchGuestListFromSheets } from '@/lib/google-sheets';

export async function GET() {
  try {
    // For production, you might want to add authentication here
    // to ensure only authorized users can fetch the guest list
    
    const guestList = await fetchGuestListFromSheets();
    
    return NextResponse.json({ 
      success: true, 
      guests: guestList 
    });
  } catch (error) {
    console.error('Error fetching guest list:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch guest list',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
