import * as React from 'react';
// import {action} from '@storybook/addon-actions';
import {Select} from '../Component';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Default = () => <Select/>;
export const WithOptions = () => <Select options={[
  {text: 'A', value: 'A'},
  {text: 'B', value: 'B'},
  {text: 'C', value: 'C'},
]}/>;

