import * as React from 'react'
import { Loader } from '../Component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader
}

type Story = StoryObj<typeof Loader>
export default meta

export const Sandbox: Story = {
  args: {
    fill: false
  },
  argTypes: {
    classes: { controls: { disable: true } }
  }
}

const styles: React.CSSProperties = {
  border: '2px solid #21272E',
  height: '400px',
  borderRadius: '10px'
}
export const NotFilled: Story = {
  render: () => {
    return (
      <div style={styles}>
        <Loader size={32} />
      </div>
    )
  }
}
