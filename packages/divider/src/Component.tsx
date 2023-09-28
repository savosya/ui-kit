import * as React from 'react';
import clsx from 'clsx';
import cls from './index.module.scss';
import { DividerProps } from './divider.types';

export const Divider = ({ className, noGap, height, margin, style, color }: DividerProps) => (
  <div
    className={clsx(cls.root, className, { [cls.noGap]: noGap })}
    style={{
      ...style,
      height: height ? `${height}px` : undefined,
      margin: margin ? margin : undefined,
      backgroundColor: color ? color : undefined
    }}
  />
);
