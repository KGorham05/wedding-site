import type { RSVPPage } from './google-sheets';
import type { GuestData } from './guest-list';

/**
 * Fire-and-forget helper that POSTs the current guest data for a specific
 * RSVP page to the server.  Callers don't need to await this — navigation
 * can proceed immediately.
 */
export function saveRSVPPage(
  guestData: GuestData,
  page: RSVPPage,
): Promise<{ success: boolean; message: string }> {
  return fetch('/api/rsvp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ page, guestData }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(`[saveRSVPPage] ${page} failed:`, err);
      return { success: false, message: String(err) };
    });
}
