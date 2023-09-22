import * as React from "react";
import {HTMLProps} from "react";

export interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  children?: React.ReactNode
  weight?: 'regular' | 'medium' | 'bold'
  block?: boolean
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  defaultMargins?: boolean
  className?: string;
}
