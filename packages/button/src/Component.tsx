import * as React from "react";
import type {HTMLProps, ReactNode} from "react"
import cls from './index.module.scss'

interface Props extends HTMLProps<HTMLButtonElement> {
  red?: boolean
  type?: "button" | "submit" | "reset" | undefined
  children: ReactNode
}

export function Button({onClick, children, red, type = 'button', ...rest}: Props) {
  return <button
    className={`${cls.button} ${cls.blue}`}
    type={type}
    style={{border: red ? '1px solid blue' : undefined}}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>;
}
