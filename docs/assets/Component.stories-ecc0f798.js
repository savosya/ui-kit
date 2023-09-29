import { j as n, a as E } from './jsx-runtime-276775ef.js'
import { r as A, a } from './index-1cdf6ce0.js'
import { _ as ke } from './assertThisInitialized-bd9b18e4.js'
import { w as Me, K as me, c as fe, s as ve, b as _e, a as De, d as Re } from './CSSMotionList-c4d6cc01.js'
import { T as Ae } from './index-a336c5aa.js'
import { c as Z } from './index-3ffce462.js'
import { c as L } from './clsx.m-1229b3e0.js'
import { B as u } from './Component-c0d8cf01.js'
var Te = me.ESC,
  Be = me.TAB
function Ve(e) {
  var s = e.visible,
    i = e.triggerRef,
    c = e.onVisibleChange,
    g = e.autoFocus,
    o = e.overlayRef,
    l = A.useRef(!1),
    d = function () {
      if (s) {
        var t, p
        ;(t = i.current) === null || t === void 0 || (p = t.focus) === null || p === void 0 || p.call(t),
          c == null || c(!1)
      }
    },
    w = function () {
      var t
      return (t = o.current) !== null && t !== void 0 && t.focus ? (o.current.focus(), (l.current = !0), !0) : !1
    },
    b = function (t) {
      switch (t.keyCode) {
        case Te:
          d()
          break
        case Be: {
          var p = !1
          l.current || (p = w()), p ? t.preventDefault() : d()
          break
        }
      }
    }
  A.useEffect(
    function () {
      return s
        ? (window.addEventListener('keydown', b),
          g && Me(w, 3),
          function () {
            window.removeEventListener('keydown', b), (l.current = !1)
          })
        : function () {
            l.current = !1
          }
    },
    [s]
  )
}
var Ne = A.forwardRef(function (e, s) {
    var i = e.overlay,
      c = e.arrow,
      g = e.prefixCls,
      o = A.useMemo(
        function () {
          var d
          return typeof i == 'function' ? (d = i()) : (d = i), d
        },
        [i]
      ),
      l = fe(s, o == null ? void 0 : o.ref)
    return a.createElement(
      a.Fragment,
      null,
      c && a.createElement('div', { className: ''.concat(g, '-arrow') }),
      a.cloneElement(o, { ref: ve(o) ? l : void 0 })
    )
  }),
  O = { adjustX: 1, adjustY: 1 },
  S = [0, 0],
  ze = {
    topLeft: { points: ['bl', 'tl'], overflow: O, offset: [0, -4], targetOffset: S },
    top: { points: ['bc', 'tc'], overflow: O, offset: [0, -4], targetOffset: S },
    topRight: { points: ['br', 'tr'], overflow: O, offset: [0, -4], targetOffset: S },
    bottomLeft: { points: ['tl', 'bl'], overflow: O, offset: [0, 4], targetOffset: S },
    bottom: { points: ['tc', 'bc'], overflow: O, offset: [0, 4], targetOffset: S },
    bottomRight: { points: ['tr', 'br'], overflow: O, offset: [0, 4], targetOffset: S }
  },
  Le = [
    'arrow',
    'prefixCls',
    'transitionName',
    'animation',
    'align',
    'placement',
    'placements',
    'getPopupContainer',
    'showAction',
    'hideAction',
    'overlayClassName',
    'overlayStyle',
    'visible',
    'trigger',
    'autoFocus',
    'overlay',
    'children',
    'onVisibleChange'
  ]
