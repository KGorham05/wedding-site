"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    <div className="min-h-screen relative">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bear-4337697.jpg"
          alt="Montana wilderness farewell scene"
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
              Day 5 of 5 - Farewell
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Welcome Back */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-4">
              Friday, August 23rd, 2026
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-6">
              ✈️ Farewell & Safe Travels
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              As our incredible Montana adventure comes to an end, let&apos;s make sure everyone 
              has a smooth departure and carries these memories forever. Check out by 10 AM.
            </p>
          </div>

          {/* Day Preview */}
          <div className="bg-cream-100/95 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl mb-8">
            <h3 className="text-2xl font-serif text-white mb-6">Departure Day Schedule</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h4 className="text-lg font-semibold text-white mb-3">🌅 8:00 AM - Farewell Breakfast</h4>
                <p className="text-white/90 text-sm">
                  Final group breakfast with sharing of favorite memories and contact exchanges.
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h4 className="text-lg font-semibold text-white mb-3">🧳 10:00 AM - Check-out & Packing</h4>
                <p className="text-white/90 text-sm">
                  Assistance with luggage, final photo opportunities, and departure coordination.
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h4 className="text-lg font-semibold text-white mb-3">🚗 12:00 PM - Transportation</h4>
                <p className="text-white/90 text-sm">
                  Coordinated transportation to airports and travel destinations.
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <h4 className="text-lg font-semibold text-white mb-3">💝 Until We Meet Again</h4>
                <p className="text-white/90 text-sm">
                  Thank you for being part of Angela & Jeff&apos;s magical Montana wedding adventure!
                </p>
              </div>
            </div>
          </div>

          {/* Farewell Message */}
          <div className="bg-cream-100/95 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-2xl text-center">
            <h3 className="text-2xl font-serif text-white mb-6">Thank You for an Amazing Adventure!</h3>
            
            <p className="text-lg text-white/90 mb-6">
              What an incredible journey we&apos;ve shared together in beautiful Montana! From the sound bath under the stars 
              to river adventures, celebrating Angela & Jeff&apos;s love, exploring Yellowstone, and enjoying cowboy BBQ - 
              these memories will last a lifetime.
            </p>
            
            <p className="text-white/80 mb-8">
              Safe travels to everyone, and thank you for making this wedding celebration so special! 💕
            </p>

            <div className="flex justify-between items-center">
              <Link 
                href="/adventure/day-4"
                className="text-white/80 hover:text-white transition-colors"
              >
                ← Back to Yellowstone & BBQ Day
              </Link>
              
              <button
                onClick={handleComplete}
                className="bg-sage-600 hover:bg-sage-700 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Complete Adventure Journey →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
