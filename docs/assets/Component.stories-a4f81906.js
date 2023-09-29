import { j as t, a as N } from './jsx-runtime-276775ef.js'
import { r as l } from './index-1cdf6ce0.js'
import { c as L } from './clsx.m-1229b3e0.js'
const z = '_overlay_ytqi4_2',
  B = '_visible_ytqi4_20',
  C = '_text_ytqi4_24',
  g = { overlay: z, visible: B, text: C },
  D = ({ text: r = 'Перетащите файлы', visible: o = !1 }) =>
    t('div', { className: L(g.overlay, { [g.visible]: o }), children: t('span', { className: g.text, children: r }) })
try {
  ;(D.displayName = 'Overlay'),
    (D.__docgenInfo = {
      description: '',
      displayName: 'Overlay',
      props: {
        text: {
          defaultValue: { value: 'Перетащите файлы' },
          description: '',
          name: 'text',
          required: !1,
          type: { name: 'string' }
        },
        visible: {
          defaultValue: { value: 'false' },
          description: '',
          name: 'visible',
          required: !1,
          type: { name: 'boolean' }
        }
      }
    })
} catch {}
const d = r => {
    r.preventDefault(), r.stopPropagation()
  },
  j = '_root_1ao7l_8',
  F = '_disabled_1ao7l_27',
  M = '_block_1ao7l_33',
  A = '_dragOver_1ao7l_36',
  H = '_error_1ao7l_39',
  i = { root: j, disabled: F, block: M, dragOver: A, error: H },
  p = ({
    className: r,
    children: o,
    text: f = 'Перетащите файлы',
    error: b = !1,
    overlay: n = D,
    onDragEnter: s,
    onDragLeave: m,
    onDragOver: y,
    onDrop: _,
    block: V = !1,
    disabled: a
  }) => {
    const [h, v] = l.useState(!1),
      c = l.useRef(0),
      k = l.useCallback(
        e => {
          d(e), !a && y && y(e)
        },
        [y, a]
      ),
      E = l.useCallback(
        e => {
          d(e), !a && ((c.current += 1), v(!0), s && s(e))
        },
        [a, s]
      ),
      S = l.useCallback(
        e => {
          d(e), !a && ((c.current -= 1), !(c.current > 0) && (v(!1), m && m(e)))
        },
        [a, m]
      ),
      T = l.useCallback(
        e => {
          d(e),
            !a &&
              (v(!1),
              (c.current = 0),
              e.dataTransfer.files &&
                e.dataTransfer.files.length > 0 &&
                (_ && _(e.dataTransfer.files), e.dataTransfer.clearData()))
        },
        [a, _]
      )
    return N('div', {
      className: L(i.root, r, { [i.dragOver]: h, [i.error]: b, [i.block]: V, [i.disabled]: a }),
      onDragEnter: E,
      onDragLeave: S,
      onDragOver: k,
      onDrop: T,
      children: [o, n && t(n, { text: f, visible: !!h })]
    })
  }
try {
  ;(p.displayName = 'Dropzone'),
    (p.__docgenInfo = {
      description: '',
      displayName: 'Dropzone',
      props: {
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        text: {
          defaultValue: { value: 'Перетащите файлы' },
          description: '',
          name: 'text',
          required: !1,
          type: { name: 'string' }
        },
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        error: {
          defaultValue: { value: 'false' },
          description: '',
          name: 'error',
          required: !1,
          type: { name: 'boolean' }
        },
        block: {
          defaultValue: { value: 'false' },
          description: '',
          name: 'block',
          required: !1,
          type: { name: 'boolean' }
        },
        overlay: {
          defaultValue: null,
          description: '',
          name: 'overlay',
          required: !1,
          type: { name: 'ComponentType<OverlayProps>' }
        },
        onDrop: {
          defaultValue: null,
          description: '',
          name: 'onDrop',
          required: !1,
          type: { name: '((files: FileList) => void)' }
        },
        onDragOver: {
          defaultValue: null,
          description: '',
          name: 'onDragOver',
          required: !1,
          type: { name: '((event: DragEvent<HTMLElement>) => void)' }
        },
        onDragLeave: {
          defaultValue: null,
          description: '',
          name: 'onDragLeave',
          required: !1,
          type: { name: '((event: DragEvent<HTMLElement>) => void)' }
        },
        onDragEnter: {
          defaultValue: null,
          description: '',
          name: 'onDragEnter',
          required: !1,
          type: { name: '((event: DragEvent<HTMLElement>) => void)' }
        }
      }
    })
} catch {}
const I = { title: 'Dropzone', component: p },
  P = { width: 400, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  u = {
    render: r => {
      const [o, f] = l.useState([])
      return t(p, {
        onDrop: n => {
          f(
            Array.from(n)
              .map(s => s.name)
              .filter(Boolean)
          )
        },
        ...r,
        children: t('div', {
          style: P,
          children:
            o.length > 0
              ? t('ul', { children: o.map(n => t('li', { children: n }, n)) })
              : t('span', { children: 'Drag & Drop' })
        })
      })
    },
    argTypes: {}
  }
var x, q, O
u.parameters = {
  ...u.parameters,
  docs: {
    ...((x = u.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  render: args => {
    const [filesList, setFilesList] = React.useState([]);
    const handleDrop = files => {
      setFilesList(Array.from(files).map((file: any) => file.name).filter(Boolean));
    };
    return <Dropzone onDrop={handleDrop} {...args}>
        <div style={styles}>
          {filesList.length > 0 ? <ul>
              {filesList.map(file => <li key={file}>{file}</li>)}
            </ul> : <span>Drag & Drop</span>}
        </div>
      </Dropzone>;
  },
  argTypes: {}
}`,
      ...((O = (q = u.parameters) == null ? void 0 : q.docs) == null ? void 0 : O.source)
    }
  }
}
const R = ['Sandbox'],
  K = Object.freeze(
    Object.defineProperty({ __proto__: null, Sandbox: u, __namedExportsOrder: R, default: I }, Symbol.toStringTag, {
      value: 'Module'
    })
  )
export { p as D, u as S, K as a }
//# sourceMappingURL=Component.stories-a4f81906.js.map
