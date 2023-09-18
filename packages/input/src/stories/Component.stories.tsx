import * as React from 'react';
import {Input} from '../Component';

export default {
  title: 'Components/Input',
  component: Input,
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
      <Input label={'123'} placeholder={'placeholder'}/>
      <Input placeholder={'placeholder pooo'} cleanable/>
      <Input label={'123'} placeholder={'placeholder'} showTooltip tooltipProps={{title: 'hello'}}/>
      <Input label={'123'} placeholder={'placeholder'} showTooltip tooltipProps={{title: 'hello'}} disabled/>
      <Input
        label='ФИО'
        placeholder='placeholder pooo'
        hint='подсказка'
        error
        errorMsg='Ошибка поля ввода.'
        showTooltip
        tooltipProps={{content: 'Ошибка'}}
        addonsLeft={<div>123</div>}
        addonsRight={<div>456</div>}
        cleanable
      />

      {/*@ts-ignore*/}
      <div style={{display: 'flex', gap: 16}}>
        <Input type={'search'} placeholder={'Search'} cleanable/>
        <Input type='password' cleanable error errorMsg={'213'} placeholder={'Password'}/>
      </div>
    </div>
  )
};
