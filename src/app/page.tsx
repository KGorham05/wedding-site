import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-serif text-gray-800">
              Angela & Jeff
            </div>
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
              <Link href="/rsvp" className="text-gray-700 hover:text-gray-900 transition-colors">
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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">
            We&apos;re Getting Married!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            August 19 - 23, 2026
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Sanctuary at Crow Hollow Ranch • Livingston, Montana
          </p>
          <Link 
            href="/rsvp"
            className="inline-block bg-white text-gray-800 px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors"
          >
            RSVP Now
          </Link>
        </div>
      </section>

      {/* Adventure Schedule Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              A Week of Adventures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for an unforgettable week in Montana&apos;s breathtaking wilderness. 
              From sunset yoga to Yellowstone tours, we&apos;ve planned something special for every day.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {/* August 19th */}
            <div className="bg-rose-50 rounded-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    August 19th - Sunset and Sound
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Welcome Evening Party with sound bath nature yoga and crystal bowls
                  </p>
                  <p className="text-sm text-gray-500">6:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* August 20th */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  August 20th - Water & Wilderness
                </h3>
                <p className="text-gray-600 mb-3">
                  Morning: White Water Rafting (6+) or Scenic Float (All Ages) • 8:00 AM - 12:00 PM<br/>
                  Evening: Sunset Horseback Ride • 5:00 PM - 8:00 PM
                </p>
              </div>
            </div>

            {/* August 21st */}
            <div className="bg-amber-50 rounded-lg p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  August 21st - Wedding Day
                </h3>
                <p className="text-gray-600 mb-3">
                  Cocktail Hour: 3:00 PM • Dinner: 4:30 PM • Dancing: 7:00 PM<br/>
                  Dress Code: Cocktail Attire
                </p>
              </div>
            </div>

            {/* August 22nd */}
            <div className="bg-green-50 rounded-lg p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  August 22nd - Yellowstone & BBQ
                </h3>
                <p className="text-gray-600 mb-3">
                  Morning: Private Guided Yellowstone Tour • 8:00 AM - 2:00 PM<br/>
                  Evening: Cowboy BBQ Dinner Send-off • 6:00 PM - 8:00 PM<br/>
                  <em className="text-sm">Dress in Montana attire if you like!</em>
                </p>
              </div>
            </div>

            {/* August 23rd */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  August 23rd - Farewell
                </h3>
                <p className="text-gray-600 mb-3">
                  Check out by 10:00 AM • Adios!<br/>
                  <em className="text-sm">Custom cowboy hat making available (pay per person)</em>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/schedule"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors"
            >
              View Full Schedule & RSVP
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From first dates to forever adventures, our journey has led us to this beautiful moment 
              we can&apos;t wait to share with you in the heart of Montana.
            </p>
          </div>
          <div className="text-center">
            <Link 
              href="/our-story"
              className="inline-block bg-rose-600 text-white px-6 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              Event Details
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ceremony & Reception</h3>
              <p className="text-gray-600 mb-2">Sanctuary at Crow Hollow Ranch</p>
              <p className="text-gray-600 mb-4">187 Suce Creek Rd, Livingston, MT 59047</p>
              <p className="text-sm text-gray-500 mb-4">
                Cocktail Hour: 3:00 PM<br/>
                Dinner: 4:30 PM<br/>
                Dancing: 7:00 PM
              </p>
            </div>

            {/* Travel */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Travel Information</h3>
              <p className="text-gray-600 mb-2">Nearest Airport: Bozeman, MT</p>
              <p className="text-gray-600 mb-4">45 minutes from venue</p>
              <p className="text-sm text-gray-500 mb-4">
                Car rental recommended<br/>
                No ride shares available
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/venue"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors"
            >
              View Venue Details & Maps
            </Link>
          </div>
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
