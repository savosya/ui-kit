import * as React from 'react'
import type {HTMLProps, ReactNode} from "react"
import clsx from 'clsx'

import cls from './index.module.scss'


export interface TagProps extends Omit<HTMLProps<HTMLSpanElement>, 'size'> {
  className?: string
  size?: 's' | 'm' | 'l'
  children?: ReactNode
  disabled?: boolean
  transparent?: boolean
}

export const Tag = (props: TagProps) => {
  const {
    className,
    children,
    size = 'm',
    disabled,
    transparent,
    ...rest
  } = props

  return (
    <span
      className={clsx(
        cls.root,
        cls[size],
        {
          [cls.disabled]: disabled,
          [cls.transparent]: transparent
        },
        className
      )}
      {...rest}
    >
    {children}
  </span>
  );
}

