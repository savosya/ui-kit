import * as React from 'react';
import {Loader} from '../Component';

export default {
  title: 'Components/Loader',
  component: <Loader/>,
};

export const Default = () => {

  return (
    <div>
      <Loader size={48} fill={false}/>

      <div>
        <Loader/>
      </div>
    </div>
  )
};
