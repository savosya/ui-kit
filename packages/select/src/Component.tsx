import * as React from 'react'
import type {HTMLProps}  from 'react'
// import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { MenuItem } from 'rc-menu';
// import '@szhsin/react-menu/dist/index.css';
// import '@szhsin/react-menu/dist/transitions/slide.css';
import Input from '@savosya/savosya-myuikit-input'
import {ChevronIcon} from "./components/chevron-icon";


export type MenuOption = { text: string, value: string | number }
interface Props extends HTMLProps<HTMLSelectElement> {
  options?: MenuOption[]
}

export const Select = ({options, ...rest}: Props) => {
  return (
    <div>

      <Input addonsRight={<ChevronIcon />}/>

      <select>

      </select>
    </div>
  );
}
