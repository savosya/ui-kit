import * as React from 'react'
import { Select } from '../Component'
import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select
}

type Story = StoryObj<typeof Select>
export default meta

const options = [
  { label: 'Long White Long White Long White Long White Long White', value: 'white' },
  { label: 'Black', value: 'black', disabled: true },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green', disabled: true },
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Purple', value: 'purple' }
]

export const Sandbox: Story = {
  args: {
    options,
    label: 'Цвет',
    placeholder: '...'
  },
  argTypes: {
    value: { control: 'text' },
    multiple: { control: { disable: true } },
    optionsSettings: { control: { disable: true } },
    classes: { control: { disable: true } }
  }
}

export const Controlled = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<string | null>(null)

  return (
    <Select
      value={value}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onClean={() => setValue(null)}
      onChange={value => setValue(value as string)}
      open={open}
      label="Colors"
      placeholder={'pick color'}
      options={options}
    />
  )
}

export const Multiple = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <Select
      value={value}
      onChange={value => setValue(value as string[])}
      multiple
      label="Colors"
      placeholder={'pick color'}
      showSearch
      onClean={() => setValue([])}
      options={options}
    />
  )
}

export const States = () => {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Select multiple disabled label="Colors" placeholder={'pick color'} options={options} />
      <Select multiple loading label="Colors" placeholder={'pick color'} options={options} />
      <Select error errorMsg="Ошибка" multiple label="Colors" placeholder={'pick color'} options={options} />
    </div>
  )
}
