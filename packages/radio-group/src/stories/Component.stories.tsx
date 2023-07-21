import * as React from 'react';
import {RadioGroup} from '../Component';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};

export const Default = () => {
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
};

