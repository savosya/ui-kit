import * as React from 'react'
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import clsx from 'clsx'

import {ChevroneIcon as DefaultChevroneIcon} from "./components/chevrone-icon";
import {LockIcon} from "./components/lock-icon";
import cls from './index.module.scss'

export interface AccordionProps {
  children?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  extra?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  disabled?: boolean
  onVisibleChange?: (visible: boolean) => void,
  chevroneIcon?: React.ReactNode
  classes?: {
    root?: string
    header?: string
    title?: string
    description?: string
    extra?: string
    icon?: string
    divider?: string
    content?: string
  }
}

export const Accordion = (
  {
    children,
    title,
    description,
    extra,
    open,
    defaultOpen = false,
    disabled,
    onVisibleChange,
    chevroneIcon,
    classes
  }: AccordionProps) => {
  const isControlled = typeof open === 'boolean'

  const HeaderIcon = useMemo(() => disabled ? <LockIcon/> : chevroneIcon ? chevroneIcon :
    <DefaultChevroneIcon/>, [disabled, chevroneIcon])
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null)

  const [internalOpen, setOpen] = useState(open || defaultOpen)
  const toggleOpen = useCallback(() => {
    setOpen(prev => {
      onVisibleChange?.(!prev)
      return isControlled ? prev : !prev
    })
  }, [onVisibleChange])


  useEffect(() => {
    const contentHeight = contentRef.current?.offsetHeight || null;
    setHeight(contentHeight)
  }, []);

  const isOpen = isControlled ? open : internalOpen
  return (
    <div className={clsx(cls.root, classes?.root, {[cls.disabled]: disabled})} onClick={toggleOpen}>
      <div className={clsx(cls.header, classes?.header, {[cls.disabled]: disabled})}>
        <div>
          <div className={clsx(cls.title, classes?.title)}>{title}</div>
          <div className={clsx(cls.description, classes?.description)}>{description}</div>
        </div>

        <div className={cls.right}>
          <div className={clsx(cls.extra, classes?.extra)}>{extra}</div>
          <div className={clsx(cls.chevroneIcon, {[cls.close]: !isOpen}, classes?.icon)}>
            {HeaderIcon}
          </div>
        </div>
      </div>

      <div className={clsx(cls.divider, classes?.divider, {[cls.disabled]: disabled, [cls.close]: !isOpen})}/>

      <div
        ref={contentRef}
        className={clsx(cls.content, classes?.content, {[cls.close]: !isOpen})}
        style={height === null ? undefined : {maxHeight: isOpen ? height : 0}}
      >
        {children}
      </div>
    </div>
  );
}

