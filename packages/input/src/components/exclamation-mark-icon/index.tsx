import React from 'react';

type Props = {
  className?: string;
  error?: boolean;
};

const DEFAULT_COLOR = '#848D98';
const ERROR_COLOR = '#D44040';

export const ExclamationMarkIcon = ({ className, error }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="10" fill={error ? ERROR_COLOR : DEFAULT_COLOR} />
      <path d="M12 17.375L12 11.125" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 6.875L12 6.76389" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};
