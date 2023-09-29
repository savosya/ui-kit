import { a as u, F as f, j as e } from './jsx-runtime-276775ef.js'
import { M as x, d as k, e as g } from './index-01c745a6.js'
import { c as p, C as j } from './css-vars.module-db4806dd.js'
import { r as c } from './index-1cdf6ce0.js'
import { c as M } from './clsx.m-1229b3e0.js'
import { T as m, S, a as D } from './Component.stories-d2a076c8.js'
import { u as b } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './Component-1bfaf9fc.js'
import './tslib.es6-6635c9de.js'
import './mergeRefs-3b77d02e.js'
const N = ({ custom: o, ...a }) => {
    const s = c.useRef(null),
      r = c.useRef(null),
      [l, h] = c.useState(o[0].value),
      T = c.useMemo(() => {
        let t = {}
        return (
          o.forEach(n => {
            t[n.value] = n.component
          }),
          t
        )
      }, [])
    c.useLayoutEffect(() => {
      document.querySelectorAll('[data-category-value]').forEach(t => {
        t.getAttribute('data-category-value') === l && s != null && s.current && d(t)
      })
    }, [])
    const v = c.useCallback(t => {
        const n = t.target,
          i = n.getAttribute('data-category-value')
        i && (d(n), h(i))
      }, []),
      d = c.useCallback(t => {
        if (!(s != null && s.current) || !(r != null && r.current)) return
        const n = r == null ? void 0 : r.current.getBoundingClientRect(),
          i = t.getBoundingClientRect(),
          C = i.right - i.left
        ;(s.current.style.transform = `translateX(${i.x - n.x - 8}px)`), (s.current.style.width = `${C + 16}px`)
      }, [])
    return u(f, {
      children: [
        u('div', {
          className: p.categoryList,
          ref: r,
          children: [
            o.map(({ value: t, label: n }) =>
              e(
                'div',
                {
                  className: M(p.categoryItem, { [p.activeItem]: t === l }),
                  'data-category-value': t,
                  onClick: v,
                  children: n
                },
                t
              )
            ),
            e('div', { ref: s, className: p.categoryTracker })
          ]
        }),
        e('div', { className: p.content, children: T[l] })
      ]
    })
  },
  A = '@savosya/savosya-myuikit-typography',
  E = '1.0.1',
  X = 'Typography',
  w = 'ISC',
  H = 'index.js',
  I = 'build/esm/index.js',
  L = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  O = { access: 'public', directory: 'build' },
  V = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  B = { clsx: '^1.2.1', tslib: '^2.6.2' },
  F = '31d48558bb3b557afd22f848178c9f85fed90b38',
  _ = {
    name: A,
    version: E,
    description: X,
    license: w,
    main: H,
    module: I,
    peerDependencies: L,
    publishConfig: O,
    scripts: V,
    dependencies: B,
    gitHead: F
  }
function y(o) {
  const a = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, b(), o.components)
  return u(f, {
    children: [
      e(x, { title: 'Components/Typography', component: m, id: 'Typography' }),
      `
`,
      e(j, {
        name: 'Typography',
        version: _.version,
        package: '@eubank/kit-typography',
        children: e(a.p, { children: 'Типографика' })
      }),
      `
`,
      e(a.pre, {
        children: e(a.code, {
          className: 'language-jsx',
          children: `import { Typography } from '@eubank/kit-root'
import { Typography } from '@eubank/kit-typography'
`
        })
      }),
      `
`,
      e(k, { of: S, meta: D }),
      `
`,
      e(N, {
        custom: [
          { label: 'Title', value: 'title', component: e(g, { of: m.Title }) },
          { label: 'Text', value: 'text', component: e(g, { of: m.Text }) }
        ]
      })
    ]
  })
}
function se(o = {}) {
  const { wrapper: a } = Object.assign({}, b(), o.components)
  return a ? e(a, Object.assign({}, o, { children: e(y, o) })) : y(o)
}
export { se as default }
//# sourceMappingURL=docs-76103024.js.map
