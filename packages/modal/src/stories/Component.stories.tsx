import * as React from 'react';
import {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Modal} from '../Component';

import {Button} from '../../../button/src/Component'
import {Checkbox} from '../../../checkbox/src/Component'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal
};

type Story = StoryObj<typeof Modal>;
export default meta;


export const Sandbox: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(prev => !prev)

    return (
      <div>
        <Button onClick={toggle}>Открыть</Button>
        <Modal
          title={'Modal Title'}
          footer={<Button size='s' type='ghost' onClick={toggle}>Ок</Button>}
          open={open}
          onClose={toggle}
        >
          <div>Modal Content</div>
        </Modal>
      </div>
    )
  }
};

export const Example = () => {
  const [open, setOpen] = useState(false)
  const [position, setPlacement] = useState<'center' | 'bottom' | 'top'>('center')
  const [closable, setClosable] = useState(true)
  const [closeOnBackdrop, setCloseOnBackdrop] = useState(true)
  const toggle = () => setOpen(prev => !prev)

  const isActive = (place: 'center' | 'bottom' | 'top') => place === position ? 'primary' : 'outline'

  return (
    <div style={{display: 'flex', gap: 12, flexDirection: 'column', flex: '0 0 auto'}}>
      <div style={{display: 'flex', gap: 12}}>
        <Button type={isActive('top')} onClick={() => setPlacement('top')} size='s'>top</Button>
        <Button type={isActive('center')} onClick={() => setPlacement('center')} size='s'>center</Button>
        <Button type={isActive('bottom')} onClick={() => setPlacement('bottom')} size='s'>bottom</Button>

        <Checkbox label='Closable' checked={closable} onChange={(_, {checked}) => setClosable(checked)}/>
        <Checkbox label='Close On Backdrop' checked={closeOnBackdrop} onChange={(_, {checked}) => setCloseOnBackdrop(checked)}/>
      </div>

      <div>
        <Button onClick={toggle}>Открыть</Button>
      </div>


      <Modal
        title={'Example Title'}
        position={position}
        open={open}
        onClose={toggle}
        closable={closable}
        closeOnBackdrop={closeOnBackdrop}
      >
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
      </Modal>
    </div>
  )
};

