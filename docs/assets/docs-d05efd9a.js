import { j as n, a as d, F as m } from './jsx-runtime-37f7df21.js'
import { f as i, M as p, h as l } from './index-089bb4e8.js'
import { C as u } from './css-vars.module-a69f3204.js'
import { s as f, T as b } from './Tabs-8b018486.js'
import './index-f1f2c4b1.js'
import { A as g } from './Component-8fb68d72.js'
import { Sandbox as t, Controlled as h, Dynamic as C } from './Component.stories-0361c762.js'
import { u as e } from './index-59d6410c.js'
import './iframe-f31e792b.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './Component-723ebd17.js'
import './mergeRefs-dc8f3646.js'
import './Component-856ebfaa.js'
import './tslib.es6-6635c9de.js'
import './Component-0fc422e6.js'
const j = '@savosya/savosya-myuikit-accordion',
  x = '1.0.1',
  A = 'Accordion',
  M = 'ISC',
  v = 'index.js',
  O = 'build/esm/index.js',
  k = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  y = { access: 'public', directory: 'build' },
  D = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  _ = { clsx: '^1.2.1', tslib: '^2.6.2' },
  X = '31d48558bb3b557afd22f848178c9f85fed90b38',
  $ = {
    name: j,
    version: x,
    description: A,
    license: M,
    main: v,
    module: O,
    peerDependencies: k,
    publishConfig: y,
    scripts: D,
    dependencies: _,
    gitHead: X
  }
function r(o) {
  const c = Object.assign({ h3: 'h3', p: 'p' }, e(), o.components)
  return d(m, {
    children: [
      n(c.h3, { id: 'стандартный-accordion', children: 'Стандартный Accordion' }),
      `
`,
      n(i, { of: t }),
      `
`,
      n(c.h3, { id: 'controlled-accordion', children: 'Controlled Accordion' }),
      `
`,
      n(c.p, { children: 'Управлять состоянием компонента можно явно передавая props open.' }),
      `
`,
      n(i, { of: h }),
      `
`,
      n(c.h3, { id: 'accordion-с-динамическим-контентом', children: 'Accordion с динамическим контентом' }),
      `
`,
      n(i, { of: C })
    ]
  })
}
function w(o = {}) {
  const { wrapper: c } = Object.assign({}, e(), o.components)
  return c ? n(c, Object.assign({}, o, { children: n(r, o) })) : r(o)
}
function s(o) {
  const c = Object.assign({ pre: 'pre', code: 'code' }, e(), o.components)
  return n(c.pre, {
    children: n(c.code, {
      className: 'language-css',
      children: `:root {
  --accordion-divider-color: var(--bg-primary);
  --accordion-color_extra: #414141;

  --accrodion-bg: #fff;
  --accrodion-bg_disabled: var(--bg-info);
}
`
    })
  })
}
function H(o = {}) {
  const { wrapper: c } = Object.assign({}, e(), o.components)
  return c ? n(c, Object.assign({}, o, { children: n(s, o) })) : s(o)
}
function a(o) {
  const c = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, e(), o.components)
  return d(m, {
    children: [
      n(p, { title: 'Components/Accordion', component: g, id: 'Components/Accordion' }),
      `
`,
      n(u, {
        name: 'Accordion',
        version: $.version,
        package: '@eubank/kit-accordion',
        children: n(c.p, { children: 'Компонент Accordion позволяет спрятать/показать часть контента.' })
      }),
      `
`,
      n(c.pre, {
        children: n(c.code, {
          className: 'language-jsx',
          children: `import { Accordion } from '@eubank/kit-ui'
import { Accordion } from '@eubank/kit-accordion'
`
        })
      }),
      `
`,
      n(i, Object.assign({ of: t }, f)),
      `
`,
      n(b, { docs: n(w, {}), props: n(l, { of: t }), css: n(H, {}) })
    ]
  })
}
function nn(o = {}) {
  const { wrapper: c } = Object.assign({}, e(), o.components)
  return c ? n(c, Object.assign({}, o, { children: n(a, o) })) : a(o)
}
export { nn as default }
//# sourceMappingURL=docs-d05efd9a.js.map
