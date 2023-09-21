import * as React from 'react'
import {useCallback, useState} from "react";
import clsx from "clsx";

import cls from './index.module.scss'
import {PlusIcon} from "./components/plus-icon";
import {MinusIcon} from "./components/minus-icon";

export interface CounterProps {
  value?: number
  onAdd?: (newValue: number) => void
  onSub?: (newValue: number) => void
  onChange?: (newValue: number) => void
  min?: number
  max?: number
  width?: number

  className?: string
  classes?: {
    root?: string
    input?: string
    plus?: string
    minus?: string
  }
}

export const Counter = React.forwardRef<HTMLInputElement, CounterProps>((
  {
    value,
    onAdd,
    onSub,
    min = -Infinity,
    max = Infinity,
    onChange,
    width = 100,
    classes,
    className
  }, ref) => {
  const isControlled = value !== undefined
  const [internalState, setState] = useState<string>(value ? String(value) : '0')

  const handleAdd = useCallback(() => {
    setState(prev => {
      const newValue = Number(prev) + 1;
      onAdd?.(newValue)
      return isControlled ? prev : newValue > max ? prev : String(newValue)
    })
  }, [onAdd, max, isControlled])

  const handleSub = useCallback(() => {
    setState(prev => {
      const newValue = Number(prev) - 1
      onSub?.(newValue)
      return isControlled ? prev : newValue < min ? prev : String(newValue)
    })
  }, [onSub, min, isControlled])

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    const regex = /^\d*\.?\d*$/;
    const numberValue = Number(inputValue)

    if (regex.test(inputValue) && numberValue > min && numberValue < max) {
      if (inputValue === '00' && internalState === '0') {
        return
      } else {
        const numericValue = Number(inputValue)
        onChange?.(inputValue === '' ? 0 : numericValue)
        setState(isControlled ? internalState : inputValue === '' ? '0' : String(numericValue));
      }
    }
  };

  return (
    <div className={clsx(cls.root, className, classes?.root)}>
      <MinusIcon onClick={handleSub} className={classes?.minus}/>

      <input
        type='number'
        className={clsx(cls.input, classes?.input)}
        value={internalState}
        onChange={handleChange}
        ref={ref}
        style={{width: width}}
      />

      <PlusIcon onClick={handleAdd} className={classes?.plus}/>
    </div>
  );
})

