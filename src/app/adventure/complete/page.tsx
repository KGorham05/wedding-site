"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    return <div className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/lake-4888504.jpg"
          alt="Montana lake celebration"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/25 to-black/35"></div>
      </div>
      <div className="relative z-10 text-cream-100">Loading your adventure...</div>
    </div>;
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/lake-4888504.jpg"
          alt="Montana lake celebration"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* 20% Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/25 to-black/35"></div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-warm-gray-900/90 backdrop-blur-sm border-b border-warm-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-serif text-white">
              Angela & Jeff
            </Link>
            <div className="text-sm text-white">
              Adventure Complete!
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Celebration Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl md:text-6xl font-serif text-cream-100 mb-6">
              Adventure Complete!
            </h1>
            <h2 className="text-xl md:text-2xl text-sage-300 mb-8">
              Thank you for planning this incredible Montana celebration with us!
            </h2>
            <p className="text-lg text-cream-200 max-w-3xl mx-auto">
              {guestData.guest.firstName}, you&apos;ve successfully completed your adventure planning! 
              Your responses will help Angela & Jeff create the perfect Montana wedding experience 
              for everyone.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="bg-sage-900 rounded-2xl p-8 border border-sage-700 mb-8">
            <h3 className="text-2xl font-serif text-cream-100 mb-6 text-center">Your Adventure Summary</h3>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-sage-800 rounded-xl p-6 border border-sage-600">
                <div className="text-3xl text-sage-300 mb-2">5</div>
                <div className="text-cream-200 text-sm">Days Planned</div>
              </div>
              
              <div className="bg-sage-800 rounded-xl p-6 border border-sage-600">
                <div className="text-3xl text-sage-300 mb-2">{guestData.totalGuests}</div>
                <div className="text-cream-200 text-sm">Party Size</div>
              </div>
              
              <div className="bg-sage-800 rounded-xl p-6 border border-sage-600">
                <div className="text-3xl text-sage-300 mb-2">{guestData.day5?.finalRating || 'N/A'}/10</div>
                <div className="text-cream-200 text-sm">Experience Rating</div>
              </div>
              
              <div className="bg-sage-800 rounded-xl p-6 border border-sage-600">
                <div className="text-3xl text-sage-300 mb-2">✓</div>
                <div className="text-cream-200 text-sm">All Set!</div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-dusty-rose-900 rounded-2xl p-8 border border-dusty-rose-700 mb-8">
            <h3 className="text-2xl font-serif text-cream-100 mb-6">What Happens Next?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-dusty-rose-700 rounded-full p-2 mr-4 mt-1">
                  <span className="text-cream-100 text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cream-100">Planning Review</h4>
                  <p className="text-cream-200 text-sm">Angela & Jeff will review your preferences and start tailoring the experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dusty-rose-700 rounded-full p-2 mr-4 mt-1">
                  <span className="text-cream-100 text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cream-100">Personal Follow-up</h4>
                  <p className="text-cream-200 text-sm">You&apos;ll receive a personal message with specific details and any clarifying questions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dusty-rose-700 rounded-full p-2 mr-4 mt-1">
                  <span className="text-cream-100 text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cream-100">Detailed Itinerary</h4>
                  <p className="text-cream-200 text-sm">A customized day-by-day itinerary will be sent to you 2 weeks before the wedding.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dusty-rose-700 rounded-full p-2 mr-4 mt-1">
                  <span className="text-cream-100 text-sm">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cream-100">Adventure Time!</h4>
                  <p className="text-cream-200 text-sm">Arrive in Montana ready for an incredible, perfectly planned celebration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-warm-gray-800 rounded-2xl p-8 border border-warm-gray-600">
            <h3 className="text-2xl font-serif text-cream-100 mb-6 text-center">Keep Your Information</h3>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={submitToSheets}
                className="bg-sage-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-sage-700 transition-colors"
              >
                📤 Submit to Angela & Jeff
              </button>
              
              <button
                onClick={downloadData}
                className="bg-dusty-rose-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-dusty-rose-700 transition-colors"
              >
                📥 Download Your Responses
              </button>
              
              <button
                onClick={() => setShowData(!showData)}
                className="bg-warm-gray-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-warm-gray-700 transition-colors"
              >
                👁️ {showData ? 'Hide' : 'View'} Your Data
              </button>
              
              <Link
                href="/"
                className="bg-warm-gray-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-warm-gray-700 transition-colors text-center"
              >
                🏠 Back to Home
              </Link>
            </div>

            {showData && (
              <div className="mt-8 bg-warm-gray-900 rounded-lg p-6 border border-warm-gray-500">
                <h4 className="text-lg font-semibold text-cream-100 mb-4">Your Complete Adventure Data</h4>
                <pre className="text-cream-200 text-xs overflow-auto max-h-96 whitespace-pre-wrap">
                  {JSON.stringify(guestData, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Final Message */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-sage-900 to-dusty-rose-900 rounded-2xl p-8 border border-sage-600">
              <h3 className="text-2xl font-serif text-cream-100 mb-4">
                From Angela & Jeff
              </h3>
              <p className="text-lg text-cream-200 italic">
                &quot;We can&apos;t wait to share this incredible Montana adventure with you! Your thoughtful responses 
                will help us create memories that will last a lifetime. Thank you for being such an important 
                part of our journey together.&quot;
              </p>
              <div className="mt-6 text-cream-100">
                💕 With love and excitement 💕
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
