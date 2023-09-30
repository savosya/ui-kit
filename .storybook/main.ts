import type { StorybookConfig } from '@storybook/react-vite'
import * as path from 'path'
import * as fs from 'fs'

const config: StorybookConfig = {
  stories: [
    '../_docs/**/*.stories.@(ts|md)x',
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/**/docs.mdx'
  ],
  addons: [getAbsolutePath('@storybook/addon-essentials'), getAbsolutePath('@storybook/addon-mdx-gfm')],
  staticDirs: ['./public'],
  core: {},
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },
  docs: {
    docsMode: false,
    autodocs: true,
    defaultName: 'Docs'
  },
  viteFinal: async (config, { configType }) => {
    const packagesFolder = path.resolve(__dirname, '../packages')
    fs.readdir(packagesFolder, (err, files) => {
      if (err) {
        console.log(`Error reading directory: ${err}`)
        return
      }

      /** Названия всех компонентов в папке packages */
      const cmpNames = files.filter(file => {
        return fs.statSync(`${packagesFolder}/${file}`).isDirectory()
      })

      /**
       * Алиасы на все компоненты в папке packages/.../src
       * Пример:
       *    config.resolve.alias = {
       *      ...config.resolve.alias,
       *      '@savosya/savosya-myuikit-button': path.resolve(__dirname, '../packages/button/src'),
       *    };
       * */
      cmpNames.forEach(cmp =>
        Object.assign(config.resolve.alias, {
          [`@savosya/savosya-myuikit-${cmp}`]: path.resolve(__dirname, `../packages/${cmp}/src`)
        })
      )
      // Object.assign(config.resolve.alias, {
      //   '.storybook': path.resolve(__dirname)
      // })
    })

    /** Названия всех компонентов в папке packages */
    // const docsFolder = path.resolve(__dirname, '../_docs')
    // fs.readdir(docsFolder, (err, files) => {
    //   if (err) {
    //     console.log(`Error reading directory: ${err}`)
    //     return
    //   }
    //
    //   const docNames = files.filter(file => {
    //     return fs.statSync(`${packagesFolder}/${file}`).isDirectory()
    //   })
    //
    // })

    Object.assign(config.resolve.alias, {
      ['docs']: path.resolve(__dirname, '../_docs')
    })

    config.resolve.mainFields = ['module', 'main']
    return config
  }
}
export default config

function getAbsolutePath(value: string): any {
  return path.dirname(require.resolve(path.join(value, 'package.json')))
}
