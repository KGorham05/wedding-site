import Link from "next/link";

export default function OurStory() {
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

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif text-cream-100 mb-6">Our Story</h1>
            <p className="text-xl text-cream-200 max-w-2xl mx-auto">
              A love story that leads to an epic Montana adventure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Angela's Bio */}
            <div className="bg-sage-900/30 rounded-xl p-8 border border-sage-700">
              <h2 className="text-3xl font-serif text-cream-100 mb-4 text-center">Angela</h2>
              <div className="w-24 h-24 bg-sage-700 rounded-full mx-auto mb-6"></div>
              <p className="text-cream-200 text-center">
                Coming soon... Angela&apos;s bio and what makes her the perfect adventure partner for life&apos;s greatest journey.
              </p>
            </div>

            {/* Jeff's Bio */}
            <div className="bg-sage-900/30 rounded-xl p-8 border border-sage-700">
              <h2 className="text-3xl font-serif text-cream-100 mb-4 text-center">Jeff</h2>
              <div className="w-24 h-24 bg-sage-700 rounded-full mx-auto mb-6"></div>
              <p className="text-cream-200 text-center">
                Coming soon... Jeff&apos;s bio and what makes him the perfect adventure partner for life&apos;s greatest journey.
              </p>
            </div>
          </div>

          {/* How We Met Section */}
          <div className="bg-warm-gray-800/50 rounded-xl p-8 mb-12 border border-warm-gray-700">
            <h2 className="text-3xl font-serif text-cream-100 mb-6 text-center">How We Met</h2>
            <p className="text-lg text-cream-200 text-center max-w-3xl mx-auto">
              Our love story is still being written, but we can&apos;t wait to share how we found each other 
              and decided that Montana&apos;s wilderness was the perfect place to celebrate our beginning.
            </p>
          </div>

          {/* Proposal Story Section */}
          <div className="bg-warm-gray-800/50 rounded-xl p-8 mb-12 border border-warm-gray-700">
            <h2 className="text-3xl font-serif text-cream-100 mb-6 text-center">The Proposal</h2>
            <p className="text-lg text-cream-200 text-center max-w-3xl mx-auto">
              The story of how we decided to take this adventure together will be shared here soon. 
              It&apos;s sure to be as epic as the Montana celebration we&apos;re planning!
            </p>
          </div>

          {/* Why Montana Section */}
          <div className="bg-sage-900/30 rounded-xl p-8 mb-12 border border-sage-700">
            <h2 className="text-3xl font-serif text-cream-100 mb-6 text-center">Why Montana?</h2>
            <p className="text-lg text-cream-200 text-center max-w-3xl mx-auto">
              We chose Montana&apos;s breathtaking wilderness at Crow Hollow Ranch as the perfect backdrop 
              for our celebration because our love, like these mountains, is built to last forever.
            </p>
          </div>

          <div className="text-center">
            <Link 
              href="/guest-check-in" 
              className="inline-block bg-sage-700 text-cream-100 px-8 py-4 rounded-full font-medium text-lg hover:bg-sage-600 transition-colors mr-4"
            >
              Join Our Adventure
            </Link>
            <Link 
              href="/" 
              className="inline-block bg-warm-gray-700 text-cream-100 px-8 py-4 rounded-full font-medium text-lg hover:bg-warm-gray-600 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
