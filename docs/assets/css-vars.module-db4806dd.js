import { a as c, j as e } from './jsx-runtime-276775ef.js'
const o = '_component_17dwp_1',
  a = '_description_17dwp_6',
  r = '_title_17dwp_12',
  i = '_name_17dwp_16',
  d = '_version_17dwp_20',
  t = { component: o, description: a, title: r, name: i, version: d },
  w = ({ name: n, children: s, version: _ }) =>
    c('div', {
      className: t.component,
      children: [
        c('div', {
          className: t.title,
          children: [e('h1', { className: t.name, children: n }), _ && e('span', { className: t.version, children: _ })]
        }),
        s && e('div', { className: t.description, children: s })
      ]
    }),
  p = '_categoryList_ad5de_1',
  l = '_categoryItem_ad5de_9',
  m = '_activeItem_ad5de_22',
  v = '_categoryTracker_ad5de_30',
  g = '_content_ad5de_41',
  y = { categoryList: p, categoryItem: l, activeItem: m, categoryTracker: v, content: g }
export { w as C, y as c }
//# sourceMappingURL=css-vars.module-db4806dd.js.map
