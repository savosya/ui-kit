import React from 'react'
import type { DrawerProps as RCDrawerProps } from 'rc-drawer'
import clsx from 'clsx'
import { CloseIcon } from '../close-icon'
import cls from './panel.module.scss'

export interface DrawerPanelProps {
  title?: React.ReactNode
  footer?: React.ReactNode
  closable?: boolean
  closeIcon?: React.ReactNode
  onClose?: RCDrawerProps['onClose']
  background?: 'white' | 'gray'

  drawerStyle?: React.CSSProperties
  headerStyle?: React.CSSProperties
  bodyStyle?: React.CSSProperties
  footerStyle?: React.CSSProperties
  children?: React.ReactNode
  classes?: {
    root?: string
    header?: string
    title?: string
    close?: string
    body?: string
    footer?: string
  }
}

export const DrawerPanel = ({
  title,
  footer,
  background = 'white',
  closeIcon = <CloseIcon />,
  closable = true,
  onClose,
  headerStyle,
  drawerStyle,
  bodyStyle,
  footerStyle,
  children,
  classes
}: DrawerPanelProps) => {
  return (
    <div className={clsx(cls.container, classes?.root, { [cls.gray]: background === 'gray' })} style={drawerStyle}>
      {(title || closable) && (
        <div className={clsx(cls.header, classes?.header)} style={headerStyle}>
          <div className={clsx(cls.title, classes?.title)}>{title}</div>

          {closable && (
            <button type="button" onClick={onClose} aria-label="Close" className={clsx(cls.close, classes?.close)}>
              {closeIcon}
            </button>
          )}
        </div>
      )}

      <div className={clsx(cls.body, classes?.body)} style={bodyStyle}>
        {children}
      </div>

      {footer && (
        <div className={clsx(cls.footer, classes?.footer)} style={footerStyle}>
          {footer}
        </div>
      )}
    </div>
  )
}
