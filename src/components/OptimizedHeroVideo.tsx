'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
// Removed placeholder Image fallback per design update

interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: string;
  };
}

interface OptimizedHeroVideoProps {
  children: React.ReactNode;
}

export default function OptimizedHeroVideo({ children }: OptimizedHeroVideoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [userPreference, setUserPreference] = useState<'auto' | 'reduced'>('auto');
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if user is on mobile or slow connection
    const isMobileDevice = window.matchMedia('(max-width: 768px)').matches;
    const connection = (navigator as NavigatorWithConnection).connection;
    const isSlowConnection = connection?.effectiveType === '2g' || 
                            connection?.effectiveType === 'slow-2g';
    
    setIsMobile(isMobileDevice);
    
    // Auto-disable video for accessibility or performance reasons
    if (prefersReducedMotion || isSlowConnection) {
      setUserPreference('reduced');
      return;
    }

    // On mobile, wait for user interaction or show after delay
    if (isMobileDevice) {
      const timer = setTimeout(() => setShowVideo(true), 2000);
      return () => clearTimeout(timer);
    } else {
      // On desktop, load video immediately
      setShowVideo(true);
    }
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const enableVideo = () => {
    setUserPreference('auto');
    setShowVideo(true);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#201a16]">
      {/* Background Layer: static image for md+ (desktop/tablet) and gradient overlay; mobile stays gradient only since it uses separate static hero on home */}
      <div className="absolute inset-0 z-0">
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/glacier-national-park-7443329.jpg"
            alt="Montana mountain landscape backdrop"
            fill
            priority
            sizes="(min-width: 768px) 100vw"
            className={`object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-warm-gray-900/50 via-warm-gray-900/45 to-warm-gray-900/60" />
      </div>

      {/* Video Layer - Temporarily disabled due to source unavailability */}
      {/* Note: Original Vimeo video (903803526) no longer exists - need new video source */}
      {showVideo && userPreference === 'auto' && false && (
        <div className="absolute inset-0 z-[1]">
          <iframe
            ref={videoRef}
            src="https://player.vimeo.com/video/903803526?autoplay=1&loop=1&background=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1"
            className={`absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
              isMobile ? 'scale-110' : 'scale-105'
            } ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            allow="autoplay; fullscreen"
            onLoad={handleVideoLoad}
            style={{ border: 'none' }}
          />
          {/* Video overlay */}
          <div className="absolute inset-0 bg-[#2d2620]/50"></div>
        </div>
      )}

      {/* Mobile Video Enable Button - Hidden while video source unavailable */}
      {isMobile && !showVideo && userPreference === 'auto' && false && (
        <button
          onClick={enableVideo}
          className="absolute top-4 right-4 z-20 bg-[#2d2620]/60 text-white px-3 py-2 rounded-lg text-sm hover:bg-[#2d2620]/80 transition-colors"
        >
          ▶ Enable Video
        </button>
      )}

      {/* Reduced Motion Alternative - Hidden while video source unavailable */}
      {userPreference === 'reduced' && false && (
        <button
          onClick={enableVideo}
          className="absolute bottom-4 right-4 z-20 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors"
        >
          Enable Background Video
        </button>
      )}

      {/* Hero Content - Always visible */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
