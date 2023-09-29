import { j as e, a as s } from './jsx-runtime-276775ef.js'
import { r as g } from './index-1cdf6ce0.js'
import { c as l } from './clsx.m-1229b3e0.js'
import { T as _e } from './Component-bfc56ba9.js'
import { u as q, m as fe } from './mergeRefs-3b77d02e.js'
const L = ({ className: n, size: a = 18 }) =>
  e('svg', {
    width: a,
    height: a,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: n,
    children: e('path', {
      d: 'M19.5782 4.42177C20.1406 4.98412 20.1406 5.89588 19.5782 6.45823L14.0368 12L19.5782 17.5418C20.0937 18.0573 20.1367 18.8663 19.7071 19.4308L19.5782 19.5782C19.0159 20.1406 18.1041 20.1406 17.5418 19.5782L12 14.0368L6.45823 19.5782C5.89588 20.1406 4.98412 20.1406 4.42177 19.5782C3.85941 19.0159 3.85941 18.1041 4.42177 17.5418L9.96319 12L4.42177 6.45823C3.90627 5.94274 3.86332 5.13365 4.29289 4.56923L4.42177 4.42177C4.98412 3.85941 5.89588 3.85941 6.45823 4.42177L12 9.96319L17.5418 4.42177C18.1041 3.85941 19.0159 3.85941 19.5782 4.42177Z',
      fill: 'currentColor'
    })
  })
