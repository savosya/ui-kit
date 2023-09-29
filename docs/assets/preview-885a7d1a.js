import { j as s } from './jsx-runtime-276775ef.js'
import { c as o } from './chunk-6P7RB4HF-36fee097.js'
import './index-1cdf6ce0.js'
const e = '@savosya/savosya-myuikit-root',
  i = '1.0.1',
  t = 'Root',
  r = 'ISC',
  y = 'index.js',
  n = 'build/esm/index.js',
  c = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  d = { access: 'public', directory: 'build' },
  v = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  u = {
    '@savosya/savosya-myuikit-accordion': '^1.0.1',
    '@savosya/savosya-myuikit-attach': '^1.0.1',
    '@savosya/savosya-myuikit-badge': '^1.0.1',
    '@savosya/savosya-myuikit-breadcrumbs': '^1.0.1',
    '@savosya/savosya-myuikit-button': '^1.0.1',
    '@savosya/savosya-myuikit-checkbox': '^1.0.1',
    '@savosya/savosya-myuikit-counter': '^1.0.1',
    '@savosya/savosya-myuikit-divider': '^1.0.1',
    '@savosya/savosya-myuikit-drawer': '^1.0.1',
    '@savosya/savosya-myuikit-dropdown': '^1.0.1',
    '@savosya/savosya-myuikit-dropzone': '^1.0.1',
    '@savosya/savosya-myuikit-indicator': '^1.0.1',
    '@savosya/savosya-myuikit-input': '^1.0.1',
    '@savosya/savosya-myuikit-loader': '^1.0.1',
    '@savosya/savosya-myuikit-modal': '^1.0.1',
    '@savosya/savosya-myuikit-radio': '^1.0.1',
    '@savosya/savosya-myuikit-radio-group': '^1.0.1',
    '@savosya/savosya-myuikit-select': '^1.0.1',
    '@savosya/savosya-myuikit-tag': '^1.0.1',
    '@savosya/savosya-myuikit-textarea': '^1.0.1',
    '@savosya/savosya-myuikit-tooltip': '^1.0.1',
    '@savosya/savosya-myuikit-typography': '^1.0.1'
  },
  m = '222a3beed764b6bab4a9c8985ba06773d856cf8d',
  l = {
    name: e,
    version: i,
    description: t,
    license: r,
    main: y,
    module: n,
    peerDependencies: c,
    publishConfig: d,
    scripts: v,
    dependencies: u,
    gitHead: m
  },
  p = o({
    base: 'light',
    colorPrimary: '#29313A',
    colorSecondary: '#1D3F88',
    appContentBg: '#fff',
    appBorderColor: 'rgba(11, 31, 53, 0.1)',
    fontBase: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif',
    textColor: '#29313A',
    barTextColor: '#6D7986',
    barSelectedColor: '#1D3F88',
    inputBg: '#fff',
    inputBorder: '#DBDEE1',
    inputTextColor: '#29313A',
    brandTitle: `eub-kit@${l.version}`,
    brandImage: './images/eub-logo-full.svg'
  }),
  f = {
    parameters: {
      viewMode: 'docs',
      backgrounds: { disable: !0 },
      grid: { disable: !0 },
      options: { storySort: { order: ['General', 'Components'] } },
      docs: {
        theme: p,
        canvas: { layout: 'padded', withToolbar: !0, sourceState: 'hidden' },
        argTypes: { sort: 'requiredFirst', exclude: ['style'] },
        controls: { exclude: ['style'] }
      }
    },
    decorators: [a => s('div', { children: s(a, {}) })]
  }
export { f as default }
//# sourceMappingURL=preview-885a7d1a.js.map