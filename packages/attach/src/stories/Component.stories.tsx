import * as React from 'react';
import {Attach} from '../Component';

export default {
  title: 'Components/Attach',
  component: Attach,
};


const canvasStyle = {
  padding: 16,
  backgroundColor: '#CCCCCC'
}
export const Default = () => {

  return (
    <div style={canvasStyle}>
      <Attach
        // disabled
        // loading
        ellipsisDescription
        ellipsisTitle
        title='Страница, на которой указана причина выхода на пенсию'
        description='Описание страницы, на которой указана причина выхода на пенсию'
      />
    </div>
  )
};

