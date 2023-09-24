import * as React from 'react'
import clsx from 'clsx'

import {TextElementType} from "./text.types";
import TextProps from './text.types'
import cls from './text.module.scss'

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

