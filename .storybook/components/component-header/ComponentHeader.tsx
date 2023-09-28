import React, { ReactNode } from 'react'

import cls from './ComponentHeader.module.scss'

type ComponentHeaderProps = {
  name: string
  version?: string
  children?: ReactNode
}

export const ComponentHeader = ({ name, children, version }: ComponentHeaderProps) => {
  return (
    <div className={cls.component}>
      <div className={cls.title}>
        <h1 className={cls.name}>{name}</h1>

        {version && <span className={cls.version}>{version}</span>}
      </div>

      {children && <div className={cls.description}>{children}</div>}
    </div>
  )
}
