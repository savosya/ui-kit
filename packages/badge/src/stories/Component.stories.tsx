import * as React from 'react';
import {Badge} from '../Component';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const canvasStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}

export const Default = () => {

  return (
    //@ts-ignore
    <div style={canvasStyle}>
      <div>
        <Badge>Badge with no props</Badge>
      </div>

      <div>
        <Badge type='primary' number={'1'}>Primary</Badge>
      </div>

      <div>
        <Badge type='success' number={2}>Success</Badge>
      </div>

      <div>
        <Badge type='error' size='s' number={3}>Error small</Badge>
      </div>

      <div>
        <Badge type='warn' number={4}>Warning</Badge>
      </div>

      <div>
        <Badge type='warn' color='lightblue' size='m' number={20000}>Big number with custom color</Badge>
      </div>
    </div>
  )
};
