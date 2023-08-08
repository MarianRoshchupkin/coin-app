import React from 'react';

interface IPlusGreenIcon {
  size: number;
}

export function PlusGreenIcon({ size }: IPlusGreenIcon) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
      <path
        d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12"
        stroke="#76CA66"
        strokeWidth="2"
      />
    </svg>
  );
}
