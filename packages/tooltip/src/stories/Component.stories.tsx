import * as React from 'react';
import {Tooltip} from '../Component';
import {Meta, StoryObj} from "@storybook/react";

import {Button} from '../../../button/src/Component'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip
};

type Story = StoryObj<typeof Tooltip>;
export default meta;

export const Sandbox: Story = {
  args: {
    title: 'Tooltip Title',
    opacity: 1,
    children: 'Tooltip Content',
    placement: 'right'
  }
}

const canvasStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
}

export const Examples = () => (
  <div style={canvasStyle}>
    <Tooltip title={'С возможностью клика внутри тултипа'} clickable opacity={1} placement={'right-end'}>
      Clickable tooltip.
    </Tooltip>

    <Tooltip content={'Only content. Not clickable'}>
      Без возможности клика внутри тултипа
    </Tooltip>

    <Tooltip
      title='TITLE'
      content={
        <div>
          <div>Im function stool tip! long long long</div>
          <Button type='ghost' mode='light' size='s'>понятно</Button>
        </div>
      }
      clickable
      opacity={1}
    >
      Im tooltip with actions
    </Tooltip>
  </div>
);

