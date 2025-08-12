"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { findGuest, type Guest } from "@/lib/guest-list";

export default function GuestCheckIn() {
  const router = useRouter();
  const [step, setStep] = useState<'lookup' | 'party-details'>('lookup');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    totalGuests: 1,
    adults: 1,
    children: 0,
    childrenAges: [] as number[],
    dietaryRestrictions: '',
    specialRequests: ''
  });
  const [guest, setGuest] = useState<Guest | null>(null);
  const [error, setError] = useState('');

  const handleGuestLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const foundGuest = findGuest(formData.firstName, formData.lastName);
    
    if (!foundGuest) {
      setError('We couldn\'t find your name on our guest list. Please check the spelling or contact Angela & Jeff directly.');
      return;
    }

    setGuest(foundGuest);
    setFormData(prev => ({
      ...prev,
      email: foundGuest.email || ''
    }));
    setStep('party-details');
  };

  const handlePartyDetails = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store guest data in localStorage for the adventure flow
    const guestData = {
      guest,
      ...formData,
      checkedInAt: new Date().toISOString()
    };
    
    localStorage.setItem('montana-adventure-guest', JSON.stringify(guestData));
    
    // Redirect to first day of adventure
    router.push('/adventure/day-1');
  };

  const updateChildAges = (index: number, age: number) => {
    const newAges = [...formData.childrenAges];
    newAges[index] = age;
    setFormData(prev => ({ ...prev, childrenAges: newAges }));
  };

  return (
    <div className="min-h-screen bg-warm-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-warm-gray-900/90 backdrop-blur-sm border-b border-warm-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-serif text-cream-100">
              Angela & Jeff
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          
          {step === 'lookup' && (
            <div className="bg-sage-900 rounded-2xl p-8 border border-sage-700">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-serif text-cream-100 mb-4">
                  Welcome to Your Montana Adventure!
                </h1>
                <p className="text-lg text-cream-200">
                  Let&apos;s start by finding you on our guest list
                </p>
              </div>

              <form onSubmit={handleGuestLookup} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-cream-100 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-sage-600 bg-sage-800 text-cream-100 placeholder-cream-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-500 focus:outline-none"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream-100 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-sage-600 bg-sage-800 text-cream-100 placeholder-cream-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-500 focus:outline-none"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-dusty-rose-900 border border-dusty-rose-700 rounded-lg p-4">
                    <p className="text-dusty-rose-200 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-sage-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-sage-700 transition-colors"
                >
                  Find My Invitation
                </button>
              </form>
            </div>
          )}

          {step === 'party-details' && guest && (
            <div className="bg-dusty-rose-900 rounded-2xl p-8 border border-dusty-rose-700">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-serif text-cream-100 mb-4">
                  Great! Hi {guest.firstName}! 🎉
                </h1>
                <p className="text-lg text-cream-200">
                  Now let&apos;s get your adventure party details
                </p>
              </div>

              <form onSubmit={handlePartyDetails} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-dusty-rose-600 bg-dusty-rose-800 text-cream-100 placeholder-cream-300 focus:border-dusty-rose-500 focus:ring-2 focus:ring-dusty-rose-500 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-cream-100 mb-2">
                      Total Guests
                    </label>
                    <select
                      value={formData.totalGuests}
                      onChange={(e) => {
                        const total = parseInt(e.target.value);
                        setFormData(prev => ({ 
                          ...prev, 
                          totalGuests: total,
                          adults: Math.min(prev.adults, total),
                          children: Math.max(0, total - prev.adults)
                        }));
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-dusty-rose-600 bg-dusty-rose-800 text-cream-100 focus:border-dusty-rose-500 focus:ring-2 focus:ring-dusty-rose-500 focus:outline-none"
                    >
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream-100 mb-2">
                      Adults
                    </label>
                    <select
                      value={formData.adults}
                      onChange={(e) => {
                        const adults = parseInt(e.target.value);
                        setFormData(prev => ({ 
                          ...prev, 
                          adults,
                          children: prev.totalGuests - adults,
                          childrenAges: Array(Math.max(0, prev.totalGuests - adults)).fill(0)
                        }));
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-dusty-rose-600 bg-dusty-rose-800 text-cream-100 focus:border-dusty-rose-500 focus:ring-2 focus:ring-dusty-rose-500 focus:outline-none"
                    >
                      {Array.from({ length: formData.totalGuests }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream-100 mb-2">
                      Children
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.children}
                      readOnly
                      className="w-full px-4 py-3 rounded-lg border border-dusty-rose-600 bg-dusty-rose-800 text-cream-100 focus:border-dusty-rose-500 focus:ring-2 focus:ring-dusty-rose-500 focus:outline-none"
                    />
                  </div>
                </div>

                {formData.children > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-cream-100 mb-2">
                      Children&apos;s Ages (for activity planning)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {Array.from({ length: formData.children }, (_, i) => (
                        <select
                          key={i}
                          value={formData.childrenAges[i] || 0}
                          onChange={(e) => updateChildAges(i, parseInt(e.target.value))}
                          className="px-3 py-2 rounded-lg border border-dusty-rose-600 bg-dusty-rose-800 text-cream-100 focus:border-dusty-rose-500 focus:ring-2 focus:ring-dusty-rose-500 focus:outline-none"
                        >
                          <option value={0}>Age</option>
                          {Array.from({ length: 18 }, (_, age) => (
                            <option key={age + 1} value={age + 1}>{age + 1}</option>
                          ))}
                        </select>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-cream-100 mb-2">
                    Dietary Restrictions or Allergies
                  </label>
                  <textarea
                    value={formData.dietaryRestrictions}
                    onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-dusty-rose-600 bg-dusty-rose-800 text-cream-100 placeholder-cream-300 focus:border-dusty-rose-500 focus:ring-2 focus:ring-dusty-rose-500 focus:outline-none"
                    placeholder="Please list any dietary restrictions, allergies, or special meal requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-dusty-rose-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-dusty-rose-700 transition-colors"
                >
                  Start Planning Our Adventures! 🏔️
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
