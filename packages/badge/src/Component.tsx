import * as React from 'react'
import clsx from 'clsx'
import { Indicator } from '@savosya/savosya-myuikit-indicator'
import { BadgeProps } from './badge.types'
import cls from './index.module.scss'

export function Badge({
  color,
  type = 'primary',
  size = 'm',
  number,
  children,
  classes = {},
  className,
  ...rest
}: BadgeProps) {
  return (
    <div
      className={clsx(cls.root, type && cls[type], cls[size], className, classes.root)}
      {...rest}
      style={{ backgroundColor: color, ...rest?.style }}
    >
      {number && <Indicator size={size} number={number} className={classes?.number} />}

      <span className={classes.text}>{children}</span>
    </div>
  )
}
