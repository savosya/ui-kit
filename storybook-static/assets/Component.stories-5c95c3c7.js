import{j as r,a as Z}from"./jsx-runtime-37f7df21.js";import{r as n,R as k}from"./index-f1f2c4b1.js";import{_ as q}from"./isNativeReflectConstruct-60b6c4ab.js";import{u as Ee,_ as C,a as ne,C as Ce,e as le,K as re,P as Oe}from"./CSSMotionList-d86c2cd4.js";import{c as M}from"./index-2d278ef6.js";import{u as Me}from"./useId-e95616b2.js";import{p as Pe}from"./pickAttrs-be982112.js";import{c as L}from"./clsx.m-1229b3e0.js";import{B as $}from"./Component-f2a7194b.js";import{C as ie}from"./Component-cfd7507d.js";var be=n.createContext({});function se(e,o,t){var a=o;return!a&&t&&(a="".concat(e,"-").concat(t)),a}function ce(e,o){var t=e["page".concat(o?"Y":"X","Offset")],a="scroll".concat(o?"Top":"Left");if(typeof t!="number"){var l=e.document;t=l.documentElement[a],typeof t!="number"&&(t=l.body[a])}return t}function Ve(e){var o=e.getBoundingClientRect(),t={left:o.left,top:o.top},a=e.ownerDocument,l=a.defaultView||a.parentWindow;return t.left+=ce(l),t.top+=ce(l,!0),t}const Be=n.memo(function(e){var o=e.children;return o},function(e,o){var t=o.shouldUpdate;return!t});var de={width:0,height:0,overflow:"hidden",outline:"none"},Ie=k.forwardRef(function(e,o){var t=e.prefixCls,a=e.className,l=e.style,i=e.title,u=e.ariaId,m=e.footer,v=e.closable,c=e.closeIcon,d=e.onClose,b=e.children,x=e.bodyStyle,_=e.bodyProps,N=e.modalRender,S=e.onMouseDown,s=e.onMouseUp,V=e.holderRef,w=e.visible,P=e.forceRender,g=e.width,B=e.height,p=e.classNames,y=e.styles,X=k.useContext(be),F=X.panel,G=Ee(V,F),T=n.useRef(),z=n.useRef();k.useImperativeHandle(o,function(){return{focus:function(){var O;(O=T.current)===null||O===void 0||O.focus()},changeActive:function(O){var j=document,U=j.activeElement;O&&U===z.current?T.current.focus():!O&&U===T.current&&z.current.focus()}}});var R={};g!==void 0&&(R.width=g),B!==void 0&&(R.height=B);var E;m&&(E=k.createElement("div",{className:M("".concat(t,"-footer"),p==null?void 0:p.footer),style:C({},y==null?void 0:y.footer)},m));var I;i&&(I=k.createElement("div",{className:M("".concat(t,"-header"),p==null?void 0:p.header),style:C({},y==null?void 0:y.header)},k.createElement("div",{className:"".concat(t,"-title"),id:u},i)));var A;v&&(A=k.createElement("button",{type:"button",onClick:d,"aria-label":"Close",className:"".concat(t,"-close")},c||k.createElement("span",{className:"".concat(t,"-close-x")})));var D=k.createElement("div",{className:M("".concat(t,"-content"),p==null?void 0:p.content),style:y==null?void 0:y.content},A,I,k.createElement("div",q({className:M("".concat(t,"-body"),p==null?void 0:p.body),style:C(C({},x),y==null?void 0:y.body)},_),b),E);return k.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":i?u:null,"aria-modal":"true",ref:G,style:C(C({},l),R),className:M(t,a),onMouseDown:S,onMouseUp:s},k.createElement("div",{tabIndex:0,ref:T,style:de,"aria-hidden":"true"}),k.createElement(Be,{shouldUpdate:w||P},N?N(D):D),k.createElement("div",{tabIndex:0,ref:z,style:de,"aria-hidden":"true"}))}),ge=n.forwardRef(function(e,o){var t=e.prefixCls,a=e.title,l=e.style,i=e.className,u=e.visible,m=e.forceRender,v=e.destroyOnClose,c=e.motionName,d=e.ariaId,b=e.onVisibleChanged,x=e.mousePosition,_=n.useRef(),N=n.useState(),S=ne(N,2),s=S[0],V=S[1],w={};s&&(w.transformOrigin=s);function P(){var g=Ve(_.current);V(x?"".concat(x.x-g.left,"px ").concat(x.y-g.top,"px"):"")}return n.createElement(Ce,{visible:u,onVisibleChanged:b,onAppearPrepare:P,onEnterPrepare:P,forceRender:m,motionName:c,removeOnLeave:v,ref:_},function(g,B){var p=g.className,y=g.style;return n.createElement(Ie,q({},e,{ref:o,title:a,ariaId:d,prefixCls:t,holderRef:B,style:C(C(C({},y),l),w),className:M(i,p)}))})});ge.displayName="Content";function Ae(e){var o=e.prefixCls,t=e.style,a=e.visible,l=e.maskProps,i=e.motionName,u=e.className;return n.createElement(Ce,{key:"mask",visible:a,motionName:i,leavedClassName:"".concat(o,"-mask-hidden")},function(m,v){var c=m.className,d=m.style;return n.createElement("div",q({ref:v,style:C(C({},d),t),className:M("".concat(o,"-mask"),c,u)},l))})}function qe(e){var o=e.prefixCls,t=o===void 0?"rc-dialog":o,a=e.zIndex,l=e.visible,i=l===void 0?!1:l,u=e.keyboard,m=u===void 0?!0:u,v=e.focusTriggerAfterClose,c=v===void 0?!0:v,d=e.wrapStyle,b=e.wrapClassName,x=e.wrapProps,_=e.onClose,N=e.afterOpenChange,S=e.afterClose,s=e.transitionName,V=e.animation,w=e.closable,P=w===void 0?!0:w,g=e.mask,B=g===void 0?!0:g,p=e.maskTransitionName,y=e.maskAnimation,X=e.maskClosable,F=X===void 0?!0:X,G=e.maskStyle,T=e.maskProps,z=e.rootClassName,R=e.classNames,E=e.styles,I=n.useRef(),A=n.useRef(),D=n.useRef(),J=n.useState(i),O=ne(J,2),j=O[0],U=O[1],ke=Me();function _e(){le(A.current,document.activeElement)||(I.current=document.activeElement)}function xe(){if(!le(A.current,document.activeElement)){var f;(f=D.current)===null||f===void 0||f.focus()}}function Ne(f){if(f)xe();else{if(U(!1),B&&I.current&&c){try{I.current.focus({preventScroll:!0})}catch{}I.current=null}j&&(S==null||S())}N==null||N(f)}function Q(f){_==null||_(f)}var Y=n.useRef(!1),ee=n.useRef(),Se=function(){clearTimeout(ee.current),Y.current=!0},Re=function(){ee.current=setTimeout(function(){Y.current=!1})},ae=null;F&&(ae=function(te){Y.current?Y.current=!1:A.current===te.target&&Q(te)});function we(f){if(m&&f.keyCode===re.ESC){f.stopPropagation(),Q(f);return}i&&f.keyCode===re.TAB&&D.current.changeActive(!f.shiftKey)}return n.useEffect(function(){i&&(U(!0),_e())},[i]),n.useEffect(function(){return function(){clearTimeout(ee.current)}},[]),n.createElement("div",q({className:M("".concat(t,"-root"),z)},Pe(e,{data:!0})),n.createElement(Ae,{prefixCls:t,visible:B&&i,motionName:se(t,p,y),style:C(C({zIndex:a},G),E==null?void 0:E.mask),maskProps:T,className:R==null?void 0:R.mask}),n.createElement("div",q({tabIndex:-1,onKeyDown:we,className:M("".concat(t,"-wrap"),b,R==null?void 0:R.wrapper),ref:A,onClick:ae,style:C(C(C({zIndex:a},d),E==null?void 0:E.wrapper),{},{display:j?null:"none"})},x),n.createElement(ge,q({},e,{onMouseDown:Se,onMouseUp:Re,ref:D,closable:P,ariaId:ke,prefixCls:t,visible:i&&j,onClose:Q,onVisibleChanged:Ne,motionName:se(t,s,V)}))))}var he=function(o){var t=o.visible,a=o.getContainer,l=o.forceRender,i=o.destroyOnClose,u=i===void 0?!1:i,m=o.afterClose,v=o.panelRef,c=n.useState(t),d=ne(c,2),b=d[0],x=d[1],_=n.useMemo(function(){return{panel:v}},[v]);return n.useEffect(function(){t&&x(!0)},[t]),!l&&u&&!b?null:n.createElement(be.Provider,{value:_},n.createElement(Oe,{open:t||l||b,autoDestroy:!1,getContainer:a,autoLock:t||b},n.createElement(qe,q({},o,{destroyOnClose:u,afterClose:function(){m==null||m(),x(!1)}}))))};he.displayName="Dialog";const Te="_close_1s1w6_1",De={close:Te},oe=({size:e=20,onClick:o})=>r("svg",{onClick:o,width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:De.close,children:r("path",{d:"M19.5782 4.42177C20.1406 4.98412 20.1406 5.89588 19.5782 6.45823L14.0368 12L19.5782 17.5418C20.0937 18.0573 20.1367 18.8663 19.7071 19.4308L19.5782 19.5782C19.0159 20.1406 18.1041 20.1406 17.5418 19.5782L12 14.0368L6.45823 19.5782C5.89588 20.1406 4.98412 20.1406 4.42177 19.5782C3.85941 19.0159 3.85941 18.1041 4.42177 17.5418L9.96319 12L4.42177 6.45823C3.90627 5.94274 3.86332 5.13365 4.29289 4.56923L4.42177 4.42177C4.98412 3.85941 5.89588 3.85941 6.45823 4.42177L12 9.96319L17.5418 4.42177C18.1041 3.85941 19.0159 3.85941 19.5782 4.42177Z",fill:"currentColor"})});try{oe.displayName="CloseIcon",oe.__docgenInfo={description:"",displayName:"CloseIcon",props:{size:{defaultValue:{value:"20"},description:"",name:"size",required:!1,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Le="_root_102b7_2",$e="_topAdjuster_102b7_8",ze="_backdrop_102b7_13",je="_wrapper_102b7_27",Ue="_top_102b7_8",We="_center_102b7_43",Ke="_bottom_102b7_48",He="_header_102b7_54",Xe="_closePadding_102b7_59",Ye="_gray_102b7_62",Ze="_body_102b7_66",Fe="_footer_102b7_77",h={root:Le,topAdjuster:$e,backdrop:ze,wrapper:je,top:Ue,center:We,bottom:Ke,header:He,closePadding:Xe,gray:Ye,body:Ze,footer:Fe};const H=({children:e,open:o,onClose:t,title:a,footer:l,closable:i=!0,backdrop:u=!0,closeOnBackdrop:m=!0,closeOnEsc:v=!1,position:c,afterClose:d,getContainer:b,destroyOnClose:x=!0,closeIcon:_,forceRender:N=!1,className:S,classes:s={},style:V,bodyStyle:w,width:P,background:g})=>r(he,{prefixCls:"eub-modal",animation:"fade",maskAnimation:"fade",visible:o,onClose:t,closeIcon:_||r(oe,{}),title:a,footer:l,closable:i,mask:u,maskClosable:m,keyboard:v,afterClose:d,getContainer:b,destroyOnClose:x,forceRender:N,className:L(h.root,S,{[h.topAdjuster]:c===void 0}),classNames:{wrapper:L(h.wrapper,s==null?void 0:s.wrapper,{[h.top]:c==="top",[h.center]:c==="center",[h.bottom]:c==="bottom"}),mask:L(h.backdrop,s==null?void 0:s.backdrop),header:L(h.header,s==null?void 0:s.header,{[h.closePadding]:i,[h.gray]:g==="gray"}),body:L(h.body,s==null?void 0:s.body,{[h.closePadding]:!a,[h.gray]:g==="gray"}),footer:L(h.footer,s==null?void 0:s.footer,{[h.gray]:g==="gray"})},style:{...V,width:P},bodyStyle:{...w},children:e});try{H.displayName="Modal",H.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"center"'}]}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},closeOnBackdrop:{defaultValue:{value:"true"},description:"",name:"closeOnBackdrop",required:!1,type:{name:"boolean"}},closeOnEsc:{defaultValue:{value:"false"},description:"",name:"closeOnEsc",required:!1,type:{name:"boolean"}},afterClose:{defaultValue:null,description:"",name:"afterClose",required:!1,type:{name:"(() => void)"}},getContainer:{defaultValue:null,description:"",name:"getContainer",required:!1,type:{name:"(() => HTMLElement)"}},destroyOnClose:{defaultValue:{value:"true"},description:"",name:"destroyOnClose",required:!1,type:{name:"boolean"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"ReactNode"}},forceRender:{defaultValue:{value:"false"},description:"",name:"forceRender",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:{value:"{}"},description:"",name:"classes",required:!1,type:{name:"{ backdrop?: string; wrapper?: string; header?: string | undefined; body?: string | undefined; footer?: string | undefined; } | undefined"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},bodyStyle:{defaultValue:null,description:"",name:"bodyStyle",required:!1,type:{name:"CSSProperties"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<string | number>"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}}}}}catch{}const Ge={title:"Modal",component:H},W={render:e=>{const[o,t]=n.useState(!1),a=()=>t(l=>!l);return Z("div",{children:[r($,{onClick:a,children:"Открыть"}),r(H,{...e,title:"Modal Title",footer:r($,{size:"s",type:"ghost",onClick:a,children:"Ок"}),open:o,onClose:a,children:r("div",{children:"Modal Content"})})]})},argTypes:{classes:{control:{disable:!0}},title:{control:"text"},footer:{control:"text"},closeIcon:{control:"text"},width:{control:"text"}}},K=()=>{const[e,o]=n.useState(!1),[t,a]=n.useState("center"),[l,i]=n.useState(!0),[u,m]=n.useState(!0),v=()=>o(d=>!d),c=d=>d===t?"primary":"outline";return Z("div",{style:{display:"flex",gap:12,flexDirection:"column",flex:"0 0 auto"},children:[Z("div",{style:{display:"flex",gap:12},children:[r($,{type:c("top"),onClick:()=>a("top"),size:"s",children:"top"}),r($,{type:c("center"),onClick:()=>a("center"),size:"s",children:"center"}),r($,{type:c("bottom"),onClick:()=>a("bottom"),size:"s",children:"bottom"}),r(ie,{label:"Closable",checked:l,onChange:(d,{checked:b})=>i(b)}),r(ie,{label:"Close On Backdrop",checked:u,onChange:(d,{checked:b})=>m(b)})]}),r("div",{children:r($,{onClick:v,children:"Открыть"})}),Z(H,{title:"Example Title",position:t,open:e,onClose:v,closable:l,closeOnBackdrop:u,children:[r("div",{children:"some contents..."}),r("div",{children:"some contents..."}),r("div",{children:"some contents..."}),r("div",{children:"some contents..."}),r("div",{children:"some contents..."}),r("div",{children:"some contents..."}),r("div",{children:"some contents..."}),r("div",{children:"some contents..."})]})]})};var ue,me,fe;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(prev => !prev);
    return <div>
        <Button onClick={toggle}>Открыть</Button>
        <Modal {...args} title={'Modal Title'} footer={<Button size="s" type="ghost" onClick={toggle}>
              Ок
            </Button>} open={open} onClose={toggle}>
          <div>Modal Content</div>
        </Modal>
      </div>;
  },
  argTypes: {
    classes: {
      control: {
        disable: true
      }
    },
    title: {
      control: 'text'
    },
    footer: {
      control: 'text'
    },
    closeIcon: {
      control: 'text'
    },
    width: {
      control: 'text'
    }
  }
}`,...(fe=(me=W.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ve,pe,ye;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const [position, setPlacement] = useState<'center' | 'bottom' | 'top'>('center');
  const [closable, setClosable] = useState(true);
  const [closeOnBackdrop, setCloseOnBackdrop] = useState(true);
  const toggle = () => setOpen(prev => !prev);
  const isActive = (place: 'center' | 'bottom' | 'top') => place === position ? 'primary' : 'outline';
  return <div style={{
    display: 'flex',
    gap: 12,
    flexDirection: 'column',
    flex: '0 0 auto'
  }}>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Button type={isActive('top')} onClick={() => setPlacement('top')} size="s">
          top
        </Button>
        <Button type={isActive('center')} onClick={() => setPlacement('center')} size="s">
          center
        </Button>
        <Button type={isActive('bottom')} onClick={() => setPlacement('bottom')} size="s">
          bottom
        </Button>

        <Checkbox label="Closable" checked={closable} onChange={(_, {
        checked
      }) => setClosable(checked)} />
        <Checkbox label="Close On Backdrop" checked={closeOnBackdrop} onChange={(_, {
        checked
      }) => setCloseOnBackdrop(checked)} />
      </div>

      <div>
        <Button onClick={toggle}>Открыть</Button>
      </div>

      <Modal title={'Example Title'} position={position} open={open} onClose={toggle} closable={closable} closeOnBackdrop={closeOnBackdrop}>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
        <div>some contents...</div>
      </Modal>
    </div>;
}`,...(ye=(pe=K.parameters)==null?void 0:pe.docs)==null?void 0:ye.source}}};const Je=["Sandbox","Example"],ct=Object.freeze(Object.defineProperty({__proto__:null,Example:K,Sandbox:W,__namedExportsOrder:Je,default:Ge},Symbol.toStringTag,{value:"Module"}));export{K as E,ct as M,W as S,H as a};
//# sourceMappingURL=Component.stories-5c95c3c7.js.map
