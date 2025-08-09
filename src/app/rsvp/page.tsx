import Link from "next/link";

export default function RSVP() {
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
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-serif text-gray-800 mb-8">RSVP</h1>
          <p className="text-lg text-gray-600 mb-4">
            RSVP form with Google Sheets integration coming soon!
          </p>
          <p className="text-sm text-gray-500 mb-8">
            RSVP Deadline: March 1st, 2026
          </p>
          <div className="mt-8">
            <Link 
              href="/" 
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
