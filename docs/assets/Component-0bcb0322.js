import { j as n, a as d } from './jsx-runtime-276775ef.js'
import { r as o } from './index-1cdf6ce0.js'
import { c as i } from './clsx.m-1229b3e0.js'
const h = ({}) =>
  n('svg', {
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: n('path', {
      d: 'M3.75004 10.4987C3.7497 10.6739 3.81073 10.8437 3.92254 10.9787C3.98551 11.0546 4.06283 11.1174 4.15009 11.1634C4.23735 11.2094 4.33283 11.2378 4.43106 11.2468C4.5293 11.2559 4.62835 11.2455 4.72256 11.2162C4.81676 11.1869 4.90426 11.1393 4.98004 11.0762L9.00004 7.71618L13.0275 10.9562C13.1043 11.0185 13.1925 11.065 13.2873 11.0931C13.382 11.1212 13.4814 11.1302 13.5797 11.1198C13.678 11.1093 13.7732 11.0795 13.8599 11.0322C13.9466 10.9848 14.0232 10.9207 14.085 10.8437C14.1533 10.7661 14.2048 10.6752 14.2363 10.5768C14.2678 10.4783 14.2786 10.3744 14.268 10.2716C14.2575 10.1688 14.2258 10.0693 14.1749 9.97927C14.1241 9.88928 14.0552 9.81078 13.9725 9.74868L9.47254 6.12618C9.33834 6.01587 9.17001 5.95557 8.99629 5.95557C8.82258 5.95557 8.65424 6.01587 8.52004 6.12618L4.02004 9.87618C3.92928 9.95142 3.85753 10.047 3.81062 10.1552C3.76371 10.2633 3.74296 10.381 3.75004 10.4987Z',
      fill: '#A3ABB6'
    })
  })
