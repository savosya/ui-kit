import * as React from 'react'
import { Indicator } from '../Component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Indicator> = {
  title: 'Indicator',
  component: Indicator
}

type Story = StoryObj<typeof Indicator>
export default meta

const style: React.CSSProperties = { display: 'flex', gap: '24px' }
export const Sandbox: Story = {
  render: args => {
    return (
      <div style={style}>
        <Indicator {...args} />
        <Indicator size="s" number={1} />
        <Indicator size="m" number={2} />
        <Indicator size="l" number={3} />
      </div>
    )
  },
  argTypes: {
    size: { control: { disable: true } },
    number: { control: 'text' }
  }
}
