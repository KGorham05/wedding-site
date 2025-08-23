import Link from "next/link";
import OptimizedHeroVideo from "@/components/OptimizedHeroVideo";
import CountdownTimer from "@/components/CountdownTimer";
import Image from "next/image";
import { Navigation } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-100 text-warm-gray-900">
      {/* Navigation */}
      <Navigation transparent />

      {/* Hero Section */}
      <OptimizedHeroVideo>
        <div className="text-center px-4 sm:px-6">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-serif text-white mb-2 drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)'}}>
              Join us for an
            </h1>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-2xl" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.7)'}}>
              Epic Montana Wedding Week
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white mb-2 drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)'}}>
            August 19 - 23, 2026
          </p>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)'}}>
            Sanctuary at Crow Hollow Ranch • Livingston, MT
          </p>
          
          <Link 
            href="/guest-check-in"
            className="inline-block bg-sage-600 text-white px-10 py-4 rounded-full font-medium text-xl hover:bg-sage-700 hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-white/20 hover:shadow-3xl hover:border-sage-300/40"
            style={{
              transition: 'all 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
            }}
          >
            RSVP & Plan Your Adventure
          </Link>
        </div>
      </OptimizedHeroVideo>

      {/* Schedule of Events */}
      <section className="py-20 bg-cream-100 relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/lake-4888504.jpg"
            alt="Montana wildflowers"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* 20% Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/25"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 bg-white/98 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20">
            <h2 className="text-4xl md:text-5xl font-serif text-warm-gray-900 mb-6">
              Week Schedule of Events
            </h2>
            <p className="text-xl text-warm-gray-700 max-w-3xl mx-auto">
              The heart of our wedding week will be at Sanctuary at Crow Hollow Ranch. Feel free to come by throughout the week to relax, play, and hang out. Think of it as our shared Montana home base.
            </p>
          </div>

          <div className="space-y-8">
            {/* Day 1 */}
            <div className="bg-white/98 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-warm-gray-200">
              <h3 className="text-2xl font-serif text-wildflower-pink-700 mb-2">Wednesday, Aug 19: Welcome Evening</h3>
              <p className="text-warm-gray-700">6-9 PM: Arrive, settle in, and join us for sound bowl yoga, light snacks, and the first Montana sunset together.</p>
            </div>
            {/* Day 2 */}
            <div className="bg-white/98 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-warm-gray-200">
              <h3 className="text-2xl font-serif text-sunset-orange-700 mb-2">Thursday, Aug 20: Adventure Day + Ranch BBQ</h3>
              <p className="text-warm-gray-700">Morning: Whitewater Rafting or Scenic River Float. Evening: Horseback Riding, followed by a Ranch BBQ and custom cowboy hat-making.</p>
            </div>
            {/* Day 3 */}
            <div className="bg-white/98 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-warm-gray-200">
              <h3 className="text-2xl font-serif text-sage-700 mb-2">Friday, Aug 21: The Big Celebration</h3>
              <p className="text-warm-gray-700">Morning: Free time to explore. Evening: Reception at the ranch with dinner, dancing, and celebration under the stars.</p>
            </div>
            {/* Day 4 */}
            <div className="bg-white/98 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-warm-gray-200">
              <h3 className="text-2xl font-serif text-wild-prairie-blue-700 mb-2">Saturday, Aug 22: Yellowstone Adventure</h3>
              <p className="text-warm-gray-700">Morning to Afternoon: Private half-day guided tour of Yellowstone. Evening is open to relax or explore Livingston.</p>
            </div>
            {/* Day 5 */}
            <div className="bg-white/98 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-warm-gray-200">
              <h3 className="text-2xl font-serif text-arrowleaf-balsamroot-yellow-700 mb-2">Sunday, Aug 23: Farewell</h3>
              <p className="text-warm-gray-700">8-10 AM: Swing by the Ranch for coffee, snacks, and hugs before heading home.</p>
            </div>
          </div>

          <div className="text-center mt-16 bg-white/98 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-serif text-warm-gray-900 mb-4">
              Ready to Plan Your Adventure?
            </h3>
            <p className="text-lg text-warm-gray-700 mb-8">
              Use our RSVP form to pick which adventures you&apos;d like to join. We&apos;ll handle the group reservations!
            </p>
            <Link 
              href="/guest-check-in"
              className="inline-block bg-sage-600 text-warm-gray-900 px-8 py-3 rounded-full font-medium text-lg hover:bg-sage-700 hover:text-white transition-colors shadow-lg"
            >
              RSVP Now
            </Link>
          </div>
        </div>
      </section>
      
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif text-warm-gray-900 mb-4">A Note on Adventure Costs</h2>
          <p className="text-lg text-warm-gray-800 mb-4">
            Adventures are optional! Use our RSVP form to save your spot. Once confirmed, we&apos;ll let you know the exact cost, and you can Venmo us for your share. We&apos;re handling the bookings to keep it simple for everyone.
          </p>
          <CountdownTimer />
        </div>
      </div>

      {/* Photo Credits */}
      <div className="bg-warm-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-lg font-serif text-warm-gray-800 mb-4">Photo Credits</h3>
          <div className="text-sm text-warm-gray-700 space-y-1">
            <p>Wildflowers image by <a href="https://pixabay.com/users/ilikesnow-7968544/" className="text-sage-700 hover:text-sage-800">Forest White</a> from <a href="https://pixabay.com/" className="text-sage-700 hover:text-sage-800">Pixabay</a></p>
          </div>
        </div>
      </div>

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
