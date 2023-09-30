import { M as o } from './index-089bb4e8.js'
import { j as u, a as s, F as i } from './jsx-runtime-37f7df21.js'
import { u as a } from './index-59d6410c.js'
import './iframe-f31e792b.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-f1f2c4b1.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
function t(r) {
  const e = Object.assign({ h1: 'h1', p: 'p', pre: 'pre', code: 'code', h2: 'h2' }, a(), r.components)
  return s(i, {
    children: [
      u(o, {
        title: 'General/Начало работы',
        parameters: { previewTabs: { canvas: { hidden: !0 } } },
        id: 'General/start'
      }),
      `
`,
      u(e.h1, {
        id: 'ui-kit-библиотека-для-разработки-на-react',
        children: 'UI-KIT библиотека для разработки на React'
      }),
      `
`,
      u(e.h1, { id: 'установка', children: 'Установка' }),
      `
`,
      u(e.p, { children: 'Установить всю библиотеку:' }),
      `
`,
      u(e.pre, {
        children: u(e.code, {
          className: 'language-bash',
          children: `yarn add @eubank/kit-ui
`
        })
      }),
      `
`,
      u(e.p, {
        children:
          'Каждый компонент публикуется отдельным пакетом, поэтому вы можете подключить только нужный, не устанавливая библиотеку целиком:'
      }),
      `
`,
      u(e.pre, {
        children: u(e.code, {
          className: 'language-bash',
          children: `yarn add @eubank/kit-button
`
        })
      }),
      `
`,
      u(e.h2, { id: 'использование', children: 'Использование' }),
      `
`,
      u(e.pre, {
        children: u(e.code, {
          className: 'language-jsx',
          children: `import { Button } from '@eubank/kit-button'
`
        })
      })
    ]
  })
}
function c(r = {}) {
  const { wrapper: e } = Object.assign({}, a(), r.components)
  return e ? u(e, { ...r, children: u(t, { ...r }) }) : t(r)
}
const d = () => {
  throw new Error('Docs-only story')
}
d.parameters = { docsOnly: !0 }
const n = {
  title: 'General/Начало работы',
  id: 'General/start',
  parameters: { previewTabs: { canvas: { hidden: !0 } } },
  tags: ['stories-mdx'],
  includeStories: ['__page']
}
n.parameters = n.parameters || {}
n.parameters.docs = { ...(n.parameters.docs || {}), page: c }
const x = ['__page']
export { x as __namedExportsOrder, d as __page, n as default }
//# sourceMappingURL=1.1.start.stories-6c283f1e.js.map
