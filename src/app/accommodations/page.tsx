import React from 'react';
import { Navigation, HeroHeader } from '@/components';

const AccommodationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation variant="overlay" />
      <HeroHeader
        title="Accommodations"
        subtitle="Where to stay during your Montana adventure."
        media={{ type: 'image', src: '/glacier-national-park-7443329.jpg', alt: 'Montana mountain landscape', priority: true }}
        overlay="strong"
        extendBackground
        align="center"
      >
        <div className="surface-glass-1 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
          
          {/* Key Montana Vacation Rentals */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-white mb-4">
              Key Montana Vacation Rentals
            </h2>
            <p className="text-white/85 mb-4">
              Beautiful Airbnb-style cabins and homes throughout Livingston & Paradise Valley.
            </p>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <p className="text-white font-semibold text-lg mb-2">
                10% Off Code: <span className="text-yellow-300">AngelaandJeff2026</span>
              </p>
              <a
                href="https://keymontana.com/rentals"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white underline underline-offset-4"
              >
                Browse rentals at keymontana.com
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>

          {/* Hotel Room Block */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-white mb-4">
              Hotel Room Block
            </h2>
            <p className="text-white/85 mb-4">
              <strong className="text-white">Fairfield Inn & Suites Livingston</strong> — We have a room block available for your convenience.
            </p>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-6">
              <a
                href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1760724689465&key=GRP&dtt=true&app=resvlink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white underline underline-offset-4 font-semibold"
              >
                Book at Block Rate for Pinamonti Schweizer Wedding
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <h3 className="text-xl font-serif text-white/90 mb-3">Adding Pre/Post-Stay Dates</h3>
            <p className="text-white/85 mb-2">
              To take advantage of the group rate for additional nights:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-white/85 mb-4">
              <li>Book at least one of the main block nights through the link above.</li>
              <li>Email Gina your confirmation number and the extra dates you&apos;d like added.</li>
              <li>Gina will modify the reservation for you.</li>
            </ol>
            <p className="text-white/85">
              Email: <a href="mailto:gina.cortez@lodgingdynamics.com" className="text-white underline underline-offset-4 hover:text-white/80">gina.cortez@lodgingdynamics.com</a>
            </p>
            <p className="text-yellow-300 font-semibold mt-4">
              Room Block Cutoff Date: July 20, 2026
            </p>
          </section>

          {/* Other Accommodations */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif text-white mb-4">
              Other Options
            </h2>
            <ul className="space-y-4 text-white/85">
              <li>
                <strong className="text-white">Home2 Suites by Hilton Livingston</strong> — Modern all-suite hotel with kitchenettes, free breakfast, indoor pool, and hot tub.
              </li>
              <li>
                <strong className="text-white">Sage Lodge</strong> — Luxury lodge just outside of town with spa services, fine dining, and stunning Yellowstone River views.
              </li>
              <li>
                <strong className="text-white">Under Canvas North Yellowstone</strong> — Luxury glamping with safari-style tents, firepits, and incredible stargazing.
              </li>
              <li>
                <strong className="text-white">Local Airbnb/VRBOs</strong> — Great for families or groups looking for cabin vibes.
              </li>
            </ul>
          </section>

          {/* Venue Location */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">
              Venue Location
            </h2>
            <p className="text-white/85 mb-2">For travel planning and mapping:</p>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <p className="text-white font-semibold text-lg">Sanctuary at Crow Hollow</p>
              <p className="text-white/85">187 Suce Creek Rd</p>
              <p className="text-white/85">Livingston, MT 59047</p>
              <a
                href="https://maps.google.com/?q=187+Suce+Creek+Rd+Livingston+MT+59047"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white underline underline-offset-4 mt-3"
              >
                Open in Google Maps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>

        </div>
      </HeroHeader>
    </div>
  );
};

export default AccommodationsPage;
