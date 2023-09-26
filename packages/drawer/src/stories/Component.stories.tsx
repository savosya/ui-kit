import * as React from 'react';
import {useState} from "react";
import {Drawer} from '../index';

import {Button} from '../../../button/src/Component'

export default {
  title: 'Components/Drawer',
  component: Drawer,
};

export const Default = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(prev => !prev)

  return (
    <div>
      <Button type={open ? 'primary' : 'outline'} onClick={toggle}>Drawer</Button>

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

