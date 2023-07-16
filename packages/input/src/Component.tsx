import * as React from 'react'
import type {HTMLProps, ReactNode} from "react"

import clsx from 'clsx'

import Tooltip, {TooltipProps} from '@savosya/savosya-myuikit-tooltip'

import {ExclamationMarkIcon} from './components/exclamation-mark-icon'
import cls from './index.module.scss'

export interface InputProps extends HTMLProps<HTMLInputElement> {
  type?: 'text' | 'password'
  label?: string
  hint?: ReactNode
  errorMsg?: ReactNode
  error?: boolean
  className?: string
  addonsLeft?: ReactNode
  addonsRight?: ReactNode
  showTooltip?: boolean
  tooltipIcon?: ReactNode
  tooltipProps?: TooltipProps
  classes?: {
    root?: string
    input_root?: string
    label?: string
    input?: string
    extra?: string
    hint?: string
    error?: string
    addons_left?: string
    addons_right?: string
  }
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const {
    type = 'text',
    label,
    disabled,
    hint,
    error,
    errorMsg,
    className,
    classes,
    addonsLeft,
    addonsRight,

    /** tooltip */
    showTooltip,
    tooltipIcon,
    tooltipProps,

    /** input rest */
    ...rest
  } = props

  return (
    <div className={clsx(cls.root, classes?.root)}>
      <div className={clsx(
        cls.input_root,
        {
          [cls.disabled]: disabled,
          [cls.error]: error
        },
        className,
        classes?.input_root
      )}>
        {addonsLeft && (
          <div className={clsx(cls.addons_left, classes?.addons_left)}>
            {addonsLeft}
          </div>
        )}

        <div className={cls.root_core}>
          <input
            ref={ref}
            type={type}
            className={clsx(cls.input, classes?.input)}
            disabled={disabled}
            {...rest}
          />

          <label className={clsx(cls.label, {[cls.error]: error}, classes?.label)}>{label}</label>
        </div>

        <div className={clsx(cls.addons_right, classes?.addons_right)}>
          {addonsRight}

          {
            showTooltip && (
              <Tooltip {...tooltipProps}>
                {tooltipIcon || <ExclamationMarkIcon error={error}/>}
              </Tooltip>
            )
          }
        </div>
      </div>


      {(hint || (error && errorMsg)) && (
        <div className={clsx(cls.extra, classes?.extra)}>
          {hint && <span className={clsx({[cls.error]: error && !errorMsg}, classes?.hint)}>{hint}</span>}

          {error && errorMsg && <span className={clsx(cls.error, classes?.error)}>{errorMsg}</span>}
        </div>
      )}
    </div>
  );
})

