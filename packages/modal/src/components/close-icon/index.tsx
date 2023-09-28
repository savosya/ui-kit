import React from 'react'
import cls from './close.module.scss'

type Props = {
  size?: number
  onClick?: () => void
}

export const CloseIcon = ({ size = 20, onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cls.close}
    >
      <path
        d="M19.5782 4.42177C20.1406 4.98412 20.1406 5.89588 19.5782 6.45823L14.0368 12L19.5782 17.5418C20.0937 18.0573 20.1367 18.8663 19.7071 19.4308L19.5782 19.5782C19.0159 20.1406 18.1041 20.1406 17.5418 19.5782L12 14.0368L6.45823 19.5782C5.89588 20.1406 4.98412 20.1406 4.42177 19.5782C3.85941 19.0159 3.85941 18.1041 4.42177 17.5418L9.96319 12L4.42177 6.45823C3.90627 5.94274 3.86332 5.13365 4.29289 4.56923L4.42177 4.42177C4.98412 3.85941 5.89588 3.85941 6.45823 4.42177L12 9.96319L17.5418 4.42177C18.1041 3.85941 19.0159 3.85941 19.5782 4.42177Z"
        fill="currentColor"
      />
    </svg>
  )
}
