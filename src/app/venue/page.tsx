import Link from "next/link";

export default function Venue() {
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
              <Link href="/venue" className="text-gray-900 font-medium">
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
      <section className="pt-24 pb-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Venue & Travel
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Everything you need to know about getting to and staying at our Montana paradise
          </p>
          <p className="text-sm text-gray-500">
            Sanctuary at Crow Hollow Ranch • 187 Suce Creek Rd, Livingston, MT 59047
          </p>
        </div>
      </section>

      {/* Venue Details */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Main Venue Info */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif text-gray-800 mb-6">
                  Sanctuary at Crow Hollow Ranch
                </h2>
                <p className="text-gray-600 mb-6">
                  Our wedding will take place at the breathtaking Sanctuary at Crow Hollow Ranch, 
                  a 200-acre private luxury ranch nestled at the base of sprawling meadows in the 
                  heart of Montana&apos;s wilderness. This exclusive retreat offers unparalleled beauty 
                  and serenity, with pristine Suce Creek running through the property.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">187 Suce Creek Rd, Livingston, MT 59047</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">Wedding Schedule</p>
                      <p className="text-gray-600">
                        Cocktails: 3:00 PM<br/>
                        Dinner: 4:30 PM<br/>
                        Dancing: 7:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-800">What&apos;s Included</p>
                      <p className="text-gray-600">200-acre private ranch, spring-fed pond, hiking trails, and exclusive access</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Embed */}
              <div>
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.123456789!2d-110.554321!3d45.663456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM5JzQ4LjQiTiAxMTDCsDMzJzE1LjYiVw!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-80"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href="https://maps.google.com/?q=187+Suce+Creek+Rd,+Livingston,+MT+59047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center">Getting There</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Flying */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-800">Flying to Montana</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">Bozeman Yellowstone International Airport (BZN)</p>
                    <p className="text-gray-600 text-sm">Closest airport • 45 minutes to venue</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Recommended Airlines</p>
                    <p className="text-gray-600 text-sm">Delta, United, Southwest, Alaska Airlines</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Car Rental Required</p>
                    <p className="text-gray-600 text-sm">Available at airport from all major companies</p>
                  </div>
                </div>
              </div>

              {/* Driving */}
              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-amber-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-800">Driving Directions</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">From Bozeman Airport</p>
                    <p className="text-gray-600 text-sm">45 minutes via I-90 E and US-89 S</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">From Livingston</p>
                    <p className="text-gray-600 text-sm">15 minutes south on US-89</p>
                  </div>
                  <div className="bg-amber-100 rounded p-3 mt-4">
                    <p className="text-amber-800 text-sm font-medium">⚠️ Important Transportation Note</p>
                    <p className="text-amber-700 text-sm">No ride shares (Uber/Lyft) available in this area. Car rental is essential for getting around.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center">Where to Stay</h2>
            
            <div className="bg-rose-50 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-rose-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">On-Site Ranch Accommodation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The ranch features 4 gorgeous living structures with 22 beds, accommodating up to 34 guests. 
                To ensure privacy and serenity, the ranch is rented exclusively (all four accommodations together).
              </p>
              <div className="bg-white rounded p-4">
                <p className="text-rose-800 font-medium">🏡 Exclusive Ranch Rental</p>
                <p className="text-rose-700 text-sm">For those wanting the full ranch experience, contact us about availability and pricing.</p>
                <a 
                  href="https://sanctuaryatcrowhollow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-rose-600 hover:text-rose-800 text-sm font-medium"
                >
                  View Ranch Details & Photos →
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Hotel Option 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Murray Hotel</h4>
                <p className="text-gray-600 text-sm mb-3">Historic downtown Livingston hotel</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>📍 201 W Park St, Livingston, MT</p>
                  <p>🚗 15 minutes to venue</p>
                  <p>💰 $$$ Historic charm</p>
                </div>
                <a 
                  href="tel:406-222-1350"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Call: (406) 222-1350
                </a>
              </div>

              {/* Hotel Option 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Best Western Plus</h4>
                <p className="text-gray-600 text-sm mb-3">Modern amenities in Livingston</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>📍 1515 W Park St, Livingston, MT</p>
                  <p>🚗 20 minutes to venue</p>
                  <p>💰 $$ Family-friendly</p>
                </div>
                <a 
                  href="tel:406-222-6320"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Call: (406) 222-6320
                </a>
              </div>

              {/* Hotel Option 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Bozeman Options</h4>
                <p className="text-gray-600 text-sm mb-3">More hotels near the airport</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>📍 Various locations in Bozeman</p>
                  <p>🚗 45 minutes to venue</p>
                  <p>💰 $ - $$$ Multiple options</p>
                </div>
                <p className="text-gray-600 text-sm">
                  More hotel variety, closer to airport for departures
                </p>
              </div>
            </div>
          </div>

          {/* What to Pack */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center">What to Pack</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Montana Weather in August</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Daytime High:</span>
                    <span className="font-medium text-gray-800">80-85°F</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Evening Low:</span>
                    <span className="font-medium text-gray-800">45-55°F</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Typical Weather:</span>
                    <span className="font-medium text-gray-800">Sunny, dry</span>
                  </div>
                  <div className="bg-green-100 rounded p-3 mt-4">
                    <p className="text-green-800 text-sm">
                      ☀️ Beautiful sunny days with cool, crisp evenings. Perfect weather for outdoor adventures!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Packing Checklist</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Cocktail attire for wedding</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Warm layers for evenings</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Comfortable hiking shoes</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Western/Montana attire (optional)</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Yoga/comfortable clothes</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Sunscreen & sunglasses</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Camera for amazing views!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif text-gray-800 mb-4">
            Ready for the Adventure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Now that you know all the details, we can&apos;t wait to celebrate with you in Montana!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/rsvp"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              RSVP Now
            </Link>
            <Link 
              href="/schedule"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              View Full Schedule
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
