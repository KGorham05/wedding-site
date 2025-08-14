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
    // Set initial values from existing data, but don't exceed original party size
    const maxAdults = Math.min(data.maxAdults || data.adults || 1, data.totalGuests || 1);
    const maxChildren = Math.min(data.maxChildren || data.children || 0, Math.max(0, (data.totalGuests || 1) - maxAdults));
    setPreferences({
      adults: data.day2?.adults || maxAdults,
      children: data.day2?.children || maxChildren
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
    
    const updatedData = {
      ...guestData,
      day2: preferences,
      lastCompletedDay: 2,
      // Keep original party size, but allow updating current RSVP counts
      adults: preferences.adults,
      children: preferences.children,
      totalGuests: guestData.totalGuests // Keep original total, don't update
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
      {/* Montana River Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url("/montana-river.jpg")`
        }}
      />
      
      {/* Water Ripples Overlay */}
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
              Day 2 of 5 - Adventure Day
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
              🚣‍♀️ Adventure Day - Rafting & Horseback!
            </h2>
            <p className="text-lg text-cream-200 max-w-3xl mx-auto">
              Ready for some Montana adventure, {guestData.guest.firstName}? Today we explore the rivers 
              and then enjoy a sunset horseback ride through Big Sky Country.
            </p>
          </div>

          {/* Day Preview */}
          <div className="bg-dusty-rose-900 rounded-2xl p-8 border border-dusty-rose-700 mb-8">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">Adventure Day Timeline</h3>
            
            {/* Morning River Adventure Options */}
            <h4 className="text-lg font-semibold text-cream-100 mb-4">Morning River Adventure - Choose Your Style</h4>
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
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
                </div>
              </div>
              
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
                </div>
              </div>
            </div>
            
            {/* Full Day Schedule */}
            <h4 className="text-lg font-semibold text-cream-100 mb-4">Full Day Adventure Schedule</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-dusty-rose-800 rounded-xl p-6 border border-dusty-rose-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">� 8:00 AM - River Adventure</h4>
                <p className="text-cream-200 text-sm">
                  Choose your adventure: White Water Rafting (6+) or Scenic Float (All Ages). Both end around 12 PM.
                </p>
              </div>
              
              <div className="bg-dusty-rose-800 rounded-xl p-6 border border-dusty-rose-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🍽️ 12:30 PM - Riverside Lunch</h4>
                <p className="text-cream-200 text-sm">
                  Delicious outdoor lunch by the river after your morning adventure. Both groups reunite here!
                </p>
              </div>
              
              <div className="bg-dusty-rose-800 rounded-xl p-6 border border-dusty-rose-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🏕️ 2:00 PM - Free Time</h4>
                <p className="text-cream-200 text-sm">
                  Rest, explore the ranch, or prepare for the evening horseback adventure.
                </p>
              </div>
              
              <div className="bg-dusty-rose-800 rounded-xl p-6 border border-dusty-rose-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🐎 5:00 PM - Sunset Horseback</h4>
                <p className="text-cream-200 text-sm">
                  Sunset horseback ride through Big Sky Country. Perfect way to end an adventurous day!
                </p>
              </div>
            </div>
          </div>

          {/* Simple Guest Count Form */}
          <div className="bg-sage-900 rounded-2xl p-8 border border-sage-700">
            <h3 className="text-2xl font-serif text-cream-100 mb-4">Confirm Your Adventure Party</h3>
            
            <div className="bg-sage-800 rounded-lg p-4 mb-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-sage-600 bg-sage-800 text-cream-100 focus:border-sage-500 focus:ring-2 focus:ring-sage-500 focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-lg border border-sage-600 bg-sage-800 text-cream-100 focus:border-sage-500 focus:ring-2 focus:ring-sage-500 focus:outline-none"
                  >
                    {Array.from({ length: Math.min(8, (guestData.maxChildren || guestData.children || 0)) + 1 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center p-4 bg-sage-800 rounded-lg">
                <p className="text-cream-100">
                  <span className="font-semibold">Total Adventure Party:</span> {preferences.adults + preferences.children} adventurers
                </p>
                <p className="text-sage-200 text-sm mt-2">
                  Choose between rafting options on the day - both scenic float and white water available!
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
                  Continue to Wedding Day →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-2px) translateX(1px); }
          50% { transform: translateY(0px) translateX(2px); }
          75% { transform: translateY(2px) translateX(1px); }
        }
      `}</style>
    </div>
  );
}
