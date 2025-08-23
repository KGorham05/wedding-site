import Link from 'next/link';

interface NavigationProps {
  transparent?: boolean;
  dark?: boolean;
}

export const Navigation = ({ transparent = false, dark = false }: NavigationProps) => {
  const baseClasses = dark
    ? "fixed top-0 left-0 right-0 bg-warm-gray-900/95 backdrop-blur-sm border-b border-warm-gray-700 z-50"
    : transparent 
    ? "fixed top-0 left-0 right-0 bg-cream-100/95 backdrop-blur-sm border-b border-white/30 z-50"
    : "bg-cream-100/95 backdrop-blur-sm border-b border-white/20 sticky top-0";

  const textClasses = dark
    ? "text-white"
    : transparent
    ? "text-white"
    : "text-white";

  const linkClasses = dark
    ? "text-white/90 hover:text-white transition-colors"
    : transparent
    ? "text-white/90 hover:text-white transition-colors"
    : "text-white/90 hover:text-white transition-colors";

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
