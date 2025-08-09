'use client';

import { useState } from 'react';
import Link from "next/link";

export default function RSVP() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attending: '',
    numberOfGuests: '1',
    guestNames: '',
    dietaryRestrictions: '',
    // Individual event RSVPs
    soundBath: '',
    morningRiver: '',
    horseback: '',
    yellowstone: '',
    cowboyBBQ: '',
    customHat: '',
    // Additional info
    songRequest: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For now, we'll just log to console
      // TODO: Implement Google Sheets API integration
      console.log('RSVP Form Data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="mb-6">
            <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h1 className="text-3xl font-serif text-gray-800 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your RSVP has been submitted successfully. We can&apos;t wait to celebrate with you in Montana!
            </p>
            <p className="text-sm text-gray-500 mb-8">
              You should receive a confirmation email shortly. If you need to make changes, please contact us directly.
            </p>
          </div>
          <div className="space-y-3">
            <Link 
              href="/"
              className="block bg-rose-600 text-white px-6 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link 
              href="/schedule"
              className="block border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-serif text-gray-800">
              Angela & Jeff
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/our-story" className="text-gray-700 hover:text-gray-900 transition-colors">
                Our Story
              </Link>
              <Link href="/schedule" className="text-gray-700 hover:text-gray-900 transition-colors">
                Schedule
              </Link>
              <Link href="/venue" className="text-gray-700 hover:text-gray-900 transition-colors">
                Venue & Travel
              </Link>
              <Link href="/rsvp" className="text-gray-900 font-medium">
                RSVP
              </Link>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            RSVP
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We can&apos;t wait to celebrate with you! Please let us know your plans.
          </p>
          <div className="bg-rose-100 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-rose-800 font-medium">📅 RSVP Deadline</p>
            <p className="text-rose-700">March 1st, 2026</p>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Basic Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-serif text-gray-800 mb-6">Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Wedding Attendance */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h2 className="text-2xl font-serif text-gray-800 mb-6">Wedding Day (August 21st)</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Will you be attending our wedding? *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={handleInputChange}
                        className="mr-3 text-rose-600"
                        required
                      />
                      <span>Yes, I&apos;ll be there! ✨</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={handleInputChange}
                        className="mr-3 text-rose-600"
                      />
                      <span>Sorry, I can&apos;t make it</span>
                    </label>
                  </div>
                </div>

                {formData.attending === 'yes' && (
                  <>
                    <div>
                      <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-2">
                        Total number of guests (including yourself)
                      </label>
                      <select
                        id="numberOfGuests"
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5+ Guests</option>
                      </select>
                    </div>

                    {parseInt(formData.numberOfGuests) > 1 && (
                      <div>
                        <label htmlFor="guestNames" className="block text-sm font-medium text-gray-700 mb-2">
                          Names of additional guests and children
                        </label>
                        <textarea
                          id="guestNames"
                          name="guestNames"
                          value={formData.guestNames}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                          placeholder="Please list the names of your guests and any children attending"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
                        Dietary restrictions or allergies
                      </label>
                      <textarea
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                        placeholder="Please let us know about any dietary needs"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Adventure Events */}
            {formData.attending === 'yes' && (
              <div className="bg-blue-50 rounded-lg p-6">
                <h2 className="text-2xl font-serif text-gray-800 mb-6">Adventure Events</h2>
                <p className="text-gray-600 mb-6">
                  Beyond the wedding, we&apos;d love to know which adventures you&apos;re interested in joining!
                </p>
                
                <div className="space-y-6">
                  {/* Sound Bath */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Tuesday, Aug 19th - Sunset Sound Bath (6-9 PM)</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="soundBath"
                          value="yes"
                          checked={formData.soundBath === 'yes'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>Count me in!</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="soundBath"
                          value="no"
                          checked={formData.soundBath === 'no'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>I&apos;ll skip this one</span>
                      </label>
                    </div>
                  </div>

                  {/* River Activities */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Wednesday, Aug 20th - Morning River Adventure (8 AM-12 PM)</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="morningRiver"
                          value="whitewater"
                          checked={formData.morningRiver === 'whitewater'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>White Water Rafting (Ages 6+)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="morningRiver"
                          value="scenic"
                          checked={formData.morningRiver === 'scenic'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>Scenic Float (All Ages)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="morningRiver"
                          value="no"
                          checked={formData.morningRiver === 'no'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>I&apos;ll skip the river activities</span>
                      </label>
                    </div>
                  </div>

                  {/* Horseback Riding */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Wednesday, Aug 20th - Sunset Horseback Ride (5-8 PM)</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="horseback"
                          value="yes"
                          checked={formData.horseback === 'yes'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>Saddle up!</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="horseback"
                          value="no"
                          checked={formData.horseback === 'no'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>I&apos;ll pass on horseback riding</span>
                      </label>
                    </div>
                  </div>

                  {/* Yellowstone */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Friday, Aug 22nd - Yellowstone Tour (8 AM-2 PM)</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="yellowstone"
                          value="yes"
                          checked={formData.yellowstone === 'yes'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>Adventure awaits!</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="yellowstone"
                          value="no"
                          checked={formData.yellowstone === 'no'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>I&apos;ll explore on my own</span>
                      </label>
                    </div>
                  </div>

                  {/* Cowboy BBQ */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Friday, Aug 22nd - Cowboy BBQ Send-off (6-8 PM)</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="cowboyBBQ"
                          value="yes"
                          checked={formData.cowboyBBQ === 'yes'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>Yeehaw! Count me in</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="cowboyBBQ"
                          value="no"
                          checked={formData.cowboyBBQ === 'no'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>I&apos;ll skip the BBQ</span>
                      </label>
                    </div>
                  </div>

                  {/* Custom Hat */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Custom Cowboy Hat Making (Optional Add-on)</h3>
                    <p className="text-sm text-gray-600 mb-3">Local artisans can create a custom hat during your stay (additional cost)</p>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="customHat"
                          value="yes"
                          checked={formData.customHat === 'yes'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>Yes, I want a custom hat!</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="customHat"
                          value="no"
                          checked={formData.customHat === 'no'}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span>No thanks</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Information */}
            {formData.attending === 'yes' && (
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-2xl font-serif text-gray-800 mb-6">Just for Fun</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="songRequest" className="block text-sm font-medium text-gray-700 mb-2">
                      Song Request
                    </label>
                    <input
                      type="text"
                      id="songRequest"
                      name="songRequest"
                      value={formData.songRequest}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="A song you&apos;d love to hear at the reception"
                    />
                  </div>
                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Notes or Comments
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Anything else you&apos;d like us to know?"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-6">
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800">
                    There was an error submitting your RSVP. Please try again or contact us directly.
                  </p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-rose-600 text-white px-12 py-4 rounded-full font-medium text-lg hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                Questions? Contact us at angela.jeff.wedding@gmail.com
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-lg font-serif mb-2">Angela & Jeff</p>
          <p className="text-gray-400 text-sm">August 19 - 23, 2026 • Livingston, Montana</p>
        </div>
      </footer>
    </div>
  );
}
