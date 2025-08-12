import Link from "next/link";
import OptimizedHeroVideo from "@/components/OptimizedHeroVideo";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-warm-gray-900/90 backdrop-blur-sm border-b border-warm-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-serif text-cream-100">
              Angela & Jeff
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-cream-200 hover:text-cream-100 transition-colors">
                Home
              </Link>
              <Link href="/guest-check-in" className="text-cream-200 hover:text-cream-100 transition-colors">
                RSVP
              </Link>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-cream-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <OptimizedHeroVideo>
        <div className="text-center px-4 sm:px-6">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-serif text-cream-100 mb-2 drop-shadow-lg">
              You&apos;re Invited to an
            </h1>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-lg">
              Epic Montana Adventure!
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-cream-100 mb-2 drop-shadow-md">
            August 19 - 23, 2026
          </p>
          <p className="text-lg md:text-xl text-cream-200 mb-8 drop-shadow-md">
            Five Days of Wilderness, Adventure & Celebration
          </p>
          
          <div className="max-w-lg mx-auto mb-8">
            <CountdownTimer />
          </div>
          
          <Link 
            href="/guest-check-in"
            className="inline-block bg-sage-600 text-white px-10 py-4 rounded-full font-medium text-xl hover:bg-sage-700 transition-colors shadow-lg"
          >
            Begin Your Adventure
          </Link>
        </div>
      </OptimizedHeroVideo>

      {/* Adventure Preview */}
      <section className="py-20 bg-warm-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-cream-100 mb-6">
              An Unforgettable Week Awaits
            </h2>
            <p className="text-xl text-cream-200 max-w-3xl mx-auto">
              Join us for five incredible days in Montana&apos;s breathtaking wilderness as we celebrate 
              Angela & Jeff&apos;s wedding with adventures, family, and memories that will last a lifetime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Adventure Highlights */}
            <div className="bg-sage-900 rounded-xl p-6 border border-sage-700">
              <div className="text-center">
                <div className="text-4xl mb-4">🧘‍♀️</div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  Sunset Yoga & Sound Baths
                </h3>
                <p className="text-cream-200 text-sm">
                  Welcome evening with crystal bowl meditation as the Montana sun sets over rolling hills
                </p>
              </div>
            </div>

            <div className="bg-dusty-rose-900 rounded-xl p-6 border border-dusty-rose-700">
              <div className="text-center">
                <div className="text-4xl mb-4">🚣‍♂️</div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  White Water Adventures
                </h3>
                <p className="text-cream-200 text-sm">
                  Choose your thrill: white water rafting or scenic float trips through Montana&apos;s pristine rivers
                </p>
              </div>
            </div>

            <div className="bg-warm-gray-800 rounded-xl p-6 border border-warm-gray-700">
              <div className="text-center">
                <div className="text-4xl mb-4">💒</div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  Wedding Celebration
                </h3>
                <p className="text-cream-200 text-sm">
                  An intimate ceremony followed by dinner and dancing under the Montana stars
                </p>
              </div>
            </div>

            <div className="bg-sage-900 rounded-xl p-6 border border-sage-700">
              <div className="text-center">
                <div className="text-4xl mb-4">🐎</div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  Horseback Riding
                </h3>
                <p className="text-cream-200 text-sm">
                  Sunset rides through rolling meadows on gentle horses perfect for all experience levels
                </p>
              </div>
            </div>

            <div className="bg-dusty-rose-900 rounded-xl p-6 border border-dusty-rose-700">
              <div className="text-center">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  Yellowstone Exploration
                </h3>
                <p className="text-cream-200 text-sm">
                  Private guided tour of America&apos;s first national park with geysers, wildlife, and wonders
                </p>
              </div>
            </div>

            <div className="bg-warm-gray-800 rounded-xl p-6 border border-warm-gray-700">
              <div className="text-center">
                <div className="text-4xl mb-4">🤠</div>
                <h3 className="text-xl font-semibold text-cream-100 mb-3">
                  Cowboy BBQ Send-off
                </h3>
                <p className="text-cream-200 text-sm">
                  Montana-style farewell dinner with line dancing and memories under the big sky
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-serif text-cream-100 mb-4">
              Ready to Plan Your Adventure?
            </h3>
            <p className="text-lg text-cream-200 mb-8">
              Let&apos;s get your party details and build your perfect Montana experience together!
            </p>
            <Link 
              href="/guest-check-in"
              className="inline-block bg-dusty-rose-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-dusty-rose-700 transition-colors shadow-lg"
            >
              Start Planning Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-gray-800 text-cream-100 py-8 border-t border-warm-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-lg font-serif mb-2">Angela & Jeff&apos;s Montana Adventure</p>
          <p className="text-cream-300 text-sm">August 19 - 23, 2026 • Sanctuary at Crow Hollow Ranch</p>
        </div>
      </footer>
    </div>
  );
}
