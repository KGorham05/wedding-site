"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { type GuestData } from "@/lib/guest-list";

export default function AdventureDay2() {
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
    if (!data.day1) {
      router.push('/adventure/day-1');
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
      day2: preferences,
      lastCompletedDay: 2,
      adults: preferences.adults,
      children: preferences.children,
      totalGuests: preferences.adults + preferences.children
    };
    localStorage.setItem('montana-adventure-guest', JSON.stringify(updatedData));
    router.push('/adventure/day-3');
  };

  if (!guestData) {
    return <div className="min-h-screen bg-warm-gray-900 flex items-center justify-center">
      <div className="text-cream-100">Loading your adventure...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-warm-gray-900 relative">
      {/* Wedding-themed Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3Cpattern id='hearts' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Cpath d='M30,15 C30,7 23,0 15,0 C7,0 0,7 0,15 C0,30 15,45 30,45 C45,30 60,15 60,15 C60,7 53,0 45,0 C37,0 30,7 30,15Z' fill='%23d4af8c' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23hearts)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Floral Border */}
      <div 
        className="fixed inset-0 bg-repeat-x bg-top opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 50'%3E%3Cpath d='M0,25 Q50,5 100,25 Q150,45 200,25' stroke='%23c9a876' stroke-width='2' fill='none'/%3E%3Ccircle cx='25' cy='25' r='3' fill='%23c9a876'/%3E%3Ccircle cx='75' cy='25' r='3' fill='%23c9a876'/%3E%3Ccircle cx='125' cy='25' r='3' fill='%23c9a876'/%3E%3Ccircle cx='175' cy='25' r='3' fill='%23c9a876'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 50px'
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
              Day 2 of 5 - Celebration Day
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Welcome Back */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-cream-100 mb-4">
              Tuesday, August 20th, 2026
            </h1>
            <h2 className="text-xl md:text-2xl text-dusty-rose-300 mb-6">
              🚣‍♀️ River Adventure Day - Your Choice!
            </h2>
            <p className="text-lg text-cream-200 max-w-3xl mx-auto">
              Ready for some Montana adventure, {guestData.guest.firstName}? Today we explore the rivers 
              and then enjoy a sunset horseback ride through Big Sky Country.
            </p>
          </div>

          {/* Day Preview */}
          <div className="bg-dusty-rose-900 rounded-2xl p-8 border border-dusty-rose-700 mb-8">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">Celebration Day Timeline</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-dusty-rose-800 rounded-xl p-6 border border-dusty-rose-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🥂 4:00 PM - Cocktail Hour</h4>
                <p className="text-cream-200 text-sm">
                  Welcome drinks and mingling with stunning Montana mountain views as the backdrop.
                </p>
              </div>
              
              <div className="bg-dusty-rose-800 rounded-xl p-6 border border-dusty-rose-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🎉 6:00 PM - Party & Dancing</h4>
                <p className="text-cream-200 text-sm">
                  Dinner, dancing, and celebration under the Montana sky!
                </p>
              </div>
              
              <div className="bg-dusty-rose-800 rounded-xl p-6 border border-dusty-rose-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">📸 5:00 PM - Group Photos</h4>
                <p className="text-cream-200 text-sm">
                  Golden hour photos with Angela & Jeff and all the celebration guests.
                </p>
              </div>
              
              <div className="bg-dusty-rose-800 rounded-xl p-6 border border-dusty-rose-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">⭐ 10:00 PM - Afterparty</h4>
                <p className="text-cream-200 text-sm">
                  Extended celebration for night owls with campfire and stargazing.
                </p>
              </div>
            </div>
          </div>

          {/* Simple Guest Count Form */}
          <div className="bg-sage-900 rounded-2xl p-8 border border-sage-700">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">Confirm Your Party for the Celebration</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Number of Adults
                  </label>
                  <select
                    value={preferences.adults}
                    onChange={(e) => setPreferences(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 rounded-lg border border-sage-600 bg-sage-800 text-cream-100 focus:border-sage-500 focus:ring-2 focus:ring-sage-500 focus:outline-none"
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Number of Children
                  </label>
                  <select
                    value={preferences.children}
                    onChange={(e) => setPreferences(prev => ({ ...prev, children: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 rounded-lg border border-sage-600 bg-sage-800 text-cream-100 focus:border-sage-500 focus:ring-2 focus:ring-sage-500 focus:outline-none"
                  >
                    {Array.from({ length: 8 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center p-4 bg-sage-800 rounded-lg">
                <p className="text-cream-100">
                  <span className="font-semibold">Total Celebration Party:</span> {preferences.adults + preferences.children} guests
                </p>
              </div>

              <div className="flex justify-between items-center pt-6">
                <Link 
                  href="/adventure/day-1"
                  className="text-cream-300 hover:text-cream-100 transition-colors"
                >
                  ← Back to Arrival Day
                </Link>
                
                <button
                  onClick={handleContinue}
                  className="bg-sage-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-sage-700 transition-colors"
                >
                  Continue to Rafting Adventure →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
