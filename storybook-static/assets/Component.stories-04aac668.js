import{a as s,j as e}from"./jsx-runtime-37f7df21.js";import{r as d}from"./index-f1f2c4b1.js";import{A as i}from"./Component-8fb68d72.js";import{B as R}from"./Component-f2a7194b.js";import{L}from"./Component-0fc422e6.js";import"./clsx.m-1229b3e0.js";import"./mergeRefs-dc8f3646.js";import"./Component-856ebfaa.js";import"./tslib.es6-6635c9de.js";const M={title:"Accordion",component:i,argTypes:{chevroneIcon:{control:"text"}}},n={args:{title:"Star Wars",description:"A long time ago in a galaxy far, far away... .",extra:"Imma help-p-p-er cos text of help am I",children:`The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the
        late EMPEROR PALPATINE. GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last
        hope of the Jedi, trains for battle against the diabolical FIRST ORDER. Meanwhile, Supreme Leader KYLO REN rages
        in search of the phantom Emperor, determined to destroy any threat to his power....`},argTypes:{title:{control:"text"},description:{control:"text"},extra:{control:"text"},children:{control:"text"},classes:{control:{disable:!0}}}},o={render:()=>{const[a,t]=d.useState(!1);return s("div",{style:{display:"flex",gap:12,alignItems:"start"},children:[e(R,{onClick:()=>t(!a),children:a?"Закрыть":"Открыть"}),e(i,{title:"Подробнее",open:a,children:"По состоянию на 30 июня 2020 года имеет 17 региональных филиалов и 117 расчетно-кассовых отделений на территории Республики Казахстан и Российской Федерации"})]})}},r={render:()=>{const a=()=>s("div",{children:[e("div",{children:"Content..."}),e("div",{children:"Content..."}),e("div",{children:"Content..."})]}),[t,T]=d.useState(!1),[A,l]=d.useState(!1);return s("div",{style:{display:"flex",gap:12,alignItems:"start"},children:[e(R,{onClick:()=>{t||setTimeout(()=>l(!0),2e3),T(!t)},children:t?"Свернуть":"Развернуть"}),e(i,{title:"Аккордион",open:t,onVisibleChange:C=>{C&&setTimeout(()=>l(!1),500)},children:e("div",{children:A?e(a,{}):e(L,{})})})]})}};var c,p,h,m,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Star Wars',
    description: 'A long time ago in a galaxy far, far away... .',
    extra: 'Imma help-p-p-er cos text of help am I',
    children: \`The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the
        late EMPEROR PALPATINE. GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last
        hope of the Jedi, trains for battle against the diabolical FIRST ORDER. Meanwhile, Supreme Leader KYLO REN rages
        in search of the phantom Emperor, determined to destroy any threat to his power....\`
  },
  argTypes: {
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    extra: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    classes: {
      control: {
        disable: true
      }
    }
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"description",...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var g,f,E;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [expanded, setExpanded] = React.useState(false);
    return <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'start'
    }}>
        <Button onClick={() => setExpanded(!expanded)}>{expanded ? 'Закрыть' : 'Открыть'}</Button>

        <Accordion title="Подробнее" open={expanded}>
          По состоянию на 30 июня 2020 года имеет 17 региональных филиалов и 117 расчетно-кассовых отделений на
          территории Республики Казахстан и Российской Федерации
        </Accordion>
      </div>;
  }
}`,...(E=(f=o.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var u,v,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const Content = () => <div>
        <div>Content...</div>
        <div>Content...</div>
        <div>Content...</div>
      </div>;
    const [expanded, setExpanded] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false);
    const handleToggle = () => {
      if (!expanded) {
        setTimeout(() => setLoaded(true), 2000);
      }
      setExpanded(!expanded);
    };
    const handleTransitionEnd = visible => {
      if (visible) {
        setTimeout(() => setLoaded(false), 500);
      }
    };
    return <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'start'
    }}>
        <Button onClick={handleToggle}>{expanded ? 'Свернуть' : 'Развернуть'}</Button>

        <Accordion title="Аккордион" open={expanded} onVisibleChange={handleTransitionEnd}>
          <div>{loaded ? <Content /> : <Loader />}</div>
        </Accordion>
      </div>;
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const V=["Sandbox","Controlled","Dynamic"];export{o as Controlled,r as Dynamic,n as Sandbox,V as __namedExportsOrder,M as default};
//# sourceMappingURL=Component.stories-04aac668.js.map