try {
  ;(L.displayName = 'CrossIcon'),
    (L.__docgenInfo = {
      description: '',
      displayName: 'CrossIcon',
      props: {
        size: { defaultValue: { value: '18' }, description: '', name: 'size', required: !1, type: { name: 'number' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } }
      }
    })
} catch {}
const x = ({ className: n, size: a = 22 }) =>
  s('svg', {
    className: n,
    width: a,
    height: a,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      e('path', {
        d: 'M18.25 7.71423C18.7526 7.71423 19.2547 7.82681 19.7425 8.04863C19.8736 8.10849 20.0269 8.09507 20.1462 8.01054C20.265 7.92685 20.3337 7.78578 20.3272 7.63765C20.2873 6.71942 19.5578 6 18.6667 6H3.66664C2.74746 6 2 6.7688 2 7.71423V11.9999C2 12.9453 2.74746 13.7141 3.66668 13.7141H13.25C13.4803 13.7141 13.6667 13.5225 13.6667 13.2856V12.857C13.6667 12.3087 13.93 11.7881 14.3702 11.4641C14.4671 11.393 14.5297 11.2829 14.5423 11.1616C14.7478 9.19623 16.3421 7.71423 18.25 7.71423ZM5.84684 9.91441C6.04622 10.0329 6.11458 10.2949 5.99942 10.4999C5.92212 10.6372 5.78212 10.7142 5.63809 10.7142C5.56727 10.7142 5.49567 10.6958 5.43016 10.6569L5.33333 10.5994V10.7142C5.33333 10.9511 5.14696 11.1428 4.91665 11.1428C4.68637 11.1428 4.50001 10.9511 4.50001 10.7142V10.5994L4.40317 10.6569C4.33766 10.6958 4.26606 10.7142 4.19524 10.7142C4.05118 10.7142 3.91121 10.6372 3.83391 10.4999C3.71875 10.2949 3.78711 10.0329 3.98649 9.91441L4.08309 9.85707L3.98649 9.79974C3.78711 9.68129 3.71875 9.41929 3.83391 9.21423C3.94907 9.00916 4.20418 8.93885 4.40317 9.05729L4.50001 9.11475V8.99992C4.50001 8.76303 4.68637 8.57134 4.91669 8.57134C5.147 8.57134 5.33337 8.76303 5.33337 8.99992V9.11475L5.4302 9.05725C5.62798 8.93881 5.88391 9.00912 5.99946 9.21419C6.11462 9.41925 6.04626 9.68125 5.84688 9.7997L5.75028 9.85703L5.84684 9.91441ZM9.18021 9.91441C9.37959 10.0329 9.44794 10.2949 9.33279 10.4999C9.25548 10.6372 9.11548 10.7142 8.97146 10.7142C8.90064 10.7142 8.82904 10.6958 8.76353 10.6569L8.66669 10.5994V10.7142C8.66669 10.9511 8.48033 11.1428 8.25001 11.1428C8.0197 11.1428 7.83333 10.9511 7.83333 10.7142V10.5994L7.7365 10.6569C7.67099 10.6958 7.59939 10.7142 7.52857 10.7142C7.3845 10.7142 7.24454 10.6372 7.16724 10.4999C7.05208 10.2949 7.12044 10.0329 7.31981 9.91441L7.41642 9.85707L7.31981 9.79974C7.12044 9.68129 7.05208 9.41929 7.16724 9.21423C7.282 9.00916 7.53669 8.93885 7.7365 9.05729L7.83333 9.11479V8.99996C7.83333 8.76307 8.0197 8.57138 8.25001 8.57138C8.48033 8.57138 8.66669 8.76307 8.66669 8.99996V9.11479L8.76353 9.05729C8.96169 8.93885 9.21681 9.00916 9.33279 9.21423C9.44794 9.41929 9.37959 9.68129 9.18021 9.79974L9.08361 9.85707L9.18021 9.91441ZM12.5135 9.91441C12.7129 10.0329 12.7813 10.2949 12.6661 10.4999C12.5888 10.6372 12.4488 10.7142 12.3048 10.7142C12.234 10.7142 12.1624 10.6958 12.0969 10.6569L12 10.5994V10.7142C12 10.9511 11.8137 11.1428 11.5833 11.1428C11.353 11.1428 11.1667 10.9511 11.1667 10.7142V10.5994L11.0698 10.6569C11.0043 10.6958 10.9327 10.7142 10.8619 10.7142C10.7178 10.7142 10.5779 10.6372 10.5006 10.4999C10.3854 10.2949 10.4538 10.0329 10.6531 9.91441L10.7497 9.85707L10.6531 9.79974C10.4538 9.68129 10.3854 9.41929 10.5006 9.21423C10.6153 9.00916 10.8704 8.93885 11.0698 9.05729L11.1667 9.11479V8.99996C11.1667 8.76307 11.353 8.57138 11.5833 8.57138C11.8137 8.57138 12 8.76307 12 8.99996V9.11479L12.0969 9.05729C12.2954 8.93885 12.5506 9.00916 12.6661 9.21423C12.7813 9.41929 12.7129 9.68129 12.5135 9.79974L12.4169 9.85707L12.5135 9.91441Z',
        fill: 'currentColor'
      }),
      e('path', {
        d: 'M21.1667 12.0001V11.5715C21.1667 9.91754 19.8581 8.57159 18.25 8.57159C16.6419 8.57159 15.3333 9.91754 15.3333 11.5715V12.0001C14.874 12.0001 14.5 12.3847 14.5 12.8572V17.1429C14.5 17.6154 14.874 18 15.3333 18H21.1667C21.6261 18 22 17.6154 22 17.1429V12.8572C22 12.3847 21.6261 12.0001 21.1667 12.0001ZM18.6667 15.2968V15.8572C18.6667 16.0941 18.4803 16.2858 18.25 16.2858C18.0197 16.2858 17.8334 16.0941 17.8334 15.8572V15.2968C17.5889 15.1472 17.4167 14.8845 17.4167 14.5715C17.4167 14.099 17.7906 13.7144 18.25 13.7144C18.7094 13.7144 19.0833 14.099 19.0833 14.5715C19.0834 14.8846 18.9111 15.1472 18.6667 15.2968ZM19.5 12.0001H17V11.5715C17 10.8626 17.5607 10.2859 18.25 10.2859C18.9393 10.2859 19.5 10.8626 19.5 11.5715V12.0001Z',
        fill: 'currentColor'
      })
    ]
  })
try {
  ;(x.displayName = 'PasswordIcon'),
    (x.__docgenInfo = {
      description: '',
      displayName: 'PasswordIcon',
      props: {
        size: { defaultValue: { value: '22' }, description: '', name: 'size', required: !1, type: { name: 'number' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } }
      }
    })
} catch {}
const Ce = '#848D98',
  be = '#D44040',
  I = ({ className: n, error: a }) =>
    s('svg', {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: n,
      children: [
        e('circle', { cx: '12', cy: '12', r: '10', fill: a ? be : Ce }),
        e('path', { d: 'M12 17.375L12 11.125', stroke: 'white', strokeWidth: '2', strokeLinecap: 'round' }),
        e('path', { d: 'M12 6.875L12 6.76389', stroke: 'white', strokeWidth: '2.5', strokeLinecap: 'round' })
      ]
    })
