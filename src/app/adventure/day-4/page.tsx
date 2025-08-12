"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { type GuestData } from "@/lib/guest-list";

export default function AdventureDay4() {
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
    if (!data.day3) {
      router.push('/adventure/day-3');
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
      day4: preferences,
      lastCompletedDay: 4,
      adults: preferences.adults,
      children: preferences.children,
      totalGuests: preferences.adults + preferences.children
    };
    localStorage.setItem('montana-adventure-guest', JSON.stringify(updatedData));
    router.push('/adventure/day-5');
  };

  if (!guestData) {
    return <div className="min-h-screen bg-warm-gray-900 flex items-center justify-center">
      <div className="text-cream-100">Loading your adventure...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-warm-gray-900 relative">
      {/* Yellowstone National Park Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")`,
        }}
      />
      
      {/* Geothermal Steam Overlay */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-blue-200/10 via-cyan-200/10 to-emerald-300/10"
      />
      
      {/* Mountain Range Backdrop for Yellowstone */}
      <div 
        className="fixed inset-0 bg-cover bg-bottom bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cpath d='M0,300L100,250L200,280L300,200L400,230L500,150L600,180L700,120L800,160L900,100L1000,140L1100,80L1200,120V400H0V300Z' fill='%234a5568' opacity='0.8'/%3E%3Cpath d='M0,350L120,320L240,340L360,290L480,310L600,260L720,280L840,240L960,260L1080,220L1200,240V400H0V350Z' fill='%232d3748' opacity='0.6'/%3E%3C/svg%3E")`
        }}
      />

      {/* Geothermal Pools Pattern */}
      <div 
        className="fixed inset-0 bg-repeat-x bg-bottom opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Ccircle cx='20' cy='15' r='3' fill='%236366f1' opacity='0.6'/%3E%3Ccircle cx='50' cy='12' r='2' fill='%233b82f6' opacity='0.4'/%3E%3Ccircle cx='80' cy='16' r='2.5' fill='%2310b981' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 20px'
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
              Day 4 of 5 - Yellowstone & BBQ
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Welcome Back */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-cream-100 mb-4">
              Thursday, August 22nd, 2026
            </h1>
            <h2 className="text-xl md:text-2xl text-amber-300 mb-6">
              🏞️ Yellowstone & Cowboy BBQ Day
            </h2>
            <p className="text-lg text-cream-200 max-w-3xl mx-auto">
              Discover the wonders of Yellowstone National Park with our private guided tour (8 AM - 2 PM), 
              then enjoy a cowboy-themed BBQ send-off dinner (6-8 PM). Dress in your Montana attire!
            </p>
          </div>

          {/* Day Preview */}
          <div className="bg-amber-900 rounded-2xl p-8 border border-amber-700 mb-8">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">Yellowstone & BBQ Adventure Schedule</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-800 rounded-xl p-6 border border-amber-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🌅 8:00 AM - Yellowstone Tour</h4>
                <p className="text-cream-200 text-sm">
                  Private guided tour of Yellowstone National Park begins. See geysers, hot springs, and wildlife!
                </p>
              </div>
              
              <div className="bg-amber-800 rounded-xl p-6 border border-amber-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🦌 10:00 AM - Wildlife Viewing</h4>
                <p className="text-cream-200 text-sm">
                  Experience the incredible wildlife of Yellowstone with expert guide commentary and photo opportunities.
                </p>
              </div>
              
              <div className="bg-amber-800 rounded-xl p-6 border border-amber-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🍽️ 12:00 PM - Park Lunch</h4>
                <p className="text-cream-200 text-sm">
                  Enjoy lunch at one of Yellowstone&apos;s scenic spots while taking in the natural beauty.
                </p>
              </div>
              
              <div className="bg-amber-800 rounded-xl p-6 border border-amber-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🏠 2:00 PM - Return to Ranch</h4>
                <p className="text-cream-200 text-sm">
                  Return to the ranch with time to rest and prepare for the cowboy BBQ send-off dinner.
                </p>
              </div>
              
              <div className="bg-amber-800 rounded-xl p-6 border border-amber-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🤠 6:00 PM - Cowboy BBQ</h4>
                <p className="text-cream-200 text-sm">
                  Cowboy-themed BBQ send-off dinner! Dress in Montana attire if you like - boots, hats, and all!
                </p>
              </div>
              
              <div className="bg-amber-800 rounded-xl p-6 border border-amber-600">
                <h4 className="text-lg font-semibold text-cream-100 mb-3">🎩 Optional: Hat Making</h4>
                <p className="text-cream-200 text-sm">
                  Custom cowboy hat making available for purchase - create your own Montana souvenir!
                </p>
              </div>
            </div>
          </div>

          {/* Simple Guest Count Form */}
          <div className="bg-orange-900 rounded-2xl p-8 border border-orange-700">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">Confirm Your Yellowstone & BBQ Party</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Number of Adults
                  </label>
                  <select
                    value={preferences.adults}
                    onChange={(e) => setPreferences(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 rounded-lg border border-orange-600 bg-orange-800 text-cream-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-lg border border-orange-600 bg-orange-800 text-cream-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  >
                    {Array.from({ length: 6 }, (_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center p-4 bg-orange-800 rounded-lg">
                <p className="text-cream-100">
                  <span className="font-semibold">Total Yellowstone & BBQ Party:</span> {preferences.adults + preferences.children} adventurers
                </p>
                <p className="text-orange-200 text-sm mt-2">
                  Perfect finale to our Montana adventure with natural wonders and cowboy culture!
                </p>
              </div>

              <div className="flex justify-between items-center pt-6">
                <Link 
                  href="/adventure/day-3"
                  className="text-cream-300 hover:text-cream-100 transition-colors"
                >
                  ← Back to Wedding Day
                </Link>
                
                <button
                  onClick={handleContinue}
                  className="bg-orange-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Continue to Farewell Day →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes backgroundRotate {
          0%, 50% { opacity: 0.25; }
          25% { opacity: 0.35; }
          75% { opacity: 0.15; }
          100% { opacity: 0.25; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
