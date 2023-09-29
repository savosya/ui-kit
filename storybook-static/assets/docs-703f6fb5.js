import{j as t,a as c,F as d}from"./jsx-runtime-37f7df21.js";import{f as a,M as b,h as m}from"./index-596f2c84.js";import{C as g}from"./css-vars.module-a69f3204.js";import{s as p,T as h}from"./Tabs-8b018486.js";import"./index-f1f2c4b1.js";import{B as y}from"./Component-f2a7194b.js";import{P as _,B as e,O as v,G as k,L as f,S as i}from"./Component.stories-dca1fbeb.js";import{u as r}from"./index-59d6410c.js";import"./iframe-6d2dbeee.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./index-c74c9f7f.js";import"./isNativeReflectConstruct-60b6c4ab.js";import"./index-9cb85e99.js";import"./index-356e4a49.js";import"./clsx.m-1229b3e0.js";import"./mergeRefs-dc8f3646.js";import"./Component-856ebfaa.js";import"./tslib.es6-6635c9de.js";const F="@savosya/savosya-myuikit-button",x="1.0.1",B="Button",C="ISC",j="index.js",D="build/esm/index.js",O={react:"^17 || ^18","react-dom":"^17 || ^18"},A={"@savosya/savosya-myuikit-hooks":"^1.0.1","@savosya/savosya-myuikit-loader":"^1.0.1","@savosya/savosya-myuikit-utils":"^1.0.1",clsx:"^1.2.1",tslib:"^2.6.2"},M={access:"public",directory:"build"},E={tsc:"tsc",build:"rollup -c ../../rollup.config.js"},X="31d48558bb3b557afd22f848178c9f85fed90b38",L={name:F,version:x,description:B,license:C,main:j,module:D,peerDependencies:O,dependencies:A,publishConfig:M,scripts:E,gitHead:X};function l(n){const o=Object.assign({h3:"h3"},r(),n.components);return c(d,{children:[t(o.h3,{id:"primary-button",children:"Primary Button"}),`
`,t(a,{of:_,meta:e}),`
`,t(o.h3,{id:"outline-button",children:"Outline Button"}),`
`,t(a,{of:v,meta:e,className:"darker"}),`
`,t(o.h3,{id:"ghost-button",children:"Ghost Button"}),`
`,t(a,{of:k,meta:e,className:"darker"}),`
`,t(o.h3,{id:"link-button",children:"Link Button"}),`
`,t(a,{of:f,meta:e})]})}function N(n={}){const{wrapper:o}=Object.assign({},r(),n.components);return o?t(o,Object.assign({},n,{children:t(l,n)})):l(n)}function s(n){const o=Object.assign({pre:"pre",code:"code"},r(),n.components);return t(o.pre,{children:t(o.code,{className:"language-css",children:`:root {
  // primary-dark:
  --button-primary-dark-bg_default: var(--text-primary);
  --button-primary-dark-color_default: #FFF;
  --button-primary-dark-bg_hover: #1C2229;
  --button-primary-dark-color_hover: #FFF;
  --button-primary-dark-bg_active: #191D23;
  --button-primary-dark-color_active: #FFF;
  --button-primary-dark-bg_disabled: #E5E8ED;
  --button-primary-dark-color_disabled: var(--text-tertiary);
  --button-primary-dark-bg_loading: #E5E8ED;
  --button-primary-dark-color_loading: var(--text-tertiary);

  // ghost-dark
  --button-ghost-dark-bg: transparent;
  --button-ghost-dark-color_default: #29313A;
  --button-ghost-dark-color_hover: var(--text-tertiary);
  --button-ghost-dark-color_active: var(--text-primary);
  --button-ghost-dark-color_disabled: #A3ABB6;
  --button-ghost-dark-color_loading: #A3ABB6;

  // outline-dark
  --button-outline-dark-bg_default: transparent;
  --button-outline-dark-color_default: var(--text-primary);
  --button-outline-dark-bg_hover: #FAFBFC;
  --button-outline-dark-color_hover: var(--text-primary);
  --button-outline-dark-bg_active: #EFF1F4;
  --button-outline-dark-color_active: var(--text-primary);
  --button-outline-dark-bg_disabled: transparent;
  --button-outline-dark-color_disabled: var(--text-tertiary);
  --button-outline-dark-bg_loading: transparent;
  --button-outline-dark-color_loading: var(--text-tertiary);

  // primary-light:
  --button-primary-light-bg_default: #FFF;
  --button-primary-light-color_default: var(--text-primary);
  --button-primary-light-bg_hover: #FAFBFC;
  --button-primary-light-color_hover: var(--text-primary);
  --button-primary-light-bg_active: #EFF1F4;
  --button-primary-light-color_active: var(--text-primary);
  --button-primary-light-bg_disabled: #333B47;
  --button-primary-light-color_disabled: var(--text-secondary);
  --button-primary-light-bg_loading: #333B47;
  --button-primary-light-color_loading: var(--text-secondary);

  // ghost-light:
  --button-ghost-light-bg: transparent;
  --button-ghost-light-color_default: #FFF;
  --button-ghost-light-color_hover: var(--text-tertiary);
  --button-ghost-light-color_active: #FFF;
  --button-ghost-light-color_disabled: #A3ABB6;
  --button-ghost-light-color_loading: #A3ABB6;

  // outline-light:
  --button-outline-light-bg_default: transparent;
  --button-outline-light-color_default: #FFF;
  --button-outline-light-bg_hover: #FFF;
  --button-outline-light-color_hover: var(--text-primary);
  --button-outline-light-bg_active: #EFF1F4;
  --button-outline-light-color_active: var(--text-primary);
  --button-outline-light-bg_disabled: transparent;
  --button-outline-light-color_disabled: var(--text-tertiary);
  --button-outline-light-bg_loading: transparent;
  --button-outline-light-color_loading: var(--text-tertiary);

  // link
  --button-link-bg: transparent;
  --button-link-color_default: #4683C8;
  --button-link-color_hover: #6B9CD3;
  --button-link-color_active: #90B5DE;
  --button-link-color_visited: #3869A0;
  --button-link-color_loading: #3869A0;
}
`})})}function S(n={}){const{wrapper:o}=Object.assign({},r(),n.components);return o?t(o,Object.assign({},n,{children:t(s,n)})):s(n)}function u(n){const o=Object.assign({p:"p",pre:"pre",code:"code"},r(),n.components);return c(d,{children:[t(b,{title:"Components/Button",component:y,id:"Button"}),`
`,t(g,{name:"Button",version:L.version,package:"@eubank/kit-button",children:t(o.p,{children:"Компонент кнопки"})}),`
`,t(o.pre,{children:t(o.code,{className:"language-jsx",children:`import { Button } from '@eubank/kit-root'
import { Button } from '@eubank/kit-button'
`})}),`
`,t(a,Object.assign({of:i,meta:e},p)),`
`,t(h,{docs:t(N,{}),props:t(m,{of:i}),css:t(S,{})})]})}function nt(n={}){const{wrapper:o}=Object.assign({},r(),n.components);return o?t(o,Object.assign({},n,{children:t(u,n)})):u(n)}export{nt as default};
//# sourceMappingURL=docs-703f6fb5.js.map
