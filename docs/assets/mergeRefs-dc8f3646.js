import { r as u } from './index-f1f2c4b1.js'
let s
function a(e) {
  e.key === 'Tab' && (s = 'keyboard')
}
function i() {
  s = 'mouse'
}
function d() {
  s = 'mouse'
}
function l() {
  document.addEventListener('keydown', a),
    document.addEventListener('mousedown', i),
    document.addEventListener('touchstart', d)
}
const E = (e, n) => {
  const [t, f] = u.useState(!1),
    c = u.useCallback(
      function () {
        ;(!n || n === s) && f(!0)
      },
      [n]
    ),
    r = u.useCallback(function () {
      f(!1)
    }, [])
  return (
    u.useEffect(
      function () {
        const o = e.current
        return (
          o && (o.addEventListener('focusin', c), o.addEventListener('focusout', r)),
          function () {
            o && (o.removeEventListener('focusin', c), o.removeEventListener('focusout', r))
          }
        )
      },
      [r, c, e]
    ),
    u.useEffect(l, []),
    [t]
  )
}
function v(e) {
  return n => {
    e.forEach(t => {
      typeof t == 'function' ? t(n) : t != null && (t.current = n)
    })
  }
}
export { v as m, E as u }
//# sourceMappingURL=mergeRefs-dc8f3646.js.map
