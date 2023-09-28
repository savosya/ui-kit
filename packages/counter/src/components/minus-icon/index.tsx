import React from 'react';
import cls from './minus.module.scss';
import clsx from 'clsx';

type Props = {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};
export const MinusIcon = ({ onClick, className, disabled }: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(cls.minus, className, { [cls.disabled]: disabled })}
      onClick={onClick}
    >
      <rect x="9" y="14.832" width="14" height="2.33333" rx="1.16667" fill="currentColor" />
    </svg>
  );
};
