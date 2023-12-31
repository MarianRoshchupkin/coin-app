import React from 'react';

interface ICheckIcon {
  size: number;
}

export function CheckIcon({ size }: ICheckIcon) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
      <g clipPath="url(#clip0_1_1137)">
        <path
          d="M8.99997 16.1698L4.82997 11.9998L3.40997 13.4098L8.99997 18.9998L21 6.99984L19.59 5.58984L8.99997 16.1698Z"
          fill="#182233"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1137">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
