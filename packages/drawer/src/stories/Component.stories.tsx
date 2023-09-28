import * as React from 'react';
import {useState} from "react";
import {Meta, StoryObj} from "@storybook/react";
import {Drawer} from '../Component';

import {Button} from '../../../button/src/Component'
import {Accordion} from '../../../accordion/src/Component'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer
};

type Story = StoryObj<typeof Drawer>;
export default meta;


export const Sandbox: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(prev => !prev)

    return (
      <div>
        <Button type={open ? 'primary' : 'outline'} onClick={toggle}>Drawer</Button>

        <Drawer open={open} onClose={toggle}>
          Drawer content
        </Drawer>
      </div>
    )
  }
};

export const Custom: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(prev => !prev)

    return (
      <div>
        <Button type={open ? 'primary' : 'outline'} onClick={toggle}>Custom Drawer</Button>

        <Drawer
          open={open}
          onClose={toggle}
          placement='right'
          width='350px'
          closeIcon={<Button type='ghost' size='s'>Закрыть</Button>}
          title={<div>Header</div>}
          headerStyle={{backgroundColor: 'rgba(93, 245, 39, 0.15)'}}
          footer={<div>Footer</div>}
          footerStyle={{backgroundColor: 'rgba(93, 245, 39, 0.15)'}}
        >
          <Accordion title='Бегущий по лезвию' defaultOpen style={{padding: '16px 8px'}}>
            «Бегу́щий по ле́звию» (англ. Blade Runner) — художественный фильм, снятый английским режиссёром Ридли
            Скоттом в марте — июле 1981 года по мотивам научно-фантастического романа Филипа Дика «Мечтают ли андроиды
            об электроовцах?» (1968).
          </Accordion>
          <br/>
          <Accordion title='Бегущий по лезвию 2049' defaultOpen style={{padding: '16px 8px'}}>
            Фильм «Бегущий по лезвию 2049» подчёркивает, что важны лишь две идеи - вера и любовь, соединение которых
            является ключом к самой жизни. Именно они и отличают человека от репликанта и дают репликанту возможность
            стать человеком.
          </Accordion>
        </Drawer>
      </div>
    )
  }
};
