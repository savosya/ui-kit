import { j as n, a as s, F as r } from './jsx-runtime-276775ef.js'
import { M as l, d as p, f as d } from './index-01c745a6.js'
import { C as m } from './css-vars.module-db4806dd.js'
import { s as h, T as u } from './Tabs-19e0b86c.js'
import './index-1cdf6ce0.js'
import { A as f, S as a, a as b } from './Component.stories-596ea015.js'
import { u as o } from './index-69b0450a.js'
import './iframe-aa443103.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-a01a9712.js'
import './assertThisInitialized-bd9b18e4.js'
import './index-c8f542d6.js'
import './index-356e4a49.js'
import './clsx.m-1229b3e0.js'
import './Component-4d843ac5.js'
import './tslib.es6-6635c9de.js'
import './mergeRefs-3b77d02e.js'
const g = '@savosya/savosya-myuikit-attach',
  y = '1.0.1',
  C = 'Attach',
  j = 'ISC',
  v = 'index.js',
  k = 'build/esm/index.js',
  x = { react: '^17 || ^18', 'react-dom': '^17 || ^18' },
  A = { access: 'public', directory: 'build' },
  D = { tsc: 'tsc', build: 'rollup -c ../../rollup.config.js' },
  M = {
    '@savosya/savosya-myuikit-hooks': '^1.0.1',
    '@savosya/savosya-myuikit-loader': '^1.0.1',
    '@savosya/savosya-myuikit-utils': '^1.0.1',
    clsx: '^1.2.1',
    tslib: '^2.6.2'
  },
  O = '31d48558bb3b557afd22f848178c9f85fed90b38',
  S = {
    name: g,
    version: y,
    description: C,
    license: j,
    main: v,
    module: k,
    peerDependencies: x,
    publishConfig: A,
    scripts: D,
    dependencies: M,
    gitHead: O
  }
function i(t) {
  const e = Object.assign({ h2: 'h2', p: 'p', a: 'a', pre: 'pre', code: 'code' }, o(), t.components)
  return s(r, {
    children: [
      n(e.h2, { id: 'controlled-attach', children: 'Controlled Attach' }),
      `
`,
      s(e.p, {
        children: [
          'К сожалению, можно только эмулировать ',
          n(e.a, {
            href: 'https://ru.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag',
            target: '_blank',
            rel: 'nofollow noopener noreferrer',
            children: 'контролируемое поведение'
          }),
          '.'
        ]
      }),
      `
`,
      n(e.pre, {
        children: n(e.code, {
          className: 'language-jsx',
          children: `render(() => {
  const [response, setResponse] = React.useState(null)
  const [files, setFiles] = React.useState([])

  const handleChange = (event, payload) => {
    setFiles([...files, ...payload.files])
  }

  const handleSubmit = () => {
    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(\`file\${i}\`, file)
    })

    fetch('https://example.ru/post', {
      method: 'POST',
      body: formData
    })
      .then(r => r.json())
      .then(r => setResponse(r))
  }

  return (
    <div>
      <Attach value={files} onChange={handleChange} multiple={true} name="file" onClear={() => setFiles([])} />
      <Button size="xs" type="button" onClick={handleSubmit}>
        Отправить
      </Button>
    </div>
  )
})
`
        })
      })
    ]
  })
}
function F(t = {}) {
  const { wrapper: e } = Object.assign({}, o(), t.components)
  return e ? n(e, Object.assign({}, t, { children: n(i, t) })) : i(t)
}
function c(t) {
  const e = Object.assign({ p: 'p', pre: 'pre', code: 'code' }, o(), t.components)
  return s(r, {
    children: [
      n(l, { title: 'Components/Attach', component: f, id: 'Attach' }),
      `
`,
      n(m, {
        name: 'Attach',
        version: S.version,
        package: '@eubank/kit-attach',
        children: n(e.p, { children: 'Компонент для загрузки файла' })
      }),
      `
`,
      n(e.pre, {
        children: n(e.code, {
          className: 'language-jsx',
          children: `import { Attach } from '@eubank/kit-root'
import { Attach } from '@eubank/kit-attach'
`
        })
      }),
      `
`,
      n(p, Object.assign({ of: a, meta: b }, h)),
      `
`,
      n(u, { docs: n(F, {}), props: n(d, { of: a }) })
    ]
  })
}
function Q(t = {}) {
  const { wrapper: e } = Object.assign({}, o(), t.components)
  return e ? n(e, Object.assign({}, t, { children: n(c, t) })) : c(t)
}
export { Q as default }
//# sourceMappingURL=docs-11df6e7b.js.map
