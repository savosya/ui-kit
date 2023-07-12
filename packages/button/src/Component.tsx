import * as React from "react"
import type {HTMLProps, ReactNode} from "react"
import clsx from 'clsx'

import Loader from '@savosya/savosya-myuikit-loader'
import cls from './index.module.scss'

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'type' | 'size'> {
  className?: string
  loading?: boolean
  size?: 's' | 'm' | 'l'
  mode?: 'dark' | 'light'
  type?: 'primary' | 'ghost' | 'outline' | 'link'
  fill?: boolean
  htmlType?: 'button' | 'submit' | 'reset' | undefined
  children?: ReactNode
  loaderSize?: number
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const loaderSizeConfig = {
  s: 15,
  m: 17,
  l: 19,
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const {
    loading,
    children,
    size = 'm',
    mode = 'dark',
    type = 'primary',
    htmlType = 'button',
    fill = false,
    loaderSize,
    leftIcon,
    rightIcon,
    className,
    href,
    onClick,
    ...rest
  } = props

  const isOnlyIcon = !children

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> &
      React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (rest.disabled || loading) {
      e.preventDefault();
      e.stopPropagation();

      return;
    }
    onClick?.(e);
  };

  return (
    <button
      ref={ref}
      type={htmlType}
      className={clsx(
        cls.root,
        cls[type],
        cls[mode],
        cls[size],
        {
          [cls.fill]: fill,
          [cls.loading]: loading,
          [cls.onlyIcon]: isOnlyIcon
        },
        className
      )}
      onClick={handleClick}
      {...rest}
    >
      {loading && <Loader fill={false} size={loaderSize ?? loaderSizeConfig[size]}/>}
      {!loading && leftIcon || null}
      {children}
      {rightIcon}
    </button>
  );
})
