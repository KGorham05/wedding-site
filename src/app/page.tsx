import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import Image from "next/image";
import { Navigation } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1E8', color: '#4A5240' }}>
      {/* Navigation */}
      <Navigation variant="light" />

      {/* Hero Section - Romantic Wilderness Style */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F5F1E8' }}>
        {/* Decorative sage shape on the left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 opacity-60" style={{ backgroundColor: '#B8C4A8' }} />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
          {/* Small label */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 rounded-full text-xs font-medium tracking-[0.2em] uppercase" style={{ backgroundColor: '#B8C4A8', color: '#4A5240' }}>
              Together With Their Families
            </span>
          </div>

          {/* Names */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-4" style={{ color: '#4A5240' }}>
            Angela
          </h1>
          <p className="text-2xl md:text-3xl font-serif italic mb-4" style={{ color: '#6B7A5E' }}>
            and
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-12" style={{ color: '#4A5240' }}>
            Jeff
          </h1>

          {/* Gold divider */}
          <div className="flex justify-center mb-8">
            <div className="w-0.5 h-12" style={{ backgroundColor: '#C4A962' }} />
          </div>

          {/* Invitation text */}
          <p className="text-lg md:text-xl mb-12 max-w-xl mx-auto" style={{ color: '#6B7A5E' }}>
            Request the pleasure of your company<br />
            at the celebration of their marriage
          </p>

          {/* Date and Location with divider */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif" style={{ color: '#4A5240' }}>August 19 - 23</p>
              <p className="text-sm tracking-wide" style={{ color: '#6B7A5E' }}>Two Thousand Twenty-Six</p>
            </div>
            <div className="hidden md:block w-0.5 h-12" style={{ backgroundColor: '#C4A962' }} />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif" style={{ color: '#4A5240' }}>Livingston</p>
              <p className="text-sm tracking-wide" style={{ color: '#6B7A5E' }}>Montana</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            href="/guest-check-in" 
            className="inline-block px-10 py-4 rounded-full font-medium text-sm tracking-[0.1em] uppercase text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#C4A962' }}
          >
            RSVP Now
          </Link>
        </div>

        {/* Decorative element on right */}
        <div className="absolute right-0 top-1/4 w-32 h-48 md:w-48 md:h-64 overflow-hidden rounded-l-full opacity-80">
          <Image
            src="/glacier-national-park-7443329.jpg"
            alt="Montana mountains"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Week Schedule Section - Sage Background */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#B8C4A8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-6" style={{ color: '#4A5240' }}>
            Wedding Week Details
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-lg" style={{ color: 'rgba(74, 82, 64, 0.8)' }}>
            The heart of our wedding week will be at Sanctuary at Crow Hollow Ranch. 
            Feel free to come by throughout the week to relax, play, and hang out.
          </p>

          {/* Schedule Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Wednesday */}
            <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded flex items-center justify-center rotate-45" style={{ backgroundColor: '#C4A962' }}>
                  <svg className="w-5 h-5 -rotate-45 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2" style={{ color: '#4A5240' }}>Wednesday, Aug 19</h3>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#6B7A5E' }}>Welcome Evening</p>
              <p className="text-sm" style={{ color: 'rgba(74, 82, 64, 0.8)' }}>
                6-9 PM: Sound bowl yoga, light snacks, and the first Montana sunset together.
              </p>
            </div>

            {/* Thursday */}
            <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded flex items-center justify-center rotate-45" style={{ backgroundColor: '#C4A962' }}>
                  <svg className="w-5 h-5 -rotate-45 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2" style={{ color: '#4A5240' }}>Thursday, Aug 20</h3>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#6B7A5E' }}>Adventure Day + BBQ</p>
              <p className="text-sm" style={{ color: 'rgba(74, 82, 64, 0.8)' }}>
                Morning rafting or float. Evening horseback riding, BBQ, and hat-making.
              </p>
            </div>

            {/* Friday - The Big Day */}
            <div className="rounded-xl p-8 text-center md:col-span-2" style={{ backgroundColor: '#F5F1E8', border: '2px solid rgba(196, 169, 98, 0.3)' }}>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded flex items-center justify-center rotate-45" style={{ backgroundColor: '#C4A962' }}>
                  <svg className="w-5 h-5 -rotate-45 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2" style={{ color: '#4A5240' }}>Friday, Aug 21</h3>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#C4A962' }}>The Big Celebration</p>
              <p style={{ color: 'rgba(74, 82, 64, 0.8)' }}>
                Morning: Free time to explore. Evening: Reception at the ranch with dinner, dancing, and celebration under the stars.
              </p>
            </div>

            {/* Saturday */}
            <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded flex items-center justify-center rotate-45" style={{ backgroundColor: '#C4A962' }}>
                  <svg className="w-5 h-5 -rotate-45 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2" style={{ color: '#4A5240' }}>Saturday, Aug 22</h3>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#6B7A5E' }}>Yellowstone Adventure</p>
              <p className="text-sm" style={{ color: 'rgba(74, 82, 64, 0.8)' }}>
                Private half-day guided Yellowstone tour. Evening open to explore.
              </p>
            </div>

            {/* Sunday */}
            <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded flex items-center justify-center rotate-45" style={{ backgroundColor: '#C4A962' }}>
                  <svg className="w-5 h-5 -rotate-45 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2" style={{ color: '#4A5240' }}>Sunday, Aug 23</h3>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: '#6B7A5E' }}>Farewell</p>
              <p className="text-sm" style={{ color: 'rgba(74, 82, 64, 0.8)' }}>
                8-10 AM: Coffee, snacks, and hugs before heading home.
              </p>
            </div>
          </div>

          {/* RSVP CTA */}
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'rgba(74, 82, 64, 0.7)' }}>Kindly Respond by March 1, 2026</p>
            <Link 
              href="/guest-check-in" 
              className="inline-block px-10 py-4 rounded-full font-medium text-sm tracking-[0.1em] uppercase text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#C4A962' }}
            >
              RSVP & Plan Your Adventure
            </Link>
          </div>
        </div>
      </section>

      {/* Adventure Costs Note + Countdown - Cream Background */}
      <section className="py-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: '#4A5240' }}>
            A Note on Adventures
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: '#6B7A5E' }}>
            Adventures are optional! Save your spot in the RSVP flow. We&apos;ll confirm details & costs, 
            then you can Venmo us for your share—simple and stress-free.
          </p>
          
          {/* Countdown Timer */}
          <CountdownTimer />
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
}
