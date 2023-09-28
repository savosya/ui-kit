import * as React from 'react'
import clsx from 'clsx'

import {Radio} from "@savosya/savosya-myuikit-radio"

import {RadioGroupProps} from "./radio-group.types";
import cls from './index.module.scss'

export const RadioGroup = (props: RadioGroupProps) => {
  const {
    options = [],
    className,
    name,
    onChange,
    value,
    radioProps,
    direction = 'horizontal',
    style
  } = props

  const handleChange = React.useCallback((
    event: React.ChangeEvent<HTMLInputElement>, payload: { checked: boolean, name?: string | undefined }
  ) => {
    if (onChange) {
      onChange(event.target.value, event, payload)
    }
  }, [])

  return (
    <div className={clsx(cls.group, className, {[cls.vertical]: direction === 'vertical'})} style={style}>
      {options?.map(option =>
        <Radio
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          disabled={option.disabled}
          checked={option.value === value}
          onChange={handleChange}
          {...radioProps}
        />
      )}
    </div>
  );
};
