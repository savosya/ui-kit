import * as React from 'react'
import {useRef} from "react";
import clsx from 'clsx'

import {useFocus} from "@savosya/savosya-myuikit-hooks"
import {mergeRefs} from "@savosya/savosya-myuikit-utils"

import {CheckIcon} from './components'
import {RadioProps} from "./radio.types";
import cls from './index.module.scss'


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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
