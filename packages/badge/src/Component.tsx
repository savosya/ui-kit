import * as React from 'react'
import type {HTMLProps, ReactNode} from 'react'
import clsx from 'clsx'
import cls from './index.module.scss'

export interface BadgeProps extends Omit<HTMLProps<HTMLDivElement>, "size">{
  type?: 'primary' | 'error' | 'success' | 'warn'
  color?: string
  size?: 'm' | 's'
  number?: number | string
  children?: ReactNode
  classes?: {
    root?: string
    number?: string
    text?: string
  }
}


export function Badge(props: BadgeProps) {
  const {color, type = '', size = 'm', number, children, classes = {}, ...rest} = props;

  console.log(clsx(
    cls.badge,
    type && cls[type],
    cls[size],
    classes.root
  ))

  return (
    <div
      className={clsx(
        cls.badge,
        type && cls[type],
        cls[size],
        classes.root
      )}
      {...rest}
      style={{backgroundColor: color, ...rest?.style }}
    >
      {number && <span className={clsx(cls.number, classes.number)}>{number}</span>}

      <span className={classes.text}>{children}</span>
    </div>
  );
}

