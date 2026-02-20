import { NextRequest, NextResponse } from 'next/server';
import { submitRSVPToSheets, upsertRSVPPage, type RSVPPage } from '@/lib/google-sheets';

const VALID_PAGES = new Set<RSVPPage>(['check-in', 'day-1', 'day-2', 'day-3', 'day-4', 'day-5']);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const page: RSVPPage | undefined = body.page;
    const guestData = page ? body.guestData : body;

    if (page) {
      // Per-page incremental save
      if (!VALID_PAGES.has(page)) {
        return NextResponse.json(
          { success: false, message: `Invalid page: ${page}` },
          { status: 400 },
        );
      }
      if (!guestData?.guest?.id) {
        return NextResponse.json(
          { success: false, message: 'Missing guest ID' },
          { status: 400 },
        );
      }
      await upsertRSVPPage(guestData, page);
    } else {
      // Backward-compat: full row append (complete page re-submit)
      await submitRSVPToSheets(guestData);
    }

    return NextResponse.json({
      success: true,
      message: page ? `RSVP ${page} saved successfully` : 'RSVP submitted successfully',
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error submitting RSVP:', msg);
    return NextResponse.json(
      { success: false, message: `Failed to submit RSVP: ${msg}` },
      { status: 500 },
    );
  }
}
