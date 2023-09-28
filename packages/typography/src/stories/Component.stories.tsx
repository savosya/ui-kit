import * as React from 'react';
import { useState } from 'react';
import { Typography, TextProps } from '../index';

import { RadioGroup } from '../../../radio-group/src';

export default {
  title: 'Components/Typography',
  component: Typography
};

const canvasStyles = {
  display: 'flex',
  gap: '64px',
  padding: 16
};

export const Sandbox = {
  render: () => {
    const [weight, setWeight] = useState<TextProps['weight']>('regular');

    return (
      <>
        <RadioGroup
          style={{ marginBottom: 16 }}
          value={weight}
          onChange={(newValue: TextProps['weight']) => setWeight(newValue)}
          options={[
            { label: 'regular', value: 'regular' },
            { label: 'medium', value: 'medium' },
            { label: 'bold', value: 'bold' }
          ]}
        />

        <div style={canvasStyles}>
          <div>
            <Typography.Title weight={weight} tag={'div'}>
              Heading div
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h6'}>
              Heading h6
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h5'}>
              Heading h5
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h4'}>
              Heading h4
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h3'}>
              Heading h3
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h2'}>
              Heading h2
            </Typography.Title>
            <Typography.Title weight={weight} tag={'h1'}>
              Heading h1
            </Typography.Title>
          </div>

          <div>
            <Typography.Text weight={weight} level={1} block>
              Text level 1
            </Typography.Text>
            <Typography.Text weight={weight} level={2} block>
              Text level 2
            </Typography.Text>
            <Typography.Text weight={weight} level={3} block>
              Text level 3
            </Typography.Text>
            <Typography.Text weight={weight} level={4} block>
              Text level 4
            </Typography.Text>
            <Typography.Text weight={weight} level={5} block>
              Text level 5
            </Typography.Text>
            <Typography.Text weight={weight} level={6} block>
              Text level 6
            </Typography.Text>
            <Typography.Text weight={weight} level={7} block>
              Text level 7
            </Typography.Text>
            <Typography.Text weight={weight} level={8} block>
              Text level 8
            </Typography.Text>
            <Typography.Text weight={weight} level={9} block>
              Text level 9
            </Typography.Text>
            <Typography.Text weight={weight} level={10} block>
              Text level 10
            </Typography.Text>
            <Typography.Text weight={weight} level={11} block>
              Text level 11
            </Typography.Text>
          </div>
        </div>
      </>
    );
  }
};
