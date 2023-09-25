import type {HTMLProps, ReactNode} from "react";

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'type' | 'size'> {
  className?: string
  loading?: boolean
  size?: 's' | 'm' | 'l'
  mode?: 'dark' | 'light'
  type?: 'primary' | 'ghost' | 'outline' | 'link'
  fill?: boolean
  htmlType?: 'button' | 'submit' | 'reset' | undefined
  children?: ReactNode
  loaderSize?: number
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  classes?: {
    root?: string
    loader?: string
  }
}