try {
  ;(I.displayName = 'ExclamationMarkIcon'),
    (I.__docgenInfo = {
      description: '',
      displayName: 'ExclamationMarkIcon',
      props: {
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        error: { defaultValue: null, description: '', name: 'error', required: !1, type: { name: 'boolean' } }
      }
    })
} catch {}
const V = ({ className: n, size: a = 20 }) =>
  s('svg', {
    className: n,
    width: a,
    height: a,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      e('circle', { cx: '10.225', cy: '10.1', r: '7.1', stroke: 'currentColor', strokeWidth: '2.02857' }),
      e('path', {
        d: 'M15.2964 15.1714L20.875 20.75',
        stroke: 'currentColor',
        strokeWidth: '2.02857',
        strokeLinecap: 'round'
      })
    ]
  })
try {
  ;(V.displayName = 'SearchIcon'),
    (V.__docgenInfo = {
      description: '',
      displayName: 'SearchIcon',
      props: {
        size: { defaultValue: { value: '20' }, description: '', name: 'size', required: !1, type: { name: 'number' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } }
      }
    })
} catch {}
const ye = '_root_7953h_14',
  ge = '_block_7953h_21',
  ve = '_input_root_7953h_25',
  we = '_small_7953h_36',
  Le = '_focus_7953h_39',
  xe = '_disabled_7953h_43',
  Ie = '_error_7953h_46',
  Ve = '_root_core_7953h_50',
  Ne = '_label_7953h_57',
  Te = '_input_7953h_25',
  Se = '_extra_7953h_102',
  Me = '_addons_left_7953h_118',
  Re = '_addons_right_7953h_126',
  ke = '_clean_7953h_135',
  qe = '_addon_focused_7953h_147',
  Pe = '_addon_error_7953h_151',
  o = {
    root: ye,
    block: ge,
    input_root: ve,
    small: we,
    focus: Le,
    disabled: xe,
    error: Ie,
    root_core: Ve,
    label: Ne,
    input: Te,
    extra: Se,
    addons_left: Me,
    addons_right: Re,
    clean: ke,
    addon_focused: qe,
    addon_error: Pe
  },
  t = g.forwardRef((n, a) => {
    const {
        type: b = 'text',
        label: N,
        disabled: T,
        hint: v,
        error: d,
        errorMsg: y,
        className: oe,
        classes: r,
        addonsLeft: S,
        addonsRight: te,
        cleanable: ne,
        onChange: M,
        onClean: R,
        cleanIcon: ae,
        passedRef: le,
        block: se,
        showTooltip: de,
        tooltipIcon: ce,
        tooltipProps: ie,
        ...k
      } = n,
      c = g.useRef(null),
      [pe] = q(c, 'keyboard'),
      [w] = q(c, 'mouse'),
      ue = g.useCallback(() => {
        R && R(), c.current && !k.value && (c.current.value = '')
      }, [c.current, a]),
      he = g.useCallback(me => {
        M && M(me)
      }, [])
    return s('div', {
      className: l(o.root, r == null ? void 0 : r.root, { [o.block]: se }),
      children: [
        s('div', {
          className: l(
            o.input_root,
            { [o.focus]: pe, [o.disabled]: T, [o.error]: d },
            oe,
            r == null ? void 0 : r.input_root
          ),
          children: [
            b === 'search' &&
              e('div', {
                className: l(
                  o.addons_left,
                  { [o.addon_focused]: w, [o.addon_error]: d },
                  r == null ? void 0 : r.addons_left
                ),
                children: e(V, {})
              }),
            b === 'password' &&
              e('div', {
                className: l(
                  o.addons_left,
                  { [o.addon_focused]: w, [o.addon_error]: d },
                  r == null ? void 0 : r.addons_left
                ),
                children: e(x, {})
              }),
            b === 'text' &&
              S &&
              e('div', {
                className: l(
                  o.addons_left,
                  { [o.addon_focused]: w, [o.addon_error]: d },
                  r == null ? void 0 : r.addons_left
                ),
                children: S
              }),
            s('div', {
              className: o.root_core,
              children: [
                e('input', {
                  type: b,
                  className: l(o.input, r == null ? void 0 : r.input),
                  disabled: T,
                  ref: fe([a, c, le]),
                  ...k,
                  onChange: he
                }),
                N && e('label', { className: l(o.label, { [o.error]: d }, r == null ? void 0 : r.label), children: N })
              ]
            }),
            s('div', {
              className: l(o.addons_right, r == null ? void 0 : r.addons_right),
              children: [
                te,
                de && e(_e, { ...ie, children: ce || e(I, { error: d }) }),
                ne &&
                  e('span', {
                    onClick: ue,
                    className: l(o.clean, r == null ? void 0 : r.cleanIcon),
                    children: ae || e(L, {})
                  })
              ]
            })
          ]
        }),
        (v || (d && y)) &&
          s('div', {
            className: l(o.extra, r == null ? void 0 : r.extra),
            children: [
              v && e('span', { className: l({ [o.error]: d && !y }, r == null ? void 0 : r.hint), children: v }),
              d && y && e('span', { className: l(o.error, r == null ? void 0 : r.error), children: y })
            ]
          })
      ]
    })
  })
