"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { type GuestData } from "@/lib/guest-list";

export default function AdventureDay3() {
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
    if (!data.day2) {
      router.push('/adventure/day-2');
      return;
    }
    setGuestData(data);
    // Set initial values from existing data
    setPreferences({
      adults: data.adults || 1,
      children: data.children || 0
    });
  }, [router]);

  const handleContinue = () => {
    if (!guestData) return;
    
    const updatedData = {
      ...guestData,
      day3: preferences,
      lastCompletedDay: 3,
      adults: preferences.adults,
      children: preferences.children,
      totalGuests: preferences.adults + preferences.children
    };
    localStorage.setItem('montana-adventure-guest', JSON.stringify(updatedData));
    router.push('/adventure/day-4');
  };

  if (!guestData) {
    return <div className="min-h-screen bg-warm-gray-900 flex items-center justify-center">
      <div className="text-cream-100">Loading your adventure...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-warm-gray-900 relative">
      {/* River/Water Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cpath d='M0,300 Q150,200 300,250 Q450,300 600,230 Q750,160 900,220 Q1050,280 1200,200 L1200,600 L0,600 Z' fill='%23336891' opacity='0.3'/%3E%3Cpath d='M0,350 Q200,280 400,320 Q600,360 800,300 Q1000,240 1200,280 L1200,600 L0,600 Z' fill='%234a90b8' opacity='0.4'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Water Ripples */}
      <div 
        className="fixed inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,50 Q25,30 50,50 Q75,70 100,50' stroke='%2393c5fd' stroke-width='1' fill='none'/%3E%3Cpath d='M0,60 Q25,40 50,60 Q75,80 100,60' stroke='%2360a5fa' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          animation: 'float 6s ease-in-out infinite'
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
              Day 3 of 5 - Rafting Adventure
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Welcome Back */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-cream-100 mb-4">
              Wednesday, August 21st, 2026
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-300 mb-6">
              🥂 The Big Day: Angela & Jeff&apos;s Celebration!
            </h2>
            <p className="text-lg text-cream-200 max-w-3xl mx-auto">
              It&apos;s happening! Today is the day we&apos;ve all been waiting for. Let&apos;s celebrate 
              Angela & Jeff&apos;s love with an amazing wedding celebration in beautiful Montana.
            </p>
          </div>

          {/* Day Preview */}
          <div className="bg-blue-900 rounded-2xl p-8 border border-blue-700 mb-8">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">River Adventure Options</h3>
            
            {/* Two Adventure Options */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Leisurely Option */}
              <div className="bg-blue-800 rounded-xl p-6 border border-blue-600">
                <h4 className="text-xl font-semibold text-blue-200 mb-4">🌊 Scenic Float Experience</h4>
                <p className="text-cream-200 text-sm mb-4">
                  Perfect for families and those who want to relax while enjoying Montana&apos;s stunning scenery.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-cream-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Gentle Class I-II rapids
                  </div>
                  <div className="flex items-center text-cream-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Wildlife viewing opportunities
                  </div>
                  <div className="flex items-center text-cream-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Suitable for all ages (6+)
                  </div>
                  <div className="flex items-center text-cream-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    3-hour peaceful journey
                  </div>
                </div>
              </div>
              
              {/* White Water Option */}
              <div className="bg-cyan-800 rounded-xl p-6 border border-cyan-600">
                <h4 className="text-xl font-semibold text-cyan-200 mb-4">⚡ White Water Thrills</h4>
                <p className="text-cream-200 text-sm mb-4">
                  Heart-pumping adventure through exciting rapids for the adrenaline seekers!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-cream-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    Exciting Class III-IV rapids
                  </div>
                  <div className="flex items-center text-cream-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    Professional guide coaching
                  </div>
                  <div className="flex items-center text-cream-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    Ages 12+ (swimming required)
                  </div>
                  <div className="flex items-center text-cream-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    4-hour adrenaline rush
                  </div>
                </div>
              </div>
            </div>
            
            {/* Shared Schedule */}
            <h4 className="text-lg font-semibold text-cream-100 mb-4">Shared Adventure Schedule</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-800 rounded-xl p-6 border border-blue-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🌅 8:00 AM - Equipment & Safety</h4>
                <p className="text-cream-200 text-sm">
                  Professional gear fitting, safety briefing, and route selection based on your choice.
                </p>
              </div>
              
              <div className="bg-blue-800 rounded-xl p-6 border border-blue-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🚣‍♀️ 9:30 AM - River Launch</h4>
                <p className="text-cream-200 text-sm">
                  Groups split by adventure choice - scenic float or white water thrills!
                </p>
              </div>
              
              <div className="bg-blue-800 rounded-xl p-6 border border-blue-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🍽️ 12:30 PM - Riverside Lunch</h4>
                <p className="text-cream-200 text-sm">
                  Both groups reunite for delicious outdoor lunch by the river with mountain views.
                </p>
              </div>
              
              <div className="bg-blue-800 rounded-xl p-6 border border-blue-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">📸 3:00 PM - Photo & Celebration</h4>
                <p className="text-cream-200 text-sm">
                  Group photos, adventure stories, and celebration of everyone&apos;s accomplishments!
                </p>
              </div>
            </div>
          </div>

          {/* Simple Guest Count Form */}
          <div className="bg-cyan-900 rounded-2xl p-8 border border-cyan-700">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">Confirm Your River Adventure Party</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Number of Adults (Ages 12+)
                  </label>
                  <select
                    value={preferences.adults}
                    onChange={(e) => setPreferences(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 rounded-lg border border-cyan-600 bg-cyan-800 text-cream-100 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Number of Children (Ages 6-11)
                  </label>
                  <select
                    value={preferences.children}
                    onChange={(e) => setPreferences(prev => ({ ...prev, children: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 rounded-lg border border-cyan-600 bg-cyan-800 text-cream-100 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    {Array.from({ length: 6 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center p-4 bg-cyan-800 rounded-lg">
                <p className="text-cream-100">
                  <span className="font-semibold">Total River Adventure Party:</span> {preferences.adults + preferences.children} adventurers
                </p>
                <p className="text-cyan-200 text-sm mt-2">
                  You&apos;ll choose between scenic float or white water on the day - both options available!
                </p>
                <p className="text-cyan-200 text-sm">
                  Children under 6 will enjoy riverside activities with our guides
                </p>
              </div>

              <div className="flex justify-between items-center pt-6">
                <Link 
                  href="/adventure/day-2"
                  className="text-cream-300 hover:text-cream-100 transition-colors"
                >
                  ← Back to Celebration Day
                </Link>
                
                <button
                  onClick={handleContinue}
                  className="bg-cyan-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-cyan-700 transition-colors"
                >
                  Continue to Horseback Riding →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
