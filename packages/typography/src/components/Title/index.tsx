import * as React from 'react'
import type {HTMLProps} from "react"
import clsx from 'clsx'
import cls from './title.module.scss'

export interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  children?: React.ReactNode
  weight?: 'regular' | 'medium' | 'bold'
  block?: boolean
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  defaultMargins?: boolean
  className?: string;
}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((
  {
    block = true,
    tag: Component = 'h3',
    defaultMargins = false,
    className,
    children,
    weight = 'regular',
    ...rest
  }, ref) => {

  return (
    <Component
      ref={ref}
      className={clsx(cls.root, cls[Component], {
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

