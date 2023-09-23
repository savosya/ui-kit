import type { StorybookConfig } from '@storybook/react-vite';
import * as path from 'path';
import * as fs from 'fs';
const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-actions', '@storybook/addon-links'
  // '@storybook/addon-styling',
  ],

  core: {},
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  viteFinal: async (config, {
    configType
  }) => {
    const packagesFolder = path.resolve(__dirname, '../packages');
    fs.readdir(packagesFolder, (err, files) => {
      if (err) {
        console.log(`Error reading directory: ${err}`);
        return;
      }

      /** Названия всех компонентов в папке packages */
      const cmpNames = files.filter(file => {
        return fs.statSync(`${packagesFolder}/${file}`).isDirectory();
      });

      /**
       * Алиасы на все компоненты в папке packages/.../src
       * Пример:
       *    config.resolve.alias = {
       *      ...config.resolve.alias,
       *      '@savosya/savosya-myuikit-button': path.resolve(__dirname, '../packages/button/src'),
       *    };
       * */
      cmpNames.forEach(cmp => Object.assign(config.resolve.alias, {
        [`@savosya/savosya-myuikit-${cmp}`]: path.resolve(__dirname, `../packages/${cmp}/src`)
      }));
    });
    config.resolve.mainFields = ['module', 'main'];
    return config;
  }
};
export default config;