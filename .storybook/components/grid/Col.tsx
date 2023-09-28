import React, { ReactNode } from 'react'
import cn from 'clsx'

import styles from './Col.module.scss'

type ColProps = {
  children?: ReactNode
  className?: string
  span?: number
}

export const Col: React.FC<ColProps> = ({ children, className, span = 12 }) => (
  <div className={cn(className, styles.col, styles[`span-${span}`])}>{children}</div>
)
