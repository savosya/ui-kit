import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

type NativeProps = InputHTMLAttributes<HTMLInputElement>

export interface RadioProps extends Omit<NativeProps, 'size' | 'onChange' | 'type'> {
  className?: string
  label?: ReactNode
  hint?: ReactNode
  size?: 's' | 'm' | 'l'
  checked?: boolean
  markType?: 'default' | 'check'
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
