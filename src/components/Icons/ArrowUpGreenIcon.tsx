import React from 'react';

interface IArrowUpGreenIcon {
  size: number;
}

export function ArrowUpGreenIcon({ size }: IArrowUpGreenIcon) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width={size} height={size}>
      <path
        d="M20 10L10 0L0 10L20 10Z"
        fill="#76CA66"
      />
    </svg>
  );
}
