"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

    const totalGuests = (guestData.adults || 0) + (guestData.children || 0);
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

  const totalGuests = (guestData.adults || 0) + (guestData.children || 0);

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/horse-8008038.jpg"
          alt="Wild horses in Montana"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* 20% Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/25"></div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-warm-gray-900/95 backdrop-blur-sm border-b border-warm-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-serif text-white">
              Angela & Jeff
            </Link>
            <div className="text-sm text-white">
              Day 4 of 5 - Yellowstone Adventure
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">Saturday, Aug 22: Yellowstone Adventure</h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Let us know how many from your party of {totalGuests} will join the private guided tour of Yellowstone.
            </p>
          </div>

          <div className="bg-cream-100/95 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl mb-8">
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
            </div>
          </div>

          <div className="flex justify-between items-center pt-6">
            <Link href="/adventure/day-3" className="text-white/80 hover:text-white transition-colors">
              ← Back to Day 3
            </Link>
            <button
              onClick={handleContinue}
              className="bg-sage-600 hover:bg-sage-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Continue to Day 5 →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
