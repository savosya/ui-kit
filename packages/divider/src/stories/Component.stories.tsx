import * as React from 'react';
import {Divider} from '../Component';

export default {
  title: 'Components/Divider',
  component: Divider,
};

const canvasStyles = {
  display: 'flex',
  backgroundColor: '#CCCCCC',
  height: 300,
  padding: 16,
  gap: 16
}

export const Default = () => {

  return (
    <div style={canvasStyles}>
      <Divider  />
    </div>
  )
};
