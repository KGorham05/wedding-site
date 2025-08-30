import Link from "next/link";
import OptimizedHeroVideo from "@/components/OptimizedHeroVideo";
import CountdownTimer from "@/components/CountdownTimer";
import Image from "next/image";
import { Navigation } from "@/components";

export default function Home() {
  return (
  <div className="min-h-screen bg-cream-100 text-warm-gray-900">
  {/* Navigation (overlay for consistent style over media) */}
  <Navigation variant="overlay" />

      {/* Hero Section: Static image on mobile, video on md+ (iPad and larger) */}
      {(() => {
        const heroContent = (
          <div className="text-center px-4 sm:px-6">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-serif text-white mb-2 drop-shadow-2xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)' }}>
                Join us for an
              </h1>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-2xl" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.7)' }}>
                Epic Montana Wedding Week
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-white mb-2 drop-shadow-xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)' }}>
              August 19 - 23, 2026
            </p>
            <p className="text-lg md:text-xl text-white mb-8 drop-shadow-xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)' }}>
              Sanctuary at Crow Hollow Ranch • Livingston, MT
            </p>
            <Link
              href="/guest-check-in"
              className="inline-block bg-sage-600 text-white px-10 py-4 rounded-full font-medium text-xl hover:bg-sage-700 hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20 hover:shadow-3xl hover:border-sage-300/40"
              style={{ transition: 'all 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease' }}
            >
              RSVP & Plan Your Adventure
            </Link>
          </div>
        );

        return (
          <>
            {/* Mobile (no video) */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden md:hidden">
              <Image
                src="/glacier-national-park-7443329.jpg"
                alt="Montana mountain landscape"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/65" />
              <div className="relative z-10">{heroContent}</div>
            </section>

            {/* Desktop / iPad+ with video */}
            <div className="hidden md:block">
              <OptimizedHeroVideo>{heroContent}</OptimizedHeroVideo>
            </div>
          </>
        );
      })()}

      {/* Schedule of Events (glass styling) */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/lake-4888504.jpg"
            alt="Montana lake backdrop"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="surface-glass-1 rounded-2xl p-10 md:p-14 shadow-2xl border border-white/10 text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Week Schedule of Events</h2>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto">The heart of our wedding week will be at Sanctuary at Crow Hollow Ranch. Feel free to come by throughout the week to relax, play, and hang out. Think of it as our shared Montana home base.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="surface-glass-1 rounded-xl p-6 shadow-xl border border-white/10">
              <h3 className="text-xl font-serif text-white mb-2">Wednesday, Aug 19: Welcome Evening</h3>
              <p className="text-white/85 text-sm md:text-base">6-9 PM: Arrive, settle in, and join us for sound bowl yoga, light snacks, and the first Montana sunset together.</p>
            </div>
            <div className="surface-glass-1 rounded-xl p-6 shadow-xl border border-white/10">
              <h3 className="text-xl font-serif text-white mb-2">Thursday, Aug 20: Adventure Day + Ranch BBQ</h3>
              <p className="text-white/85 text-sm md:text-base">Morning: Whitewater Rafting or Scenic River Float. Evening: Horseback Riding, followed by a Ranch BBQ and custom cowboy hat-making.</p>
            </div>
            <div className="surface-glass-1 rounded-xl p-6 shadow-xl border border-white/10">
              <h3 className="text-xl font-serif text-white mb-2">Friday, Aug 21: The Big Celebration</h3>
              <p className="text-white/85 text-sm md:text-base">Morning: Free time to explore. Evening: Reception at the ranch with dinner, dancing, and celebration under the stars.</p>
            </div>
            <div className="surface-glass-1 rounded-xl p-6 shadow-xl border border-white/10">
              <h3 className="text-xl font-serif text-white mb-2">Saturday, Aug 22: Yellowstone Adventure</h3>
              <p className="text-white/85 text-sm md:text-base">Morning to Afternoon: Private half-day guided tour of Yellowstone. Evening is open to relax or explore Livingston.</p>
            </div>
            <div className="surface-glass-1 rounded-xl p-6 shadow-xl border border-white/10 md:col-span-2">
              <h3 className="text-xl font-serif text-white mb-2">Sunday, Aug 23: Farewell</h3>
              <p className="text-white/85 text-sm md:text-base">8-10 AM: Swing by the Ranch for coffee, snacks, and hugs before heading home.</p>
            </div>
          </div>
          <div className="surface-glass-1 rounded-2xl p-10 shadow-2xl border border-white/10 text-center">
            <h3 className="text-2xl font-serif text-white mb-4">Ready to Plan Your Adventure?</h3>
            <p className="text-lg text-white/85 mb-8 max-w-3xl mx-auto">Use our RSVP form to pick which adventures you&apos;d like to join. We&apos;ll handle the group reservations!</p>
            <Link
              href="/guest-check-in"
              className="btn-glass text-white px-10 py-4 rounded-full font-medium text-lg focus-ring"
            >
              RSVP Now
            </Link>
          </div>
        </div>
      </section>
      
      <section className="relative py-20">
        {/* Solid / gradient background (no image) */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="surface-glass-1 rounded-2xl p-10 md:p-14 shadow-2xl border border-white/10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">A Note on Adventure Costs</h2>
            <p className="text-lg text-white/85 mb-10 max-w-3xl mx-auto">Adventures are optional! Save your spot in the RSVP flow. We&apos;ll confirm details & costs, then you can Venmo us for your share—simple and stress-free.</p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-gray-900 text-cream-100 py-8 border-t border-warm-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-lg font-serif mb-2">Angela & Jeff&apos;s Montana Adventure</p>
          <p className="text-cream-300 text-sm">August 19 - 23, 2026 • Sanctuary at Crow Hollow Ranch</p>
        </div>
      </footer>
    </div>
  );
}
