import * as React from 'react'
import RcDialog from 'rc-dialog'

import clsx from 'clsx'

import { CloseIcon } from './components'
import { ModalProps } from './modal.types'
import cls from './index.module.scss'
import './assets/modal.css'

export const Modal = ({
  children,
  open,
  onClose,

  title,
  footer,
  closable = true,
  backdrop = true,
  closeOnBackdrop = true,
  closeOnEsc = false,
  position,
  afterClose,
  getContainer,
  destroyOnClose = true,
  closeIcon,
  forceRender = false,
  className,
  classes = {},
  style,
  bodyStyle,
  width
}: ModalProps) => {
  return (
    <RcDialog
      /** static props */
      prefixCls="eub-modal"
      animation="fade"
      maskAnimation="fade"
      /** dynamic props */
      visible={open}
      onClose={onClose}
      closeIcon={closeIcon ? closeIcon : <CloseIcon />}
      title={title}
      footer={footer}
      closable={closable}
      mask={backdrop}
      maskClosable={closeOnBackdrop}
      keyboard={closeOnEsc}
      afterClose={afterClose}
      getContainer={getContainer}
      destroyOnClose={destroyOnClose}
      forceRender={forceRender}
      /** classes */
      // rootClassName={classes?.root}
      className={clsx(cls.root, className, { [cls.topAdjuster]: position === undefined })}
      classNames={{
        wrapper: clsx(cls.wrapper, classes?.wrapper, {
          [cls.top]: position === 'top',
          [cls.center]: position === 'center',
          [cls.bottom]: position === 'bottom'
        }),
        mask: clsx(cls.backdrop, classes?.backdrop),
        header: clsx(cls.header, classes?.header, { [cls.closePadding]: closable }),
        body: clsx(cls.body, classes?.body, { [cls.closePadding]: !title }),
        footer: clsx(cls.footer, classes?.footer)
      }}
      style={{ ...style, width: width }}
      bodyStyle={{ ...bodyStyle }}
    >
      {children}
    </RcDialog>
  )
}
