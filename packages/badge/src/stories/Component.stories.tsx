import * as React from 'react';
import {Badge} from '../Component';
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge
};

type Story = StoryObj<typeof Badge>;
export default meta;

export const Sandbox: Story = {
  args: {
    children: 'Бейджик',
    number: '13'
  }
}


const ColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}
const RowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '12px'
}
export const Examples: Story = {
  render: () => {
    return (
      <div style={ColStyle}>
        <div style={RowStyle}>
          <Badge type='primary' number='1' size='s'>Primary S</Badge>
          <Badge type='primary' number='2' size='m'>Primary M</Badge>
        </div>

        <div style={RowStyle}>
          <Badge type='error' number='3' size='s'>Error S</Badge>
          <Badge type='error' number='4' size='m'>Error M</Badge>
        </div>

        <div style={RowStyle}>
          <Badge type='success' number={6} size='s'>Success S</Badge>
          <Badge type='success' number={7} size='m'>Success M</Badge>
        </div>

        <div style={RowStyle}>
          <Badge type='warn' size='s' number={8}>Warn S</Badge>
          <Badge type='warn' size='m' number={9}>Warn M</Badge>
        </div>

        <div style={RowStyle}>
          <Badge>No Props Badge</Badge>
          <Badge color='lightblue' number={20000}>Big number with custom color</Badge>
        </div>
      </div>
    )
  }
}
