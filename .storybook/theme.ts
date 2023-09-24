import {create} from "@storybook/theming/create";
import packageJson from "../packages/root/package.json";

export const storybookTheme =  create({
  base: 'light',
  // colorPrimary: '#0B1F35',
  colorPrimary: '#29313A',
  // colorSecondary: '#EF3124',
  colorSecondary: '#E1056D',
  appContentBg: '#fff',
  appBorderColor: 'rgba(11, 31, 53, 0.1)',
  fontBase: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif',
  fontCode: 'Monaco, Menlo, monospace',
  // textColor: '#0B1F35',
  textColor: '#29313A',
  barTextColor: '#6D7986',
  // barSelectedColor: '#EF3124',
  barSelectedColor: '#E1056D',
  inputBg: '#fff',
  inputBorder: '#DBDEE1',
  // inputTextColor: '#0B1F35',
  inputTextColor: '#29313A',
  brandTitle: `eub-kit@${packageJson.version}`,
  brandImage: './images/eub-logo-full.svg',
});