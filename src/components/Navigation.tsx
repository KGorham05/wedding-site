"use client";

import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';

interface NavigationProps {
  variant?: 'dark' | 'light' | 'overlay';
}

export const Navigation = ({ variant = 'light' }: NavigationProps) => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(o => !o), []);
  const close = useCallback(() => setOpen(false), []);

  // Close on resize to desktop to avoid stale open state
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) close();
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [close]);

  // Close on route change (Next.js app router navigation) via hashchange / popstate fallback
  useEffect(() => {
    const handler = () => close();
    window.addEventListener('hashchange', handler);
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('hashchange', handler);
      window.removeEventListener('popstate', handler);
    };
  }, [close]);

  const baseClasses = {
    dark: 'fixed top-0 left-0 right-0 bg-warm-gray-900/95 backdrop-blur-sm border-b border-warm-gray-700 z-50',
    light: 'sticky top-0 left-0 right-0 bg-cream-100/95 backdrop-blur-sm border-b border-warm-gray-300/60',
    overlay: 'fixed top-0 left-0 right-0 bg-gradient-to-b from-black/70 via-black/40 to-black/0 backdrop-blur-sm border-b border-white/10 z-50'
  }[variant];

  const panelBg = {
    dark: 'bg-warm-gray-900/95 border-warm-gray-700',
    light: 'bg-cream-100/95 border-warm-gray-300/60',
    overlay: 'bg-warm-gray-900/95 border-white/10'
  }[variant];

  const textClasses = {
    dark: 'text-white',
    light: 'text-warm-gray-900',
    overlay: 'text-white'
  }[variant];

  const linkClasses = {
    dark: 'text-white/85 hover:text-white transition-colors',
    light: 'text-warm-gray-800 hover:text-warm-gray-900 transition-colors',
    overlay: 'text-white/85 hover:text-white transition-colors'
  }[variant];

  const navLinks = (
    <>
      <Link href="/" className={linkClasses} onClick={close}>Home</Link>
      <Link href="/our-story" className={linkClasses} onClick={close}>Our Story</Link>
      <Link href="/info" className={linkClasses} onClick={close}>Info</Link>
      <Link href="/accommodations" className={linkClasses} onClick={close}>Accommodations</Link>
      <Link href="/registry" className={linkClasses} onClick={close}>Registry</Link>
      <Link href="/guest-check-in" className={linkClasses} onClick={close}>RSVP</Link>
    </>
  );

  return (
    <nav className={baseClasses} role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className={`text-2xl font-serif ${textClasses}`}>
            <Link href="/" onClick={close}>Angela & Jeff</Link>
          </div>
          {/* Desktop links */}
          <div className="hidden md:flex space-x-8" aria-label="Primary">
            {navLinks}
          </div>
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 ${textClasses} ${variant === 'light' ? 'focus:ring-warm-gray-700/50' : ''}`}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile panel */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
          aria-hidden={!open}
        >
          <div className={`border-t ${panelBg} backdrop-blur-sm rounded-b px-2 pt-2 pb-6 flex flex-col gap-2`}>
            {['/', '/our-story', '/info', '/accommodations', '/registry', '/guest-check-in'].map((href, i) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                className={`${linkClasses} px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${variant === 'light' ? 'focus:ring-warm-gray-700/40' : 'focus:ring-white/50'}`}
              >
                {['Home', 'Our Story', 'Info', 'Accommodations', 'Registry', 'RSVP'][i]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
