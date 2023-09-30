import { a as m, F as b, j as i } from './jsx-runtime-37f7df21.js'
import { r as o } from './index-f1f2c4b1.js'
import { c as f } from './clsx.m-1229b3e0.js'
import { c as r } from './css-vars.module-a69f3204.js'
const p = [
    { value: 'docs', label: 'Документация' },
    { value: 'props', label: 'Свойства' },
    { value: 'css', label: 'CSS Переменные' },
    { value: 'canvas', label: 'Canvas' }
  ],
  u = 'STICKY_CANVAS_CLASS',
  A = { className: u, withToolbar: !1 },
  g = () => {
    const t = document.querySelector(`.${u}`)
    if (!t) {
      console.warn('[stickCanvas]: Canvas not found.')
      return
    }
    ;(t.style.position = 'sticky'), (t.style.top = '0'), (t.style.zIndex = '100')
  },
  S = () => {
    const t = document.querySelector(`.${u}`)
    if (!t) {
      console.warn('[unstickCanvas]: Canvas not found.')
      return
    }
    t.style.position = 'relative'
  },
  N = ({ ...t }) => {
    const [l, v] = o.useState(Object.keys(t)[0]),
      a = o.useRef(null),
      n = o.useRef(null)
    o.useLayoutEffect(() => {
      document.querySelectorAll('[data-category-value]').forEach(e => {
        e.getAttribute('data-category-value') === l && a != null && a.current && d(e)
      })
    }, [])
    const C = o.useCallback(e => {
        const c = e.target,
          s = c.getAttribute('data-category-value')
        s === 'props' ? g() : S(), s && (d(c), v(s))
      }, []),
      d = o.useCallback(e => {
        if (!(a != null && a.current) || !(n != null && n.current)) return
        const c = n == null ? void 0 : n.current.getBoundingClientRect(),
          s = e.getBoundingClientRect(),
          y = s.right - s.left
        ;(a.current.style.transform = `translateX(${s.x - c.x - 8}px)`), (a.current.style.width = `${y + 16}px`)
      }, [])
    return m(b, {
      children: [
        m('div', {
          className: r.categoryList,
          ref: n,
          children: [
            p.map(
              ({ value: e, label: c }) =>
                !!t[e] &&
                i(
                  'div',
                  {
                    className: f(r.categoryItem, { [r.activeItem]: e === l }),
                    'data-category-value': e,
                    onClick: C,
                    children: c
                  },
                  e
                )
            ),
            i('div', { ref: a, className: r.categoryTracker })
          ]
        }),
        i('div', { className: r.content, children: t[l] })
      ]
    })
  }
export { N as T, A as s }
//# sourceMappingURL=Tabs-8b018486.js.map
