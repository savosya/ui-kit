import React from 'react';
import {Preview} from '@storybook/react';
import cn from 'clsx'
import {storybookTheme} from "./theme";


const preview: Preview = {
  parameters: {
    viewMode: 'docs',
    backgrounds: { disable: true },
    grid: {disable: true},
    docs: {
      theme: storybookTheme,
      page: () => (
        <>
          123
        </>
      ),
      components: {
        h1: ({ children, ...restProps }) => (
          <h1 {...restProps} className={cn(restProps.className, 'sbdocs-h1')}>
            {children}
          </h1>
        ),
        h2: ({ children, ...restProps }) => (
          <h2 {...restProps} className={cn(restProps.className, 'sbdocs-h2')}>
            {children}
          </h2>
        ),
        h3: ({ children, ...restProps }) => (
          <h2 {...restProps} className={cn(restProps.className, 'sbdocs-h3')}>
            {children}
          </h2>
        ),
        h4: ({ children, ...restProps }) => (
          <h4 {...restProps} className={cn(restProps.className, 'sbdocs-h4')}>
            {children}
          </h4>
        ),
        p: ({ children, ...restProps }) => (
          <p {...restProps} className={cn(restProps.className, 'sbdocs-p')}>
            {children}
          </p>
        ),
        li: ({ children, ...restProps }) => (
          <li {...restProps} className={cn(restProps.className, 'sbdocs-li')}>
            {children}
          </li>
        ),
      },
    }
  },

  decorators: [
    (Story) => (
      <div style={{
        boxSizing: "border-box",
        height: '100%',
        width: '100%',
        // padding: 16,
        // backgroundColor: '#F4F6F8',
        margin: 0
      }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story/>
      </div>
    ),
  ],
};

export default preview;