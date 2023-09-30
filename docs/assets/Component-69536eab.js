import { r as t } from './index-f1f2c4b1.js'
import { g as b, W as C } from './react-tooltip.min-60efb42a.js'
import { c as i } from './clsx.m-1229b3e0.js'
const e = {
    root: 'savosya-tooltip_root__8kw4',
    dark: 'savosya-tooltip_dark__D2A4',
    light: 'savosya-tooltip_light__qcyd',
    small_padding: 'savosya-tooltip_small_padding__QpMx',
    title: 'savosya-tooltip_title__SB45',
    content: 'savosya-tooltip_content__sLnB',
    withTitle: 'savosya-tooltip_withTitle__QAuU',
    arrow: 'savosya-tooltip_arrow__AhQF',
    anchor: 'savosya-tooltip_anchor__y9-O'
  },
  D = d => {
    const {
        title: a,
        content: l,
        mode: s = 'dark',
        children: p,
        placement: _ = 'top',
        offset: m,
        hideDelay: v,
        openDelay: h,
        hideArrow: y,
        clickable: f,
        open: g,
        style: u,
        position: w,
        onShow: k,
        onHide: T,
        opacity: N = 0.94,
        float: S,
        trigger: n = 'hover',
        className: A,
        classes: o
      } = d,
      [r] = t.useState(`tooltip_${b()}`),
      c = n === 'click',
      [E, x] = t.useState(!1),
      H = t.useCallback(() => {
        c && x(O => !O)
      }, [n])
    return t.createElement(
      t.Fragment,
      null,
      t.createElement('a', { className: i(e.anchor, r, o == null ? void 0 : o.anchor), onClick: H }, p),
      a || l
        ? t.createElement(
            C,
            {
              anchorSelect: `.${r}`,
              variant: s,
              place: _,
              offset: m,
              delayHide: v,
              delayShow: h,
              noArrow: y,
              clickable: f,
              isOpen: g || (c ? E : void 0),
              style: u,
              position: w,
              afterShow: k,
              afterHide: T,
              opacity: N,
              className: i(e.root, e[s], { [e.small_padding]: a && !l }, A, o == null ? void 0 : o.root),
              classNameArrow: i(e.arrow, o == null ? void 0 : o.arrow),
              float: S
            },
            a && t.createElement('div', { className: i(e.title, o == null ? void 0 : o.title) }, a),
            l &&
              t.createElement(
                'div',
                { className: i(e.content, e[s], { [e.withTitle]: a && l }, o == null ? void 0 : o.content) },
                l
              )
          )
        : null
    )
  }
D.__docgenInfo = { description: '', methods: [], displayName: 'Tooltip' }
export { D as T }
//# sourceMappingURL=Component-69536eab.js.map
