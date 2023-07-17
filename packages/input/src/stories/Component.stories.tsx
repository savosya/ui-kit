import * as React from 'react';
import {Input} from '../Component';

export default {
  title: 'Components/Input',
  component: <Input/>,
};

const canvasStyles = {
  backgroundColor: 'lightgray',
  height: 500,
  padding: 16,
  display: 'flex',
  gap: 16
}

export const Default = () => {


  return (
    <div style={canvasStyles}>
      <Input label={'123'} placeholder={'placeholder'}/>
      <Input placeholder={'placeholder pooo'}/>
      <Input label={'123'} placeholder={'placeholder'} showTooltip tooltipProps={{title: 'hello'}}/>
      <Input label={'123'} placeholder={'placeholder'} showTooltip tooltipProps={{title: 'hello'}} disabled/>
    </div>
  )
};
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

