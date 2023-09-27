import * as React from 'react'
import {useCallback, useState} from "react";
import clsx from "clsx";

import {PlusIcon, MinusIcon} from "./components";
import {CounterProps} from "./counter.types";
import cls from './index.module.scss'


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
    readOnly,
    disabled,
    className
  }, ref) => {
  const isControlled = value !== undefined
  const [internalState, setState] = useState<string>(value ? String(value) : '0')

  const handleAdd = () => {
    if (isControlled) {
      const newValue = value + 1 > max ? value : value + 1
      onAdd?.(newValue)
    } else {
      setState(prev => {
        const newValue = Number(prev) + 1;
        const finalValue = newValue > max ? prev : String(newValue)
        onAdd?.(Number(finalValue))
        return finalValue
      })
    }
  }

  const handleSub = () => {
    if (isControlled) {
      const newValue = value - 1 < min ? value : value - 1
      onAdd?.(newValue)
    } else {
      setState(prev => {
        const newValue = Number(prev) - 1
        const finalValue = newValue < min ? prev : String(newValue)
        onSub?.(Number(finalValue))
        return finalValue
      })
    }
  }

  const handleChange = (event: any) => {
    const inputValue = event.target.value;
    const regex = /^\d*\.?\d*$/;

    if (regex.test(inputValue)) {
      if (inputValue === '00' && internalState === '0') {
        return
      } else {
        const numericValue = Number(inputValue)

        if (isControlled) {
          onChange?.(inputValue === '' ? 0 : numericValue)
        } else {
          setState(inputValue === '' ? '0' : String(numericValue));
        }
      }
    }
  };

  return (
    <div className={clsx(cls.root, className, classes?.root)}>
      <MinusIcon onClick={handleSub} className={classes?.minus} disabled={disabled}/>

      <div className={clsx(cls.inputWrapper, {[cls.disabled]: disabled})}>
        <input
          type='number'
          className={clsx(cls.input, classes?.input, {[cls.readOnly]: readOnly, [cls.disabled]: disabled})}
          value={isControlled ? String(Number(value)) : String(Number(internalState))}
          onChange={handleChange}
          ref={ref}
          style={{width: width}}
        />
      </div>

      <PlusIcon onClick={handleAdd} className={classes?.plus} disabled={disabled}/>
    </div>
  );
})

