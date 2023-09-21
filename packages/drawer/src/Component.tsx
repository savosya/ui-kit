import * as React from 'react'
import RcDrawer from 'rc-drawer'

import clsx from 'clsx'

import cls from './index.module.scss'
import {DrawerPanel} from "./components/drawer-panel";
import './assets/drawer.scss'
import motionProps from './assets/motion';


export interface DrawerProps {
  children?: React.ReactNode
  className?: string
  width?: string | number
  open?: boolean
  placement?: 'left' | 'right'
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  blurredMask?: boolean
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
  classes?: {
    mask?: string
    wrapper?: string
    root?: string
    header?: string
    title?: string
    close?: string
    body?: string
    footer?: string
  }

  /** Panel Props */
  title?: React.ReactNode;
  footer?: React.ReactNode;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  background?: 'white' | 'gray'
  drawerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
}

export const Drawer = (
  {
    children,
    className,
    classes,
    width,
    open,
    placement = 'left',
    closeOnBackdrop = true,
    blurredMask,
    onClose,
    closeOnEsc = true,
    onMouseEnter,
    onMouseOver,
    onMouseLeave,
    onClick,
    onKeyDown,
    onKeyUp,
    ...panelProps
  }: DrawerProps) => {

  return (
    <RcDrawer
      prefixCls='eub-drawer'

      width={width}
      open={open}
      placement={placement}
      maskClosable={closeOnBackdrop}
      keyboard={closeOnEsc}

      /** handlers */
      onClose={onClose}
      onMouseEnter={onMouseEnter}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}

      /** styles */
      className={clsx(cls.root, className)}
      classNames={{
        mask: clsx(cls.mask, classes?.mask, {[cls.blur]: blurredMask}),
        wrapper: clsx(cls.wrapper, classes?.wrapper),
      }}
      {...motionProps}
    >
      <DrawerPanel
        {...panelProps}
        onClose={onClose}
        classes={{
          root: classes?.root,
          header: classes?.header,
          title: classes?.title,
          close: classes?.close,
          body: classes?.body,
          footer: classes?.footer,
        }}
      >
        {children}
      </DrawerPanel>
    </RcDrawer>
  );
}

