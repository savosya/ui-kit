import * as React from 'react';
import {Loader} from '../Component';

export default {
  title: 'Components/Loader',
  component: <Loader/>,
};

export const Default = () => <Loader size={48} fill={false}/>;

export const WrappedLoader = () => <Loader/>


