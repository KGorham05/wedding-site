'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RSVP() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new guest check-in flow
    router.replace('/guest-check-in');
  }, [router]);

  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center">
      <div className="text-center">
        <p className="text-warm-gray-700">Redirecting to our new RSVP experience...</p>
      </div>
    </div>
  );
}
