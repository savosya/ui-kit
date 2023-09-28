import * as React from 'react'
import { Tag } from '../Component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag
}

type Story = StoryObj<typeof Tag>
export default meta

const canvasStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 16
}
export const Sandbox: Story = {
  render: () => {
    return (
      <div style={canvasStyles}>
        <Tag disabled>Disabled</Tag>
        <Tag transparent>Transparent</Tag>
        <Tag size="s">Пример тэга S</Tag>
        <Tag>Пример тэга M</Tag>
        <Tag size="l">Пример тэга L</Tag>
      </div>
    )
  }
}
