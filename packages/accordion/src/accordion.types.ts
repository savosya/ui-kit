import * as React from 'react'

export interface AccordionProps {
  children?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  extra?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  disabled?: boolean
  onVisibleChange?: (visible: boolean) => void
  chevroneIcon?: React.ReactNode
  classes?: {
    root?: string
    header?: string
    title?: string
    description?: string
    extra?: string
    icon?: string
    divider?: string
    content?: string
  }
  style?: React.CSSProperties
}
