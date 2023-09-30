import { M as l } from './index-089bb4e8.js'
import { j as e, a as r, F as d } from './jsx-runtime-37f7df21.js'
import { u as t } from './index-59d6410c.js'
import './iframe-f31e792b.js'
import '../sb-preview/runtime.js'
import './chunk-6P7RB4HF-36fee097.js'
import './index-f1f2c4b1.js'
import './index-c74c9f7f.js'
import './isNativeReflectConstruct-60b6c4ab.js'
import './index-9cb85e99.js'
import './index-356e4a49.js'
function o(n) {
  const u = Object.assign(
    { h1: 'h1', h2: 'h2', ul: 'ul', li: 'li', a: 'a', p: 'p', code: 'code', h3: 'h3', pre: 'pre', h4: 'h4' },
    t(),
    n.components
  )
  return r(d, {
    children: [
      e(l, {
        title: 'Для разработчика/Общая информация',
        parameters: { previewTabs: { canvas: { hidden: !0 } } },
        id: 'dev/start'
      }),
      `
`,
      e(u.h1, { id: 'общая-информация-для-разработчика', children: 'Общая информация для разработчика' }),
      `
`,
      e(u.h2, { id: 'содержание', children: 'Содержание' }),
      `
`,
      r(u.ul, {
        children: [
          `
`,
          e(u.li, {
            children: e(u.a, { href: '#%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5', children: 'Введение' })
          }),
          `
`,
          e(u.li, {
            children: e(u.a, {
              href: '#%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0',
              children: 'Структура проекта'
            })
          }),
          `
`,
          e(u.li, { children: e(u.a, { href: '#%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D1%8B', children: 'Скрипты' }) }),
          `
`
        ]
      }),
      `
`,
      e(u.h2, { id: 'введение', children: 'Введение' }),
      `
`,
      e(u.p, {
        children:
          'Добро пожаловать в документацию MDX для нашего UI Kit! В этом руководстве вы найдете всю необходимую информацию для начала разработки UI Kit с использованием MDX. MDX объединяет возможности Markdown и JSX, позволяя вам создавать интерактивную и динамическую документацию.'
      }),
      `
`,
      e(u.h2, { id: 'общая-информация', children: 'Общая информация' }),
      `
`,
      e(u.p, {
        children:
          'Наш проект UI Kit имеет определенную структуру, которая обеспечивает модульность и поддерживаемость. Вот основные каталоги и файлы в проекте:'
      }),
      `
`,
      r(u.ul, {
        children: [
          `
`,
          r(u.li, {
            children: [
              `
`,
              r(u.p, {
                children: [
                  e(u.code, { children: 'lerna' }),
                  ': Менеджер монорепозитория. Работает в связке с yarn workspaces. Т.к. каждый компонент это отдельный пакет, Lerna сильно упрощает работу с публикацией и версированием пакетов, а так же следит за версиями зависящих друг от друга пакетов. (',
                  e(u.a, {
                    href: 'https://lerna.js.org/',
                    target: '_blank',
                    rel: 'nofollow noopener noreferrer',
                    children: 'https://lerna.js.org/'
                  }),
                  ')'
                ]
              }),
              `
`
            ]
          }),
          `
`,
          r(u.li, {
            children: [
              `
`,
              r(u.p, {
                children: [
                  e(u.code, { children: 'nx' }),
                  ': Работает в связке с Lerna. Помогает резолвить зависящие друг от дурга пакеты. Может как откладывать сборку так и производить параллельную сборку пакетов. (',
                  e(u.a, {
                    href: 'https://nx.dev/getting-started/intro',
                    target: '_blank',
                    rel: 'nofollow noopener noreferrer',
                    children: 'https://nx.dev/getting-started/intro'
                  }),
                  ')'
                ]
              }),
              `
`
            ]
          }),
          `
`,
          r(u.li, {
            children: [
              `
`,
              r(u.p, {
                children: [
                  e(u.code, { children: '.storybook' }),
                  ': Этот каталог содержит файлы конфигурации для Storybook. Здесь вы можете настроить различные аспекты Storybook, такие как темы, раскладку и т.д., в которых запускаются истории. (',
                  e(u.a, {
                    href: 'https://storybook.js.org/docs/react/get-started/setup',
                    target: '_blank',
                    rel: 'nofollow noopener noreferrer',
                    children: 'https://storybook.js.org/docs/react/get-started/setup'
                  }),
                  ')'
                ]
              }),
              `
`
            ]
          }),
          `
`,
          r(u.li, {
            children: [
              `
`,
              r(u.p, {
                children: [
                  e(u.code, { children: 'packages' }),
                  ': В этом каталоге находятся отдельные пакеты или компоненты UI Kit. Каждый пакет может содержать свою собственную структуру файлов и зависимости. (',
                  e(u.a, {
                    href: 'https://classic.yarnpkg.com/lang/en/docs/workspaces/',
                    target: '_blank',
                    rel: 'nofollow noopener noreferrer',
                    children: 'https://classic.yarnpkg.com/lang/en/docs/workspaces/'
                  }),
                  ')'
                ]
              }),
              `
`
            ]
          }),
          `
`,
          r(u.li, {
            children: [
              `
`,
              r(u.p, {
                children: [
                  e(u.code, { children: 'rollup' }),
                  ': Для сборки используется сборщик Rollup. (',
                  e(u.a, {
                    href: 'https://rollupjs.org/introduction/',
                    target: '_blank',
                    rel: 'nofollow noopener noreferrer',
                    children: 'https://rollupjs.org/introduction/'
                  }),
                  ')'
                ]
              }),
              `
`
            ]
          }),
          `
`,
          r(u.li, {
            children: [
              `
`,
              r(u.p, {
                children: [
                  e(u.code, { children: 'vite' }),
                  ': Сборщик сторибука и бандлер. (',
                  e(u.a, {
                    href: 'https://vitejs.dev/guide/cli.html',
                    target: '_blank',
                    rel: 'nofollow noopener noreferrer',
                    children: 'https://vitejs.dev/guide/cli.html'
                  }),
                  ')'
                ]
              }),
              `
`
            ]
          }),
          `
`,
          r(u.li, {
            children: [
              `
`,
              r(u.p, { children: [e(u.code, { children: 'sass' }), ': Для стилизации используется Sass (scss).'] }),
              `
`
            ]
          }),
          `
`
        ]
      }),
      `
`,
      e(u.h3, { id: 'скрипты', children: 'Скрипты' }),
      `
`,
      e(u.p, {
        children:
          'UI Kit поставляется с предопределенными скриптами, которые можно выполнить с помощью CLI. Эти скрипты выполняют различные задачи, такие как сборка UI Kit, создание нового копонента и другое.'
      }),
      `
`,
      e(u.pre, {
        children: e(u.code, {
          className: 'language-bash',
          children: `"scripts": {
    "new": "cli/create-package.sh",
    "prepareSh": "chmod +x bin/prepare.sh && bin/prepare.sh",
    "dev": "storybook dev -p 6006",
    "preview:sb": "http-server storybook-static -p 9009",
    "build:sb": "yarn build && storybook build",
    "build": "bin/build.sh",
    "clean": "rm -rf packages/*/{tsconfig.tsbuildinfo,build} && rm -rf {build,storybook-static}",
    "pub:root": "./bin/publish.sh"
},
`
        })
      }),
      `
`,
      r(u.h4, {
        id: 'yarn-new---запускает-скрипт-clicreate-packagesh-который-создает-шаблон-нового-компонента-в-packages',
        children: [
          e(u.code, { children: 'yarn new' }),
          ' - запускает скрипт ',
          e(u.code, { children: 'cli/create-package.sh' }),
          ' который создает шаблон нового компонента в packages.'
        ]
      }),
      `
`,
      r(u.h4, {
        id: 'preparesh---раздает-пермишены-на-все-самописыне-скрипты',
        children: [e(u.code, { children: 'prepareSh' }), ' - раздает пермишены на все самописыне скрипты.']
      }),
      `
`,
      r(u.h4, {
        id: 'dev---запускает-storybook-локально',
        children: [e(u.code, { children: 'dev' }), ' - запускает storybook локально.']
      }),
      `
`,
      r(u.h4, {
        id: 'buildsb---билдит-сторибук',
        children: [e(u.code, { children: 'build:sb' }), ' - билдит сторибук.']
      }),
      `
`,
      r(u.h4, {
        id: 'previewsb---запускает-билд-сторибука-локально-localhost9009',
        children: [e(u.code, { children: 'preview:sb' }), ' - запускает билд сторибука локально (localhost:9009).']
      }),
      `
`,
      r(u.h4, {
        id: 'build---запускает-binbuildsh-скрипт-который-билдит-все-пакеты',
        children: [
          e(u.code, { children: 'build' }),
          ' - запускает ',
          e(u.code, { children: 'bin/build.sh' }),
          ' скрипт, который билдит все пакеты.'
        ]
      }),
      `
`,
      r(u.h4, {
        id: 'clean---чистит-билды-сторибука-и-всех-пакетов',
        children: [e(u.code, { children: 'clean' }), ' - чистит билды сторибука и всех пакетов.']
      }),
      `
`,
      r(u.h4, {
        id: 'pubroot---билдит-и-публикует-все-пакеты',
        children: [e(u.code, { children: 'pub:root' }), ' - билдит и публикует все пакеты.']
      })
    ]
  })
}
function c(n = {}) {
  const { wrapper: u } = Object.assign({}, t(), n.components)
  return u ? e(u, { ...n, children: e(o, { ...n }) }) : o(n)
}
const s = () => {
  throw new Error('Docs-only story')
}
s.parameters = { docsOnly: !0 }
const i = {
  title: 'Для разработчика/Общая информация',
  id: 'dev/start',
  parameters: { previewTabs: { canvas: { hidden: !0 } } },
  tags: ['stories-mdx'],
  includeStories: ['__page']
}
i.parameters = i.parameters || {}
i.parameters.docs = { ...(i.parameters.docs || {}), page: c }
const F = ['__page']
export { F as __namedExportsOrder, s as __page, i as default }
//# sourceMappingURL=2.1.structure.stories-a4585350.js.map
