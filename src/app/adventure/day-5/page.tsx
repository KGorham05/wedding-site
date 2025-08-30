"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HeroHeader, Navigation } from "@/components";
import { type GuestData } from "@/lib/guest-list";

export default function AdventureDay5() {
  const router = useRouter();
  const [guestData, setGuestData] = useState<GuestData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('montana-adventure-guest');
    if (!stored) {
      router.push('/guest-check-in');
      return;
    }
    const data = JSON.parse(stored);
    if (!data.day4) {
      router.push('/adventure/day-4');
      return;
    }
    setGuestData(data);
  }, [router]);

  const handleComplete = async () => {
    if (!guestData) return;
    
    const updatedData = {
      ...guestData,
      day5: { completed: true },
      lastCompletedDay: 5,
      completedAt: new Date().toISOString()
    };
    
    try {
      // Submit RSVP data to Google Sheets
      console.log('Submitting RSVP data to Google Sheets...');
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      const result = await response.json();
      
      if (!result.success) {
        console.error('Failed to submit RSVP:', result.message);
        // Still proceed to completion page even if submission fails
        // The data is saved locally and can be manually retrieved
      } else {
        console.log('RSVP submitted successfully to Google Sheets!');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      // Still proceed to completion page even if submission fails
    }
    
    // Update local storage and proceed to completion
    localStorage.setItem('montana-adventure-guest', JSON.stringify(updatedData));
    router.push('/adventure/complete');
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
        title="Sunday, Aug 23: Farewell & Safe Travels"
        subtitle="As our Montana adventure wraps up, let’s ensure a smooth departure and carry these memories forward. Check out by 10 AM."
  media={{ type: 'image', src: '/bear-4337697.jpg', alt: 'Montana wilderness farewell scene', priority: true }}
  extendBackground
  align="center"
      >
        <div className="max-w-4xl mx-auto pb-20">
          <div className="surface-glass-1 rounded-2xl p-8 shadow-2xl mb-8 border border-white/10">
            <h3 className="text-2xl font-serif text-white mb-6">Departure Day Schedule</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-white/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">🌅 8:00 AM - Farewell Breakfast</h4>
                <p className="text-white/90 text-sm">
                  Final group breakfast with sharing of favorite memories and contact exchanges.
                </p>
              </div>
              
              <div className="border border-white/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">🧳 10:00 AM - Check-out & Packing</h4>
                <p className="text-white/90 text-sm">
                  Assistance with luggage, final photo opportunities, and departure coordination.
                </p>
              </div>
              
              
              <div className="border border-white/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">💝 Until We Meet Again</h4>
                <p className="text-white/90 text-sm">
                  Thank you for being part of Angela & Jeff&apos;s magical Montana wedding adventure!
                </p>
              </div>
            </div>

            <div className="text-center border-t border-white/20 pt-8">
              <h4 className="text-xl font-serif text-white mb-6">Thank You for an Amazing Adventure!</h4>
              
              <p className="text-lg text-white/90 mb-6">
                What an incredible journey we&apos;ve shared together in beautiful Montana! From the sound bowls under the stars 
                to river adventures, celebrating Angela & Jeff&apos;s love, exploring Yellowstone, and enjoying cowboy BBQ - 
                these memories will last a lifetime.
              </p>
              
              <p className="text-white/80 mb-8">
                Safe travels to everyone, and thank you for making this wedding celebration so special! 💕
              </p>

              <div className="flex flex-col sm:flex-row justify-between gap-4 items-stretch">
                <Link 
                  href="/adventure/day-4"
                  className="btn-glass text-white py-2 px-4 rounded-lg transition-all duration-300 focus-ring text-center"
                >
                  ← Back to Yellowstone & BBQ Day
                </Link>
                <button
                  onClick={handleComplete}
                  className="btn-glass text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 focus-ring"
                >
                  Complete Adventure Journey →
                </button>
              </div>
            </div>
          </div>
        </div>
      </HeroHeader>
    </div>
  );
}
