import * as React from 'react';
import type {ReactNode} from "react"
import clsx from 'clsx'

import Radio from "@savosya/savosya-myuikit-radio";
import type {RadioProps} from "@savosya/savosya-myuikit-radio";
import cls from './index.module.scss'

export type RadioOption = { label: ReactNode, value: string, disabled?: boolean }

export interface RadioGroupProps {
  className?: string
  name?: string
  options?: RadioOption[]
  radioProps?: RadioProps
  onChange?: (newValue: string, event: React.ChangeEvent<HTMLInputElement>, payload: {
    checked: boolean,
    name?: string | undefined
  }) => void
  value?: string
}

export const RadioGroup = (props: RadioGroupProps) => {
  const {
    options = [],
    className,
    name,
    onChange,
    value,
  } = props

  const handleChange = React.useCallback((
    event: React.ChangeEvent<HTMLInputElement>, payload: { checked: boolean, name?: string | undefined }
  ) => {
    if (onChange) {
      onChange(event.target.value, event, payload)
    }
  }, [])

  return (
    <div className={clsx(cls.group, className)}>
      {options?.map(option =>
        <Radio
          name={name}
          label={option.label}
          value={option.value}
          disabled={option.disabled}
          checked={option.value === value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