try {
  ;(t.displayName = 'Input'),
    (t.__docgenInfo = {
      description: '',
      displayName: 'Input',
      props: {
        block: { defaultValue: null, description: '', name: 'block', required: !1, type: { name: 'boolean' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        label: { defaultValue: null, description: '', name: 'label', required: !1, type: { name: 'string' } },
        type: {
          defaultValue: null,
          description: '',
          name: 'type',
          required: !1,
          type: { name: 'enum', value: [{ value: '"search"' }, { value: '"text"' }, { value: '"password"' }] }
        },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !1,
          type: { name: '((event: ChangeEvent<HTMLInputElement>) => void)' }
        },
        error: { defaultValue: null, description: '', name: 'error', required: !1, type: { name: 'boolean' } },
        errorMsg: { defaultValue: null, description: '', name: 'errorMsg', required: !1, type: { name: 'ReactNode' } },
        hint: { defaultValue: null, description: '', name: 'hint', required: !1, type: { name: 'ReactNode' } },
        classes: {
          defaultValue: null,
          description: '',
          name: 'classes',
          required: !1,
          type: {
            name: '{ root?: string; input_root?: string; label?: string | undefined; input?: string | undefined; extra?: string | undefined; hint?: string | undefined; error?: string | undefined; addons_left?: string | undefined; addons_right?: string | undefined; cleanIcon?: string | undefined; } | undefined'
          }
        },
        passedRef: { defaultValue: null, description: '', name: 'passedRef', required: !1, type: { name: 'any' } },
        addonsLeft: {
          defaultValue: null,
          description: '',
          name: 'addonsLeft',
          required: !1,
          type: { name: 'ReactNode' }
        },
        addonsRight: {
          defaultValue: null,
          description: '',
          name: 'addonsRight',
          required: !1,
          type: { name: 'ReactNode' }
        },
        showTooltip: {
          defaultValue: null,
          description: '',
          name: 'showTooltip',
          required: !1,
          type: { name: 'boolean' }
        },
        tooltipIcon: {
          defaultValue: null,
          description: '',
          name: 'tooltipIcon',
          required: !1,
          type: { name: 'ReactNode' }
        },
        tooltipProps: {
          defaultValue: null,
          description: '',
          name: 'tooltipProps',
          required: !1,
          type: { name: 'any' }
        },
        cleanable: { defaultValue: null, description: '', name: 'cleanable', required: !1, type: { name: 'boolean' } },
        cleanIcon: {
          defaultValue: null,
          description: '',
          name: 'cleanIcon',
          required: !1,
          type: { name: 'ReactNode' }
        },
        onClean: { defaultValue: null, description: '', name: 'onClean', required: !1, type: { name: '(() => void)' } }
      }
    })
} catch {}
const Ee = { title: 'Input', component: t },
  i = { display: 'flex', justifyContent: 'space-around', gap: 16 },
  p = {
    args: { label: 'Текстовое поле', placeholder: '...', type: 'text' },
    argTypes: {
      classes: { control: { disable: !0 } },
      passedRef: { control: { disable: !0 } },
      tooltipProps: { control: { disable: !0 } },
      hint: { control: 'text' },
      errorMsg: { control: 'text' },
      addonsLeft: { control: 'text' },
      addonsRight: { control: 'text' },
      tooltipIcon: { control: 'text' },
      cleanIcon: { control: 'text' }
    }
  },
  u = {
    render: () =>
      s('div', {
        style: i,
        children: [
          e(t, { type: 'text', label: 'Text Type', cleanable: !0, placeholder: '...' }),
          e(t, { type: 'search', label: 'Search Type', cleanable: !0, placeholder: '...' }),
          e(t, { type: 'password', label: 'Password Type', cleanable: !0, placeholder: '...' })
        ]
      })
  },
  h = {
    render: () =>
      s('div', {
        style: i,
        children: [
          e(t, { label: 'Cleanable', placeholder: 'write...', cleanable: !0 }),
          e(t, { placeholder: 'No Label' }),
          e(t, { label: 'Disabled', disabled: !0 })
        ]
      })
  },
  m = {
    render: () =>
      s('div', {
        style: i,
        children: [
          e(t, {
            label: 'ФИО',
            placeholder: '...',
            showTooltip: !0,
            tooltipProps: { title: 'Введите ФИО', placement: 'top' }
          }),
          e(t, {
            label: 'ФИО',
            placeholder: '...',
            showTooltip: !0,
            tooltipProps: { title: 'Снизу', placement: 'bottom' },
            disabled: !0
          })
        ]
      })
  },
  _ = {
    render: () =>
      e('div', {
        style: i,
        children: e(t, {
          label: 'ФИО',
          placeholder: '',
          error: !0,
          errorMsg: 'Ошибка поля ввода.',
          showTooltip: !0,
          tooltipProps: { content: 'Ошибка' },
          cleanable: !0
        })
      })
  },
  f = {
    render: () =>
      e('div', { style: i, children: e(t, { label: 'ФИО', placeholder: '...', hint: 'подсказка', cleanable: !0 }) })
  },
  P = () =>
    e('svg', {
      width: '24',
      height: '24',
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: e('path', {
        d: 'M15.0331 10.6051C15.0641 13.626 17.9678 14.6313 18 14.6441C17.9755 14.715 17.536 16.0767 16.4702 17.4833C15.5488 18.6993 14.5925 19.9109 13.0861 19.936C11.6059 19.9606 11.13 19.1434 9.43767 19.1434C7.7459 19.1434 7.21708 19.9109 5.81591 19.9606C4.36184 20.0103 3.25458 18.6456 2.32554 17.434C0.427169 14.9557 -1.02358 10.4309 0.92441 7.37654C1.89213 5.85974 3.62152 4.89924 5.49862 4.87461C6.92648 4.85002 8.27421 5.74204 9.14707 5.74204C10.0194 5.74204 11.6572 4.6693 13.3789 4.82685C14.0997 4.85394 16.1229 5.08976 17.4221 6.80694C17.3174 6.86554 15.0079 8.07958 15.0331 10.6051V10.6051ZM12.2512 3.18722C13.0232 2.34342 13.5427 1.16877 13.401 0C12.2883 0.0403841 10.9427 0.669574 10.1446 1.51291C9.42926 2.25973 8.80283 3.45505 8.97185 4.60069C10.2121 4.68734 11.4792 4.03156 12.2512 3.18722',
        fill: 'currentColor'
      })
    }),
  C = {
    render: () =>
      s('div', {
        style: i,
        children: [
          e(t, {
            label: 'ФИО',
            placeholder: '...',
            hint: 'hint',
            showTooltip: !0,
            tooltipProps: { content: 'Тултип' },
            addonsLeft: e(P, {}),
            addonsRight: e('div', { children: '<3' })
          }),
          e(t, {
            label: 'ФИО',
            placeholder: '...',
            hint: 'подсказка',
            error: !0,
            errorMsg: 'Ошибка поля ввода.',
            showTooltip: !0,
            tooltipProps: { content: 'Ошибка' },
            addonsLeft: e(P, {}),
            cleanable: !0
          })
        ]
      })
  }
var E, Z, H
p.parameters = {
  ...p.parameters,
  docs: {
    ...((E = p.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Текстовое поле',
    placeholder: '...',
    type: 'text'
  },
  argTypes: {
    classes: {
      control: {
        disable: true
      }
    },
    passedRef: {
      control: {
        disable: true
      }
    },
    tooltipProps: {
      control: {
        disable: true
      }
    },
    hint: {
      control: 'text'
    },
    errorMsg: {
      control: 'text'
    },
    addonsLeft: {
      control: 'text'
    },
    addonsRight: {
      control: 'text'
    },
    tooltipIcon: {
      control: 'text'
    },
    cleanIcon: {
      control: 'text'
    }
  }
}`,
      ...((H = (Z = p.parameters) == null ? void 0 : Z.docs) == null ? void 0 : H.source)
    }
  }
}
var O, j, B
u.parameters = {
  ...u.parameters,
  docs: {
    ...((O = u.parameters) == null ? void 0 : O.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div style={canvasStyles}>
        <Input type="text" label="Text Type" cleanable placeholder="..." />
        <Input type="search" label="Search Type" cleanable placeholder="..." />
        <Input type="password" label="Password Type" cleanable placeholder="..." />
      </div>;
  }
}`,
      ...((B = (j = u.parameters) == null ? void 0 : j.docs) == null ? void 0 : B.source)
    }
  }
}
var D, z, A
h.parameters = {
  ...h.parameters,
  docs: {
    ...((D = h.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div style={canvasStyles}>
        <Input label="Cleanable" placeholder="write..." cleanable />
        <Input placeholder={'No Label'} />
        <Input label="Disabled" disabled />
      </div>;
  }
}`,
      ...((A = (z = h.parameters) == null ? void 0 : z.docs) == null ? void 0 : A.source)
    }
  }
}
var F, W, U
m.parameters = {
  ...m.parameters,
  docs: {
    ...((F = m.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div style={canvasStyles}>
        <Input label="ФИО" placeholder="..." showTooltip tooltipProps={{
        title: 'Введите ФИО',
        placement: 'top'
      }} />
        <Input label="ФИО" placeholder="..." showTooltip tooltipProps={{
        title: 'Снизу',
        placement: 'bottom'
      }} disabled />
      </div>;
  }
}`,
      ...((U = (W = m.parameters) == null ? void 0 : W.docs) == null ? void 0 : U.source)
    }
  }
}
var $, G, J
_.parameters = {
  ..._.parameters,
  docs: {
    ...(($ = _.parameters) == null ? void 0 : $.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div style={canvasStyles}>
        <Input label="ФИО" placeholder="" error errorMsg="Ошибка поля ввода." showTooltip tooltipProps={{
        content: 'Ошибка'
      }} cleanable />
      </div>;
  }
}`,
      ...((J = (G = _.parameters) == null ? void 0 : G.docs) == null ? void 0 : J.source)
    }
  }
}
var K, Q, X
f.parameters = {
  ...f.parameters,
  docs: {
    ...((K = f.parameters) == null ? void 0 : K.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div style={canvasStyles}>
        <Input label="ФИО" placeholder="..." hint="подсказка" cleanable />
      </div>;
  }
}`,
      ...((X = (Q = f.parameters) == null ? void 0 : Q.docs) == null ? void 0 : X.source)
    }
  }
}
var Y, ee, re
C.parameters = {
  ...C.parameters,
  docs: {
    ...((Y = C.parameters) == null ? void 0 : Y.docs),
    source: {
      originalSource: `{
  render: () => {
    return <div style={canvasStyles}>
        <Input label="ФИО" placeholder="..." hint="hint" showTooltip tooltipProps={{
        content: 'Тултип'
      }} addonsLeft={<SampleIcon />} addonsRight={<div>{'<3'}</div>} />

        <Input label="ФИО" placeholder="..." hint="подсказка" error errorMsg="Ошибка поля ввода." showTooltip tooltipProps={{
        content: 'Ошибка'
      }} addonsLeft={<SampleIcon />} cleanable />
      </div>;
  }
}`,
      ...((re = (ee = C.parameters) == null ? void 0 : ee.docs) == null ? void 0 : re.source)
    }
  }
}
const Ze = ['Sandbox', 'Types', 'Examples', 'Tooltip', 'Error', 'Hint', 'Addons'],
  ze = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Addons: C,
        Error: _,
        Examples: h,
        Hint: f,
        Sandbox: p,
        Tooltip: m,
        Types: u,
        __namedExportsOrder: Ze,
        default: Ee
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
export { C as A, h as E, f as H, ze as I, p as S, u as T, m as a, _ as b, t as c }
//# sourceMappingURL=Component.stories-1306304a.js.map
