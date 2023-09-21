import * as React from 'react';
import {Drawer, DrawerProps} from '../Component';
import {useState} from "react";

export default {
  title: 'Components/Drawer',
  component: Drawer,
};

export const Default = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(prev => !prev)

  return (
    <div>
      <button style={{color: open ? 'green' : 'red'}} onClick={toggle}>drawer</button>

      <Drawer
        open={open}
        onClose={toggle}
        placement='right'
        width={'50%'}
        blurredMask
        closable={false}
        closeOnBackdrop={true}
        closeOnEsc={false}
        title={'TITLE'}
        footer={'FOOTER'}
      >
        Drawer content
      </Drawer>
    </div>
  )
};

