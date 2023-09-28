import * as React from 'react'
import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../../../checkbox/src'
import { Counter } from '../Component'

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter
}

type Story = StoryObj<typeof Counter>
export default meta

export const Sandbox: Story = {
  args: {}
}

export const Controlled: Story = {
  render: () => {
    const [disabled, setDisabled] = useState(false)
    const [readOnly, setReadOnly] = useState(false)
    const [value, setValue] = useState(42)

    const onSub = newValue => setValue(newValue)
    const onAdd = newValue => setValue(newValue)
    const onChange = newValue => setValue(newValue)

    return (
      <div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <Checkbox label="Disabled" checked={disabled} onChange={(_, { checked }) => setDisabled(checked)} />
          <Checkbox label="Read Only" checked={readOnly} onChange={(_, { checked }) => setReadOnly(checked)} />
        </div>

        <Counter
          value={value}
          onAdd={onSub}
          onSub={onAdd}
          onChange={onChange}
          max={45}
          min={41}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>
    )
  }
}
