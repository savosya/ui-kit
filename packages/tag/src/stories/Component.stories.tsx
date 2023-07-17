import * as React from 'react';
import {Tag} from '../Component';

export default {
  title: 'Components/Tag',
  component: <Tag />,
};

export const Default = () => {

  return (
    <div>
      <Tag size='s'>Пример тэга S</Tag>
      <Tag>Пример тэга M</Tag>
      <Tag size='l'>Пример тэга L</Tag>
    </div>
  )
};

