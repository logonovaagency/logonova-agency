import Image from 'next/image';
import React from 'react';

const LogonovaIcon = ({ className }: { className?: string }) => (
  <div className={className} style={{ position: 'relative' }}>
    <Image
      src="https://i.postimg.cc/hP0GdZZH/1770984365136.png"
      alt="Logonova Logo"
      fill
      sizes="40px" // The largest size used is h-10 (2.5rem = 40px)
      style={{objectFit: "contain"}}
    />
  </div>
);

export default LogonovaIcon;
