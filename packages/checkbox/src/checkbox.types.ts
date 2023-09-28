import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

type NativeProps = InputHTMLAttributes<HTMLInputElement>
export interface CheckboxProps extends Omit<NativeProps, 'size' | 'onChange'> {
  className?: string
  label?: ReactNode
  // hint?: ReactNode
  size?: 's' | 'm' | 'l'
  checked?: boolean
  indeterminate?: boolean
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    payload: {
      checked: boolean
      name?: string
    }
  ) => void

  classes?: {
    root?: string
    input?: string
    content?: string
  }
}
