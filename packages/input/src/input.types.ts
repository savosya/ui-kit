import * as React from "react";
import {HTMLProps, ReactNode} from "react";
import {TooltipProps} from "@savosya/savosya-myuikit-tooltip";

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  type?: 'text' | 'password' | 'search'
  label?: string
  hint?: ReactNode
  errorMsg?: ReactNode
  error?: boolean
  className?: string
  passedRef?: any
  block?: boolean
  // size?: 's' | 'm'
  addonsLeft?: ReactNode
  addonsRight?: ReactNode
  showTooltip?: boolean
  tooltipIcon?: ReactNode
  tooltipProps?: TooltipProps
  cleanable?: boolean
  cleanIcon?: ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClean?: () => void
  classes?: {
    root?: string
    input_root?: string
    label?: string
    input?: string
    extra?: string
    hint?: string
    error?: string
    addons_left?: string
    addons_right?: string
    cleanIcon?: string
  }
}
