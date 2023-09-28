import * as React from 'react'
import { Divider } from '../Component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider
}

type Story = StoryObj<typeof Divider>
export default meta

export const Sandbox: Story = {
  args: {
    color: '#21272E'
  },
  argTypes: {
    margin: { control: 'text' }
  }
}
