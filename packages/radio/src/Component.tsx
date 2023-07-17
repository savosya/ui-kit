import * as React from 'react'
import {useRef} from "react";
import type {ChangeEvent, InputHTMLAttributes, ReactNode} from "react"
import clsx from 'clsx'
import {useFocus} from "@savosya/savosya-myuikit-hooks";
import {mergeRefs} from "@savosya/savosya-myuikit-utils";

import {CheckIcon} from './components/check-icon'
import cls from './index.module.scss'

type NativeProps = InputHTMLAttributes<HTMLInputElement>

export interface RadioProps extends Omit<NativeProps, 'size' | 'onChange'> {
  className?: string
  label?: ReactNode
  hint?: ReactNode
  size?: 's' | 'm' | 'l'
  checked?: boolean
  markType?: 'default' | 'check'
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

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const {
    className,
    label,
    hint,
    size = 'm',
    checked,
    markType = 'default',
    name,
    onChange,
    classes,
    disabled,
    ...rest
  } = props

  const labelRef = useRef<HTMLLabelElement>(null);
  const [focused] = useFocus(labelRef, 'keyboard');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (onChange) {
      onChange(event, {checked: event.target.checked, name: event.target.name});
    }
  };

  return (
    <label
      className={clsx(
        cls.root,
        cls[size],
        {
          [cls.indeterminate]: checked && markType === 'default',
          [cls.checked]: checked && markType === 'check',
          [cls.disabled]: disabled,
        },
        className,
        classes?.root
      )}
      ref={mergeRefs([labelRef, ref])}
    >
      <input
        type='radio'
        name={name}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        {...rest}
      />

      <span
        className={clsx(
          cls.box,
          cls[size],
          {
            [cls.indeterminate]: checked && markType === 'default',
            [cls.checked]: checked && markType === 'check',
            [cls.disabled]: disabled,
            [cls.focus]: focused
          }
        )}
      >
        {checked && markType === 'check' && <CheckIcon size={size}/>}

        {checked && markType === 'default' && <span className={clsx(
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
})
