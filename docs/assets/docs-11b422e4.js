import { j as e, a as l, F as d } from './jsx-runtime-37f7df21.js'
import { f as s, M as p, h as f } from './index-089bb4e8.js'
import { C as u } from './css-vars.module-a69f3204.js'
import { s as b, T as g } from './Tabs-8b018486.js'
import './index-f1f2c4b1.js'
import { C as h, S as c, M as C, a as j, b as v, c as i } from './Component.stories-d3ee2030.js'
import { u as o } from './index-59d6410c.js'
import './iframe-f31e792b.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './CSSMotionList-d86c2cd4.js'
import './index-2d278ef6.js'
import './index-999a6a79.js'
import './useId-e95616b2.js'
import './pickAttrs-be982112.js'
import './tslib.es6-6635c9de.js'
import './Component-69536eab.js'
import './react-tooltip.min-60efb42a.js'
import './mergeRefs-dc8f3646.js'
import './Component-856ebfaa.js'
const y = '@savosya/savosya-myuikit-select',
  M = '1.0.1',
  S = 'Select',
  _ = 'ISC',
  k = 'index.js',
  x = 'build/esm/index.js',
  O = {
    '@savosya/savosya-myuikit-input': '^1.0.1',
    '@savosya/savosya-myuikit-loader': '^1.0.1',
    clsx: '^1.2.1',
    'rc-select': '^14.8.1',
    tslib: '^2.6.2'
  },
  D = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  X = { access: 'public', directory: 'build' },
  $ = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  w = '31d48558bb3b557afd22f848178c9f85fed90b38',
  H = {
    name: y,
    version: M,
    description: S,
    license: _,
    main: k,
    module: x,
    dependencies: O,
    peerDependencies: D,
    publishConfig: X,
    scripts: $,
    gitHead: w
  }
function r(t) {
  const n = Object.assign({ h3: 'h3' }, o(), t.components)
  return l(d, {
    children: [
      e(n.h3, { id: 'controlled', children: 'Controlled' }),
      `
`,
      e(s, { of: h, meta: c }),
      `
`,
      e(n.h3, { id: 'мультивыбор', children: 'Мультивыбор' }),
      `
`,
      e(s, { of: C, meta: c }),
      `
`,
      e(n.h3, { id: 'примеры-состояний-радиобатона', children: 'Примеры состояний радиобатона' }),
      `
`,
      e(s, { of: j, meta: c })
    ]
  })
}
function L(t = {}) {
  const { wrapper: n } = Object.assign({}, o(), t.components)
  return n ? e(n, Object.assign({}, t, { children: e(r, t) })) : r(t)
}
function a(t) {
  const n = Object.assign({ pre: 'pre', code: 'code' }, o(), t.components)
  return e(n.pre, {
    children: e(n.code, {
      className: 'language-css',
      children: `:root {
  --select-item-bg_default: #fff;
  --select-item-color_default: var(--text-primary);
  --select-item-bg_hover: #fafbfc;
  --select-item-bg_active: #f0f5fc;
  --select-item-bg_selected: #edf3fa;
  --select-item-color_selected: #4683c8;

  --select-item-border_default: #eff1f4;
}
`
    })
  })
}
function F(t = {}) {
  const { wrapper: n } = Object.assign({}, o(), t.components)
  return n ? e(n, Object.assign({}, t, { children: e(a, t) })) : a(t)
}
function m(t) {
  const n = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, o(), t.components)
  return l(d, {
    children: [
      e(p, { title: 'Components/Select', component: v, id: 'Select' }),
      `
`,
      e(u, {
        name: 'Select',
        version: H.version,
        package: '@eubank/kit-select',
        children: e(n.p, { children: 'Выпадающий список' })
      }),
      `
`,
      e(n.pre, {
        children: e(n.code, {
          className: 'language-jsx',
          children: `import { Select } from '@eubank/kit-ui'
import { Select } from '@eubank/kit-select'
`
        })
      }),
      `
`,
      e(s, Object.assign({ of: i, meta: c }, b)),
      `
`,
      e(g, { docs: e(L, {}), props: e(f, { of: i }), css: e(F, {}) })
    ]
  })
}
function ie(t = {}) {
  const { wrapper: n } = Object.assign({}, o(), t.components)
  return n ? e(n, Object.assign({}, t, { children: e(m, t) })) : m(t)
}
export { ie as default }
//# sourceMappingURL=docs-11b422e4.js.map
