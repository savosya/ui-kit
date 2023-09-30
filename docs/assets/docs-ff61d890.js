import { j as e, a as i, F as a } from './jsx-runtime-37f7df21.js'
import { M as p, f as d, h as m } from './index-20fbbb8e.js'
import { C as l } from './css-vars.module-a69f3204.js'
import { s as u, T as b } from './Tabs-8b018486.js'
import './index-f1f2c4b1.js'
import { D as f, S as t, a as g } from './Component.stories-01cf5af9.js'
import { u as s } from './index-59d6410c.js'
import './iframe-1ac63061.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
const D = '@savosya/savosya-myuikit-dropzone',
  j = '1.0.1',
  z = 'Dropzone',
  C = 'ISC',
  h = 'index.js',
  x = 'build/esm/index.js',
  k = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  v = { access: 'public', directory: 'build' },
  M = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  O = { clsx: '^1.2.1', tslib: '^2.6.2' },
  y = '31d48558bb3b557afd22f848178c9f85fed90b38',
  X = {
    name: D,
    version: j,
    description: z,
    license: C,
    main: h,
    module: x,
    peerDependencies: k,
    publishConfig: v,
    scripts: M,
    dependencies: O,
    gitHead: y
  }
function r(n) {
  const o = Object.assign({ pre: 'pre', code: 'code' }, s(), n.components)
  return e(o.pre, {
    children: e(o.code, {
      className: 'language-css',
      children: `:root {
  --dropzone-active-bg: transparent;
  --dropzone-border-radius: 4px;
  --dropzone-border-color: var(--bg-header);
}
`
    })
  })
}
function S(n = {}) {
  const { wrapper: o } = Object.assign({}, s(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(r, n) })) : r(n)
}
function c(n) {
  const o = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, s(), n.components)
  return i(a, {
    children: [
      e(p, { title: 'Components/Dropzone', component: f, id: 'Dropzone' }),
      `
`,
      e(l, {
        name: 'Dropzone',
        version: X.version,
        package: '@eubank/kit-dropzone',
        children: e(o.p, { children: 'Дропзона для загрузки файлов' })
      }),
      `
`,
      e(o.pre, {
        children: e(o.code, {
          className: 'language-jsx',
          children: `import { Dropzone } from '@eubank/kit-root'
import { Dropzone } from '@eubank/kit-dropzone'
`
        })
      }),
      `
`,
      e(d, Object.assign({ of: t, meta: g }, u)),
      `
`,
      e(b, { props: e(m, { of: t }), css: e(S, {}) })
    ]
  })
}
function K(n = {}) {
  const { wrapper: o } = Object.assign({}, s(), n.components)
  return o ? e(o, Object.assign({}, n, { children: e(c, n) })) : c(n)
}
export { K as default }
//# sourceMappingURL=docs-ff61d890.js.map