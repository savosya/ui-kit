import React from 'react'

type Props = {
  className?: string
}

export const GrabberIcon = ({ className }: Props) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line x1="11.3534" y1="5.45414" x2="5.69658" y2="11.111" stroke="#848D98" />
      <line x1="10.3534" y1="0.454139" x2="0.453936" y2="10.3536" stroke="#848D98" />
    </svg>
  )
}
