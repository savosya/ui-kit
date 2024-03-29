import React, { ReactNode } from 'react'
import cn from 'clsx'

import styles from './Row.module.scss'

type RowProps = {
  children?: ReactNode
  className?: string
  align?: 'top' | 'middle' | 'bottom'
  flex?: boolean
}

export const Row: React.FC<RowProps> = ({ align, flex, className, children, ...restProps }) => (
  <div
    className={cn(styles.row, className, align && styles[align], {
      [styles.flex]: flex
    })}
    {...restProps}
  >
    {children}
  </div>
)
