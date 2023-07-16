import * as React from 'react';
import {Input} from '../Component';

export default {
  title: 'Components/Input',
  component: <Input/>,
};

export const Default = () => <Input label={'123'} placeholder={'placeholder pooo'}/>;
export const Error = () => <Input
  label='ФИО'
  placeholder='placeholder pooo'
  hint='подсказка'
  error
  errorMsg='Ошибка поля ввода.'
  showTooltip
  tooltipProps={{content: 'Ошибка'}}
  addonsLeft={<div>123</div>}
  addonsRight={<div>456</div>}
/>;

