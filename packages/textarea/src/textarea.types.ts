import { HTMLProps, ReactNode } from 'react'

export interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
  className?: string
  label?: string
  error?: boolean
  errorMsg?: ReactNode
  hint?: ReactNode
  disabled?: boolean
  resizable?: 'both' | 'vertical' | 'horizontal'
  classes?: {
    wrapper?: string
    root?: string
    textarea?: string
    label?: string
    extra?: string
    hint?: string
    errorMsg?: string
  }
}
