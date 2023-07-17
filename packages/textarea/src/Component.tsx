import * as React from 'react'
import {useRef} from "react";
import type {HTMLProps, ReactNode} from "react"
import clsx from 'clsx'

import {useFocus} from "@savosya/savosya-myuikit-hooks"
import {mergeRefs} from "@savosya/savosya-myuikit-utils"

import {GrabberIcon} from "./components/grabber-icon"
import cls from './index.module.scss'


export interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  className?: string
  label?: string
  error?: boolean
  errorMsg?: ReactNode
  hint?: ReactNode
  disabled?: boolean
  resizable?: 'both' | 'vertical' | 'horizontal'
  classes?: {
    wrapper?: string
    root?: string
    textarea?: string
    label?: string
    extra?: string
    hint?: string
    errorMsg?: string
  }
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const {
    className,
    label,
    disabled,
    error,
    errorMsg,
    hint,
    classes,
    resizable,
    ...rest
  } = props

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [focus] = useFocus(textareaRef, 'keyboard');

  return (
    <div className={clsx(cls.wrapper, classes?.wrapper)}>
      <div
        className={clsx(
          cls.root,
          {
            [cls.focus]: focus,
            [cls.disabled]: disabled,
            [cls.error]: error
          },
          className,
          classes?.root
        )}
      >
      <textarea
        className={clsx(
          cls.area,
          {
            [cls.disabled]: disabled,
            [cls.resizable]: resizable
          },
          classes?.textarea
        )}
        disabled={disabled}
        ref={mergeRefs([ref, textareaRef])}
        {...rest}
        style={{...rest?.style, resize: resizable}}
      />

        {
          label && <label
                className={clsx(cls.label, {[cls.error]: error}, classes?.label)}
            >
            {label}
            </label>
        }

        {Boolean(resizable) && <GrabberIcon className={cls.grabber}/>}
      </div>

      {(hint || errorMsg) && (
        <div className={clsx(cls.extra, classes?.extra)}>
          {hint && <span className={clsx(cls.hint, classes?.hint)}>{hint}</span>}
          {errorMsg && <span className={clsx(cls.errorMsg, classes?.errorMsg)}>{errorMsg}</span>}
        </div>
      )}
    </div>
  );
})

