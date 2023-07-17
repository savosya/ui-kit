import * as React from 'react';
import {RadioGroup} from '../Component';

export default {
  title: 'Components/RadioGroup',
  component: <RadioGroup/>,
};

export const Default = () => {
  const [value, setValue] = React.useState('watermelon')

  const onChange = (newValue: string) => {
    setValue(newValue)
  }

  return (
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
  )
};

