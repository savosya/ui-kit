import{a as d,j as l}from"./jsx-runtime-37f7df21.js";import{r as s}from"./index-f1f2c4b1.js";import{g as P,W as $}from"./react-tooltip.min-60efb42a.js";import{c as i}from"./clsx.m-1229b3e0.js";import{B as F}from"./Component-f2a7194b.js";const M="_root_10aox_11",W="_dark_10aox_18",G="_light_10aox_22",J="_small_padding_10aox_26",K="_title_10aox_30",Q="_content_10aox_37",U="_withTitle_10aox_43",X="_arrow_10aox_53",Y="_anchor_10aox_57",t={root:M,dark:W,light:G,small_padding:J,title:K,content:Q,withTitle:U,arrow:X,anchor:Y},n=p=>{const{title:o,content:a,mode:u="dark",children:x,placement:w="top",offset:S,hideDelay:k,openDelay:q,hideArrow:V,clickable:N,open:O,style:C,position:D,onShow:E,onHide:I,opacity:H=.94,float:j,trigger:m="hover",className:z,classes:e}=p,[f]=s.useState(`tooltip_${P()}`),y=m==="click",[A,R]=s.useState(!1),B=s.useCallback(()=>{y&&R(L=>!L)},[m]);return d(s.Fragment,{children:[l("a",{className:i(t.anchor,f,e==null?void 0:e.anchor),onClick:B,children:x}),o||a?d($,{anchorSelect:`.${f}`,variant:u,place:w,offset:S,delayHide:k,delayShow:q,noArrow:V,clickable:N,isOpen:O||(y?A:void 0),style:C,position:D,afterShow:E,afterHide:I,opacity:H,className:i(t.root,t[u],{[t.small_padding]:o&&!a},z,e==null?void 0:e.root),classNameArrow:i(t.arrow,e==null?void 0:e.arrow),float:j,children:[o&&l("div",{className:i(t.title,e==null?void 0:e.title),children:o}),a&&l("div",{className:i(t.content,t[u],{[t.withTitle]:o&&a},e==null?void 0:e.content),children:a})]}):null]})};try{n.displayName="Tooltip",n.__docgenInfo={description:"",displayName:"Tooltip",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"number"}},hideDelay:{defaultValue:null,description:"",name:"hideDelay",required:!1,type:{name:"number"}},openDelay:{defaultValue:null,description:"",name:"openDelay",required:!1,type:{name:"number"}},hideArrow:{defaultValue:null,description:"",name:"hideArrow",required:!1,type:{name:"boolean"}},clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean"}},closeOnScroll:{defaultValue:null,description:"",name:"closeOnScroll",required:!1,type:{name:"boolean"}},closeOnResize:{defaultValue:null,description:"",name:"closeOnResize",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"{ x: number; y: number; }"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void)"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void)"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"Opacity"}},float:{defaultValue:null,description:"",name:"float",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'}]}},trigger:{defaultValue:null,description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"{ anchor?: string; root?: string; arrow?: string | undefined; title?: string | undefined; content?: string | undefined; } | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Z={title:"Tooltip",component:n},r={args:{title:"Tooltip Title",opacity:1,children:"Tooltip Content",placement:"right"},argTypes:{title:{control:"text"},content:{control:"text"},position:{control:{disable:!0}},classes:{control:{disable:!0}}}},ee={display:"flex",flexDirection:"column",gap:"24px"},c=()=>d("div",{style:ee,children:[l(n,{title:"С возможностью клика внутри тултипа",clickable:!0,opacity:1,placement:"right-end",children:"Clickable tooltip."}),l(n,{content:"Only content. Not clickable",children:"Без возможности клика внутри тултипа"}),l(n,{title:"TITLE",content:d("div",{children:[l("div",{children:"Im function stool tip! long long long"}),l(F,{type:"ghost",mode:"light",size:"s",children:"понятно"})]}),clickable:!0,opacity:1,children:"Im tooltip with actions"})]});var h,g,_;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip Title',
    opacity: 1,
    children: 'Tooltip Content',
    placement: 'right'
  },
  argTypes: {
    title: {
      control: 'text'
    },
    content: {
      control: 'text'
    },
    position: {
      control: {
        disable: true
      }
    },
    classes: {
      control: {
        disable: true
      }
    }
  }
}`,...(_=(g=r.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var v,b,T;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div style={canvasStyle}>
    <Tooltip title={'С возможностью клика внутри тултипа'} clickable opacity={1} placement="right-end">
      Clickable tooltip.
    </Tooltip>

    <Tooltip content={'Only content. Not clickable'}>Без возможности клика внутри тултипа</Tooltip>

    <Tooltip title="TITLE" content={<div>
          <div>Im function stool tip! long long long</div>
          <Button type="ghost" mode="light" size="s">
            понятно
          </Button>
        </div>} clickable opacity={1}>
      Im tooltip with actions
    </Tooltip>
  </div>`,...(T=(b=c.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const te=["Sandbox","Examples"],re=Object.freeze(Object.defineProperty({__proto__:null,Examples:c,Sandbox:r,__namedExportsOrder:te,default:Z},Symbol.toStringTag,{value:"Module"}));export{c as E,r as S,re as T,n as a};
//# sourceMappingURL=Component.stories-9678b71c.js.map
