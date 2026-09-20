'use client';

import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="mt-[8px] min-w-[50px] min-h-[50px] flex items-center justify-center select-none">
      <Image
        src="/logo.png"
        alt="POZTYFY"
        width={46}
        height={46}
        className="object-contain"
        priority
      />
    </div>
  );
};
