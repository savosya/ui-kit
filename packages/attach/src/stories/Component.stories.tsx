import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Attach as AttachCmp} from '../Component';



const meta: Meta<typeof AttachCmp> = {
  title: 'Components/Attach',
  component: AttachCmp
};

type Story = StoryObj<typeof AttachCmp>;
export default meta;

/** description */
export const Sandbox: Story = {
  args: {}
};
