import { create } from '@storybook/theming/create'
import packageJson from '../packages/root/package.json'

// preview bg color: #f1f1f1
export const storybookTheme = create({
  base: 'light',
  colorPrimary: '#29313A',
  colorSecondary: '#1D3F88',
  appContentBg: '#fff',
  appBorderColor: 'rgba(11, 31, 53, 0.1)',
  fontBase: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif',
  // fontCode: 'Monaco, Menlo, monospace',
  textColor: '#29313A',
  barTextColor: '#6D7986',
  barSelectedColor: '#1D3F88',
  inputBg: '#fff',
  inputBorder: '#DBDEE1',
  inputTextColor: '#29313A',
  brandTitle: `eub-kit@${packageJson.version}`,
  brandImage: './images/eub-logo-full.svg'
})