try {
  ;(h.displayName = 'ChevroneIcon'), (h.__docgenInfo = { description: '', displayName: 'ChevroneIcon', props: {} })
} catch {}
const A = () =>
    d('svg', {
      width: '18',
      height: '18',
      viewBox: '0 0 18 18',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        n('path', {
          d: 'M3.16669 9.40512C3.16669 8.8675 3.39017 8.3519 3.78798 7.97174C4.18578 7.59158 4.72532 7.37801 5.2879 7.37801H12.7121C13.2747 7.37801 13.8143 7.59158 14.2121 7.97174C14.6099 8.3519 14.8334 8.8675 14.8334 9.40512V14.4729C14.8334 15.0105 14.6099 15.5261 14.2121 15.9063C13.8143 16.2864 13.2747 16.5 12.7121 16.5H5.2879C4.72532 16.5 4.18578 16.2864 3.78798 15.9063C3.39017 15.5261 3.16669 15.0105 3.16669 14.4729V9.40512Z',
          fill: '#A3ABB6'
        }),
        n('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M5.28787 5.04744C5.28787 4.1066 5.67897 3.2043 6.37513 2.53902C7.07129 1.87375 8.01548 1.5 8.99999 1.5C9.98451 1.5 10.9287 1.87375 11.6249 2.53902C12.321 3.2043 12.7121 4.1066 12.7121 5.04744V8.0881H11.6515V5.04744C11.6515 4.37541 11.3722 3.73091 10.8749 3.25571C10.3776 2.78052 9.70322 2.51355 8.99999 2.51355C8.29677 2.51355 7.62234 2.78052 7.12509 3.25571C6.62783 3.73091 6.34848 4.37541 6.34848 5.04744V8.0881H5.28787V5.04744Z',
          fill: '#A3ABB6'
        })
      ]
    }),
  H = '_root_9zu2k_9',
  B = '_disabled_9zu2k_22',
  R = '_header_9zu2k_29',
  b = '_title_9zu2k_40',
  O = '_description_9zu2k_47',
  L = '_right_9zu2k_55',
  M = '_extra_9zu2k_61',
  S = '_chevroneIcon_9zu2k_70',
  j = '_close_9zu2k_76',
  E = '_divider_9zu2k_80',
  Z = '_content_9zu2k_97',
  t = {
    root: H,
    disabled: B,
    header: R,
    title: b,
    description: O,
    right: L,
    extra: M,
    chevroneIcon: S,
    close: j,
    divider: E,
    content: Z
  },
  y = ({
    children: p,
    title: s,
    description: x,
    extra: N,
    open: l,
    defaultOpen: k = !1,
    disabled: r,
    onVisibleChange: a,
    chevroneIcon: f,
    style: V,
    classes: e
  }) => {
    const m = typeof l == 'boolean',
      w = o.useMemo(() => (r ? n(A, {}) : f || n(h, {})), [r, f]),
      C = o.useRef(null),
      [v, z] = o.useState(null),
      [_, I] = o.useState(l || k),
      q = o.useCallback(() => {
        I(u => (m ? u : !u))
      }, [a])
    o.useEffect(() => {
      a == null || a(!_)
    }, [_, l]),
      o.useEffect(() => {
        var g
        const u = ((g = C.current) == null ? void 0 : g.offsetHeight) || null
        z(u)
      }, [])
    const c = m ? l : _
    return d('div', {
      className: i(t.root, e == null ? void 0 : e.root, { [t.disabled]: r }),
      style: V,
      children: [
        d('div', {
          className: i(t.header, e == null ? void 0 : e.header, { [t.disabled]: r }),
          onClick: q,
          children: [
            d('div', {
              children: [
                n('div', { className: i(t.title, e == null ? void 0 : e.title), children: s }),
                n('div', { className: i(t.description, e == null ? void 0 : e.description), children: x })
              ]
            }),
            d('div', {
              className: t.right,
              children: [
                n('div', { className: i(t.extra, e == null ? void 0 : e.extra), children: N }),
                n('div', {
                  className: i(t.chevroneIcon, { [t.close]: !c && !r }, e == null ? void 0 : e.icon),
                  children: w
                })
              ]
            })
          ]
        }),
        n('div', { className: i(t.divider, e == null ? void 0 : e.divider, { [t.disabled]: r, [t.close]: !c }) }),
        n('div', {
          ref: C,
          className: i(t.content, e == null ? void 0 : e.content, { [t.close]: !c }),
          style: v === null ? void 0 : { maxHeight: c ? v : 0 },
          children: p
        })
      ]
    })
  }
try {
  ;(y.displayName = 'Accordion'),
    (y.__docgenInfo = {
      description: '',
      displayName: 'Accordion',
      props: {
        title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'ReactNode' } },
        description: {
          defaultValue: null,
          description: '',
          name: 'description',
          required: !1,
          type: { name: 'ReactNode' }
        },
        extra: { defaultValue: null, description: '', name: 'extra', required: !1, type: { name: 'ReactNode' } },
        open: { defaultValue: null, description: '', name: 'open', required: !1, type: { name: 'boolean' } },
        defaultOpen: {
          defaultValue: { value: 'false' },
          description: '',
          name: 'defaultOpen',
          required: !1,
          type: { name: 'boolean' }
        },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        onVisibleChange: {
          defaultValue: null,
          description: '',
          name: 'onVisibleChange',
          required: !1,
          type: { name: '((visible: boolean) => void)' }
        },
        chevroneIcon: {
          defaultValue: null,
          description: '',
          name: 'chevroneIcon',
          required: !1,
          type: { name: 'ReactNode' }
        },
        classes: {
          defaultValue: null,
          description: '',
          name: 'classes',
          required: !1,
          type: {
            name: '{ root?: string; header?: string; title?: string | undefined; description?: string | undefined; extra?: string | undefined; icon?: string | undefined; divider?: string | undefined; content?: string | undefined; } | undefined'
          }
        },
        style: { defaultValue: null, description: '', name: 'style', required: !1, type: { name: 'CSSProperties' } }
      }
    })
} catch {}
export { y as A }
//# sourceMappingURL=Component-0bcb0322.js.map
