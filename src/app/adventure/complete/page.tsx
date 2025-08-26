"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HeroHeader, Navigation } from "@/components";
import { type GuestData } from "@/lib/guest-list";

export default function AdventureComplete() {
  const router = useRouter();
  const [guestData, setGuestData] = useState<GuestData | null>(null);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('montana-adventure-guest');
    if (!stored) {
      router.push('/guest-check-in');
      return;
    }
    const data = JSON.parse(stored);
    if (!data.day5) {
      router.push('/adventure/day-5');
      return;
    }
    setGuestData(data);
  }, [router]);

  const downloadData = () => {
    if (!guestData) return;
    
    const dataStr = JSON.stringify(guestData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${guestData.guest.firstName}-${guestData.guest.lastName}-adventure-planning.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const submitToSheets = async () => {
    if (!guestData) return;
    
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(guestData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert('Your adventure planning has been submitted successfully!');
      } else {
        alert('There was an error submitting your data. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting to sheets:', error);
      alert('There was an error submitting your data. Please try again.');
    }
  };

  if (!guestData) {
    return <div className="min-h-screen flex items-center justify-center bg-ink text-white">Loading your adventure...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation dark />
      <HeroHeader
        title="Adventure Complete!"
        subtitle={`Thank you, ${guestData.guest.firstName}, for planning this incredible Montana celebration with us!`}
        media={{ type: 'image', src: '/lake-4888504.jpg', alt: 'Montana lake celebration', priority: true }}
        overlay="strong"
      />
      <main className="flex-1 -mt-10 md:-mt-16 relative z-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Celebration Marker */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🎉</div>
            <p className="text-white/85 text-lg">You&apos;ve successfully completed your adventure planning.</p>
          </div>

          {/* Summary Stats */}
          <div className="surface-glass-1 rounded-2xl p-8 shadow-2xl border border-white/10 mb-8">
            <h3 className="text-2xl font-serif text-white mb-6 text-center">Your Adventure Summary</h3>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="surface-glass-2 rounded-xl p-6">
                <div className="text-3xl text-white mb-2">5</div>
                <div className="text-white text-sm">Days Planned</div>
              </div>
              
              <div className="surface-glass-2 rounded-xl p-6">
                <div className="text-3xl text-white mb-2">{guestData.totalGuests}</div>
                <div className="text-white text-sm">Party Size</div>
              </div>
              
              <div className="surface-glass-2 rounded-xl p-6">
                <div className="text-3xl text-white mb-2">{guestData.day5?.finalRating || 'N/A'}/10</div>
                <div className="text-white text-sm">Experience Rating</div>
              </div>
              
              <div className="surface-glass-2 rounded-xl p-6">
                <div className="text-3xl text-white mb-2">✓</div>
                <div className="text-white text-sm">All Set!</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="surface-glass-1 rounded-2xl p-8 shadow-2xl border border-white/10 mb-8">
            <h3 className="text-2xl font-serif text-white mb-6">What Happens Next?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="surface-glass-2 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Planning Review</h4>
                  <p className="text-white text-sm">Angela & Jeff will review your preferences and start tailoring the experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="surface-glass-2 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Personal Follow-up</h4>
                  <p className="text-white text-sm">You&apos;ll receive a personal message with specific details and any clarifying questions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="surface-glass-2 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Detailed Itinerary</h4>
                  <p className="text-white text-sm">A customized day-by-day itinerary will be sent to you 2 weeks before the wedding.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="surface-glass-2 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white text-sm">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Adventure Time!</h4>
                  <p className="text-white text-sm">Arrive in Montana ready for an incredible, perfectly planned celebration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="surface-glass-1 rounded-2xl p-8 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-serif text-white mb-6 text-center">Keep Your Information</h3>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={submitToSheets}
                className="btn-glass text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 focus-ring"
              >
                📤 Submit
              </button>
              
              <button
                onClick={downloadData}
                className="btn-glass text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 focus-ring"
              >
                📥 Download Data
              </button>
              
              <button
                onClick={() => setShowData(!showData)}
                className="btn-glass text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 focus-ring"
              >
                👁️ {showData ? 'Hide' : 'View'} Data
              </button>
              
              <Link
                href="/"
                className="btn-glass text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 focus-ring text-center"
              >
                🏠 Home
              </Link>
            </div>

            {showData && (
              <div className="mt-8 bg-warm-gray-900 rounded-lg p-6 border border-warm-gray-500">
                <h4 className="text-lg font-semibold text-white mb-4">Your Complete Adventure Data</h4>
                <pre className="text-white text-xs overflow-auto max-h-96 whitespace-pre-wrap">
                  {JSON.stringify(guestData, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Final Message */}
          <div className="text-center mt-12 surface-glass-1 rounded-2xl p-8 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-serif text-white mb-4">From Angela & Jeff</h3>
            <p className="text-lg text-white/90 italic">&quot;We can&apos;t wait to share this incredible Montana adventure with you! Your thoughtful responses will help us create memories that will last a lifetime. Thank you for being such an important part of our journey together.&quot;</p>
            <div className="mt-6 text-white">💕 With love and excitement 💕</div>
          </div>

        </div>
      </main>
    </div>
  );
}
