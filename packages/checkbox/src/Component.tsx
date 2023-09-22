import * as React from 'react'
import {useRef, useState} from "react";
import clsx from 'clsx'

import {useFocus} from "@savosya/savosya-myuikit-hooks";
import {mergeRefs} from "@savosya/savosya-myuikit-utils";

import {CheckIcon} from './components'
import {CheckboxProps} from "./checkbox.types";
import cls from './index.module.scss'


export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
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

  const labelRef = useRef<HTMLLabelElement>(null);
  const [focused] = useFocus(labelRef, 'keyboard');

  const [innerChecked, setChecked] = useState<boolean | undefined>(checked || false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (onChange) {
      onChange(event, {checked: event.target.checked, name: event.target.name});
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
      ref={mergeRefs([labelRef, ref])}
    >
      <input
        type='checkbox'
        name={name}
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
          [cls.focus]: focused
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
})
