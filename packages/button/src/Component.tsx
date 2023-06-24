import * as React from "react";
import type {HTMLProps, ReactNode} from "react"

interface Props extends HTMLProps<HTMLButtonElement> {
  red?: boolean
  type?: "button" | "submit" | "reset" | undefined
  children: ReactNode
}

export function Button({onClick, children, red, type = 'button', ...rest}: Props) {
  return <button
    type={type}
    style={{border: red ? '1px solid red' : undefined}}
    onClick={onClick} {...rest}
  >
    {children}
  </button>;
}
