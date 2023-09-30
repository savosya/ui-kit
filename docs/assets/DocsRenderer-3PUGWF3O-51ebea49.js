import { _ as a } from './iframe-f31e792b.js'
import { R as e, r as c } from './index-f1f2c4b1.js'
import { r as u, u as h } from './react-18-5dbe1ec7.js'
import { d as l, A as d, H as E, D as x } from './index-089bb4e8.js'
import '../sb-preview/runtime.js'
import './index-c74c9f7f.js'
import './chunk-6P7RB4HF-36fee097.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
var _ = { code: l, a: d, ...E },
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
          a(
            () => import('./index-3373d152.js'),
            ['./index-3373d152.js', './index-59d6410c.js', './index-f1f2c4b1.js'],
            import.meta.url
          )
            .then(({ MDXProvider: p }) =>
              u(
                e.createElement(
                  D,
                  { showException: i, key: Math.random() },
                  e.createElement(p, { components: n }, e.createElement(s, { context: t, docsParameter: r }))
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
//# sourceMappingURL=DocsRenderer-3PUGWF3O-51ebea49.js.map
