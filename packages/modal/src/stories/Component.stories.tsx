import * as React from 'react';
import {useState} from "react";
import {Modal} from '../Component';

import {Button} from '../../../button/src/Component'

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(prev => !prev)

  return (
    <div>
      <Button onClick={toggle}>Открыть</Button>
      <Modal
        title={'IM MIGHTY TITLEIM MIGHTY TITLEIM MIGHTY TITLEIM MIGHTY TITLEIM'}
        // footer={'fooooooter'}
        open={open}
        onClose={toggle}
        // position={'center'}
        // closable={false}
      >
        <div>some contents...</div>
        <div>some contents...</div>
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
        {/*<div>some contents...</div>*/}
      </Modal>
    </div>
  )
};

