import React from 'react';

interface IArrowDownRedIcon {
  size: number;
}

export function ArrowDownRedIcon({ size }: IArrowDownRedIcon) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width={size} height={size}>
      <path
        d="M0 0L10 10L20 0H0Z"
        fill="#FD4E5D"
      />
    </svg>
  );
}
