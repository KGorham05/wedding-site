import Link from 'next/link';

interface NavigationProps {
  variant?: 'dark' | 'light' | 'overlay';
}

export const Navigation = ({ variant = 'light' }: NavigationProps) => {
  const baseClasses = {
    dark: 'fixed top-0 left-0 right-0 bg-warm-gray-900/95 backdrop-blur-sm border-b border-warm-gray-700 z-50',
    light: 'sticky top-0 left-0 right-0 bg-cream-100/95 backdrop-blur-sm border-b border-warm-gray-300/60',
    overlay: 'fixed top-0 left-0 right-0 bg-gradient-to-b from-black/70 via-black/40 to-black/0 backdrop-blur-sm border-b border-white/10 z-50'
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

  return (
    <nav className={baseClasses}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className={`text-2xl font-serif ${textClasses}`}>
            <Link href="/">Angela & Jeff</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={linkClasses}>
              Home
            </Link>
            <Link href="/our-story" className={linkClasses}>
              Our Story
            </Link>
            <Link href="/info" className={linkClasses}>
              Info
            </Link>
            <Link href="/guest-check-in" className={linkClasses}>
              RSVP
            </Link>
          </div>
          {/* Mobile menu button */}
          <button className={`md:hidden ${textClasses}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
