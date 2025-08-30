"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HeroHeader, Navigation } from "@/components";
import { type GuestData } from "@/lib/guest-list";

export default function AdventureDay1() {
  const router = useRouter();
  const [guestData, setGuestData] = useState<GuestData | null>(null);
  const [preferences, setPreferences] = useState({
    adults: 1,
    children: 0
  });

  useEffect(() => {
    const stored = localStorage.getItem('montana-adventure-guest');
    if (!stored) {
      router.push('/guest-check-in');
      return;
    }
    const data = JSON.parse(stored);
    setGuestData(data);
    // Set initial values from existing data, but don't exceed original party size
    const maxAdults = Math.min(data.maxAdults || data.adults || 1, data.totalGuests || 1);
    const maxChildren = Math.min(data.maxChildren || data.children || 0, Math.max(0, (data.totalGuests || 1) - maxAdults));
    setPreferences({
      adults: data.day1?.adults || maxAdults,
      children: data.day1?.children || maxChildren
    });
  }, [router]);

  const handleContinue = () => {
    if (!guestData) return;
    
    // Validate that we don't exceed original party limits  
    const maxAdultsAllowed = guestData.maxAdults || guestData.adults || 1;
    const maxChildrenAllowed = guestData.maxChildren || guestData.children || 0;
    
    if (preferences.adults > maxAdultsAllowed) {
      alert(`You can only RSVP for up to ${maxAdultsAllowed} ${maxAdultsAllowed === 1 ? 'adult' : 'adults'}.`);
      return;
    }
    
    if (preferences.children > maxChildrenAllowed) {
      alert(`You can only RSVP for up to ${maxChildrenAllowed} ${maxChildrenAllowed === 1 ? 'child' : 'children'}.`);
      return;
    }
    
    // Store day 1 preferences
    const updatedData = {
      ...guestData,
      day1: preferences,
      lastCompletedDay: 1,
      // Keep original party size, but allow updating current RSVP counts
      adults: preferences.adults,
      children: preferences.children
    };
    localStorage.setItem('montana-adventure-guest', JSON.stringify(updatedData));
    router.push('/adventure/day-2');
  };

  if (!guestData) {
    return <div className="min-h-screen bg-warm-gray-900 flex items-center justify-center">
      <div className="text-cream-100">Loading your adventure...</div>
    </div>;
  }

  return (
    <div className="min-h-screen relative flex flex-col">
      <Navigation variant="overlay" />
      <HeroHeader
    title="Wednesday, Aug 19: Arrival & Golden Hour Sound Bowls"
        subtitle={`The adventure begins, ${guestData.guest.firstName}! Let's smooth your arrival and settle you in for an amazing week.`}
  media={{ type: 'image', src: '/montana-1829251.jpg', alt: 'Montana landscape welcome scene', priority: true }}
  extendBackground
  align="center"
      >
        <div className="max-w-4xl mx-auto pb-20">
          <div className="surface-glass-1 rounded-2xl p-8 shadow-2xl mb-8 border border-white/10">
      <h3 className="text-2xl font-serif text-white mb-6">What&apos;s Happening Wednesday</h3>
            
            <div className="mb-8">
              <div className="border border-white/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">✈️ Arrive in Style at Your Leisure</h4>
                <p className="text-white/90 text-sm mb-4">
                  Travel arrangements are entirely up to you - arrive whenever works best for your schedule! 
                  Get settled into your accommodations, meet other guests, and get oriented with the beautiful ranch area.
                </p>
                <div className="border-t border-white/30 pt-4 mt-4">
                  <h4 className="text-lg font-semibold text-white mb-3">🧘‍♀️ Golden Hour Sound Bowls & Yoga (6-9 PM)</h4>
                  <p className="text-white/90 text-sm">
                    Join us for a magical evening of sound bowls nature yoga with crystal bowls as the Montana sun sets 
                    over the ranch. This peaceful gathering will help you unwind from travel and connect with the 
                    serene wilderness that surrounds us.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-serif text-white mb-4">Golden Hour Yoga & Sound Bowls RSVP</h4>
            <p className="text-white/90 mb-6">How many from your party will be joining us for tonight&apos;s peaceful yoga and sound bowls experience?</p>
            
            <div className="border border-white/20 rounded-lg p-4 mb-6">
              <p className="text-sm text-white/90">
                <span className="font-medium">Your Party Limits:</span> Max {guestData.maxAdults || guestData.adults} adults, {guestData.maxChildren || guestData.children} children
                <br />
                <span className="text-white/80">You can only RSVP for the number of adults and children you registered during check-in.</span>
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Number of Adults
                  </label>
                  <select
                    value={preferences.adults}
                    onChange={(e) => {
                      const adults = Number(e.target.value);
                      setPreferences(prev => ({ ...prev, adults }));
                    }}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                  >
                    {Array.from({ length: (guestData.maxAdults || guestData.adults) + 1 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Number of Children
                  </label>
                  <select
                    value={preferences.children}
                    onChange={(e) => {
                      const children = Number(e.target.value);
                      setPreferences(prev => ({ ...prev, children }));
                    }}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                  >
                    {Array.from({ length: (guestData.maxChildren || guestData.children) + 1 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center p-4 border border-white/20 rounded-lg">
                {preferences.adults + preferences.children === 0 ? (
                  <p className="text-white/90">No worries! Each adventure is completely optional. We&apos;ll miss you but hope to see you for other activities!</p>
                ) : (
                  <p className="text-white">
                    <span className="font-semibold">Yoga & Sound Bowls Attendees:</span> {preferences.adults + preferences.children} {preferences.adults + preferences.children === 1 ? 'person' : 'people'}
                    <br />
                    <span className="text-white/80 text-sm">A perfect way to ease into your Montana adventure!</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4 items-stretch pt-6">
                <Link 
                  href="/guest-check-in"
                  className="btn-glass text-white py-2 px-4 rounded-lg transition-all duration-300 focus-ring text-center"
                >
                  ← Back to check-in
                </Link>
                <button
                  onClick={handleContinue}
                  className="btn-glass text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 focus-ring"
                >
                  Continue to River Adventures →
                </button>
              </div>
            </div>
          </div>
        </div>
      </HeroHeader>
    </div>
  );
}
