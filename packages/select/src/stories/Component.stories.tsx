import * as React from 'react';
import {Select} from '../Component';

export default {
  title: 'Components/Select',
  component: Select,
};

const canvasStyles = {
  backgroundColor: '#CCCCCC',
  height: 300,
  padding: 16,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16
}

export const Default = () => {


  return (
    //@ts-ignore
    <div style={canvasStyles}>
      <Select options={[
        {label: 'Яблоко', value: 'apple'},
        {label: 'Арбуз', value: 'watermelon', disabled: true},
        {label: 'Груша', value: 'pear'},
      ]}/>
    </div>
  )
};
