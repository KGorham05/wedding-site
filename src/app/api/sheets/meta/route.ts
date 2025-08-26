import { NextRequest, NextResponse } from 'next/server';
import { listSheetTitles } from '@/lib/google-sheets';

export async function GET(req: NextRequest) {
  const spreadsheetId = req.nextUrl.searchParams.get('id') || process.env.RSVP_RESPONSES_SHEET_ID;
  if (!spreadsheetId) {
    return NextResponse.json({ success: false, message: 'Missing spreadsheet id' }, { status: 400 });
  }
  try {
    const titles = await listSheetTitles(spreadsheetId);
    return NextResponse.json({ success: true, spreadsheetId, titles });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, message: msg }, { status: 500 });
  }
}
