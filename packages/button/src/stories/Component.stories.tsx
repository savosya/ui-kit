import * as React from 'react'
import { Button } from '../Component'
import { Meta, StoryObj } from '@storybook/react'

const SampleIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.0331 10.6051C15.0641 13.626 17.9678 14.6313 18 14.6441C17.9755 14.715 17.536 16.0767 16.4702 17.4833C15.5488 18.6993 14.5925 19.9109 13.0861 19.936C11.6059 19.9606 11.13 19.1434 9.43767 19.1434C7.7459 19.1434 7.21708 19.9109 5.81591 19.9606C4.36184 20.0103 3.25458 18.6456 2.32554 17.434C0.427169 14.9557 -1.02358 10.4309 0.92441 7.37654C1.89213 5.85974 3.62152 4.89924 5.49862 4.87461C6.92648 4.85002 8.27421 5.74204 9.14707 5.74204C10.0194 5.74204 11.6572 4.6693 13.3789 4.82685C14.0997 4.85394 16.1229 5.08976 17.4221 6.80694C17.3174 6.86554 15.0079 8.07958 15.0331 10.6051V10.6051ZM12.2512 3.18722C13.0232 2.34342 13.5427 1.16877 13.401 0C12.2883 0.0403841 10.9427 0.669574 10.1446 1.51291C9.42926 2.25973 8.80283 3.45505 8.97185 4.60069C10.2121 4.68734 11.4792 4.03156 12.2512 3.18722"
        fill="currentColor"
      />
    </svg>
  )
}
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button
}

type Story = StoryObj<typeof Button>
export default meta

export const Sandbox: Story = {
  args: {
    children: 'Кнопка'
  },
  argTypes: {
    leftIcon: { control: 'text' },
    rightIcon: { control: 'text' },
    classes: { control: { disable: true } }
  }
}

const RowStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8
}

export const Primary: Story = {
  render: () => {
    return (
      <div>
        <div style={RowStyles}>
          <Button type="primary" mode="light" leftIcon={<SampleIcon />} loading />
          <Button type="primary" mode="light" leftIcon={<SampleIcon />} />
          <Button type="primary" mode="light" leftIcon={<SampleIcon />} disabled>
            Кнопка
          </Button>
          <Button type="primary" mode="light" size="s" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="primary" mode="light" size="m" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="primary" mode="light" size="l" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
        </div>
        <br />
        <div style={RowStyles}>
          <Button type="primary" mode="dark" leftIcon={<SampleIcon />} loading />
          <Button type="primary" mode="dark" leftIcon={<SampleIcon />} />
          <Button type="primary" mode="dark" leftIcon={<SampleIcon />} disabled>
            Кнопка
          </Button>
          <Button type="primary" mode="dark" size="s" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="primary" mode="dark" size="m" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="primary" mode="dark" size="l" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
        </div>
      </div>
    )
  }
}
export const Outline: Story = {
  render: () => {
    return (
      <div>
        <div style={RowStyles}>
          <Button type="outline" mode="light" leftIcon={<SampleIcon />} loading />
          <Button type="outline" mode="light" leftIcon={<SampleIcon />} />
          <Button type="outline" mode="light" leftIcon={<SampleIcon />} disabled>
            Кнопка
          </Button>
          <Button type="outline" mode="light" size="s" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="outline" mode="light" size="m" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="outline" mode="light" size="l" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
        </div>
        <br />
        <div style={RowStyles}>
          <Button type="outline" mode="dark" leftIcon={<SampleIcon />} loading />
          <Button type="outline" mode="dark" leftIcon={<SampleIcon />} />
          <Button type="outline" mode="dark" leftIcon={<SampleIcon />} disabled>
            Кнопка
          </Button>
          <Button type="outline" mode="dark" size="s" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="outline" mode="dark" size="m" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="outline" mode="dark" size="l" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
        </div>
      </div>
    )
  }
}

export const Ghost: Story = {
  render: () => {
    return (
      <div>
        <div style={RowStyles}>
          <Button type="ghost" mode="light" leftIcon={<SampleIcon />} loading />
          <Button type="ghost" mode="light" leftIcon={<SampleIcon />} />
          <Button type="ghost" mode="light" leftIcon={<SampleIcon />} disabled>
            Кнопка
          </Button>
          <Button type="ghost" mode="light" size="s" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="ghost" mode="light" size="m" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="ghost" mode="light" size="l" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
        </div>
        <br />
        <div style={RowStyles}>
          <Button type="ghost" mode="dark" leftIcon={<SampleIcon />} loading />
          <Button type="ghost" mode="dark" leftIcon={<SampleIcon />} />
          <Button type="ghost" mode="dark" leftIcon={<SampleIcon />} disabled>
            Кнопка
          </Button>
          <Button type="ghost" mode="dark" size="s" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="ghost" mode="dark" size="m" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="ghost" mode="dark" size="l" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
        </div>
      </div>
    )
  }
}

export const Link: Story = {
  render: () => {
    return (
      <div>
        <div style={RowStyles}>
          <Button type="link" mode="light" leftIcon={<SampleIcon />} loading />
          <Button type="link" mode="light" leftIcon={<SampleIcon />} />
          <Button type="link" mode="light" leftIcon={<SampleIcon />} disabled>
            Кнопка
          </Button>
          <Button type="link" mode="light" size="s" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="link" mode="light" size="m" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
          <Button type="link" mode="light" size="l" leftIcon={<SampleIcon />}>
            Кнопка
          </Button>
        </div>
      </div>
    )
  }
}
