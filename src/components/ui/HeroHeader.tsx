import Image from 'next/image';
import React from 'react';

export type HeroVariant = 'image-full' | 'framed' | 'split';

interface HeroHeaderProps {
  title: string;
  subtitle?: string;
  media?: {
    type: 'image';
    src: string;
    alt: string;
    priority?: boolean;
  };
  overlay?: 'soft' | 'strong';
  height?: 'default' | 'full';
  extendBackground?: boolean; // When true, background image spans all provided children content
  children?: React.ReactNode;
  align?: 'left' | 'center';
  badge?: string; // Optional small pill above heading
  actions?: React.ReactNode;
  className?: string;
}

// Minimal Phase 0 version (will expand variants in later phases)
export const HeroHeader: React.FC<HeroHeaderProps> = ({
  title,
  subtitle,
  media,
  overlay = 'soft',
  height = 'default',
  extendBackground = false,
  children,
  align = 'left',
  badge,
  actions,
  className = ''
}) => {
  // Height presets (mobile gets a little shorter so some content below fold is hinted)
  const heightClasses = extendBackground
    ? 'min-h-screen'
    : (height === 'full' ? 'min-h-[70vh] md:min-h-screen' : 'min-h-[55vh] md:min-h-[62vh]');

  return extendBackground ? (
    <section className={`relative w-full ${heightClasses} flex flex-col items-stretch ${className}`}>      
      {media?.type === 'image' && (
        <div className={`hero-media-wrapper ${overlay === 'strong' ? 'overlay-strong' : ''} absolute inset-0`}>
          <Image 
            src={media.src} 
            alt={media.alt || ''} 
            fill 
            sizes="100vw" 
            priority={media.priority}
            className="object-cover" 
          />
        </div>
      )}
      <div className={`relative z-10 w-full ${extendBackground ? 'px-4 pt-24 md:pt-36 pb-12 md:pb-16' : 'mx-auto max-w-5xl px-4 pt-24 pb-14 md:pt-36 md:pb-24'}`}>
        <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          {badge && (
            <p className={`mb-3 rounded-full bg-[#2d2620]/50 px-4 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur-md inline-block`}>{badge}</p>
          )}
          <h1 className={`text-3xl font-serif tracking-tight text-white md:text-5xl ${align === 'center' ? 'mx-auto' : ''}`}>{title}</h1>
          {subtitle && <p className={`mt-4 text-base text-white/85 md:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
          {actions && <div className={`mt-6 flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : ''}`}>{actions}</div>}
        </div>
        {children && (
          <div className="mt-10 md:mt-14 mx-auto max-w-5xl">
            {children}
          </div>
        )}
      </div>
    </section>
  ) : (
    <header className={`relative w-full ${heightClasses} flex items-end ${className}`}>      
      {media?.type === 'image' && (
        <div className={`hero-media-wrapper ${overlay === 'strong' ? 'overlay-strong' : ''} absolute inset-0`}>
          <Image 
            src={media.src} 
            alt={media.alt || ''} 
            fill 
            sizes="100vw" 
            priority={media.priority}
            className="object-cover" 
          />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 pb-14 md:pt-36 md:pb-24 w-full">
        <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          {badge && (
            <p className={`mb-3 rounded-full bg-[#2d2620]/50 px-4 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur-md inline-block`}>{badge}</p>
          )}
          <h1 className={`text-3xl font-serif tracking-tight text-white md:text-5xl ${align === 'center' ? 'mx-auto' : ''}`}>{title}</h1>
          {subtitle && <p className={`mt-4 text-base text-white/85 md:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>}
          {actions && <div className={`mt-6 flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : ''}`}>{actions}</div>}
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
