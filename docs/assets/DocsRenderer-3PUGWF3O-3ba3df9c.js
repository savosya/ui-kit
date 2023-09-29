import { _ as p } from './iframe-aa443103.js'
import { a as e, r as c } from './index-1cdf6ce0.js'
import { r as u, u as h } from './react-18-402ca549.js'
import { C as l, A as E, H as d, D as x } from './index-01c745a6.js'
import '../sb-preview/runtime.js'
import './index-a01a9712.js'
import './chunk-6P7RB4HF-36fee097.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
var _ = { code: l, a: E, ...d },
  D = class extends c.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 })
    }
    static getDerivedStateFromError() {
      return { hasError: !0 }
    }
    componentDidCatch(t) {
      let { showException: r } = this.props
      r(t)
    }
    render() {
      let { hasError: t } = this.state,
        { children: r } = this.props
      return t ? null : r
    }
  },
  O = class {
    constructor() {
      ;(this.render = async (t, r, o) => {
        let n = { ..._, ...(r == null ? void 0 : r.components) },
          s = x
        return new Promise((m, i) => {
          p(
            () => import('./index-6a11e4a4.js'),
            ['./index-6a11e4a4.js', './index-69b0450a.js', './index-1cdf6ce0.js'],
            import.meta.url
          )
            .then(({ MDXProvider: a }) =>
              u(
                e.createElement(
                  D,
                  { showException: i, key: Math.random() },
                  e.createElement(a, { components: n }, e.createElement(s, { context: t, docsParameter: r }))
                ),
                o
              )
            )
            .then(() => m())
        })
      }),
        (this.unmount = t => {
          h(t)
        })
    }
  }
export { O as DocsRenderer, _ as defaultComponents }
//# sourceMappingURL=DocsRenderer-3PUGWF3O-3ba3df9c.js.map
