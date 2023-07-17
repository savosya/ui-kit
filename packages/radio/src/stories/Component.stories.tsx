import * as React from 'react';
import {Radio} from '../Component';

export default {
  title: 'Components/Radio',
  component: <Radio/>,
};

export const Default = () => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
    <Radio name='fruit' label='Арбуз' value='watermelon' />
    <Radio name='fruit' label='Арбуз' value='watermelon' checked/>
    <Radio name='fruit' label='Арбуз' value='watermelon' markType='check' checked/>
  </div>
);

