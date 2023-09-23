import * as React from 'react'
import {useMemo} from "react";
import RcDropdown from 'rc-dropdown'

import clsx from 'clsx'

import type {DropdownProps} from "./dropdown.types";
import cls from './index.module.scss'
import './assets/dropdown.css'


export const Dropdown = (
  {
    children,
    matchMaxTriggerWidth,
    placement = 'bottomLeft',
    onOverlayClick,
    onVisibleChange,
    onSelect,
    overlayStyle,
    trigger = 'click',
    showAction,
    hideAction,
    alignPoint,
    options = [],
    optionsSettings = {},
    withAnimation = true,
    classes = {},
  }: DropdownProps) => {

  const {
    ellipsisOptions = true,
    wrapOptions = true,
    showDivider = false,
  } = optionsSettings

  const {overlay, open: openCls, option: optionCls, menu: menuCls, wrapper} = classes


  const menu = useMemo(() => (
    <div className={clsx(cls.menu, menuCls)}>
      {
        options?.map(o =>
          <div
            key={o.key}
            className={clsx(cls.menuItem, optionCls, {
              [cls.ellipsis]: ellipsisOptions,
              [cls.wrap]: wrapOptions,
              [cls.border]: showDivider,
              [cls.disabled]: o.disabled
            })}
            onClick={onSelect ? () => onSelect(o.key, o) : undefined}
          >
            {o.label}
          </div>
        )
      }
    </div>
  ), [options, onSelect, menuCls, optionCls])


  return (
    <RcDropdown
      overlayClassName={clsx(cls.overlay, overlay)}
      openClassName={openCls}

      prefixCls='eub-dropdown'
      animation={withAnimation ? "slide-up" : undefined}
      overlay={menu}
      trigger={trigger}
      onVisibleChange={onVisibleChange}
      autoFocus={false}
      minOverlayWidthMatchTrigger={matchMaxTriggerWidth}
      placement={placement}
      onOverlayClick={onOverlayClick}
      overlayStyle={overlayStyle}
      showAction={showAction}
      hideAction={hideAction}
      alignPoint={alignPoint}
    >
      <span className={clsx(cls.childWrapper, wrapper)}>{children}</span>
    </RcDropdown>
  );
}

