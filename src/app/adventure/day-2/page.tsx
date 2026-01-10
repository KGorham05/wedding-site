"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HeroHeader, Navigation, useToast } from "@/components";
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
  const { error, ToastContainer } = useToast();

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

    // Use immutable original party size from check-in
    const totalGuests = (guestData.maxAdults ?? guestData.adults ?? 0) + (guestData.maxChildren ?? guestData.children ?? 0);

    // Basic validation, can be enhanced
    if (selections.whitewaterRafting > totalGuests || selections.scenicFloat > totalGuests || selections.horsebackRiding > totalGuests || selections.hatMaking > totalGuests) {
        error(`You cannot have more participants in an activity than the total number of guests in your party.`);
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
  
  // Display and selection range should reflect full original party size, not reduced prior-day attendance
  const totalGuests = (guestData.maxAdults ?? guestData.adults ?? 0) + (guestData.maxChildren ?? guestData.children ?? 0);

  const renderActivitySelector = (activity: keyof AdventureSelections, label: string, price: string) => (
    <div>
      <label className="block text-sm font-medium text-white mb-2">{label} ({price})</label>
      <select
        value={selections[activity]}
        onChange={(e) => setSelections(prev => ({ ...prev, [activity]: parseInt(e.target.value) }))}
        className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
      >
        {Array.from({ length: totalGuests + 1 }, (_, i) => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen relative flex flex-col">
      <ToastContainer />
      <Navigation variant="overlay" />
      <HeroHeader
        title="Thursday, Aug 20: Adventure Day + Ranch BBQ"
        subtitle={`Choose your morning adventure, ${guestData.guest.firstName}! Everyone will gather for horseback riding and BBQ in the evening.`}
  media={{ type: 'image', src: '/glacier-national-park-7443329.jpg', alt: 'Glacier National Park by Joshua Woroniecki', priority: true }}
  extendBackground
  align="center"
      >
        <div className="max-w-4xl mx-auto pb-20">
          <div className="surface-glass-1 rounded-2xl p-8 shadow-2xl mb-8 border border-white/10">
            <h3 className="text-2xl font-serif text-white mb-6">Choose Your Adventures</h3>
            <p className="text-white/90 mb-6">Adventures are optional. Reserve your spots now, and we&apos;ll settle up on costs later via Venmo. Your party has a total of {totalGuests} guest(s).</p>
            
            <div className="space-y-6">
              {renderActivitySelector("whitewaterRafting", "Whitewater Rafting (ages 6+)", "$75–$100 per guest")}
              {renderActivitySelector("scenicFloat", "Scenic River Float (kid-friendly)", "$75–$100 per guest")}
              {renderActivitySelector("horsebackRiding", "Horseback Riding", "Pricing TBD")}
              {renderActivitySelector("hatMaking", "Custom Cowboy Hat-Making", "$150–$200 per hat")}
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 items-stretch pt-6">
              <Link href="/adventure/day-1" className="btn-glass text-white py-2 px-4 rounded-lg text-center transition-all duration-300 focus-ring">
                ← Back to Day 1
              </Link>
              <button
                onClick={handleContinue}
                className="btn-glass text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 focus-ring"
              >
                Continue to Day 3 →
              </button>
            </div>
          </div>
        </div>
      </HeroHeader>
    </div>
  );
}
