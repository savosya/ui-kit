import * as React from "react";
import {HTMLProps} from "react";

export type TextElementType = HTMLParagraphElement | HTMLSpanElement | HTMLDivElement;
export interface TextProps extends HTMLProps<TextElementType> {
  children?: React.ReactNode
  weight?: 'regular' | 'medium' | 'bold'
  block?: boolean
  tag?: 'div' | 'span' | 'p'
  defaultMargins?: boolean
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
}
