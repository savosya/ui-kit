import{j as a,a as _}from"./jsx-runtime-37f7df21.js";import{c as g}from"./clsx.m-1229b3e0.js";const T="_root_sxwh5_13",b="_disabled_sxwh5_36",f="_transparent_sxwh5_42",y="_s_sxwh5_45",h="_m_sxwh5_52",x="_l_sxwh5_59",n={root:T,disabled:b,transparent:f,s:y,m:h,l:x},e=r=>{const{className:o,children:i,size:c="m",disabled:p,transparent:m,...u}=r;return a("span",{className:g(n.root,n[c],{[n.disabled]:p,[n.transparent]:m},o),...u,children:i})};try{e.displayName="Tag",e.__docgenInfo={description:"",displayName:"Tag",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Tag",component:e},v={display:"flex",alignItems:"center",gap:16},s={render:()=>_("div",{style:v,children:[a(e,{disabled:!0,children:"Disabled"}),a(e,{transparent:!0,children:"Transparent"}),a(e,{size:"s",children:"Пример тэга S"}),a(e,{children:"Пример тэга M"}),a(e,{size:"l",children:"Пример тэга L"})]})};var t,l,d;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <div style={canvasStyles}>
        <Tag disabled>Disabled</Tag>
        <Tag transparent>Transparent</Tag>
        <Tag size="s">Пример тэга S</Tag>
        <Tag>Пример тэга M</Tag>
        <Tag size="l">Пример тэга L</Tag>
      </div>;
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const z=["Sandbox"],j=Object.freeze(Object.defineProperty({__proto__:null,Sandbox:s,__namedExportsOrder:z,default:S},Symbol.toStringTag,{value:"Module"}));export{s as S,e as T,j as a};
//# sourceMappingURL=Component.stories-489eaa14.js.map
