import * as React from 'react';
import {Textarea} from '../Component';

export default {
  title: 'Components/Textarea',
  component: Textarea,
};

export const Default = () => {

  return (
    <div>
      <Textarea
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

