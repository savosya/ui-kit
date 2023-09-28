import * as React from 'react'
import { useRef } from 'react'

import clsx from 'clsx'

import { Tooltip } from '@savosya/savosya-myuikit-tooltip'
import { useFocus } from '@savosya/savosya-myuikit-hooks'
import { mergeRefs } from '@savosya/savosya-myuikit-utils'

import { ExclamationMarkIcon, CrossIcon, SearchIcon, PasswordIcon } from './components'
import { InputProps } from './input.types'
import cls from './index.module.scss'

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type = 'text',
    label,
    disabled,
    hint,
    error,
    errorMsg,
    className,
    // size = 'm',
    classes,
    addonsLeft,
    addonsRight,
    cleanable,
    onChange,
    onClean,
    cleanIcon,
    passedRef,
    block,

    /** tooltip */
    showTooltip,
    tooltipIcon,
    tooltipProps,

    /** input rest */
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const [keyboardFocus] = useFocus(inputRef, 'keyboard')
  const [mouseFocus] = useFocus(inputRef, 'mouse')

  const handleClean = React.useCallback(() => {
    if (onClean) onClean()

    if (inputRef.current && !rest.value) {
      inputRef.current.value = ''
    }
  }, [inputRef.current, ref])

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event)
  }, [])

  return (
    <div className={clsx(cls.root, classes?.root, { [cls.block]: block })}>
      <div
        className={clsx(
          cls.input_root,
          {
            [cls.focus]: keyboardFocus,
            [cls.disabled]: disabled,
            [cls.error]: error
          },
          className,
          classes?.input_root
        )}
      >
        {type === 'search' && (
          <div
            className={clsx(
              cls.addons_left,
              {
                [cls.addon_focused]: mouseFocus,
                [cls.addon_error]: error
              },
              classes?.addons_left
            )}
          >
            <SearchIcon />
          </div>
        )}

        {type === 'password' && (
          <div
            className={clsx(
              cls.addons_left,
              {
                [cls.addon_focused]: mouseFocus,
                [cls.addon_error]: error
              },
              classes?.addons_left
            )}
          >
            <PasswordIcon />
          </div>
        )}

        {type === 'text' && addonsLeft && (
          <div
            className={clsx(
              cls.addons_left,
              {
                [cls.addon_focused]: mouseFocus,
                [cls.addon_error]: error
              },
              classes?.addons_left
            )}
          >
            {addonsLeft}
          </div>
        )}

        <div className={cls.root_core}>
          <input
            type={type}
            className={clsx(cls.input, classes?.input)}
            disabled={disabled}
            ref={mergeRefs([ref, inputRef, passedRef])}
            {...rest}
            onChange={handleChange}
          />

          {label && <label className={clsx(cls.label, { [cls.error]: error }, classes?.label)}>{label}</label>}
        </div>

        <div className={clsx(cls.addons_right, classes?.addons_right)}>
          {addonsRight}

          {showTooltip && <Tooltip {...tooltipProps}>{tooltipIcon || <ExclamationMarkIcon error={error} />}</Tooltip>}

          {cleanable && (
            <span onClick={handleClean} className={clsx(cls.clean, classes?.cleanIcon)}>
              {cleanIcon || <CrossIcon />}
            </span>
          )}
        </div>
      </div>

      {(hint || (error && errorMsg)) && (
        <div className={clsx(cls.extra, classes?.extra)}>
          {hint && <span className={clsx({ [cls.error]: error && !errorMsg }, classes?.hint)}>{hint}</span>}

          {error && errorMsg && <span className={clsx(cls.error, classes?.error)}>{errorMsg}</span>}
        </div>
      )}
    </div>
  )
})
