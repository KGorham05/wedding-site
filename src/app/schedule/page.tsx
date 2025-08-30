import Link from "next/link";
import { Navigation } from '@/components';

export default function Schedule() {
  return (
    <div className="min-h-screen bg-warm-gray-900">
      <Navigation variant="overlay" />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-sage-900 to-warm-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Adventure Schedule
          </h1>
          <p className="text-lg text-cream-100 mb-6">
            Five days of unforgettable experiences in Montana&apos;s wilderness
          </p>
          <p className="text-sm text-cream-200">
            August 19 - 23, 2026 • Sanctuary at Crow Hollow Ranch, Livingston, MT
          </p>
        </div>
      </section>

      {/* Schedule Overview */}
      <section className="py-12 bg-warm-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Monday, August 19th */}
          <div className="mb-12 bg-sage-900 rounded-2xl p-8 border border-sage-700">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-serif text-cream-100 mb-2">
                  Monday, August 19th, 2026
                </h2>
                <h3 className="text-xl font-semibold text-cream-100 mb-4">
                  Sunset and Sound • Golden Hour Gathering
                </h3>
                <p className="text-cream-200 mb-4">
                  Welcome to Montana! Join us for a peaceful evening of sound bath nature yoga 
                  with crystal bowls as the sun sets over the beautiful ranch landscape. 
                  This gentle introduction to our week together will help you unwind from travel 
                  and connect with the serene Montana wilderness.
                </p>
                <div className="space-y-2 text-sm text-cream-300">
                  <p><strong>Time:</strong> 6:00 PM - 9:00 PM</p>
                  <p><strong>Activity:</strong> Sound bath nature yoga with crystal bowls</p>
                  <p><strong>Attire:</strong> Comfortable clothes for outdoor yoga</p>
                  <p><strong>Notes:</strong> Perfect for all ages and yoga experience levels</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:pl-8 mt-6 lg:mt-0">
                <div className="bg-sage-800 rounded-lg p-6 shadow-sm border border-sage-600">
                  <h4 className="font-semibold text-sage-100 mb-4">RSVP for this Event</h4>
                  <button className="w-full bg-sage-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-sage-400 transition-colors mb-3">
                    I&apos;ll Be There
                  </button>
                  <button className="w-full border border-sage-500 text-sage-200 py-3 px-4 rounded-lg font-medium hover:bg-sage-800 transition-colors">
                    Can&apos;t Make It
                  </button>
                  <p className="text-xs text-sage-300 mt-3 text-center">
                    Individual RSVPs help us plan better
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tuesday, August 20th */}
          <div className="mb-12 bg-warm-gray-800 rounded-2xl p-8 border border-warm-gray-700">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-serif text-cream-100 mb-2">
                  Tuesday, August 20th, 2026
                </h2>
                <h3 className="text-xl font-semibold text-cream-100 mb-4">
                  Water & Wilderness Adventures
                </h3>
                
                {/* Morning Activity */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cream-100 mb-2">Morning: River Adventures</h4>
                  <p className="text-cream-200 mb-3">
                    Choose your Montana river experience! Thrill-seekers can tackle white water rafting 
                    (ages 6+), while those preferring a more relaxed pace can enjoy our scenic float 
                    suitable for all ages. Both trips showcase Montana&apos;s stunning river valleys.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-cream-900/50 rounded-lg p-4 border border-cream-600">
                      <h5 className="font-semibold text-cream-100 mb-2">White Water Rafting</h5>
                      <p className="text-sm text-cream-200 mb-2">Ages 6+ • Moderate difficulty</p>
                      <p className="text-sm text-cream-300">Experience the thrill of Montana rapids with experienced guides</p>
                    </div>
                    <div className="bg-cream-900/50 rounded-lg p-4 border border-cream-600">
                      <h5 className="font-semibold text-cream-100 mb-2">Scenic Float</h5>
                      <p className="text-sm text-cream-200 mb-2">All ages • Relaxing pace</p>
                      <p className="text-sm text-cream-300">Peaceful river journey perfect for families and photography</p>
                    </div>
                  </div>
                  <div className="text-sm text-cream-300 mb-4">
                    <p><strong>Time:</strong> 8:00 AM - 12:00 PM</p>
                    <p><strong>Includes:</strong> Professional guides, safety equipment, light snacks</p>
                  </div>
                </div>

                {/* Evening Activity */}
                <div>
                  <h4 className="text-lg font-semibold text-cream-100 mb-2">Evening: Sunset Horseback Ride</h4>
                  <p className="text-cream-200 mb-3">
                    End the day with a magical horseback ride through Montana&apos;s rolling hills 
                    as the sun sets. Our gentle horses and experienced wranglers make this perfect 
                    for both beginners and experienced riders.
                  </p>
                  <div className="text-sm text-cream-300">
                    <p><strong>Time:</strong> 5:00 PM - 8:00 PM</p>
                    <p><strong>Experience:</strong> All levels welcome</p>
                    <p><strong>Includes:</strong> Horses, helmets, guides, sunset viewing</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 lg:pl-8 mt-6 lg:mt-0">
                <div className="bg-cream-900 rounded-lg p-6 shadow-sm mb-4 border border-cream-700">
                  <h4 className="font-semibold text-cream-100 mb-4">Morning River Adventure</h4>
                  <div className="space-y-2 mb-4">
                    <label className="flex items-center">
                      <input type="radio" name="morning-activity" className="mr-2" />
                      <span className="text-sm">White Water Rafting (6+)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="morning-activity" className="mr-2" />
                      <span className="text-sm">Scenic Float (All Ages)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="morning-activity" className="mr-2" />
                      <span className="text-sm">Skip Morning Activity</span>
                    </label>
                  </div>
                  <button className="w-full bg-cream-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-cream-700 transition-colors text-sm">
                    Confirm Morning Choice
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-cream-200">
                  <h4 className="font-semibold text-warm-gray-800 mb-4">Evening Horseback Ride</h4>
                  <button className="w-full bg-cream-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-cream-700 transition-colors mb-3">
                    Count Me In
                  </button>
                  <button className="w-full border border-warm-gray-300 text-warm-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-warm-gray-50 transition-colors">
                    I&apos;ll Pass
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Wednesday, August 21st - Wedding Day */}
          <div className="mb-12 bg-dusty-rose-900 rounded-2xl p-8 border border-dusty-rose-700">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-serif text-cream-100 mb-2">
                  Wednesday, August 21st, 2026
                </h2>
                <h3 className="text-xl font-semibold text-cream-100 mb-4">
                  ✨ Wedding Day ✨
                </h3>
                <p className="text-warm-gray-700 mb-4">
                  The moment we&apos;ve all been waiting for! Join us for our wedding celebration 
                  in the beautiful Montana wilderness, with cocktails, dinner, and dancing under the stars.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/70 rounded-lg p-4 text-center border border-dusty-rose-200">
                    <h5 className="font-semibold text-warm-gray-800 mb-1">Cocktail Hour</h5>
                    <p className="text-sm text-warm-gray-700">3:00 PM</p>
                    <p className="text-xs text-warm-gray-600 mt-1">Drinks & mingling</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4 text-center border border-dusty-rose-200">
                    <h5 className="font-semibold text-warm-gray-800 mb-1">Dinner</h5>
                    <p className="text-sm text-warm-gray-700">4:30 PM</p>
                    <p className="text-xs text-warm-gray-600 mt-1">Multi-course meal</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4 text-center border border-dusty-rose-200">
                    <h5 className="font-semibold text-warm-gray-800 mb-1">Dancing</h5>
                    <p className="text-sm text-warm-gray-700">7:00 PM</p>
                    <p className="text-xs text-warm-gray-600 mt-1">Until late!</p>
                  </div>
                </div>
                <div className="text-sm text-warm-gray-600">
                  <p><strong>Dress Code:</strong> Cocktail Attire</p>
                  <p><strong>Location:</strong> Sanctuary at Crow Hollow Ranch</p>
                  <p><strong>Note:</strong> This is the main event - we hope everyone can join us!</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:pl-8 mt-6 lg:mt-0">
                <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-dusty-rose-200">
                  <h4 className="font-semibold text-warm-gray-800 mb-4 text-center">Wedding Day RSVP</h4>
                  <button className="w-full bg-dusty-rose-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-dusty-rose-700 transition-colors mb-3 text-lg">
                    We&apos;ll Be There! ✨
                  </button>
                  <button className="w-full border border-warm-gray-300 text-warm-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-warm-gray-50 transition-colors">
                    Unfortunately Can&apos;t Attend
                  </button>
                  <p className="text-xs text-warm-gray-600 mt-3 text-center">
                    Main wedding RSVP - required for all guests
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Thursday, August 22nd */}
          <div className="mb-12 bg-sage-900 rounded-2xl p-8 border border-sage-700">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-serif text-cream-100 mb-2">
                  Thursday, August 22nd, 2026
                </h2>
                <h3 className="text-xl font-semibold text-cream-100 mb-4">
                  Yellowstone & BBQ
                </h3>
                
                {/* Morning Activity */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Morning: Private Guided Yellowstone Tour</h4>
                  <p className="text-gray-600 mb-3">
                    Experience the wonder of America&apos;s first national park with our private guided tour. 
                    See geysers, wildlife, and stunning landscapes with expert commentary about the park&apos;s 
                    natural history and geology.
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    <p><strong>Time:</strong> 8:00 AM - 2:00 PM</p>
                    <p><strong>Includes:</strong> Transportation, professional guide, park entry, lunch</p>
                    <p><strong>Highlights:</strong> Old Faithful, Grand Prismatic, wildlife viewing</p>
                    <p><strong>Note:</strong> Weather permitting, comfortable walking shoes recommended</p>
                  </div>
                </div>

                {/* Evening Activity */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Evening: Cowboy BBQ Dinner Send-off</h4>
                  <p className="text-gray-600 mb-3">
                    Our final celebration together! Join us for an authentic Montana cowboy BBQ 
                    with live music, line dancing lessons, and hearty ranch fare. Dress in your 
                    best Montana attire if you&apos;d like to join the fun!
                  </p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Time:</strong> 6:00 PM - 8:00 PM</p>
                    <p><strong>Attire:</strong> Montana/Western wear encouraged (but not required)</p>
                    <p><strong>Includes:</strong> BBQ dinner, live music, dancing</p>
                    <p><strong>Special:</strong> Group photo and final toasts</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 lg:pl-8 mt-6 lg:mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <h4 className="font-semibold text-gray-800 mb-4">Yellowstone Tour</h4>
                  <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors mb-3">
                    Join the Adventure
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    I&apos;ll Explore on My Own
                  </button>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-4">Cowboy BBQ Send-off</h4>
                  <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors mb-3">
                    Saddle Up Partner!
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Skip This One
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Friday, August 23rd */}
          <div className="mb-12 bg-warm-gray-800 rounded-2xl p-8 border border-warm-gray-700">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-serif text-cream-100 mb-2">
                  Friday, August 23rd, 2026 - Farewell
                </h2>
                <h3 className="text-xl font-semibold text-cream-100 mb-4">
                  Farewell & Departure
                </h3>
                <p className="text-cream-200 mb-4">
                  All good things must come to an end! Check out of the ranch by 10:00 AM. 
                  Safe travels home, and thank you for making our wedding week so special!
                </p>
                <div className="bg-dusty-rose-50 rounded-lg p-4 mb-4 border border-dusty-rose-200">
                  <h4 className="font-semibold text-dusty-rose-800 mb-2">🤠 Optional Add-On: Custom Cowboy Hat Making</h4>
                  <p className="text-dusty-rose-700 text-sm">
                    Want to take a piece of Montana home? Local artisans can create a custom cowboy hat 
                    just for you. This is a paid add-on activity available throughout the week.
                  </p>
                  <p className="text-dusty-rose-600 text-xs mt-2">
                    <strong>Cost:</strong> Per person • <strong>Time:</strong> 2-3 hours • <strong>When:</strong> Any day during your stay
                  </p>
                </div>
                <div className="text-sm text-warm-gray-600">
                  <p><strong>Check-out:</strong> 10:00 AM</p>
                  <p><strong>Ranch Contact:</strong> Available for assistance with departure logistics</p>
                  <p><strong>Airport:</strong> Allow 45 minutes travel time to Bozeman airport</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:pl-8 mt-6 lg:mt-0">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-warm-gray-200">
                  <h4 className="font-semibold text-warm-gray-800 mb-4">Custom Hat Making</h4>
                  <p className="text-sm text-warm-gray-600 mb-4">
                    Interested in creating your own Montana souvenir?
                  </p>
                  <button className="w-full bg-dusty-rose-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-dusty-rose-700 transition-colors mb-3">
                    Yes, I Want a Hat!
                  </button>
                  <button className="w-full border border-warm-gray-300 text-warm-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-warm-gray-50 transition-colors">
                    No Thanks
                  </button>
                  <p className="text-xs text-warm-gray-600 mt-3 text-center">
                    We&apos;ll contact you about scheduling and pricing
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final RSVP Call to Action */}
      <section className="py-12 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-serif text-warm-gray-800 mb-4">
            Ready to Adventure with Us?
          </h2>
          <p className="text-lg text-warm-gray-700 mb-8">
            Complete your RSVP for the full week or individual events. We can&apos;t wait to explore Montana with you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/rsvp"
              className="bg-sage-600 text-white px-8 py-3 rounded-full font-medium hover:bg-sage-700 transition-colors"
            >
              Complete Full RSVP
            </Link>
            <Link 
              href="/venue"
              className="border border-warm-gray-300 text-warm-gray-700 px-8 py-3 rounded-full font-medium hover:bg-warm-gray-50 transition-colors"
            >
              View Venue & Travel Info
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-gray-800 text-cream-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-lg font-serif mb-2">Angela & Jeff</p>
          <p className="text-warm-gray-300 text-sm">August 19 - 23, 2026 • Livingston, Montana</p>
        </div>
      </footer>
    </div>
  );
}
