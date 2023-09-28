import * as React from 'react'
import clsx from 'clsx'

import TitleProps from './title.types'
import cls from './title.module.scss'

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ block = true, tag: Component = 'h3', defaultMargins = false, className, children, weight = 'regular', ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          cls.root,
          cls[Component],
          {
            [cls.shrink]: !defaultMargins,
            [cls.block]: block,
            [cls.medium]: weight === 'medium',
            [cls.bold]: weight === 'bold'
          },
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)
