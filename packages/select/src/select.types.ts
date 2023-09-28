export type SelectMenuOption = { label: string; value: string; disabled?: boolean }

export interface SelectProps {
  open?: boolean
  options?: SelectMenuOption[]
  value?: null | string | string[]
  loading?: boolean
  label?: string
  multiple?: boolean
  showSearch?: boolean
  showClean?: boolean
  disabled?: boolean
  placeholder?: string
  hint?: string
  error?: boolean
  errorMsg?: string
  listHeight?: number
  block?: boolean

  /** handlers */
  onOpen?: () => void
  onClose?: () => void
  onSelect?: (value: string, option: PassedOption) => void
  onDeselect?: (value: string, option: PassedOption) => void
  onChange?: (value: string | string[], option: PassedOption | PassedOption[]) => void
  onClean?: () => void

  /** styles */
  optionsSettings?: {
    ellipsis?: boolean
    wrap?: boolean
    divider?: boolean
  }
  withAnimation?: boolean

  /** classes */
  classes?: {
    root?: string
    input?: string
    input_wrapper?: string
    dropdown?: string
    option?: string
    label?: string
  }
}

export type InternalSelectState = {
  open: boolean
  value: null | string | string[]
  entered: boolean
  options: SelectMenuOption[]
  search: string
  mode: 'search' | 'value'
}

export interface PassedOption {
  text: string
  value: string
}
