import Link from "next/link";
import { Navigation, HeroHeader } from '@/components';

export default function OurStory() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation />
      <HeroHeader
        title="Our Story"
        subtitle="A journey from late-night shifts to a Montana celebration under the Big Sky."
        media={{ type: 'image', src: '/montana-river.jpg', alt: 'Angela and Jeff in Montana', priority: true }}
        overlay="soft"
      />
      <main className="flex-1 -mt-10 md:-mt-16 relative z-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="surface-glass-1 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/10">
            <div className="space-y-8 text-base md:text-lg text-white/90 leading-relaxed">
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
                className="btn-glass text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 focus-ring"
              >
                Join Our Adventure →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
