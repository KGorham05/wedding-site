import React from 'react';
import { Navigation } from '@/components';
import Link from 'next/link';

const AccommodationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F1E8' }}>
      <Navigation variant="light" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <span className="inline-block px-6 py-2 rounded-full text-xs font-medium tracking-[0.2em] uppercase mb-8" style={{ backgroundColor: '#B8C4A8', color: '#4A5240' }}>
            Plan Your Stay
          </span>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6" style={{ color: '#4A5240' }}>
            Accommodations
          </h1>
          
          {/* Gold divider */}
          <div className="flex justify-center mb-8">
            <div className="w-0.5 h-12" style={{ backgroundColor: '#C4A962' }} />
          </div>
          
          <p className="text-lg md:text-xl" style={{ color: '#6B7A5E' }}>
            Where to stay during your Montana adventure.
          </p>
        </div>
      </section>

      {/* Key Montana Vacation Rentals - Sage Background */}
      <section className="py-20" style={{ backgroundColor: '#B8C4A8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl p-8 md:p-10" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded flex items-center justify-center rotate-45" style={{ backgroundColor: '#C4A962' }}>
                <svg className="w-5 h-5 -rotate-45 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-center mb-4" style={{ color: '#4A5240' }}>
              Key Montana Vacation Rentals
            </h2>
            <p className="text-center mb-6" style={{ color: '#6B7A5E' }}>
              Beautiful Airbnb-style cabins and homes throughout Livingston & Paradise Valley.
            </p>
            
            <div className="rounded-lg p-6 text-center mb-6" style={{ backgroundColor: '#B8C4A8' }}>
              <p className="font-medium text-lg mb-2" style={{ color: '#4A5240' }}>
                10% Off Code: <span className="font-bold" style={{ color: '#C4A962' }}>AngelaandJeff2026</span>
              </p>
            </div>
            
            <div className="text-center">
              <a
                href="https://keymontana.com/rentals"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-sm tracking-[0.1em] uppercase text-white transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#C4A962' }}
              >
                Browse Rentals
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Room Block - Cream Background */}
      <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: '#4A5240' }}>
              Hotel Room Block
            </h2>
            <p style={{ color: '#6B7A5E' }}>
              <strong style={{ color: '#4A5240' }}>Fairfield Inn & Suites Livingston</strong> — We have a room block available for your convenience.
            </p>
          </div>
          
          <div className="rounded-xl p-8 md:p-10 mb-8" style={{ backgroundColor: '#B8C4A8' }}>
            <div className="text-center mb-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-sm tracking-[0.1em] uppercase text-white transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#C4A962' }}
              >
                Book at Block Rate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <h3 className="text-xl font-serif mb-4" style={{ color: '#4A5240' }}>Adding Pre/Post-Stay Dates</h3>
            <p className="mb-4" style={{ color: 'rgba(74, 82, 64, 0.9)' }}>
              To take advantage of the group rate for additional nights:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6" style={{ color: 'rgba(74, 82, 64, 0.9)' }}>
              <li>Book at least one of the main block nights through the link above.</li>
              <li>Email Carrie your confirmation number and the extra dates you&apos;d like added.</li>
              <li>Carrie will modify the reservation for you.</li>
            </ol>
            <p style={{ color: 'rgba(74, 82, 64, 0.9)' }}>
              Email: <a href="mailto:carrie@invigoratehospitality.com" className="underline underline-offset-4 hover:opacity-80" style={{ color: '#4A5240' }}>carrie@invigoratehospitality.com</a>
            </p>
          </div>
          
          <p className="text-center font-medium" style={{ color: '#C4A962' }}>
            Room Block Cutoff Date: July 20, 2026
          </p>
        </div>
      </section>

      {/* Other Options - Sage Background */}
      <section className="py-20" style={{ backgroundColor: '#B8C4A8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: '#4A5240' }}>
            Other Options
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
              <h3 className="text-lg font-serif mb-2" style={{ color: '#4A5240' }}>Home2 Suites by Hilton</h3>
              <p className="text-sm" style={{ color: '#6B7A5E' }}>
                Modern all-suite hotel with kitchenettes, free breakfast, indoor pool, and hot tub.
              </p>
            </div>
            
            <div className="rounded-xl p-6" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
              <h3 className="text-lg font-serif mb-2" style={{ color: '#4A5240' }}>Sage Lodge</h3>
              <p className="text-sm" style={{ color: '#6B7A5E' }}>
                Luxury lodge with spa services, fine dining, and stunning Yellowstone River views.
              </p>
            </div>
            
            <div className="rounded-xl p-6" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
              <h3 className="text-lg font-serif mb-2" style={{ color: '#4A5240' }}>Under Canvas North Yellowstone</h3>
              <p className="text-sm" style={{ color: '#6B7A5E' }}>
                Luxury glamping with safari-style tents, firepits, and incredible stargazing.
              </p>
            </div>
            
            <div className="rounded-xl p-6" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
              <h3 className="text-lg font-serif mb-2" style={{ color: '#4A5240' }}>Local Airbnb/VRBOs</h3>
              <p className="text-sm" style={{ color: '#6B7A5E' }}>
                Great for families or groups looking for cabin vibes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Location - Cream Background */}
      <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: '#4A5240' }}>
            Venue Location
          </h2>
          <p className="mb-8" style={{ color: '#6B7A5E' }}>For travel planning and mapping:</p>
          
          <div className="rounded-xl p-8 inline-block" style={{ backgroundColor: '#B8C4A8' }}>
            <p className="font-serif text-xl mb-2" style={{ color: '#4A5240' }}>Sanctuary at Crow Hollow</p>
            <p style={{ color: 'rgba(74, 82, 64, 0.9)' }}>187 Suce Creek Rd</p>
            <p className="mb-4" style={{ color: 'rgba(74, 82, 64, 0.9)' }}>Livingston, MT 59047</p>
            <a
              href="https://maps.google.com/?q=187+Suce+Creek+Rd+Livingston+MT+59047"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:opacity-80"
              style={{ color: '#4A5240' }}
            >
              Open in Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-colors hover:opacity-80"
            style={{ color: '#6B7A5E' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#B8C4A8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-2xl font-serif mb-2" style={{ color: '#4A5240' }}>Angela & Jeff</p>
          <p className="text-sm mb-4" style={{ color: 'rgba(74, 82, 64, 0.7)' }}>August 19 - 23, 2026 • Sanctuary at Crow Hollow Ranch</p>
          <p className="text-sm" style={{ color: 'rgba(74, 82, 64, 0.6)' }}>#angelaandjeff2026</p>
        </div>
      </footer>
    </div>
  );
};

export default AccommodationsPage;
