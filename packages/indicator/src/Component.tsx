import * as React from 'react'
import clsx from 'clsx'
import cls from './index.module.scss'

export interface IndicatorProps {
  size?: 'm' | 's' | 'l'
  number?: number | string
  className?: string
}

export const Indicator = (
  {
    size = 'm',
    number,
    className
  }: IndicatorProps) => {

  return (
    <span className={clsx(cls.root, cls[size], className, {[cls.empty]: number === undefined})}>{number}</span>
  );
}

