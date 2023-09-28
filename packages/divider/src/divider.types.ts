import { CSSProperties } from 'react'
export interface DividerProps {
  className?: string
  noGap?: boolean
  height?: number
  margin?: CSSProperties['margin']
  style?: CSSProperties
  color?: CSSProperties['color']
}
