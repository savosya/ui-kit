import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Component';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => <Button onClick={action('clicked')}>Click me</Button>;
export const Red = () => <Button red onClick={action('clicked')}>I'm disabled</Button>;

