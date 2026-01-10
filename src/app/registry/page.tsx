import React from 'react';
import { Navigation, HeroHeader } from '@/components';

const RegistryPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation variant="overlay" />
      <HeroHeader
        title="Gift Registry"
        subtitle="Your love and presence truly mean the most to us."
        media={{ type: 'image', src: '/lake-4888504.jpg', alt: 'Montana lake scene', priority: true }}
        overlay="strong"
        extendBackground
        align="center"
      >
        <div className="surface-glass-1 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-white mb-6">A Note About Gifts</h2>
          
          <p className="text-white/85 text-lg leading-relaxed mb-8">
            We&apos;re grateful to already have a home filled with the essentials, and we&apos;ve added 
            a few special items and experiences we&apos;ve been saving for. If you&apos;d like to contribute, 
            our registry can be found below.
          </p>

          <a
            href="https://www.honeyfund.com/site/AngelaandJeff2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl border border-white/30 transition-all duration-200 text-lg"
          >
            <span>View Our Honeyfund Registry</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <p className="text-white/70 text-base mt-10 italic">
            Thank you for supporting the next chapter of our home and life together.
          </p>
        </div>
      </HeroHeader>
    </div>
  );
};

export default RegistryPage;
