import React from 'react';
import { Navigation, HeroHeader } from '@/components';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navigation variant="overlay" />
      <HeroHeader
        title="Contact Us"
        subtitle="We're so excited to celebrate with you!"
        media={{ type: 'image', src: '/lake-4888504.jpg', alt: 'Montana lake scene', priority: true }}
        overlay="strong"
        extendBackground
        align="center"
      >
        <div className="surface-glass-1 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/10 max-w-2xl mx-auto text-center">
          <p className="text-white/90 text-lg mb-8">
            If you have any questions leading up to the weekend, feel free to reach out.
          </p>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-8">
            <h2 className="text-2xl font-serif text-white mb-4">Angela</h2>
            <div className="space-y-3">
              <a
                href="tel:760-415-0899"
                className="flex items-center justify-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg">760-415-0899</span>
              </a>
              <a
                href="mailto:apinamonti@yahoo.com"
                className="flex items-center justify-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">apinamonti@yahoo.com</span>
              </a>
            </div>
          </div>

          {/* Cell Service Warning */}
          <div className="bg-amber-500/20 rounded-xl p-6 border border-amber-400/30">
            <div className="flex items-start justify-center gap-3">
              <svg className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="text-left">
                <p className="text-amber-200 font-semibold mb-1">Limited Cell Service</p>
                <p className="text-white/80 text-sm">
                  Please note that cell service is limited at the ranch. We recommend downloading offline maps and letting loved ones know ahead of time. Plan accordingly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroHeader>
    </div>
  );
};

export default ContactPage;
