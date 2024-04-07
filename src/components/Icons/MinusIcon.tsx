import React from 'react';

interface IMinusIcon {
  size: number;
}

export function MinusIcon({ size }: IMinusIcon) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" width={size} height={size}>
      <path
        d="M68 50.5H24c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h44c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5z"
        fill="#FD4E5D"
      />
    </svg>
  );
}
