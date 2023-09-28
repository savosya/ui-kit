import * as React from 'react';
import { Checkbox } from '../Component';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox
};

type Story = StoryObj<typeof Checkbox>;
export default meta;

export const Sandbox: Story = {
  args: {
    label: 'Подтвердить согласие'
  }
};

export const Sizes: Story = {
  render: () => {
    return (
      <div>
        <div>
          <Checkbox size="s" label={'Size S'} />
        </div>
        <br />
        <div>
          <Checkbox size="m" label={'Size M'} disabled />
        </div>
        <br />
        <div>
          <Checkbox size="l" label={'Size L'} />
        </div>
      </div>
    );
  }
};

// export const Hint = () => (
//   <div>
//     <Checkbox label='Согласны?' hint='Соглашайся'/>
//   </div>
// );

export const Intermediate: Story = {
  render: () => {
    return (
      <div>
        <Checkbox indeterminate label="Давай?" />
      </div>
    );
  }
};
