import * as React from 'react';
import {Tooltip} from '../Component';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

const canvasStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
}

export const Default = () => (
  //@ts-ignore
  <div style={canvasStyle}>
    <Tooltip title={'TITLE'} clickable opacity={1} placement={'right-end'}>
      <button>I am a button</button>
    </Tooltip>

    <Tooltip content={'only content. not clickable'}>
      <button>I am a button</button>
    </Tooltip>

    <Tooltip title={'TITLE'} content={<div>Im function stool tip! long long long <div><button>понятно</button></div></div>} clickable>
      <button>I am a button</button>
    </Tooltip>
  </div>
);

