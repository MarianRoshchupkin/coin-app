import React from 'react';

interface ICheckCircleIcon {
  size: number;
}

export function CheckCircleIcon({ size }: ICheckCircleIcon) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
      <path
        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
        fill="#76CA66"
      />
      <path
        d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
        fill="white"
      />
    </svg>
  );
}
