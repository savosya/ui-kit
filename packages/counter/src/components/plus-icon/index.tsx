import React from 'react';
import cls from './plus.module.scss'

type Props = {
  onClick?: () => void
}
export const PlusIcon = ({onClick}: Props) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls.plus} onClick={onClick}>
      <rect x="9.5" y="14.8333" width="14" height="2.33333" rx="1.16667" fill="currentColor"/>
      <rect x="17.6667" y="9" width="14" height="2.33333" rx="1.16667" transform="rotate(90 17.6667 9)" fill="currentColor"/>
    </svg>
  );
};
