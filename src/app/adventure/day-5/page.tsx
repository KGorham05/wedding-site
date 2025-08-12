"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { type GuestData } from "@/lib/guest-list";

export default function AdventureDay5() {
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
    if (!data.day4) {
      router.push('/adventure/day-4');
      return;
    }
    setGuestData(data);
    // Set initial values from existing data
    setPreferences({
      adults: data.adults || 1,
      children: data.children || 0
    });
  }, [router]);

  const handleComplete = () => {
    if (!guestData) return;
    
    const updatedData = {
      ...guestData,
      day5: preferences,
      lastCompletedDay: 5,
      completedAt: new Date().toISOString(),
      adults: preferences.adults,
      children: preferences.children,
      totalGuests: preferences.adults + preferences.children
    };
    localStorage.setItem('montana-adventure-guest', JSON.stringify(updatedData));
    router.push('/adventure/complete');
  };

  if (!guestData) {
    return <div className="min-h-screen bg-warm-gray-900 flex items-center justify-center">
      <div className="text-cream-100">Loading your adventure...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-warm-gray-900 relative">
      {/* Sunset/Departure Background */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-orange-300/10 via-pink-300/10 to-purple-400/10 opacity-30"
      />
      
      {/* Clouds */}
      <div 
        className="fixed inset-0 bg-repeat-x bg-top opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Cpath d='M20,60 Q40,40 60,60 Q80,50 100,60 Q120,40 140,60 Q160,50 180,60' stroke='%23f8fafc' stroke-width='3' fill='none' opacity='0.6'/%3E%3Cpath d='M10,70 Q30,50 50,70 Q70,60 90,70 Q110,50 130,70 Q150,60 170,70 Q190,50 200,70' stroke='%23e2e8f0' stroke-width='2' fill='none' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 100px'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-warm-gray-900/95 backdrop-blur-sm border-b border-warm-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-serif text-cream-100">
              Angela & Jeff
            </Link>
            <div className="text-sm text-cream-300">
              Day 5 of 5 - Farewell
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Welcome Back */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-cream-100 mb-4">
              Friday, August 23rd, 2026
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-300 mb-6">
              ✈️ Farewell & Safe Travels
            </h2>
            <p className="text-lg text-cream-200 max-w-3xl mx-auto">
              As our incredible Montana adventure comes to an end, let&apos;s make sure everyone 
              has a smooth departure and carries these memories forever. Check out by 10 AM.
            </p>
          </div>

          {/* Day Preview */}
          <div className="bg-purple-900 rounded-2xl p-8 border border-purple-700 mb-8">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">Departure Day Schedule</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-800 rounded-xl p-6 border border-purple-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🌅 8:00 AM - Farewell Breakfast</h4>
                <p className="text-cream-200 text-sm">
                  Final group breakfast with sharing of favorite memories and contact exchanges.
                </p>
              </div>
              
              <div className="bg-purple-800 rounded-xl p-6 border border-purple-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🧳 10:00 AM - Check-out & Packing</h4>
                <p className="text-cream-200 text-sm">
                  Assistance with luggage, final photo opportunities, and departure coordination.
                </p>
              </div>
              
              <div className="bg-purple-800 rounded-xl p-6 border border-purple-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🚗 12:00 PM - Transportation</h4>
                <p className="text-cream-200 text-sm">
                  Coordinated transportation to airports and travel destinations.
                </p>
              </div>
              
              <div className="bg-purple-800 rounded-xl p-6 border border-purple-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">💝 Until We Meet Again</h4>
                <p className="text-cream-200 text-sm">
                  Thank you for being part of Angela & Jeff&apos;s magical Montana wedding adventure!
                </p>
              </div>
            </div>
          </div>

          {/* Simple Guest Count Form */}
          <div className="bg-indigo-900 rounded-2xl p-8 border border-indigo-700">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">Final Head Count for Departures</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Number of Adults Departing
                  </label>
                  <select
                    value={preferences.adults}
                    onChange={(e) => setPreferences(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 rounded-lg border border-indigo-600 bg-indigo-800 text-cream-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Number of Children Departing
                  </label>
                  <select
                    value={preferences.children}
                    onChange={(e) => setPreferences(prev => ({ ...prev, children: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 rounded-lg border border-indigo-600 bg-indigo-800 text-cream-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  >
                    {Array.from({ length: 8 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center p-4 bg-indigo-800 rounded-lg">
                <p className="text-cream-100">
                  <span className="font-semibold">Total Departure Party:</span> {preferences.adults + preferences.children} guests
                </p>
                <p className="text-indigo-200 text-sm mt-2">
                  Thank you for sharing this incredible adventure with us! 💕
                </p>
              </div>

              <div className="flex justify-between items-center pt-6">
                <Link 
                  href="/adventure/day-4"
                  className="text-cream-300 hover:text-cream-100 transition-colors"
                >
                  ← Back to Horseback Riding
                </Link>
                
                <button
                  onClick={handleComplete}
                  className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Complete Adventure Journey →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
