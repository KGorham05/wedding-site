import React from 'react';
import { Navigation } from '@/components';
import Link from 'next/link';

const RegistryPage = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F1E8' }}>
      <Navigation variant="light" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <span className="inline-block px-6 py-2 rounded-full text-xs font-medium tracking-[0.2em] uppercase mb-8" style={{ backgroundColor: '#B8C4A8', color: '#4A5240' }}>
            Gift Registry
          </span>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6" style={{ color: '#4A5240' }}>
            A Note About Gifts
          </h1>
          
          {/* Gold divider */}
          <div className="flex justify-center mb-8">
            <div className="w-0.5 h-12" style={{ backgroundColor: '#C4A962' }} />
          </div>
          
          <p className="text-lg md:text-xl mb-6" style={{ color: '#6B7A5E' }}>
            Your love and presence truly mean the most to us.
          </p>
        </div>
      </section>

      {/* Main Content - Sage Background */}
      <section className="py-20" style={{ backgroundColor: '#B8C4A8' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl p-8 md:p-12 text-center" style={{ backgroundColor: '#F5F1E8', border: '1px solid rgba(138, 154, 120, 0.2)' }}>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#6B7A5E' }}>
              We&apos;re grateful to already have a home filled with the essentials, and we&apos;ve added 
              a few special items and experiences we&apos;ve been saving for. If you&apos;d like to contribute, 
              our registry can be found below.
            </p>

            <a
              href="https://www.honeyfund.com/site/AngelaandJeff2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium text-sm tracking-[0.1em] uppercase text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#C4A962' }}
            >
              <span>View Our Honeyfund Registry</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <p className="text-base mt-10 italic" style={{ color: 'rgba(74, 82, 64, 0.7)' }}>
              Thank you for supporting the next chapter of our home and life together.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-colors"
            style={{ color: '#6B7A5E' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#B8C4A8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-2xl font-serif mb-2" style={{ color: '#4A5240' }}>Angela & Jeff</p>
          <p className="text-sm mb-4" style={{ color: 'rgba(74, 82, 64, 0.7)' }}>August 19 - 23, 2026 • Sanctuary at Crow Hollow Ranch</p>
          <p className="text-sm" style={{ color: 'rgba(74, 82, 64, 0.6)' }}>#angelaandjeff2026</p>
        </div>
      </footer>
    </div>
  );
};

export default RegistryPage;
