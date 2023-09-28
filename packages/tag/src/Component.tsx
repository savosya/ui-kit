import * as React from 'react'
import clsx from 'clsx'

import { TagProps } from './tag.types'
import cls from './index.module.scss'

export const Tag = (props: TagProps) => {
  const { className, children, size = 'm', disabled, transparent, ...rest } = props

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
  )
}
