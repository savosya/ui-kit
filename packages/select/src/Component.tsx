import React, {HTMLProps, useState}  from 'react'
import {Button} from '@savosya/savosya-myuikit-button'

interface Props extends HTMLProps<HTMLSelectElement> {
  options?: { text: string, value: string | number }[]
}

export function Select({options, ...rest}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>{open ? 'Закрыть' : 'Открыть'}</Button>

      {
        open && (
          <select {...rest}>
            {options?.map(option => <option value={option.value}>{option.text}</option>)}
          </select>
        )
      }
    </div>
  );
}

export default Select
