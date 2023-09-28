import * as React from 'react';
import RcDrawer from 'rc-drawer';

import clsx from 'clsx';

import { DrawerPanel } from './components';
import { DrawerProps } from './drawer.types';
import cls from './index.module.scss';
import './assets/drawer.css';
import motionProps from './assets/motion';
import { useState } from 'react';

export const Drawer = ({
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
      prefixCls="eub-drawer"
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
        mask: clsx(cls.mask, classes?.mask, { [cls.blur]: blurredMask }),
        wrapper: clsx(cls.wrapper, classes?.wrapper)
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
          footer: classes?.footer
        }}
      >
        {children}
      </DrawerPanel>
    </RcDrawer>
  );
};
