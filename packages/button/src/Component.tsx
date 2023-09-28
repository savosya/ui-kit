import * as React from 'react';
import { useRef } from 'react';
import clsx from 'clsx';

import { useFocus } from '@savosya/savosya-myuikit-hooks';
import { mergeRefs } from '@savosya/savosya-myuikit-utils';
import { Loader } from '@savosya/savosya-myuikit-loader';
import cls from './index.module.scss';
import { ButtonProps } from './button.types';

const loaderSizeConfig = {
  s: 15,
  m: 17,
  l: 19
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
    classes = {},
    ...rest
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [focus] = useFocus(buttonRef, 'keyboard');

  const isOnlyIcon = !children;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> & React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (rest.disabled || loading) {
      e.preventDefault();
      e.stopPropagation();

      return;
    }
    onClick?.(e);
  };

  return (
    <button
      ref={mergeRefs([ref, buttonRef])}
      type={htmlType}
      className={clsx(
        cls.root,
        cls[type],
        cls[mode],
        cls[size],
        {
          [cls.focus]: focus,
          [cls.fill]: fill,
          [cls.loading]: loading,
          [cls.onlyIcon]: isOnlyIcon
        },
        className,
        classes?.root
      )}
      onClick={handleClick}
      {...rest}
    >
      {loading && <Loader fill={false} size={loaderSize ?? loaderSizeConfig[size]} className={classes?.loader} />}
      {(!loading && leftIcon) || null}
      {children}
      {rightIcon}
    </button>
  );
});
