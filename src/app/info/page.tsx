import React from 'react';
import Image from 'next/image';
import { Navigation } from '@/components';

const InfoPage = () => {
  return (
    <div className="min-h-screen bg-cream-100 text-warm-gray-800 relative">
      {/* Background Image with Dark Overlay */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src="/lake-4888504.jpg"
          alt="Montana lake scene"
          fill
          className="object-cover"
        />
        {/* 20% Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/25"></div>
      </div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div className="relative z-10 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 mt-8 border border-warm-gray-200">
            <h1 className="text-4xl font-serif text-center text-sage-700 mb-8">General Information</h1>

            <section className="mb-12">
              <h2 className="text-3xl font-serif text-sage-600 mb-4">What to Wear</h2>
              <p className="mb-4 text-warm-gray-700">Our wedding week is all about comfort, style, and Montana charm. Here&apos;s a little guidance so you can pack just right:</p>
              <ul className="list-disc list-inside space-y-2 text-warm-gray-700">
                <li><strong className="text-warm-gray-800">Daytime + Adventures:</strong> Keep it casual and comfy—swimsuits for the lake, shorts and tees for lounging at the ranch, and activewear for rafting, floating, or hiking. Don&apos;t forget water shoes or sandals you can get wet.</li>
                <li><strong className="text-warm-gray-800">BBQ Cowboy Night at the Ranch:</strong> This one calls for Montana chic with a western twist. Boots, denim, hats, flowy skirts, or casual dresses all fit right in.</li>
                <li><strong className="text-warm-gray-800">Reception Night – Montana Cocktail:</strong> Our reception is outdoors on the grass. Think cocktail hour meets the mountains: flowy dresses, jumpsuits, chinos, boots, or nice shirts. Skip the stilettos - flats, boots, sandals, or block heels will keep you happy.</li>
                <li><strong className="text-warm-gray-800">Montana Nights:</strong> Even in August, the evenings can cool down. Bring a sweater, shawl, or jacket.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif text-sage-600 mb-4">What to Pack Checklist</h2>
              <ul className="list-disc list-inside space-y-2 text-warm-gray-700">
                <li>Montana Cocktail Attire (for the reception)</li>
                <li>Western-Inspired Outfit (for the BBQ night)</li>
                <li>Casual Clothes: Shorts, jeans, t-shirts, layers.</li>
                <li>Adventure Gear: Activewear, water shoes/sandals, hiking clothes.</li>
                <li>Swimwear</li>
                <li>Layers for Evenings: Sweater, shawl, or jacket.</li>
                <li>Sunglasses & hat</li>
                <li>Sunscreen</li>
                <li>Bug spray</li>
                <li>Refillable water bottle</li>
                <li>Daypack/backpack</li>
                <li>Camera or phone</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif text-sage-600 mb-4">Getting Here</h2>
              <p className="mb-4 text-warm-gray-700"><strong className="text-warm-gray-800">Nearest Airport:</strong> Bozeman Yellowstone International Airport (BZN) — approx. 45 minutes by car to Livingston from the Ranch.</p>
              <p className="text-warm-gray-700"><strong className="text-warm-gray-800">Transportation:</strong> For the most flexibility during your trip, we recommend renting a car directly at the airport.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif text-sage-600 mb-4">Recommended Hotels</h2>
              <p className="mb-4 text-warm-gray-700">We&apos;re still finalizing group room blocks. In the meantime, here are some of our favorite local spots:</p>
              <ul className="list-disc list-inside space-y-2 text-warm-gray-700">
                <li><strong className="text-warm-gray-800">Home2 Suites by Hilton Livingston:</strong> Modern all-suite hotel with kitchenettes.</li>
                <li><strong className="text-warm-gray-800">Fairfield Inn & Suites by Marriott Livingston:</strong> Reliable, modern stay.</li>
                <li><strong className="text-warm-gray-800">Sage Lodge:</strong> Luxury lodge with spa services and fine dining.</li>
                <li><strong className="text-warm-gray-800">Under Canvas North Yellowstone (Paradise Valley):</strong> A luxury glamping experience.</li>
                <li><strong className="text-warm-gray-800">Local Airbnb/VRBOs & KeyMontana Homes:</strong> Great for families or groups.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif text-sage-600 mb-4">Local Things to Do</h2>
              <p className="mb-4 text-warm-gray-700">If you have some downtime, here are a few ways to experience the best of Montana:</p>
              <h3 className="text-2xl font-serif text-sage-500 mt-4 mb-2">Hikes</h3>
              <ul className="list-disc list-inside space-y-2 text-warm-gray-700">
                <li>Pine Creek Falls</li>
                <li>Lava Lake Trail</li>
                <li>Sypes Canyon Trail</li>
                <li>Drinking Horse Mountain Trail</li>
              </ul>
              <h3 className="text-2xl font-serif text-sage-500 mt-4 mb-2">Outdoor Adventures</h3>
              <ul className="list-disc list-inside space-y-2 text-warm-gray-700">
                <li>Fly Fishing</li>
                <li>Chico Hot Springs</li>
              </ul>
              <h3 className="text-2xl font-serif text-sage-500 mt-4 mb-2">Explore Bozeman</h3>
              <p className="text-warm-gray-700">Only about 35 minutes away, Bozeman offers boutiques, art galleries, coffee shops, breweries, and the Museum of the Rockies.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif text-sage-600 mb-4">A Note on Wildlife & Nature</h2>
              <p className="text-warm-gray-700">We&apos;ll be celebrating in nature&apos;s backyard. Please be mindful of wildlife (deer, elk, bears, moose, and more). Keep food secured, don&apos;t approach animals, and be aware of your surroundings. Also, pack bug spray!</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
