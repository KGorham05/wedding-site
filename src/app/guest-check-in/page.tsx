"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navigation, HeroHeader } from '@/components';
import { type Guest } from "@/lib/guest-list";

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
    adultNames: [] as string[],
    childrenNames: [] as string[],
    dietaryRestrictions: '',
    specialRequests: ''
  });
  const [declined, setDeclined] = useState(false);
  const [guest, setGuest] = useState<Guest | null>(null);
  const [error, setError] = useState('');
  const [guestList, setGuestList] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch guest list from Google Sheets on component mount
  useEffect(() => {
    const fetchGuestList = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/guests');
        const data = await response.json();
        
        if (data.success) {
          setGuestList(data.guests);
        } else {
          setError('Failed to load guest list. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching guest list:', error);
        setError('Failed to load guest list. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchGuestList();
  }, []);

  // Find guest function that works with the fetched guest list
  const findGuest = (firstName: string, lastName: string): Guest | null => {
    const normalizedFirst = firstName.toLowerCase().trim();
    const normalizedLast = lastName.toLowerCase().trim();
    
    return guestList.find(guest => 
      guest.firstName.toLowerCase().trim() === normalizedFirst &&
      guest.lastName.toLowerCase().trim() === normalizedLast
    ) || null;
  };

  const handleGuestLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (loading) {
      setError('Still loading guest list, please wait...');
      return;
    }
    
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
      // Set maximum constraints from check-in (these cannot be exceeded)
      maxAdults: formData.adults,
      maxChildren: formData.children,
      checkedInAt: new Date().toISOString()
    };
    if (declined) {
      (guestData as typeof guestData & { declined: boolean }).declined = true;
    }
    
    localStorage.setItem('montana-adventure-guest', JSON.stringify(guestData));
    
    // Redirect to first day of adventure
    router.push('/adventure/day-1');
  };

  const updateChildAges = (index: number, age: number) => {
    const newAges = [...formData.childrenAges];
    newAges[index] = age;
    setFormData(prev => ({ ...prev, childrenAges: newAges }));
  };

  const updateChildName = (index: number, name: string) => {
    const newNames = [...formData.childrenNames];
    newNames[index] = name;
    setFormData(prev => ({ ...prev, childrenNames: newNames }));
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation variant="overlay" />
      <HeroHeader
        title="Guest Check-In"
        subtitle="Find your invitation and register your party for the Montana wedding adventure week."
        media={{ type: 'image', src: '/montana-river.jpg', alt: 'Montana river landscape', priority: true }}
  overlay="strong"
  extendBackground
  align="center"
      >
        <div className="max-w-2xl mx-auto">
          {step === 'lookup' && (
            <div className="surface-glass-1 rounded-2xl p-8 shadow-2xl border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-serif text-white mb-3">Welcome to Your Montana Adventure</h2>
                <p className="text-base md:text-lg text-white/85">Let&apos;s start by finding you on our guest list.</p>
              </div>
              <form onSubmit={handleGuestLookup} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/60 focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/60 focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-lg p-4">
                    <p className="text-white text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-glass text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 focus-ring"
                >
                  Find My Invitation →
                </button>
              </form>
            </div>
          )}

          {step === 'party-details' && guest && (
            <div className="surface-glass-1 rounded-2xl p-8 shadow-2xl border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-serif text-white mb-3">Hi {guest.firstName}! 🎉</h2>
                <p className="text-base md:text-lg text-white/85">Let&apos;s capture your party details for the week.</p>
              </div>
              <form onSubmit={handlePartyDetails} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/60 focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
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
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                    >
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
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
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                    >
                      {Array.from({ length: formData.totalGuests }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Children
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.children}
                      readOnly
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white/70 focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {formData.children > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Children&apos;s Ages (for activity planning)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {Array.from({ length: formData.children }, (_, i) => (
                        <select
                          key={i}
                          value={formData.childrenAges[i] || 0}
                          onChange={(e) => updateChildAges(i, parseInt(e.target.value))}
                          className="px-3 py-2 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
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

                {formData.children > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-white mb-2 mt-6">
                      Children&apos;s First Names (optional, helps us personalize)
                    </label>
                    <div className="space-y-2">
                      {Array.from({ length: formData.children }, (_, i) => (
                        <input
                          key={i}
                          type="text"
                          value={formData.childrenNames[i] || ''}
                          onChange={(e) => updateChildName(i, e.target.value)}
                          placeholder={`Child ${i + 1} name`}
                          className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/15 backdrop-blur-sm text-white placeholder-white/50 focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200"
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => setDeclined(d => !d)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm ${declined ? 'bg-red-600/50 border-red-300/40 text-white shadow-lg scale-[1.01]' : 'bg-white/10 border-white/30 text-white/90 hover:bg-white/20'}`}
                    aria-pressed={declined}
                  >
                    <span className="text-left text-sm md:text-base font-medium">
                      {declined ? "Changed your mind? Tap to say you'll attend" : "Can’t make it? Tap to let us know (leave a note below)"}
                    </span>
                    <span className={`ml-4 inline-flex items-center justify-center w-6 h-6 rounded-md border text-xs ${declined ? 'bg-white text-red-600 border-white' : 'border-white/50 text-white/70'}`}>{declined ? '✕' : '✓'}</span>
                  </button>
                  {declined && (
                    <p className="text-white/80 text-xs md:text-sm text-center">
                      We’ll miss you! You can still explore the adventure flow later—this just helps us plan. You can toggle this off anytime.
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Dietary Restrictions / Message
                  </label>
                  <textarea
                    value={formData.dietaryRestrictions}
                    onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/60 focus:border-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none transition-all duration-200 resize-none"
                    placeholder={declined ? "Leave us a note, well-wishes, or let us know why you can't make it (plus any dietary info just in case)..." : "Dietary restrictions, allergies, special meal needs, or any note you'd like to share..."}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full relative overflow-hidden btn-glass text-white py-3 px-6 rounded-lg font-medium transition-all duration-500 focus-ring ${declined ? 'animate-pulse ring-2 ring-red-400/50' : ''}`}
                >
                  {declined ? 'See What You’d Be Missing →' : 'Start Planning Our Adventures →'}
                </button>
              </form>
            </div>
          )}
        </div>
      </HeroHeader>
    </div>
  );
}
