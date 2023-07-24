import * as React from 'react'
import {useCallback, useRef, useState} from "react"
import RcSelect from 'rc-select';
// import {ControlledMenu, FocusableItem, MenuItem, useClick, useHover, useMenuState} from '@szhsin/react-menu';
// import '@szhsin/react-menu/dist/index.css';
// import '@szhsin/react-menu/dist/transitions/slide.css';
import clsx from 'clsx'
import Input from '@savosya/savosya-myuikit-input'
import {ChevronIcon} from "./components/chevron-icon"
import cls from './index.module.scss'
import './index.scss'


export type MenuOption = { label: string, value: string | number, disabled?: boolean }

interface SelectProps {
  open?: boolean
  onToggle?: () => void
  onOpen?: () => void
  onClose?: () => void
  options?: MenuOption[]
  value?: string | number
}

export const Select = (props: SelectProps) => {
  const {
    options,
    open,
    onToggle,
    onClose,
    onOpen,
    value,
  } = props
  const isControlled = typeof open === 'boolean'
  // const ref = useRef(null);
  // const [menuState, toggleMenu] = useMenuState({ transition: true });
  // const anchorProps = useClick(menuState.state, toggleMenu);

  const [innerOpen, setOpen] = useState(false)

  const handleOpenToggle = useCallback(() => {
    if (onToggle) onToggle()

    setOpen(prev => {
      if (prev) {
        if (onOpen) onOpen()
      } else {
        if (onClose) onClose()
      }

      return !prev
    })
  }, [value, onToggle, onClose, onOpen, options])

  const handleClose = useCallback(() => {
    if (onClose) onClose()
    if (!isControlled) setOpen(false)
  }, [])
  const handleOpen = useCallback(() => {
    if (onOpen) onOpen()
    if (!isControlled) setOpen(true)
  }, [])

  const handleSpacePress = (e: any) => {
    if (e.code === 'Space')
      handleOpenToggle()
  }

  return (
    <RcSelect
      open={isControlled ? open : innerOpen}
      options={options}
      getRawInputElement={() => (
        <Input
          style={{width: 400}}
          addonsRight={
            <ChevronIcon className={clsx(cls.chevrone, {[cls.chevrone_open]: innerOpen})}/>
          }
          onFocus={handleOpen}
          onBlur={handleClose}
          onKeyDown={handleSpacePress}
          readOnly
          hint={'lalalal costa ricka mama mia'}
        />
      )}

      // dropdownMatchSelectWidth
      dropdownStyle={{
        border: '1px solid red',
        position: 'absolute',
        width: 1000
      }}
      onSelect={(e) => console.log(e)}
      // dropdownRender={(menu) => {
      //   return <div>
      //     {options?.map(o => <div key={o.value}>{o.label}</div>)}
      //   </div>
      // }}
      // choiceTransitionName="rc-select-selection__choice-zoom"
      // animation={open ? 'slide-up' : 'slide-down'}
      animation='slide-up'
      // placeholder="please select"

    />
  );
}

// id={}
// className={}
// prefixCls
// transitionName
// choiceTransitionName
// dropdownMatchSelectWidth
// dropdownClassName
// dropdownStyle
// dropdownAlign
// dropdownMenuStyle
// notFoundContent
// tokenSeparators
// open
// defaultOpen
// placeholder
// showSearch
// allowClear
// tags
// tagRender
// maxTagCount
// maxTagPlaceholder
// combobox
// multiple
// disabled
// filterOption
// optionFilterProp
// maxTagTextLength
// filterSort
// optionLabelProp
// defaultValue
// value
// labelInValue
// backfill
// onChange
// onSearch
// onBlur
// onFocus
// onPopupScroll
// onSelect
// onDeselect
// onInputKeyDown
// defaultActiveFirstOption
// getPopupContainer
// getInputElement
// showAction
// autoFocus
// autoClearSearchValue
// suffixIcon
// clearIcon
// removeIcon
// menuItemSelectedIcon
// dropdownRender
// loading
// virtual
