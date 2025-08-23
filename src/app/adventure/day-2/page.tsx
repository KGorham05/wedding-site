"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { type GuestData } from "@/lib/guest-list";

interface AdventureSelections {
  whitewaterRafting: number;
  scenicFloat: number;
  horsebackRiding: number;
  hatMaking: number;
}

export default function AdventureDay2() {
  const router = useRouter();
  const [guestData, setGuestData] = useState<GuestData | null>(null);
  const [selections, setSelections] = useState<AdventureSelections>({
    whitewaterRafting: 0,
    scenicFloat: 0,
    horsebackRiding: 0,
    hatMaking: 0,
  });

  useEffect(() => {
    const stored = localStorage.getItem('montana-adventure-guest');
    if (!stored) {
      router.push('/guest-check-in');
      return;
    }
    const data = JSON.parse(stored);
    if (!data.day1) {
      router.push('/adventure/day-1');
      return;
    }
    setGuestData(data);
    if (data.day2) {
      setSelections(data.day2);
    }
  }, [router]);

  const handleContinue = () => {
    if (!guestData) return;

    const totalGuests = (guestData.adults || 0) + (guestData.children || 0);

    // Basic validation, can be enhanced
    if (selections.whitewaterRafting > totalGuests || selections.scenicFloat > totalGuests || selections.horsebackRiding > totalGuests || selections.hatMaking > totalGuests) {
        alert(`You cannot have more participants in an activity than the total number of guests in your party.`);
        return;
    }

    const updatedData = {
      ...guestData,
      day2: selections,
      lastCompletedDay: 2,
    };
    localStorage.setItem('montana-adventure-guest', JSON.stringify(updatedData));
    router.push('/adventure/day-3');
  };

  if (!guestData) {
    return <div className="min-h-screen bg-cream-100 flex items-center justify-center"><div className="text-warm-gray-800">Loading your adventure...</div></div>;
  }
  
  const totalGuests = (guestData.adults || 0) + (guestData.children || 0);

  const renderActivitySelector = (activity: keyof AdventureSelections, label: string, price: string) => (
    <div>
      <label className="block text-sm font-medium text-warm-gray-700 mb-2">{label} ({price})</label>
      <select
        value={selections[activity]}
        onChange={(e) => setSelections(prev => ({ ...prev, [activity]: parseInt(e.target.value) }))}
        className="w-full px-4 py-3 rounded-lg border border-warm-gray-300 bg-white text-warm-gray-800 focus:border-sage-500 focus:ring-2 focus:ring-sage-500 focus:outline-none"
      >
        {Array.from({ length: totalGuests + 1 }, (_, i) => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream-100 relative">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/glacier-national-park-7443329.jpg"
          alt="Glacier National Park by Joshua Woroniecki"
          fill
          className="object-cover"
        />
        {/* 20% Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/25"></div>
      </div>
      <div className="relative z-10 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex justify-between items-center py-4 mb-8">
          <Link href="/" className="text-2xl font-serif text-sage-700">Angela & Jeff</Link>
          <div className="text-sm text-warm-gray-600">Day 2 of 5 - Adventure Day</div>
        </nav>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-sage-800 mb-4">Thursday, Aug 20: Adventure Day + Ranch BBQ</h1>
            <p className="text-lg text-warm-gray-900 max-w-3xl mx-auto">
              Choose your morning adventure, {guestData.guest.firstName}! Everyone will gather for horseback riding and BBQ in the evening.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-warm-gray-200 mb-8">
            <h3 className="text-2xl font-serif text-sage-700 mb-6">Choose Your Adventures</h3>
            <p className="text-warm-gray-900 mb-6">Adventures are optional. Reserve your spots now, and we&apos;ll settle up on costs later via Venmo. Your party has a total of {totalGuests} guest(s).</p>          <div className="space-y-6">
            {renderActivitySelector("whitewaterRafting", "Whitewater Rafting (ages 6+)", "$75–$100 per guest")}
            {renderActivitySelector("scenicFloat", "Scenic River Float (kid-friendly)", "$75–$100 per guest")}
            {renderActivitySelector("horsebackRiding", "Horseback Riding", "Pricing TBD")}
            {renderActivitySelector("hatMaking", "Custom Cowboy Hat-Making", "$150–$200 per hat")}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6">
          <Link href="/adventure/day-1" className="text-warm-gray-600 hover:text-sage-700 transition-colors">
            ← Back to Day 1
          </Link>
          <button
            onClick={handleContinue}
            className="bg-sage-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-sage-700 transition-colors"
          >
            Continue to Day 3 →
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
