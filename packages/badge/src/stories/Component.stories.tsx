import * as React from 'react';
import { Badge } from '../Component';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Default = () => <Badge>Badge with no props</Badge>;
export const Primary = () => <Badge type='primary' number={'1'}>Primary</Badge>;
export const Success = () => <Badge type='success' number={2}>Success</Badge>;
export const Error = () => <Badge type='error' size='s' number={3}>Error</Badge>;
export const Warn = () => <Badge type='warn' number={4}>Warning</Badge>;
export const CustomColor = () => <Badge type='warn' color='lightblue' size='m' number={20000}>Big number with custom color</Badge>;