function Ee(e, s) {
  var i,
    c = e.arrow,
    g = c === void 0 ? !1 : c,
    o = e.prefixCls,
    l = o === void 0 ? 'rc-dropdown' : o,
    d = e.transitionName,
    w = e.animation,
    b = e.align,
    h = e.placement,
    t = h === void 0 ? 'bottomLeft' : h,
    p = e.placements,
    P = p === void 0 ? ze : p,
    j = e.getPopupContainer,
    W = e.showAction,
    T = e.hideAction,
    q = e.overlayClassName,
    F = e.overlayStyle,
    $ = e.visible,
    B = e.trigger,
    x = B === void 0 ? ['hover'] : B,
    V = e.autoFocus,
    N = e.overlay,
    C = e.children,
    f = e.onVisibleChange,
    ye = _e(e, Le),
    he = a.useState(),
    K = De(he, 2),
    we = K[0],
    J = K[1],
    I = 'visible' in e ? $ : we,
    X = a.useRef(null),
    Y = a.useRef(null),
    G = a.useRef(null)
  a.useImperativeHandle(s, function () {
    return X.current
  })
  var Q = function (v) {
    J(v), f == null || f(v)
  }
  Ve({ visible: I, triggerRef: G, onVisibleChange: Q, autoFocus: V, overlayRef: Y })
  var be = function (v) {
      var z = e.onOverlayClick
      J(!1), z && z(v)
    },
    U = function () {
      return a.createElement(Ne, { ref: Y, overlay: N, prefixCls: l, arrow: g })
    },
    Ce = function () {
      return typeof N == 'function' ? U : U()
    },
    Oe = function () {
      var v = e.minOverlayWidthMatchTrigger,
        z = e.alignPoint
      return 'minOverlayWidthMatchTrigger' in e ? v : !z
    },
    Se = function () {
      var v = e.openClassName
      return v !== void 0 ? v : ''.concat(l, '-open')
    },
    xe = a.cloneElement(C, {
      className: Z((i = C.props) === null || i === void 0 ? void 0 : i.className, I && Se()),
      ref: ve(C) ? fe(G, C.ref) : void 0
    }),
    H = T
  return (
    !H && x.indexOf('contextMenu') !== -1 && (H = ['click']),
    a.createElement(
      Ae,
      ke({ builtinPlacements: P }, ye, {
        prefixCls: l,
        ref: X,
        popupClassName: Z(q, Re({}, ''.concat(l, '-show-arrow'), g)),
        popupStyle: F,
        action: x,
        showAction: W,
        hideAction: H,
        popupPlacement: t,
        popupAlign: b,
        popupTransitionName: d,
        popupAnimation: w,
        popupVisible: I,
        stretch: Oe() ? 'minWidth' : '',
        popup: Ce(),
        onPopupVisibleChange: Q,
        onPopupClick: be,
        getPopupContainer: j
      }),
      xe
    )
  )
}
const Pe = a.forwardRef(Ee),
  je = '_childWrapper_1jwzb_9',
  We = '_menu_1jwzb_14',
  qe = '_menuItem_1jwzb_26',
  Fe = '_ellipsis_1jwzb_59',
  $e = '_wrap_1jwzb_66',
  Ie = '_border_1jwzb_69',
  He = '_disabled_1jwzb_83',
  y = { childWrapper: je, menu: We, menuItem: qe, ellipsis: Fe, wrap: $e, border: Ie, disabled: He }
