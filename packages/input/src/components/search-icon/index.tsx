import React from 'react';

type Props = {
  size?: number;
  className?: string;
};
// 848D98
export const SearchIcon = ({ className, size = 20 }: Props) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.225" cy="10.1" r="7.1" stroke="currentColor" strokeWidth="2.02857" />
      <path d="M15.2964 15.1714L20.875 20.75" stroke="currentColor" strokeWidth="2.02857" strokeLinecap="round" />
    </svg>
  );
};
