import * as React from 'react';
import {Indicator} from '../Component';

export default {
  title: 'Components/Indicator',
  component: Indicator,
};

export const Default = () => {

  return (
    <div style={{display: 'flex', gap: '24px'}}>
      <div><Indicator /></div>
      <div><Indicator size={'s'} number={1} /></div>
      <div><Indicator number={2} /></div>
      <div><Indicator size={'l'} number={3} /></div>
    </div>
  )
};