const r = ({
  children: e,
  matchMaxTriggerWidth: s,
  placement: i = 'bottomLeft',
  onOverlayClick: c,
  onVisibleChange: g,
  onSelect: o,
  overlayStyle: l,
  trigger: d = 'click',
  showAction: w,
  hideAction: b,
  alignPoint: h,
  options: t = [],
  optionsSettings: p = {},
  withAnimation: P = !0,
  classes: j = {},
  style: W
}) => {
  const { ellipsis: T = !0, wrap: q = !1, divider: F = !1 } = p,
    { overlay: $, open: B, option: x, menu: V, wrapper: N } = j,
    C = A.useMemo(
      () =>
        n('div', {
          className: L(y.menu, V),
          style: W,
          children:
            t == null
              ? void 0
              : t.map(f =>
                  n(
                    'div',
                    {
                      className: L(y.menuItem, x, {
                        [y.ellipsis]: T,
                        [y.wrap]: q && !T,
                        [y.border]: F,
                        [y.disabled]: f.disabled
                      }),
                      onClick: o ? () => o(f.key, f) : void 0,
                      children: f.label
                    },
                    f.key
                  )
                )
        }),
      [t, o, V, x]
    )
  return n(Pe, {
    overlayClassName: L(y.overlay, $),
    openClassName: B,
    prefixCls: 'eub-dropdown',
    animation: P ? 'slide-up' : void 0,
    overlay: C,
    trigger: d,
    onVisibleChange: g,
    autoFocus: !1,
    minOverlayWidthMatchTrigger: s,
    placement: i,
    onOverlayClick: c,
    overlayStyle: l,
    showAction: w,
    hideAction: b,
    alignPoint: h,
    children: n('span', { className: L(y.childWrapper, N), children: e })
  })
}
try {
  ;(r.displayName = 'Dropdown'),
    (r.__docgenInfo = {
      description: '',
      displayName: 'Dropdown',
      props: {
        matchMaxTriggerWidth: {
          defaultValue: null,
          description: '',
          name: 'matchMaxTriggerWidth',
          required: !1,
          type: { name: 'boolean' }
        },
        placement: {
          defaultValue: { value: 'bottomLeft' },
          description: '',
          name: 'placement',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"top"' },
              { value: '"bottom"' },
              { value: '"topLeft"' },
              { value: '"topRight"' },
              { value: '"bottomLeft"' },
              { value: '"bottomRight"' }
            ]
          }
        },
        onOverlayClick: {
          defaultValue: null,
          description: '',
          name: 'onOverlayClick',
          required: !1,
          type: { name: '((e: Event) => void)' }
        },
        onVisibleChange: {
          defaultValue: null,
          description: '',
          name: 'onVisibleChange',
          required: !1,
          type: { name: '((visible: boolean) => void)' }
        },
        onSelect: {
          defaultValue: null,
          description: '',
          name: 'onSelect',
          required: !1,
          type: { name: '((key: string, option: DropdownOption) => void)' }
        },
        trigger: {
          defaultValue: { value: 'click' },
          description: '',
          name: 'trigger',
          required: !1,
          type: { name: 'DropdownActionType | DropdownActionType[]' }
        },
        showAction: {
          defaultValue: null,
          description: '',
          name: 'showAction',
          required: !1,
          type: { name: 'DropdownActionType[]' }
        },
        hideAction: {
          defaultValue: null,
          description: '',
          name: 'hideAction',
          required: !1,
          type: { name: 'DropdownActionType[]' }
        },
        options: {
          defaultValue: { value: '[]' },
          description: '',
          name: 'options',
          required: !1,
          type: { name: 'DropdownOption[]' }
        },
        overlayStyle: {
          defaultValue: null,
          description: '',
          name: 'overlayStyle',
          required: !1,
          type: { name: 'CSSProperties' }
        },
        alignPoint: {
          defaultValue: null,
          description: '',
          name: 'alignPoint',
          required: !1,
          type: { name: 'boolean' }
        },
        optionsSettings: {
          defaultValue: { value: '{}' },
          description: '',
          name: 'optionsSettings',
          required: !1,
          type: { name: '{ ellipsis?: boolean; wrap?: boolean; divider?: boolean | undefined; } | undefined' }
        },
        withAnimation: {
          defaultValue: { value: 'true' },
          description: '',
          name: 'withAnimation',
          required: !1,
          type: { name: 'boolean' }
        },
        classes: {
          defaultValue: { value: '{}' },
          description: '',
          name: 'classes',
          required: !1,
          type: {
            name: '{ overlay?: string; menu?: string; option?: string | undefined; open?: string | undefined; wrapper?: string | undefined; } | undefined'
          }
        },
        style: { defaultValue: null, description: '', name: 'style', required: !1, type: { name: 'CSSProperties' } }
      }
    })
} catch {}
const Ke = { title: 'Dropdown', component: r },
  ge = { display: 'flex', gap: 12 },
  m = [
    { key: 'option 1', label: 'Long Option 1, Option 1, Option 1, Option 1' },
    { key: 'option 2', label: 'Option 2', disabled: !0 },
    { key: 'option 3', label: 'Option 3' },
    { key: 'option 4', label: 'Option 4' }
  ],
  M = {
    render: e =>
      n('div', {
        style: ge,
        children: n(r, {
          options: [
            { key: 'option 1', label: 'Long Option 1, Option 1, Option 1, Option 1' },
            { key: 'option 2', label: 'Option 2', disabled: !0 },
            { key: 'option 3', label: 'Option 3' },
            { key: 'option 4', label: 'Option 4' }
          ],
          ...e,
          children: n(u, { children: 'Menu' })
        })
      }),
    argTypes: {
      trigger: { control: 'select', options: ['click', 'hover', 'contextMenu'] },
      showAction: { control: 'object', options: ['click', 'hover', 'contextMenu'] },
      classes: { control: { disable: !0 } }
    }
  },
  _ = {
    render: () => {
      function e(s, i) {
        alert(`${s} selected
${JSON.stringify(i, null, 2)}`)
      }
      return E('div', {
        style: ge,
        children: [
          n(r, {
            options: m,
            onSelect: e,
            trigger: 'hover',
            style: { width: 200 },
            optionsSettings: { ellipsis: !1, wrap: !0 },
            children: n(u, { type: 'outline', size: 's', children: 'Hover Me (Wrap Options)' })
          }),
          n(r, {
            options: m,
            style: { width: 200 },
            optionsSettings: { ellipsis: !0, wrap: !1, divider: !0 },
            children: n(u, { type: 'outline', size: 's', children: 'Click Me (Ellipsis Options)' })
          }),
          n(r, {
            matchMaxTriggerWidth: !0,
            options: m,
            hideAction: ['click'],
            showAction: ['hover'],
            children: n(u, {
              type: 'outline',
              size: 's',
              style: { width: 400 },
              children: 'Long Trigger (Разные типы тригеров)'
            })
          })
        ]
      })
    }
  },
  Je = { display: 'flex', flexDirection: 'column', gap: 12 },
  ee = { display: 'flex', gap: 12, justifyContent: 'space-evenly' },
  D = {
    render: () =>
      E('div', {
        style: Je,
        children: [
          E('div', {
            style: ee,
            children: [
              n(r, {
                options: m,
                trigger: 'hover',
                placement: 'topLeft',
                children: n(u, { type: 'outline', size: 's', children: 'Top Left' })
              }),
              n(r, {
                options: m,
                trigger: 'hover',
                placement: 'top',
                children: n(u, { type: 'outline', size: 's', children: 'Top' })
              }),
              n(r, {
                options: m,
                trigger: 'hover',
                placement: 'topRight',
                children: n(u, { type: 'outline', size: 's', children: 'Top Right' })
              })
            ]
          }),
          E('div', {
            style: ee,
            children: [
              n(r, {
                options: m,
                trigger: 'hover',
                placement: 'bottomLeft',
                children: n(u, { type: 'outline', size: 's', children: 'Bottom Left' })
              }),
              n(r, {
                options: m,
                trigger: 'hover',
                placement: 'bottom',
                children: n(u, { type: 'outline', size: 's', children: 'Bottom' })
              }),
              n(r, {
                options: m,
                trigger: 'hover',
                placement: 'bottomRight',
                children: n(u, { type: 'outline', size: 's', children: 'Bottom Right' })
              })
            ]
          })
        ]
      })
  },
  Xe = {
    height: '100px',
    border: '2px solid #21272E',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  R = {
    render: () =>
      n(r, {
        options: m,
        trigger: 'contextMenu',
        alignPoint: !0,
        children: n('div', { style: Xe, children: 'Right Click Me' })
      })
  }
var ne, te, oe
M.parameters = {
  ...M.parameters,
  docs: {
    ...((ne = M.parameters) == null ? void 0 : ne.docs),
    source: {
      originalSource: `{
  render: args => {
    const options = [{
      key: 'option 1',
      label: 'Long Option 1, Option 1, Option 1, Option 1'
    }, {
      key: 'option 2',
      label: 'Option 2',
      disabled: true
    }, {
      key: 'option 3',
      label: 'Option 3'
    }, {
      key: 'option 4',
      label: 'Option 4'
    }];
    return <div style={canvasStyles}>
        <Dropdown options={options} {...args}>
          <Button>Menu</Button>
        </Dropdown>
      </div>;
  },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'contextMenu']
    },
    showAction: {
      control: 'object',
      options: ['click', 'hover', 'contextMenu']
    },
    classes: {
      control: {
        disable: true
      }
    }
  }
}`,
      ...((oe = (te = M.parameters) == null ? void 0 : te.docs) == null ? void 0 : oe.source)
    }
  }
}
var ie, re, le
_.parameters = {
  ..._.parameters,
  docs: {
    ...((ie = _.parameters) == null ? void 0 : ie.docs),
    source: {
      originalSource: `{
  render: () => {
    function handleSelect(key: string, option: any) {
      alert(\`\${key} selected\\n\${JSON.stringify(option, null, 2)}\`);
    }
    return <div style={canvasStyles}>
        <Dropdown options={options} onSelect={handleSelect} trigger="hover" style={{
        width: 200
      }} optionsSettings={{
        ellipsis: false,
        wrap: true
      }}>
          <Button type="outline" size="s">
            Hover Me (Wrap Options)
          </Button>
        </Dropdown>

        <Dropdown options={options} style={{
        width: 200
      }} optionsSettings={{
        ellipsis: true,
        wrap: false,
        divider: true
      }}>
          <Button type="outline" size="s">
            Click Me (Ellipsis Options)
          </Button>
        </Dropdown>

        <Dropdown matchMaxTriggerWidth options={options} hideAction={['click']} showAction={['hover']}>
          <Button type="outline" size="s" style={{
          width: 400
        }}>
            Long Trigger (Разные типы тригеров)
          </Button>
        </Dropdown>
      </div>;
  }
}`,
      ...((le = (re = _.parameters) == null ? void 0 : re.docs) == null ? void 0 : le.source)
    }
  }
}
var ae, se, pe
D.parameters = {
  ...D.parameters,
  docs: {
    ...((ae = D.parameters) == null ? void 0 : ae.docs),
    source: {
      originalSource: `{
  render: () => {
    // "topLeft" | "top" | "topRight" | "bottomLeft" | "bottom" | "bottomRight"
    return <div style={placementStyle}>
        <div style={placementRowStyle}>
          <Dropdown options={options} trigger="hover" placement="topLeft">
            <Button type="outline" size="s">
              Top Left
            </Button>
          </Dropdown>

          <Dropdown options={options} trigger="hover" placement="top">
            <Button type="outline" size="s">
              Top
            </Button>
          </Dropdown>

          <Dropdown options={options} trigger="hover" placement="topRight">
            <Button type="outline" size="s">
              Top Right
            </Button>
          </Dropdown>
        </div>

        <div style={placementRowStyle}>
          <Dropdown options={options} trigger="hover" placement="bottomLeft">
            <Button type="outline" size="s">
              Bottom Left
            </Button>
          </Dropdown>

          <Dropdown options={options} trigger="hover" placement="bottom">
            <Button type="outline" size="s">
              Bottom
            </Button>
          </Dropdown>

          <Dropdown options={options} trigger="hover" placement="bottomRight">
            <Button type="outline" size="s">
              Bottom Right
            </Button>
          </Dropdown>
        </div>
      </div>;
  }
}`,
      ...((pe = (se = D.parameters) == null ? void 0 : se.docs) == null ? void 0 : pe.source)
    }
  }
}
var ce, de, ue
R.parameters = {
  ...R.parameters,
  docs: {
    ...((ce = R.parameters) == null ? void 0 : ce.docs),
    source: {
      originalSource: `{
  render: () => {
    return <Dropdown options={options} trigger="contextMenu" alignPoint>
        <div style={ContextMenuStyle}>Right Click Me</div>
      </Dropdown>;
  }
}`,
      ...((ue = (de = R.parameters) == null ? void 0 : de.docs) == null ? void 0 : ue.source)
    }
  }
}
const Ye = ['Sandbox', 'Examples', 'Placements', 'ContextMenu'],
  rn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, ContextMenu: R, Examples: _, Placements: D, Sandbox: M, __namedExportsOrder: Ye, default: Ke },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { R as C, rn as D, _ as E, D as P, M as S, r as a }
//# sourceMappingURL=Component.stories-ecc0f798.js.map
