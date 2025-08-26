import React from 'react';
import { Navigation, HeroHeader } from '@/components';

const InfoPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation variant="overlay" />
      <HeroHeader
        title="General Information"
        subtitle="Everything you need to know for an unforgettable week in Montana."
        media={{ type: 'image', src: '/lake-4888504.jpg', alt: 'Montana lake scene', priority: true }}
        overlay="strong"
        extendBackground
        align="center"
      >
        <div className="surface-glass-1 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-8 text-white">What to Know</h2>

            <section className="mb-12">
              <h3 className="text-2xl font-serif text-white mb-4">What to Wear</h3>
              <p className="mb-4 text-white/85">Our wedding week is all about comfort, style, and Montana charm. Here&apos;s a little guidance so you can pack just right:</p>
              <ul className="list-disc list-inside space-y-2 text-white/85">
                <li><strong className="text-white">Daytime + Adventures:</strong> Keep it casual and comfy—swimsuits for the lake, shorts and tees for lounging at the ranch, and activewear for rafting, floating, or hiking. Don&apos;t forget water shoes or sandals you can get wet.</li>
                <li><strong className="text-white">BBQ Cowboy Night at the Ranch:</strong> This one calls for Montana chic with a western twist. Boots, denim, hats, flowy skirts, or casual dresses all fit right in.</li>
                <li><strong className="text-white">Reception Night – Montana Cocktail:</strong> Our reception is outdoors on the grass. Think cocktail hour meets the mountains: flowy dresses, jumpsuits, chinos, boots, or nice shirts. Skip the stilettos - flats, boots, sandals, or block heels will keep you happy.</li>
                <li><strong className="text-white">Montana Nights:</strong> Even in August, the evenings can cool down. Bring a sweater, shawl, or jacket.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-serif text-white mb-4">What to Pack Checklist</h3>
              <ul className="list-disc list-inside space-y-2 text-white/85">
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
              <h3 className="text-2xl font-serif text-white mb-4">Getting Here</h3>
              <p className="mb-4 text-white/85"><strong className="text-white">Nearest Airport:</strong> Bozeman Yellowstone International Airport (BZN) — approx. 45 minutes by car to Livingston from the Ranch.</p>
              <p className="text-white/85"><strong className="text-white">Transportation:</strong> For the most flexibility during your trip, we recommend renting a car directly at the airport.</p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-serif text-white mb-4">Recommended Hotels</h3>
              <p className="mb-4 text-white/85">We&apos;re still finalizing group room blocks. In the meantime, here are some of our favorite local spots:</p>
              <ul className="list-disc list-inside space-y-2 text-white/85">
                <li><strong className="text-white">Home2 Suites by Hilton Livingston:</strong> Modern all-suite hotel with kitchenettes.</li>
                <li><strong className="text-white">Fairfield Inn & Suites by Marriott Livingston:</strong> Reliable, modern stay.</li>
                <li><strong className="text-white">Sage Lodge:</strong> Luxury lodge with spa services and fine dining.</li>
                <li><strong className="text-white">Under Canvas North Yellowstone (Paradise Valley):</strong> A luxury glamping experience.</li>
                <li><strong className="text-white">Local Airbnb/VRBOs & KeyMontana Homes:</strong> Great for families or groups.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-serif text-white mb-4">Local Things to Do</h3>
              <p className="mb-4 text-white/85">If you have some downtime, here are a few ways to experience the best of Montana:</p>
              <h4 className="text-xl font-serif text-white/90 mt-4 mb-2">Hikes</h4>
              <ul className="list-disc list-inside space-y-2 text-white/85">
                <li>Pine Creek Falls</li>
                <li>Lava Lake Trail</li>
                <li>Sypes Canyon Trail</li>
                <li>Drinking Horse Mountain Trail</li>
              </ul>
              <h4 className="text-xl font-serif text-white/90 mt-6 mb-2">Outdoor Adventures</h4>
              <ul className="list-disc list-inside space-y-2 text-white/85">
                <li>Fly Fishing</li>
                <li>Chico Hot Springs</li>
              </ul>
              <h4 className="text-xl font-serif text-white/90 mt-6 mb-2">Explore Bozeman</h4>
              <p className="text-white/85">Only about 35 minutes away, Bozeman offers boutiques, art galleries, coffee shops, breweries, and the Museum of the Rockies.</p>
            </section>

            <section className="mb-4">
              <h3 className="text-2xl font-serif text-white mb-4">A Note on Wildlife & Nature</h3>
              <p className="text-white/85">We&apos;ll be celebrating in nature&apos;s backyard. Please be mindful of wildlife (deer, elk, bears, moose, and more). Keep food secured, don&apos;t approach animals, and be aware of your surroundings. Also, pack bug spray!</p>
            </section>
        </div>
      </HeroHeader>
    </div>
  );
};

export default InfoPage;
