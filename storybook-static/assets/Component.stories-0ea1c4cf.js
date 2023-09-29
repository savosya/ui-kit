import{j as l,a as f}from"./jsx-runtime-37f7df21.js";import{r as C}from"./index-f1f2c4b1.js";import{c as g}from"./clsx.m-1229b3e0.js";const R=()=>l("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M10.1806 2.00152C10.3804 2.00113 10.5741 2.07073 10.7279 2.19823C10.8145 2.27003 10.8861 2.3582 10.9386 2.45771C10.9911 2.55722 11.0234 2.66609 11.0337 2.77811C11.0441 2.89013 11.0322 3.00308 10.9988 3.11051C10.9654 3.21793 10.9111 3.31771 10.8391 3.40413L7.00762 7.98825L10.7023 12.5809C10.7733 12.6684 10.8264 12.7691 10.8584 12.8771C10.8904 12.9852 10.9007 13.0985 10.8888 13.2105C10.8769 13.3226 10.843 13.4312 10.7889 13.5301C10.7349 13.629 10.6619 13.7162 10.574 13.7868C10.4855 13.8647 10.3819 13.9234 10.2696 13.9593C10.1574 13.9952 10.0389 14.0075 9.92164 13.9955C9.80439 13.9835 9.6909 13.9473 9.58828 13.8893C9.48567 13.8313 9.39615 13.7528 9.32534 13.6585L5.1945 8.52705C5.06871 8.37402 4.99994 8.18207 4.99994 7.98397C4.99994 7.78587 5.06871 7.59392 5.1945 7.44089L9.47073 2.30941C9.55653 2.20591 9.66551 2.1241 9.78885 2.0706C9.91218 2.01711 10.0464 1.99344 10.1806 2.00152Z",fill:"#848D98"})}),j="_root_1t3rn_11",L="_crumb_1t3rn_18",k="_alternative_1t3rn_26",D="_disabled_1t3rn_38",i={root:j,crumb:L,alternative:k,disabled:D},c=({home:r,crumbs:n=[],onCrumbClick:a,separator:u,classes:o,type:q="default",withEnter:B=!0,withSpace:E=!1})=>{const V=C.useMemo(()=>n.reduce((e,t)=>(e.fullRoute=e.fullRoute+t.route,e[t.route.slice(1)]=e.fullRoute,e),{fullRoute:""}),[n]),m=(e,t)=>{(B&&e.code==="Enter"||E&&e.code==="Space")&&(a==null||a(t))},b=e=>g(i.crumb,o==null?void 0:o.crumb,{[i.alternative]:q==="alternative",[i.disabled]:e.disabled}),p=(e,t)=>{if(!e.disabled)return a?()=>a(t):void 0};return f("div",{className:g(i.root,o==null?void 0:o.root),children:[l("span",{onKeyDown:e=>m(e,r.route),className:b(r),onClick:p(r,r.route),tabIndex:r.disabled?-1:1,children:r.label}),n==null?void 0:n.map((e,t)=>{const _=V[e.route.slice(1)];return f(C.Fragment,{children:[u||l(R,{}),l("span",{onKeyDown:e.disabled?void 0:N=>m(N,_),className:b(e),onClick:p(e,_),tabIndex:e!=null&&e.disabled?-1:t+1,children:e.label})]},e.route)})]})};try{c.displayName="Breadcrumbs",c.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{home:{defaultValue:null,description:"",name:"home",required:!0,type:{name:"Crumb"}},crumbs:{defaultValue:{value:"[]"},description:"",name:"crumbs",required:!1,type:{name:"Crumb[]"}},onCrumbClick:{defaultValue:null,description:"",name:"onCrumbClick",required:!1,type:{name:"((route: string) => void)"}},separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"alternative"'}]}},withSpace:{defaultValue:{value:"false"},description:"",name:"withSpace",required:!1,type:{name:"boolean"}},withEnter:{defaultValue:{value:"true"},description:"",name:"withEnter",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"{ root?: string; crumb?: string; } | undefined"}}}}}catch{}const M={title:"Breadcrumbs",component:c},s={args:{home:{route:"/",label:"/"},crumbs:[{route:"/crumb_1",label:"Crumb 1"},{route:"/crumb_2",label:"Crumb 2"},{route:"/crumb_3",label:"Crumb 3"},{route:"/crumb_4",label:"Crumb 4"},{route:"/crumb_5",label:"Crumb 5"},{route:"/crumb_6",label:"Crumb 6"}]},argTypes:{separator:{control:"text"},classes:{control:{disable:!0}}}},d={render:()=>l(c,{home:{route:"/",label:"/"},crumbs:[{route:"/search",label:"Поиск"},{route:"/settings",label:"Настройки",disabled:!0},{route:"/1",label:"Product 1"}],onCrumbClick:u=>{alert(`[route]: ${u}`),console.log("route",u)}})};var h,v,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    home: {
      route: '/',
      label: '/'
    },
    crumbs: [{
      route: '/crumb_1',
      label: 'Crumb 1'
    }, {
      route: '/crumb_2',
      label: 'Crumb 2'
    }, {
      route: '/crumb_3',
      label: 'Crumb 3'
    }, {
      route: '/crumb_4',
      label: 'Crumb 4'
    }, {
      route: '/crumb_5',
      label: 'Crumb 5'
    }, {
      route: '/crumb_6',
      label: 'Crumb 6'
    }]
  },
  argTypes: {
    separator: {
      control: 'text'
    },
    classes: {
      control: {
        disable: true
      }
    }
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,w,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const home = {
      route: '/',
      label: '/'
    };
    const routes = [{
      route: '/search',
      label: 'Поиск'
    }, {
      route: '/settings',
      label: 'Настройки',
      disabled: true
    }, {
      route: '/1',
      label: 'Product 1'
    }];
    const onClick = (route: string) => {
      alert(\`[route]: \${route}\`);
      console.log('route', route);
    };
    return <Breadcrumbs home={home} crumbs={routes} onCrumbClick={onClick} />;
  }
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const I=["Sandbox","Example"],T=Object.freeze(Object.defineProperty({__proto__:null,Example:d,Sandbox:s,__namedExportsOrder:I,default:M},Symbol.toStringTag,{value:"Module"}));export{T as B,d as E,s as S,c as a};
//# sourceMappingURL=Component.stories-0ea1c4cf.js.map
