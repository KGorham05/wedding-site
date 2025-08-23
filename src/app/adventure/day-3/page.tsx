"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { type GuestData } from "@/lib/guest-list";

export default function AdventureDay3() {
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
    if (!data.day2) {
      router.push('/adventure/day-2');
      return;
    }
    setGuestData(data);
    setAttendees(data.day3?.receptionAttendees || (data.adults || 0) + (data.children || 0));
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
      day3: { receptionAttendees: attendees },
      lastCompletedDay: 3,
    };
    localStorage.setItem('montana-adventure-guest', JSON.stringify(updatedData));
    router.push('/adventure/day-4');
  };

  if (!guestData) {
    return <div className="min-h-screen bg-cream-100 flex items-center justify-center"><div className="text-warm-gray-800">Loading your adventure...</div></div>;
  }

  const totalGuests = (guestData.adults || 0) + (guestData.children || 0);

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bear-7113542.jpg"
          alt="Montana bear in wilderness"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* 20% Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/25"></div>
      </div>
      <div className="relative z-10 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center py-4 mb-8">
          <Link href="/" className="text-2xl font-serif text-sage-700">Angela & Jeff</Link>
          <div className="text-sm text-warm-gray-600">Day 3 of 5 - The Big Celebration</div>
        </nav>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-serif text-sage-700 mb-4">Friday, Aug 21: The Big Celebration</h1>
          <p className="text-lg text-warm-gray-700 max-w-3xl mx-auto">
            Please confirm how many from your party of {totalGuests} will be joining us for the reception.
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-warm-gray-200 mb-8">
          <h3 className="text-2xl font-serif text-sage-600 mb-6">Reception RSVP</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-warm-gray-700 mb-2">Number of Guests Attending Reception</label>
              <select
                value={attendees}
                onChange={(e) => setAttendees(parseInt(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-warm-gray-300 bg-white text-warm-gray-800 focus:border-sage-500 focus:ring-2 focus:ring-sage-500 focus:outline-none"
              >
                {Array.from({ length: totalGuests + 1 }, (_, i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6">
          <Link href="/adventure/day-2" className="text-warm-gray-600 hover:text-sage-700 transition-colors">
            ← Back to Day 2
          </Link>
          <button
            onClick={handleContinue}
            className="bg-sage-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-sage-700 transition-colors"
          >
            Continue to Day 4 →
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
