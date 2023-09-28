import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../Component';

import { Button } from '../../../button/src/Component';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown
};

type Story = StoryObj<typeof Dropdown>;
export default meta;

const canvasStyles: React.CSSProperties = {
  display: 'flex',
  gap: 12
};

const options = [
  {
    key: 'option 1',
    label: 'Long Option 1, Option 1, Option 1, Option 1'
  },
  {
    key: 'option 2',
    label: 'Option 2',
    disabled: true
  },
  {
    key: 'option 3',
    label: 'Option 3'
  },
  {
    key: 'option 4',
    label: 'Option 4'
  }
];

export const Sandbox: Story = {
  render: () => {
    const options = [
      {
        key: 'option 1',
        label: 'Long Option 1, Option 1, Option 1, Option 1'
      },
      {
        key: 'option 2',
        label: 'Option 2',
        disabled: true
      },
      {
        key: 'option 3',
        label: 'Option 3'
      },
      {
        key: 'option 4',
        label: 'Option 4'
      }
    ];

    return (
      <div style={canvasStyles}>
        <Dropdown options={options}>
          <Button>Menu</Button>
        </Dropdown>
      </div>
    );
  }
};

export const Examples: Story = {
  render: () => {
    function handleSelect(key: string, option: any) {
      alert(`${key} selected\n${JSON.stringify(option, null, 2)}`);
    }

    return (
      <div style={canvasStyles}>
        <Dropdown
          options={options}
          onSelect={handleSelect}
          trigger="hover"
          style={{ width: 200 }}
          optionsSettings={{
            ellipsis: false,
            wrap: true
          }}
        >
          <Button type="outline" size="s">
            Hover Me (Wrap Options)
          </Button>
        </Dropdown>

        <Dropdown
          options={options}
          style={{ width: 200 }}
          optionsSettings={{
            ellipsis: true,
            wrap: false,
            divider: true
          }}
        >
          <Button type="outline" size="s">
            Click Me (Ellipsis Options)
          </Button>
        </Dropdown>

        <Dropdown matchMaxTriggerWidth options={options} hideAction={['click']} showAction={['hover']}>
          <Button type="outline" size="s" style={{ width: 400 }}>
            Long Trigger (Разные типы тригеров)
          </Button>
        </Dropdown>
      </div>
    );
  }
};

const placementStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12
};
const placementRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  justifyContent: 'space-evenly'
};
export const Placements: Story = {
  render: () => {
    // "topLeft" | "top" | "topRight" | "bottomLeft" | "bottom" | "bottomRight"
    return (
      <div style={placementStyle}>
        <div style={placementRowStyle}>
          <Dropdown options={options} trigger="hover" placement="topLeft">
            <Button type="outline" size="s">
              Top Left
            </Button>
          </Dropdown>

          <Dropdown options={options} trigger="hover" placement="top">
            <Button type="outline" size="s">
              Top
            </Button>
          </Dropdown>

          <Dropdown options={options} trigger="hover" placement="topRight">
            <Button type="outline" size="s">
              Top Right
            </Button>
          </Dropdown>
        </div>

        <div style={placementRowStyle}>
          <Dropdown options={options} trigger="hover" placement="bottomLeft">
            <Button type="outline" size="s">
              Bottom Left
            </Button>
          </Dropdown>

          <Dropdown options={options} trigger="hover" placement="bottom">
            <Button type="outline" size="s">
              Bottom
            </Button>
          </Dropdown>

          <Dropdown options={options} trigger="hover" placement="bottomRight">
            <Button type="outline" size="s">
              Bottom Right
            </Button>
          </Dropdown>
        </div>
      </div>
    );
  }
};

const ContextMenuStyle: React.CSSProperties = {
  height: '100px',
  border: '2px solid #21272E',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
export const ContextMenu: Story = {
  render: () => {
    return (
      <Dropdown options={options} trigger="contextMenu" alignPoint>
        <div style={ContextMenuStyle}>Right Click Me</div>
      </Dropdown>
    );
  }
};
