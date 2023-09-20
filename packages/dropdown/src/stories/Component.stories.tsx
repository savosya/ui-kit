import * as React from 'react';
import {Dropdown} from '../Component';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const canvasStyles = {
  display: 'flex',
  backgroundColor: '#CCCCCC',
  height: 300,
  padding: 16,
  gap: 16
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
        matchMaxTriggerWidth={false}
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
        <button style={{width: 300}}>HOVER ME</button>
        {/*<div style={{*/}
        {/*  width: 400,*/}
        {/*  height: 200,*/}
        {/*  border: '1px solid black',*/}
        {/*  display: "flex",*/}
        {/*  justifyContent: 'center',*/}
        {/*  alignItems: 'center'*/}
        {/*}}>*/}
        {/*  plat*/}
        {/*</div>*/}
      </Dropdown>
    </div>
  )
};

