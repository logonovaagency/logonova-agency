import React from 'react';

const LogonovaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    {...props}
  >
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#3b82f6' }} /> 
        <stop offset="100%" style={{ stopColor: '#22d3ee' }} />
      </linearGradient>
    </defs>
    <path
      d="M 50,6 A 44,44 0 0 1 50,94 A 44,44 0 0 1 50,6 M 50,14 A 36,36 0 0 1 50,86 A 36,36 0 0 1 50,14"
      fill="none"
      stroke="hsl(var(--primary) / 0.5)"
      strokeWidth="1.5"
      strokeDasharray="2, 5"
    />
    <path 
      d="M 38 25 L 38 60 C 38 70 45 75 50 75 C 58 75 65 70 65 60 L 65 50"
      fill="none"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin='round'
    />
    <path
      d="M 32 58 C 45 48, 60 68, 75 58"
      fill="none"
      stroke="url(#waveGradient)"
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);

export default LogonovaIcon;
