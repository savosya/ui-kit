import * as React from 'react';
import {RadioGroup} from '../Component';
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup
};

type Story = StoryObj<typeof RadioGroup>;
export default meta;

export const Sandbox: Story = {
  render: () => {
    const [value, setValue] = React.useState('watermelon')
    const [value2, setValue2] = React.useState('apple')

    const onChange = (newValue: string) => {
      setValue(newValue)
    }

    const onChange_2 = (newValue: string) => {
      setValue2(newValue)
    }

    return (
      <RadioGroup
        name='fruit'
        onChange={onChange}
        value={value}
        options={[
          {label: 'Яблоко', value: 'apple'},
          {label: 'Арбуз', value: 'watermelon'},
          {label: 'Груша', value: 'pear'},
        ]}
      />
    )
  }
};

export const Examples: Story = {
  render: () => {
    const [value, setValue] = React.useState('watermelon')
    const [value2, setValue2] = React.useState('apple')

    const onChange = (newValue: string) => {
      setValue(newValue)
    }

    const onChange_2 = (newValue: string) => {
      setValue2(newValue)
    }

    return (
      <div>
        <div>
          <RadioGroup
            direction={'vertical'}
            name='fruit'
            onChange={onChange}
            value={value}
            options={[
              {label: 'Яблоко', value: 'apple'},
              {label: 'Арбуз', value: 'watermelon'},
              {label: 'Груша', value: 'pear'},
            ]}
          />
        </div>
        <br/>
        <div>
          <RadioGroup
            name='fruit_2'
            onChange={onChange_2}
            value={value2}
            radioProps={{markType: 'check'}}
            options={[
              {label: 'Яблоко', value: 'apple'},
              {label: 'Арбуз', value: 'watermelon'},
              {label: 'Груша', value: 'pear'},
            ]}
          />
        </div>
      </div>
    )
  }
}

