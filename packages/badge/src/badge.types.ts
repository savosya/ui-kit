import {HTMLProps, ReactNode} from "react";

export interface BadgeProps extends Omit<HTMLProps<HTMLDivElement>, "size"> {
  type?: 'primary' | 'error' | 'success' | 'warn'
  color?: string
  size?: 'm' | 's'
  number?: number | string
  children?: ReactNode
  className?: string
  classes?: {
    root?: string
    number?: string
    text?: string
  }
}
