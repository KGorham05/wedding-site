"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
    <div className="min-h-screen bg-warm-gray-900 relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cpath d='M0,400L48,380C96,360,192,320,288,310C384,300,480,320,576,335C672,350,768,360,864,350C960,340,1056,310,1152,300L1200,295L1200,600L1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z' fill='%234a5d23'/%3E%3Cpath d='M0,480L48,460C96,440,192,400,288,380C384,360,480,360,576,375C672,390,768,420,864,420C960,420,1056,390,1152,375L1200,365L1200,600L1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z' fill='%23374151'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Mountains Silhouette */}
      <div 
        className="fixed inset-0 bg-cover bg-bottom bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cpath d='M0,300L100,250L200,280L300,200L400,230L500,150L600,180L700,120L800,160L900,100L1000,140L1100,80L1200,120V400H0V300Z' fill='%232d3748' opacity='0.8'/%3E%3Cpath d='M0,350L120,320L240,340L360,290L480,310L600,260L720,280L840,240L960,260L1080,220L1200,240V400H0V350Z' fill='%231a202c' opacity='0.6'/%3E%3C/svg%3E")`
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
              Day 1 of 5
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Welcome Back */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-cream-100 mb-4">
              Monday, August 19th, 2026
            </h1>
            <h2 className="text-xl md:text-2xl text-sage-300 mb-6">
              🛬 Arrival Day: Welcome to Big Sky Country!
            </h2>
            <p className="text-lg text-cream-200 max-w-3xl mx-auto">
              The adventure begins, {guestData.guest.firstName}! Let&apos;s make sure your arrival goes smoothly 
              and get you settled in for an amazing week.
            </p>
          </div>

          {/* Day Preview */}
          <div className="bg-sage-900 rounded-2xl p-8 border border-sage-700 mb-8">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">What&apos;s Happening Monday</h3>
            
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-sage-800 rounded-xl p-6 border border-sage-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">✈️ Arrive in Style at Your Leisure</h4>
                <p className="text-cream-200 text-sm mb-4">
                  Travel arrangements are entirely up to you - arrive whenever works best for your schedule! 
                  Get settled into your accommodations, meet other guests, and get oriented with the beautiful ranch area.
                </p>
                <div className="border-t border-sage-600 pt-4 mt-4">
                  <h4 className="text-lg font-semibold text-cream-100 mb-3">🧘‍♀️ Golden Hour Sound Bath & Yoga (6-9 PM)</h4>
                  <p className="text-cream-200 text-sm">
                    Join us for a magical evening of sound bath nature yoga with crystal bowls as the Montana sun sets 
                    over the ranch. This peaceful gathering will help you unwind from travel and connect with the 
                    serene wilderness that surrounds us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guest Count Form */}
          <div className="bg-dusty-rose-900 rounded-2xl p-8 border border-dusty-rose-700">
            <h3 className="text-2xl font-serif text-cream-100 mb-4">Golden Hour Yoga & Sound Bath</h3>
            <p className="text-cream-200 mb-6">How many from your party will be joining us for tonight&apos;s peaceful yoga and sound bath experience?</p>
            
            <div className="bg-dusty-rose-800 rounded-lg p-4 mb-6">
              <p className="text-sm text-cream-200">
                <span className="font-medium">Your Party Limits:</span> Max {guestData.maxAdults || guestData.adults} adults, {guestData.maxChildren || guestData.children} children
                <br />
                <span className="text-cream-300">You can only RSVP for the number of adults and children you registered during check-in.</span>
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Number of Adults
                  </label>
                  <select
                    value={preferences.adults}
                    onChange={(e) => {
                      const newAdults = parseInt(e.target.value);
                      const maxChildrenAllowed = guestData.maxChildren || guestData.children || 0;
                      setPreferences(prev => ({ 
                        ...prev, 
                        adults: newAdults,
                        children: Math.min(prev.children, maxChildrenAllowed)
                      }));
                    }}
                    className="w-full px-4 py-3 rounded-lg border border-dusty-rose-600 bg-dusty-rose-800 text-cream-100 focus:border-dusty-rose-500 focus:ring-2 focus:ring-dusty-rose-500 focus:outline-none"
                  >
                    {Array.from({ length: Math.min(10, (guestData.maxAdults || guestData.adults || 1)) + 1 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Number of Children
                  </label>
                  <select
                    value={preferences.children}
                    onChange={(e) => {
                      const newChildren = parseInt(e.target.value);
                      setPreferences(prev => ({ ...prev, children: newChildren }));
                    }}
                    className="w-full px-4 py-3 rounded-lg border border-dusty-rose-600 bg-dusty-rose-800 text-cream-100 focus:border-dusty-rose-500 focus:ring-2 focus:ring-dusty-rose-500 focus:outline-none"
                  >
                    {Array.from({ length: Math.min(8, (guestData.maxChildren || guestData.children || 0)) + 1 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center p-4 bg-dusty-rose-800 rounded-lg">
                {preferences.adults + preferences.children === 0 ? (
                  <p className="text-cream-200">No worries! Each adventure is completely optional. We&apos;ll miss you but hope to see you for other activities!</p>
                ) : (
                  <p className="text-cream-100">
                    <span className="font-semibold">Yoga & Sound Bath Attendees:</span> {preferences.adults + preferences.children} {preferences.adults + preferences.children === 1 ? 'person' : 'people'}
                    <br />
                    <span className="text-dusty-rose-200 text-sm">A perfect way to ease into your Montana adventure!</span>
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center pt-6">
                <Link 
                  href="/guest-check-in"
                  className="text-cream-300 hover:text-cream-100 transition-colors"
                >
                  ← Back to check-in
                </Link>
                
                <button
                  onClick={handleContinue}
                  className="bg-dusty-rose-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-dusty-rose-700 transition-colors"
                >
                  Continue to River Adventures →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
