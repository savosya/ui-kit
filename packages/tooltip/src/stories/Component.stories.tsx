import * as React from 'react';
import {Tooltip} from '../Component';

export default {
  title: 'Components/Tooltip',
  component: <Tooltip>Tooltip</Tooltip>,
};

export const Default = () => (
  <Tooltip title={'TITLE'} content={<div>Im function stool tip! long long long <div><button>понятно</button></div></div>} clickable>
    <button>I am a button</button>
  </Tooltip>
);

