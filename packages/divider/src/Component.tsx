import * as React from 'react'
import type {CSSProperties} from "react";
import clsx from 'clsx'
import cls from './index.module.scss'

export interface DividerProps {
  className?: string;
  noGap?: boolean
  height?: number
  margin?: CSSProperties['margin']
  style?: CSSProperties
  color?: CSSProperties['color']
}

export const Divider: React.FC<DividerProps> = (
  {
    className,
    noGap,
    height,
    margin,
    style,
    color
  }) => (
  <div
    className={clsx(cls.root, className, {[cls.noGap]: noGap})}
    style={{
      ...style,
      height: height ? `${height}px` : undefined,
      margin: margin ? margin : undefined,
      color: color ? color : undefined,
    }}
  />
);

