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
  actions?: React.ReactNode;
  className?: string;
}

// Minimal Phase 0 version (will expand variants in later phases)
export const HeroHeader: React.FC<HeroHeaderProps> = ({
  title,
  subtitle,
  media,
  overlay = 'soft',
  actions,
  className = ''
}) => {
  return (
    <header className={`relative w-full ${className}`}>      
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
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="max-w-3xl">
          <p className="mb-3 inline-block rounded-full bg-black/40 px-4 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur-md">Wedding Adventure</p>
          <h1 className="text-3xl font-serif tracking-tight text-white md:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 text-base text-white/85 md:text-lg">{subtitle}</p>}
          {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
