import React from 'react';

interface IErrorIcon {
  size: number;
}

export function ErrorIcon({ size }: IErrorIcon) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={size} height={size}>
      <path
        d="M8 6.303l-.951-.952A1.2 1.2 0 005.35 7.05l.953.95-.952.951A1.2 1.2 0 107.05 10.65L8 9.697l.951.952A1.2 1.2 0 1010.65 8.95L9.697 8l.952-.951A1.2 1.2 0 108.95 5.35L8 6.303zM16 8A8 8 0 110 8a8 8 0 0116 0z"
        fill="#E01F19"
      />
    </svg>
  );
}
