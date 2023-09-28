import * as React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Radio } from '../Component'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio
}

type Story = StoryObj<typeof Radio>
export default meta

export const Sandbox: Story = {
  args: {
    label: 'Radio'
  },
  argTypes: {
    classes: { control: { disable: true } },
    // hint: {control: 'text' },
    label: { control: 'text' }
  }
}

export const States: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio label="Inactive" value="watermelon" />
        <Radio label="Disabled" value="watermelon" disabled />
        <Radio name="fruit" label="Арбуз" value="watermelon" />
        <Radio name="fruit" label="Арбуз" value="watermelon" checked />
        <Radio name="fruit" label="Арбуз" value="watermelon" markType="check" checked />
      </div>
    )
  }
}
