import * as React from 'react'
import { useState } from 'react'
import { Textarea } from '../Component'
import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../../../checkbox/src'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea
}

type Story = StoryObj<typeof Textarea>
export default meta

export const Sandbox: Story = {
  args: {
    label: 'Заголовок',
    placeholder: 'Начните вводить текст',
    hint: 'Подсказка',
    cols: 40,
    rows: 6,
    resizable: 'both'
  },
  argTypes: {
    hint: { control: 'text' },
    errorMsg: { control: 'text' },
    classes: { control: { disable: true } }
  }
}

export const Controlled: Story = {
  render: () => {
    const [error, setError] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [value, setValue] = useState('')

    return (
      <div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <Checkbox label="Ошибка" checked={error} onChange={(_, { checked }) => setError(checked)} />
          <Checkbox label="Disabled" checked={disabled} onChange={(_, { checked }) => setDisabled(checked)} />
        </div>

        <Textarea
          label="Заголовок"
          value={value}
          disabled={disabled}
          onChange={e => setValue(e.currentTarget.value)}
          error={error}
          hint="Подсказка"
          errorMsg={error ? 'ОШИБКА' : undefined}
          cols={40}
          rows={4}
        />
      </div>
    )
  }
}
