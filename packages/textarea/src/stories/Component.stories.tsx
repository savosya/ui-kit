import * as React from 'react';
import {TextArea} from '../Component';

export default {
  title: 'Components/TextArea',
  component: TextArea,
};

const canvasStyle = {
  height: '100%',
  backgroundColor: '#CCCCCC',
  padding: 16,
}

export const Default = () => {

  return (
    <div style={canvasStyle}>
      <TextArea
        label='Заголовок'
        placeholder={'i\'m placing holder'}
        error
        hint='Подсказка'
        errorMsg='ОШИБКА'
        cols={40}
        rows={6}
        resizable={'both'}
      />
    </div>
  )
};

