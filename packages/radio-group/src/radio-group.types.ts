import * as React from "react";
import type {ReactNode} from "react";
import type {RadioProps} from "@savosya/savosya-myuikit-radio";

export type RadioOption = { label: ReactNode, value: string, disabled?: boolean }
export interface RadioGroupProps {
  direction?: 'vertical' | 'horizontal'
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
