import * as React from 'react'
import type {HTMLProps} from "react"
import clsx from 'clsx'
import cls from './index.module.scss'

export interface LoaderProps extends HTMLProps<SVGSVGElement> {
  className?: string
  size?: number
  color?: string
  fill?: boolean
  classes?: {
    wrapper?: string
    loader?: string
  }
}

export const Loader = (props: LoaderProps) => {
  const {size = 24, color = 'currentColor', className, fill = true, classes = {}, ...rest} = props

  const loader = React.useMemo(() => <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(cls.root, classes?.loader)}
    style={{width: size, height: size}}
    {...rest}
  >
    <path
      d="M10.4335 3.30948C10.3373 2.6429 10.8006 2.01668 11.4739 2.00228C13.032 1.96897 14.5824 2.3003 15.9988 2.97703C17.7833 3.82969 19.275 5.19239 20.2851 6.8928C21.2952 8.59322 21.7784 10.555 21.6736 12.53C21.5688 14.5051 20.8806 16.4046 19.6962 17.9886C18.5118 19.5725 16.8842 20.7697 15.0194 21.4286C13.1546 22.0876 11.1363 22.1788 9.21965 21.6907C7.30302 21.2026 5.57417 20.157 4.25173 18.6864C3.20216 17.5191 2.446 16.1257 2.03742 14.6217C1.86085 13.9718 2.33054 13.3504 2.99711 13.2542C3.66368 13.158 4.27259 13.6252 4.47458 14.2677C4.79777 15.2957 5.33848 16.2474 6.06526 17.0556C7.06517 18.1676 8.37237 18.9582 9.82156 19.3272C11.2708 19.6963 12.7968 19.6274 14.2068 19.1291C15.6168 18.6309 16.8474 17.7257 17.743 16.528C18.6386 15.3304 19.1589 13.8941 19.2381 12.4008C19.3174 10.9074 18.952 9.4241 18.1883 8.13839C17.4245 6.85268 16.2967 5.82233 14.9473 5.17762C13.9666 4.70902 12.9008 4.45945 11.8234 4.4401C11.15 4.428 10.5297 3.97605 10.4335 3.30948Z"
      fill={color}/>
  </svg>, [props])

  if(fill) {
    return (
      <div className={clsx(cls.wrapper, className, classes?.wrapper)}>
        {loader}
      </div>
    )
  }

  return loader;
}

