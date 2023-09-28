import React from 'react'

type CheckIconProps = {
  className?: string
  size: 's' | 'm' | 'l'
}

const sizeConfig = {
  s: {
    width: '10',
    height: '10'
  },
  m: {
    width: '12',
    height: '12'
  },
  l: {
    width: '12',
    height: '12'
  }
}

export const CheckIcon = ({ size, className }: CheckIconProps) => {
  return (
    <svg width={sizeConfig[size].width} height={sizeConfig[size].height} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7.4375 0.8125L3.0625 5.1875L0.875 3" stroke="currentColor" strokeWidth="1.53" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
