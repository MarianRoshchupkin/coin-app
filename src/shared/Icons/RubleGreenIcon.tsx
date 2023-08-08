import React from 'react';

interface IRubleGreenIcon {
  size: number;
}

export function RubleGreenIcon({ size }: IRubleGreenIcon) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size}>
      <path
        d="M19,4H10V15H7v2h3v3H7v2h3v6h2V22h9V20H12V17h7a6.0067,6.0067,0,0,0,6-6V10A6.0067,6.0067,0,0,0,19,4Zm4,7a4.0045,4.0045,0,0,1-4,4H12V6h7a4.0045,4.0045,0,0,1,4,4Z"
        fill="#76CA66"
      />
    </svg>
  );
}
