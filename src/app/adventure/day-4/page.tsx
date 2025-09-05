"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HeroHeader, Navigation } from "@/components";
import { type GuestData } from "@/lib/guest-list";

export default function AdventureDay4() {
  const router = useRouter();
  const [guestData, setGuestData] = useState<GuestData | null>(null);
  const [attendees, setAttendees] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('montana-adventure-guest');
    if (!stored) {
      router.push('/guest-check-in');
      return;
    }
    const data = JSON.parse(stored);
    if (!data.day3) {
      router.push('/adventure/day-3');
      return;
    }
    setGuestData(data);
    setAttendees(data.day4?.yellowstoneAttendees || 0);
  }, [router]);

  const handleContinue = () => {
    if (!guestData) return;

    const totalGuests = (guestData.maxAdults ?? guestData.adults ?? 0) + (guestData.maxChildren ?? guestData.children ?? 0);
    if (attendees > totalGuests) {
      alert(`You cannot have more attendees than the total number of guests in your party.`);
      return;
    }

    const updatedData = {
      ...guestData,
      day4: { yellowstoneAttendees: attendees },
      lastCompletedDay: 4,
    };
    localStorage.setItem('montana-adventure-guest', JSON.stringify(updatedData));
    router.push('/adventure/day-5');
  };

  if (!guestData) {
    return <div className="min-h-screen bg-cream-100 flex items-center justify-center"><div className="text-warm-gray-800">Loading your adventure...</div></div>;
  }

  const totalGuests = (guestData.maxAdults ?? guestData.adults ?? 0) + (guestData.maxChildren ?? guestData.children ?? 0);

  return (
    <div className="min-h-screen relative flex flex-col">
      <Navigation variant="overlay" />
      <HeroHeader
        title="Saturday, Aug 22: Yellowstone Adventure"
        subtitle={`Let us know how many from your party of ${totalGuests} will join the private guided tour of Yellowstone.`}
  media={{ type: 'image', src: '/horse-8008038.jpg', alt: 'Wild horses in Montana', priority: true }}
  extendBackground
  align="center"
      >
        <div className="max-w-4xl mx-auto pb-20">
          <div className="surface-glass-1 rounded-2xl p-8 shadow-2xl mb-8 border border-white/10">
            <h3 className="text-2xl font-serif text-white mb-6">Yellowstone Tour RSVP</h3>
            <p className="text-white/90 mb-6">This is an optional, half-day guided tour. Estimated cost is $250–$300 per guest.</p>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Number of Guests for Yellowstone Tour</label>
                <select
                  value={attendees}
                  onChange={(e) => setAttendees(parseInt(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                >
                  {Array.from({ length: totalGuests + 1 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4 items-stretch pt-6">
                <Link href="/adventure/day-3" className="btn-glass text-white py-2 px-4 rounded-lg transition-all duration-300 focus-ring text-center">
                  ← Back to Day 3
                </Link>
                <button
                  onClick={handleContinue}
                  className="btn-glass text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 focus-ring"
                >
                  Continue to Day 5 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </HeroHeader>
    </div>
  );
}
