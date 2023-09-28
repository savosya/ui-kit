import type { HTMLProps, ReactNode } from 'react'

export type TextElementType = HTMLParagraphElement | HTMLSpanElement | HTMLDivElement
interface TextProps extends HTMLProps<TextElementType> {
  children?: ReactNode
  weight?: 'regular' | 'medium' | 'bold'
  block?: boolean
  tag?: 'div' | 'span' | 'p'
  defaultMargins?: boolean
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
}

export default TextProps
