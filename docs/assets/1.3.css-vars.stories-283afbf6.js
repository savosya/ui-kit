import { M as i, C as c, b as t } from './index-089bb4e8.js'
import { j as e, a, F as d } from './jsx-runtime-37f7df21.js'
import { u as s } from './index-59d6410c.js'
import './iframe-f31e792b.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-f1f2c4b1.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
function o(u) {
  const r = Object.assign({ h2: 'h2', pre: 'pre', code: 'code', h3: 'h3', p: 'p' }, s(), u.components)
  return a(d, {
    children: [
      e(i, {
        title: 'General/CSS Переменные',
        parameters: { previewTabs: { canvas: { hidden: !0 } } },
        id: 'General/css'
      }),
      `
`,
      e(r.h2, { id: 'основные-css-переменные', children: 'Основные CSS переменные:' }),
      `
`,
      e(r.pre, {
        children: e(r.code, {
          className: 'language-css',
          children: `:root {
  /* colors.css */
  --brand-rubin: #e1056d;
  --brand-blue: #1d3f88;
  --brand-gray: #8b8b8c;
  --brand-black: #000;
  --bg-primary: #f4f6f8;
  --bg-secondary: #fff;
  --bg-info: #e5e8ed;
  --bg-header: #21272e;
  --text-primary: #29313a;
  --text-secondary: #67707c;
  --text-tertiary: #848d98;
  --text-placeholder: #848d98;
  --text-white: #fff;
  --text-gray: #b8bec6;
  --text-error-primary: #d44040;
  --text-error-secondary: #f96262;
  --text-attention: #eda147;
  --text-success-primary: #50a33b;
  --text-link-default: #4693c8;
  --text-link-hover: #6b9cd3;
  --text-link-pressed: #90b5de;
  --text-link-visited: #3869a0;
  --text-link-default-alternative: #677007C;
  --text-link-hover-alternative: #525a63;
}
`
        })
      }),
      `
`,
      e(r.h2, { id: 'основные-цвета', children: 'Основные цвета' }),
      `
`,
      a(c, {
        children: [
          e(t, {
            title: 'theme.colors.brand',
            colors: { rubin: '#E1056D', blue: '#1D3F88', gray: '#8B8B8C', black: '#000' }
          }),
          e(t, {
            title: 'theme.colors.bg',
            colors: { primary: '#F4F6F8', secondary: '#FFF', info: '#E5E8ED', header: '#21272E' }
          }),
          e(t, {
            title: 'theme.color.text',
            colors: {
              primary: '#29313A',
              secondary: '#67707C',
              tertiary: '#848D98',
              placeholder: '#848D98',
              white: '#FFF',
              gray: '#B8BEC6'
            }
          })
        ]
      }),
      `
`,
      e('br', {}),
      `
`,
      e(r.h3, {
        id: 'примечание-многие-из-компонентов-имеют-свои-собственные-переменные',
        children: 'Примечание: Многие из компонентов имеют свои собственные переменные.'
      }),
      `
`,
      e('br', {}),
      `
`,
      e('br', {}),
      `
`,
      e(r.h2, { id: 'установка', children: 'Установка' }),
      `
`,
      e(r.p, { children: 'Отдельно от всей библиотеки можно скачать и подключить только переменные.' }),
      `
`,
      e(r.pre, {
        children: e(r.code, {
          className: 'language-bash',
          children: `yarn add @eubank/kit-variables
`
        })
      }),
      `
`,
      e(r.p, { children: 'Далее переменные можно подключить как обычный CSS файл.' }),
      `
`,
      e(r.pre, {
        children: e(r.code, {
          className: 'language-jsx',
          children: `import '@eubank/kit-variables/index.css'
// или
import '@eubank/kit-variables/colors.css'
`
        })
      })
    ]
  })
}
function l(u = {}) {
  const { wrapper: r } = Object.assign({}, s(), u.components)
  return r ? e(r, { ...u, children: e(o, { ...u }) }) : o(u)
}
const p = () => {
  throw new Error('Docs-only story')
}
p.parameters = { docsOnly: !0 }
const n = {
  title: 'General/CSS Переменные',
  id: 'General/css',
  parameters: { previewTabs: { canvas: { hidden: !0 } } },
  tags: ['stories-mdx'],
  includeStories: ['__page']
}
n.parameters = n.parameters || {}
n.parameters.docs = { ...(n.parameters.docs || {}), page: l }
const k = ['__page']
export { k as __namedExportsOrder, p as __page, n as default }
//# sourceMappingURL=1.3.css-vars.stories-283afbf6.js.map
