import {HTMLProps, ReactNode} from "react";

export interface TagProps extends Omit<HTMLProps<HTMLSpanElement>, 'size'> {
  className?: string
  size?: 's' | 'm' | 'l'
  children?: ReactNode
  disabled?: boolean
  transparent?: boolean
}