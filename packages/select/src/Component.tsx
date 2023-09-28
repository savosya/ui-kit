import * as React from 'react'
import { useCallback, useMemo, useRef, useState } from 'react'
import RCSelect, { Option as RCOption } from 'rc-select'
import clsx from 'clsx'

import { Input } from '@savosya/savosya-myuikit-input'
import { Loader } from '@savosya/savosya-myuikit-loader'

import { ChevronIcon, CheckIcon, CrossIcon } from './components'
import { getFilteredOptions, getInputValue, getOptionsMap, showCleanIcon } from './select.utils'
import type { InternalSelectState, PassedOption, SelectProps } from './select.types'
import cls from './index.module.scss'
import './assets/select.css'

export const Select = (props: SelectProps) => {
  const {
    options = [],
    open,
    value,
    loading,
    label,
    multiple = false,
    showSearch,
    showClean = true,
    disabled,
    placeholder,
    hint,
    error,
    errorMsg,
    block,
    listHeight,

    onClose,
    onOpen,
    onSelect,
    onDeselect,
    onChange,
    onClean,

    withAnimation = true,
    optionsSettings = {},
    classes = {}
  } = props

  const { ellipsis = true, wrap = undefined, divider = false } = optionsSettings

  const { input, option, label: labelCls, dropdown, input_wrapper, root } = classes

  /** values */
  const isControlledInput = typeof value !== 'undefined'
  const isControlledOpen = typeof open === 'boolean'
  const ValuesMap = useMemo(() => getOptionsMap(options), [options])
  const inputRef = useRef<any>(null)

  const [internalState, setInternalState] = useState<InternalSelectState>({
    open: Boolean(open),
    entered: false,
    value: value || (multiple ? [] : null),
    mode: 'value',
    options: options,
    search: ''
  })

  /** handlers */
  const handleOpen = () => {
    if (onOpen) onOpen()
    if (disabled || loading) return
    setInternalState(prev => ({
      ...prev,
      open: isControlledOpen ? prev.open : true,
      mode: showSearch ? 'search' : 'value'
    }))
  }
  const handleClose = () => {
    if (onClose) onClose()
    if (disabled || loading) return
    setInternalState(prev => ({
      ...prev,
      open: isControlledOpen ? prev.open : false,
      mode: 'value',
      search: '',
      options
    }))
  }
  const handleSearch = (e: any) => {
    const value = e.target.value || ''
    setInternalState(prev => ({ ...prev, search: value, options: getFilteredOptions(value, options) }))
  }

  const handleChange = (newValue: string | string[], option: PassedOption | PassedOption[]) => {
    if (onChange) onChange(newValue, option)
    setInternalState(prev => ({
      ...prev,
      value: newValue,
      open: multiple || isControlledOpen ? prev.open : false,
      mode: showSearch && multiple ? 'search' : 'value'
    }))
    if (!multiple) inputRef?.current?.blur()
  }

  const handleClean = () => {
    if (onClean) onClean()
    setInternalState(prev => ({ ...prev, value: multiple ? [] : null }))
  }

  const onChevroneClick = () => {
    if (loading || disabled) return

    if (!internalState.open) {
      handleOpen()
    } else {
      handleClose()
      inputRef.current?.blur()
    }
  }

  /** render */
  const showCloseIcon =
    showCleanIcon(multiple, isControlledInput ? value : internalState.value) && internalState.entered && showClean
  const isOpen = isControlledOpen ? open : internalState.open
  return (
    <div
      className={clsx(cls.root, root)}
      onMouseEnter={() => setInternalState(prev => ({ ...prev, entered: true }))}
      onMouseLeave={() => setInternalState(prev => ({ ...prev, entered: false }))}
    >
      <RCSelect
        prefixCls="eub-select"
        mode={multiple ? 'multiple' : undefined}
        dropdownClassName={clsx(cls.menu, dropdown)}
        animation={withAnimation ? 'slide-up' : undefined}
        menuItemSelectedIcon={<CheckIcon />}
        style={{ width: '100%' }}
        open={isOpen}
        onSelect={onSelect}
        onDeselect={onDeselect}
        value={isControlledInput ? value : internalState.value}
        onChange={handleChange}
        notFoundContent={null}
        listHeight={listHeight}
        getRawInputElement={() => (
          <Input
            label={label}
            passedRef={inputRef}
            block={block}
            addonsRight={
              <div className={clsx(cls.right_addon, { [cls.close]: showCloseIcon })}>
                {loading ? (
                  <Loader size={16} />
                ) : showCloseIcon ? (
                  <CrossIcon className={cls.chevrone} onClick={handleClean} />
                ) : (
                  <ChevronIcon
                    className={clsx(cls.chevrone, { [cls.chevrone_open]: internalState.open })}
                    onClick={onChevroneClick}
                  />
                )}
              </div>
            }
            hint={hint}
            error={error}
            errorMsg={errorMsg}
            cleanable={false}
            onFocus={handleOpen}
            onBlur={handleClose}
            value={
              internalState.mode === 'search'
                ? internalState.search
                : getInputValue(isControlledInput ? value : internalState.value, ValuesMap)
            }
            onChange={showSearch ? handleSearch : undefined}
            placeholder={internalState.mode === 'search' ? 'Поиск' : placeholder}
            disabled={disabled}
            readOnly={!showSearch}
            classes={{
              root: input_wrapper,
              input: input,
              label: labelCls
            }}
          />
        )}
      >
        {internalState.options?.map(o => (
          <RCOption
            className={clsx(cls.menuItem, option, {
              [cls.selected]: isControlledInput
                ? multiple
                  ? value?.includes(o.value)
                  : o.value === value
                : multiple
                ? internalState.value?.includes(o.value)
                : o.value === internalState.value,
              [cls.ellipsis]: ellipsis,
              [cls.wrap]: wrap,
              [cls.border]: divider,
              [cls.disabled]: o.disabled
            })}
            key={o.value}
            value={o.value}
            text={o.label}
          >
            {o.label}
          </RCOption>
        ))}
      </RCSelect>
    </div>
  )
}
