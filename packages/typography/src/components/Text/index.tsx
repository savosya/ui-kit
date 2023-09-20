import * as React from 'react'
import type {HTMLProps} from "react"
import clsx from 'clsx'
import cls from './text.module.scss'

export type TextElementType = HTMLParagraphElement | HTMLSpanElement | HTMLDivElement;
export interface TextProps extends HTMLProps<TextElementType> {
  children?: React.ReactNode
  weight?: 'regular' | 'medium' | 'bold'
  block?: boolean
  tag?: 'div' | 'span' | 'p'
  defaultMargins?: boolean
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
}

export const Text = React.forwardRef<TextElementType, TextProps>((
  {
    block = false,
    tag: Component = 'div',
    defaultMargins = false,
    className,
    children,
    weight = 'regular',
    level = 4,
    ...rest
  }, ref) => {

  return (
    <Component
      ref={ref as any}
      className={clsx(cls.root, cls[`l${level}`], {
        [cls.shrink]: !defaultMargins,
        [cls.block]: block,
        [cls.medium]: weight === 'medium',
        [cls.bold]: weight === 'bold',
      }, className)}
      {...rest}
    >
      {children}
    </Component>
  );
})

