import React from 'react'
import { Preview } from '@storybook/react'
import { storybookTheme } from './theme'

import './public/manager.css.css'
import './public/preview.css'

const preview: Preview = {
  parameters: {
    viewMode: 'docs',
    backgrounds: { disable: true },
    grid: { disable: true },
    options: {
      storySort: {
        order: ['General', 'Components']
      }
    },
    docs: {
      theme: storybookTheme,
      canvas: {
        layout: 'padded',
        withToolbar: true,
        sourceState: 'hidden'
      },
      argTypes: {
        sort: 'requiredFirst',
        exclude: ['style']
      },
      controls: {
        exclude: ['style']
      }
    }
  },
  decorators: [
    Story => (
      <div>
        <Story />
      </div>
    )
  ]
}

export default preview
