import {SVGProps} from 'react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="M13.333 22.667a9.333 9.333 0 1 0 0-18.667 9.333 9.333 0 0 0 0 18.667ZM28 28l-8-8"
      stroke="#182A6A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
