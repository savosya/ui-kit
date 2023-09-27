import * as React from "react";

export interface DrawerProps {
  open: boolean
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  children?: React.ReactNode
  className?: string
  width?: string | number
  placement?: 'left' | 'right'
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  blurredMask?: boolean
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
