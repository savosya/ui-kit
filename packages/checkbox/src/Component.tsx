import * as React from 'react'
import {useState} from "react";
import type {ChangeEvent, InputHTMLAttributes, ReactNode} from "react"
import clsx from 'clsx'

import {CheckIcon} from './components/check-icon'
import cls from './index.module.scss'

type NativeProps = InputHTMLAttributes<HTMLInputElement>

export interface CheckboxProps extends Omit<NativeProps, 'size' | 'onChange'> {
  className?: string
  label?: ReactNode
  hint?: ReactNode
  size?: 's' | 'm' | 'l'
  checked?: boolean
  indeterminate?: boolean
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    payload: {
      checked: boolean;
      name?: string;
    },
  ) => void;

  classes?: {
    root?: string
    input?: string
    content?: string
  }
}

export const Checkbox = (props: CheckboxProps) => {
  const {
    className,
    label,
    hint,
    size = 'm',
    checked,
    indeterminate,
    name,
    onChange,
    classes,
    disabled,
    ...rest
  } = props

  const [innerChecked, setChecked] = useState<boolean | undefined>(checked || false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(disabled) return;

    if (onChange) {
      onChange(event, {checked: event.target.checked, name});
    }

    if (typeof checked === 'undefined') {
      setChecked(prev => !prev)
    }
  };

  return (
    <label
      className={clsx(
        cls.root,
        cls[size],
        {
          [cls.indeterminate]: indeterminate,
          [cls.checked]: checked || innerChecked,
          [cls.disabled]: disabled,
        },
        className,
        classes?.root
      )}
    >
      <input
        type='checkbox'
        onChange={handleChange}
        checked={checked || innerChecked}
        disabled={disabled}
        {...rest}
      />

      <span className={clsx(
        cls.box,
        cls[size],
        {
          [cls.indeterminate]: indeterminate,
          [cls.checked]: checked || innerChecked,
          [cls.disabled]: disabled,
        }
      )}>
        {(checked || innerChecked) && <CheckIcon size={size}/>}

        {(!checked && !innerChecked) && indeterminate && <span className={clsx(
          cls.indeterminateBox,
          cls[size],
          {
            [cls.disabled]: disabled
          }
        )}/>}
      </span>

      <span className={clsx(cls.content, classes?.content)}>{label}</span>
    </label>
  );
}
