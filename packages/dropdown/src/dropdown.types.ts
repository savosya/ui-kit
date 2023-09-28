import * as React from 'react'

export type DropdownActionType = 'hover' | 'focus' | 'click' | 'contextMenu'
export type DropdownPlacement = 'topLeft' | 'top' | 'topRight' | 'bottomLeft' | 'bottom' | 'bottomRight' | undefined
export type DropdownOption = { key: string; label: string; disabled?: boolean }

export interface DropdownProps {
  children: React.ReactNode
  matchMaxTriggerWidth?: boolean
  placement?: DropdownPlacement
  onOverlayClick?: (e: Event) => void
  onVisibleChange?: (visible: boolean) => void
  onSelect?: (key: string, option: DropdownOption) => void
  trigger?: DropdownActionType | DropdownActionType[]
  showAction?: DropdownActionType[]
  hideAction?: DropdownActionType[]
  options?: DropdownOption[]
  overlayStyle?: React.CSSProperties
  alignPoint?: boolean

  optionsSettings?: {
    ellipsis?: boolean
    wrap?: boolean
    divider?: boolean
  }
  withAnimation?: boolean

  classes?: {
    overlay?: string
    menu?: string
    option?: string
    open?: string // open state applies to a child element
    wrapper?: string
  }
  style?: React.CSSProperties
}
