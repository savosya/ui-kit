import { a as d, _ as f } from './CSSMotionList-c4d6cc01.js'
import { r as a, R as v } from './index-1cdf6ce0.js'
function I() {
  var e = f({}, v)
  return e.useId
}
var u = 0
function p(e) {
  var n = a.useState('ssr-id'),
    t = d(n, 2),
    s = t[0],
    i = t[1],
    r = I(),
    o = r == null ? void 0 : r()
  return (
    a.useEffect(function () {
      if (!r) {
        var c = u
        ;(u += 1), i('rc_unique_'.concat(c))
      }
    }, []),
    e || o || s
  )
}
export { p as u }
//# sourceMappingURL=useId-c7f0a29e.js.map
