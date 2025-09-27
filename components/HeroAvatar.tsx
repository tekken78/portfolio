// components/HeroAvatar.tsx
'use client';

import Image from 'next/image';

interface HeroAvatarProps {
  size?: number;
  className?: string;
}

export default function HeroAvatar({ size = 180, className = '' }: HeroAvatarProps) {
  return (
    <Image
      src="/profile.jpg"
      alt="Sahil Kumar"
      width={size}
      height={size}
      className={className}
    />
  );
}
