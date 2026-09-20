import React from 'react';
import Image from 'next/image';

export const LogoTextComponent = () => {
  return (
    <div className="flex items-center justify-center select-none py-2">
      <Image
        src="/logo-text.png"
        alt="POZTYFY"
        width={160}
        height={50}
        className="object-contain"
        priority
      />
    </div>
  );
};
