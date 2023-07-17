import * as React from 'react'
import type {ReactNode} from "react"
import {useCallback, useState} from "react"
import {Tooltip as ReactTooltip} from 'react-tooltip'
import clsx from 'clsx'

import {generateRandomHash} from "@savosya/savosya-myuikit-utils"

import cls from './index.module.scss'

export type TooltipPlacement =
  'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export interface TooltipProps {
  title?: ReactNode
  content?: ReactNode
  mode?: 'light' | 'dark'
  children: ReactNode
  offset?: number
  hideDelay?: number
  openDelay?: number
  hideArrow?: boolean
  clickable?: boolean
  closeOnScroll?: boolean
  closeOnResize?: boolean
  style?: React.CSSProperties
  open?: boolean
  position?: { x: number, y: number }
  onShow?: () => void
  onHide?: () => void
  opacity?: React.CSSProperties['opacity']
  float?: boolean
  placement?: TooltipPlacement
  trigger?: 'hover' | 'click'
  classes?: {
    anchor?: string
    root?: string
    arrow?: string
    title?: string
    content?: string
  }
  className?: string
}

export const Tooltip = (props: TooltipProps) => {
  const {
    title,
    content,
    mode = 'dark',
    children,
    placement = 'top',
    offset,
    hideDelay,
    openDelay,
    hideArrow,
    clickable,
    open,
    style,
    position,
    onShow,
    onHide,
    opacity = 0.94,
    float,
    trigger = 'hover',
    className,
    classes
  } = props

  const [id] = useState(`tooltip_${generateRandomHash()}`)
  const isClickTrigger = trigger === 'click'
  const [innerOpen, setOpen] = useState(false)
  const handleToggle = useCallback(() => {
    if(!isClickTrigger) return;
    setOpen(prev => !prev)
  }, [trigger])

  return (
    <React.Fragment>
      <a className={clsx(cls.anchor, id, classes?.anchor)} onClick={handleToggle}>{children}</a>

      {(title || content) ? (
        <ReactTooltip
          anchorSelect={`.${id}`}
          variant={mode}
          place={placement}
          offset={offset}
          delayHide={hideDelay}
          delayShow={openDelay}
          noArrow={hideArrow}
          clickable={clickable}
          isOpen={open || (isClickTrigger ? innerOpen : undefined)}
          style={style}
          position={position}
          afterShow={onShow}
          afterHide={onHide}
          opacity={opacity}
          className={clsx(cls.root, cls[mode], {[cls.small_padding]: title && !content}, className, classes?.root)}
          classNameArrow={clsx(cls.arrow, classes?.arrow)}
          float={float}
        >
          {title && <div className={clsx(cls.title, classes?.title)}>{title}</div>}
          {content && <div className={clsx(
            cls.content,
            cls[mode],
            {
              [cls.withTitle]: title && content
            },
            classes?.content
          )}
          >
            {content}
          </div>}
        </ReactTooltip>
      ) : null}
    </React.Fragment>
  );
}

