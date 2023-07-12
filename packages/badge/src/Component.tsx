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
  className?: string
  classes?: {
    root?: string
    number?: string
    text?: string
  }
}


export function Badge(props: BadgeProps) {
  const {color, type = '', size = 'm', number, children, classes = {}, className, ...rest} = props;

  return (
    <div
      className={clsx(
        cls.root,
        type && cls[type],
        cls[size],
        className,
        classes.root
      )}
      {...rest}
      style={{backgroundColor: color, ...rest?.style }}
    >
      {number && <span className={clsx(cls.number, cls[size], classes.number)}>{number}</span>}

      <span className={classes.text}>{children}</span>
    </div>
  );
}

