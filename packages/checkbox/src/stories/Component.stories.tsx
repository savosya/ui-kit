import * as React from 'react';
import {Checkbox} from '../Component';

export default {
  title: 'Components/Checkbox',
  component: <Checkbox/>,
};

export const Default = () => (
  <div style={{width: 100}}>
    <Checkbox name='name1' label={'Подтвердить согласие'}/>
  </div>
);

