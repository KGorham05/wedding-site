import Link from "next/link";
import Image from "next/image";
import { Navigation } from '@/components';

export default function OurStory() {
  return (
    <div className="bg-cream-100">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src="/montana-river.jpg" // Replace with a high-quality photo of the couple
          alt="Angela and Jeff in Montana"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* 20% Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/25"></div>
      </div>
      
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />
        <main className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-cream-100/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-serif text-sage-700 mb-6">Our Story</h1>
              </div>

              <div className="space-y-8 text-lg text-warm-gray-800 leading-relaxed">
                <p>
                  Our story began at the Sheraton in Carlsbad too long ago to count, where we worked side by side for years. First came friendship, long shifts, late-night laughs, and teamwork that slowly turned into something more. Jeff says he first fell for my smile… but let’s be honest, it was my booty. His words, not mine!
                </p>
                <p>
                  Some of our earliest “dates” weren’t really dates at all. They were just two friends closing out the night with happy-hour beers, Snake Bites, and pizookies at BJ’s after work. Somewhere between the laughter, the cookies, and those late-night talks, we realized we had stumbled into something special.
                </p>
                <p>
                  Fast forward over a decade later and SURPRISE! In March 2025, we finally made it official on paper. But one piece was still missing — the celebration. Not just any celebration, but one surrounded by mountains, fresh air, and the people we love most.
                </p>
                <p>
                  Montana has become our sanctuary. It is where we recharge, laugh, and fall in love with life all over again. Its peace, pace, and beauty won us over, and it feels only right to share that magic with the people who mean the most to us.
                </p>
                <p>
                  So here we are, inviting you to join us under the Big Sky in 2026. Not just to celebrate our marriage, but to share this special moment with all of you. We cannot wait for the adventures, the laughter, the dancing, and the memories we will make together.
                </p>
              </div>
              
              <div className="text-center mt-12">
                <Link 
                  href="/guest-check-in" 
                  className="inline-block bg-sage-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-sage-700 transition-colors shadow-lg"
                >
                  Join Our Adventure
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
