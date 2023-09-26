import * as React from 'react';
import {Dropdown} from '../Component';

import {Button} from '../../../button/src/Component'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const canvasStyles = {
  display: 'flex',
  padding: 16,
}

export const Default = () => {
  function handleOverlayClick(e: Event) {
    console.log(`overlay click: `, e);
  }

  function handleVisibleChange(visible: any) {
    console.log('visible change', visible);
  }

  function handleSelect(key: string, o: any) {
    console.log(`${key} selected`)
  }

  const options = [
    {
      key: 'option 1',
      label: 'Option 1, Option 1Option ',
    },
    {
      key: 'option 2',
      label: 'Option 2',
      disabled: true
    },
    {
      key: 'option 3',
      label: 'Option 3',
    },
    {
      key: 'option 4',
      label: 'Option 4',
    }
  ]

  return (
    <div style={canvasStyles}>
      <Dropdown
        matchMaxTriggerWidth
        options={options}
        onSelect={handleSelect}
        onVisibleChange={handleVisibleChange}
        onOverlayClick={handleOverlayClick}
        trigger={'hover'}
        optionsSettings={{
          ellipsisOptions: true
        }}
        // hideAction={['click']}
      >
        <Button style={{width: 300}} type={'outline'} size={'s'}>HOVER ME</Button>
      </Dropdown>
    </div>
  )
};

