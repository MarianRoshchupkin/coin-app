import React from 'react';

interface IArrowDownIcon {
  size: number;
}

export function ArrowDownIcon({ size }: IArrowDownIcon) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 22" width={size} height={size}>
      <path
        d="M7.9519 8.5L12.9519 13.5L17.9519 8.5L7.9519 8.5Z"
        fill="#182233"
      />
    </svg>
  );
}
