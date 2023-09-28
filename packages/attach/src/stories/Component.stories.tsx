import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Attach } from '../Component'

const meta: Meta<typeof Attach> = {
  title: 'Attach',
  component: Attach
}

type Story = StoryObj<typeof Attach>
export default meta

/** description */
export const Sandbox: Story = {
  args: {},
  argTypes: {
    maxWidth: { control: 'text' },
    value: { control: { disable: true } },
    classes: { control: { disable: true } }
  }
}
