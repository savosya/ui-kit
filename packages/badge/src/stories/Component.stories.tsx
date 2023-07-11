import * as React from 'react';
import { Badge } from '../Component';

export default {
  title: 'Components/Badge',
  component: Badge,
};

export const Default = () => <Badge>Badge with no props</Badge>;
export const Primary = () => <Badge type='primary' number={'1'}>Primary</Badge>;
export const Success = () => <Badge type='success' number={2}>Success</Badge>;
export const Error = () => <Badge type='error' number={3}>Error</Badge>;
export const Warn = () => <Badge type='warn' number={4}>Warning</Badge>;
export const CustomColor = () => <Badge type='warn' color='red' number={200}>Big number with custom color</Badge>;

