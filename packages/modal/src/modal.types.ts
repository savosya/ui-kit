import * as React from "react";

export interface ModalProps {
  children?: React.ReactNode
  open?: boolean
  onClose?: () => void
  title?: string | React.ReactNode
  footer?: string | React.ReactNode
  closable?: boolean
  position?: 'center' | 'bottom' | 'top'
  backdrop?: boolean
  closeOnBackdrop?: boolean
  closeOnEsc?: boolean
  afterClose?: () => void
  getContainer?: () => HTMLElement
  destroyOnClose?: boolean
  closeIcon?: React.ReactNode
  forceRender?: boolean
  className?: string
  classes?: { backdrop?: string; wrapper?: string; header?: string; body?: string; footer?: string }
  style?: React.CSSProperties
  bodyStyle?: React.CSSProperties
  width?: React.CSSProperties['width']
  backgroundColor?: string
}
