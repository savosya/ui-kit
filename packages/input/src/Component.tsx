import * as React from 'react'
import {useRef} from "react";
import type {HTMLProps, ReactNode} from "react"
import clsx from 'clsx'
import Tooltip, {TooltipProps} from '@savosya/savosya-myuikit-tooltip'
import {useFocus} from "@savosya/savosya-myuikit-hooks"
import {mergeRefs} from "@savosya/savosya-myuikit-utils"
import {ExclamationMarkIcon} from './components/exclamation-mark-icon'
import {CrossIcon} from "./components/cross-icon"
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
  cleanable?: boolean
  cleanIcon?: ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClean?: () => void
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
    cleanIcon?: string
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
    cleanable,
    onChange,
    onClean,
    cleanIcon,

    /** tooltip */
    showTooltip,
    tooltipIcon,
    tooltipProps,

    /** input rest */
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null);
  const [focus] = useFocus(inputRef, 'keyboard');

  const handleClean = React.useCallback(() => {
    if(onClean) onClean()

    if(inputRef.current && !rest.value) {
      inputRef.current.value = ''
    }
  }, [inputRef.current, ref])

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if(onChange) onChange(event)
  }, [])

  return (
    <div className={clsx(cls.root, classes?.root)}>
      <div className={clsx(
        cls.input_root,
        {
          [cls.focus]: focus,
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
            type={type}
            className={clsx(cls.input, classes?.input)}
            disabled={disabled}
            ref={mergeRefs([ref, inputRef])}
            {...rest}
            onChange={handleChange}
          />

          {label && <label className={clsx(cls.label, {[cls.error]: error}, classes?.label)}>{label}</label>}
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

          {cleanable && <span onClick={handleClean} className={clsx(cls.clean, classes?.cleanIcon)}>
            {cleanIcon || <CrossIcon/>}
          </span>}
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

