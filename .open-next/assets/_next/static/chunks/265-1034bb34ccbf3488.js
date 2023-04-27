"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{54777:function(e,r,t){t.d(r,{i:function(){return T}});var n=t(67294),o=t(64761),l=t(96768),a=t(56817),i=t(14258);let c={xs:(0,l.h)(1),sm:(0,l.h)(2),md:(0,l.h)(3),lg:(0,l.h)(4),xl:(0,l.h)(5)};function s(e,r){let t=e.fn.variant({variant:"outline",color:r}).border;return"string"==typeof r&&(r in e.colors||r.split(".")[0]in e.colors)?t:void 0===r?"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]:r}var u=(0,a.k)((e,{color:r},{size:t,variant:n})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:(0,l.h)(1),borderTop:`${(0,i.a)({size:t,sizes:c})} ${n} ${s(e,r)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${(0,i.a)({size:t,sizes:c})} ${n} ${s(e,r)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===r?e.colors.dark[1]:e.fn.themeColor(r,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:(0,l.h)((0,i.a)({size:t,sizes:c})),borderTopColor:s(e,r),borderTopStyle:n,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:(0,l.h)((0,i.a)({size:t,sizes:c})),borderLeftColor:s(e,r),borderLeftStyle:n}})),d=t(7414),f=t(95117),p=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,g=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,E=(e,r)=>{for(var t in r||(r={}))b.call(r,t)&&g(e,t,r[t]);if(v)for(var t of v(r))w.call(r,t)&&g(e,t,r[t]);return e},y=(e,r)=>h(e,m(r)),S=(e,r)=>{var t={};for(var n in e)b.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&v)for(var n of v(e))0>r.indexOf(n)&&w.call(e,n)&&(t[n]=e[n]);return t};let C={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},T=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("Divider",C,e),{className:a,color:i,orientation:c,size:s,label:p,labelPosition:h,labelProps:m,variant:v,styles:b,classNames:w,unstyled:g}=t,T=S(t,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:N,cx:P}=u({color:i},{classNames:w,styles:b,unstyled:g,name:"Divider",variant:v,size:s}),x="horizontal"===c,R=!!p&&x,_=!(null==m?void 0:m.color);return n.createElement(d.x,E({ref:r,className:P(N.root,{[N.vertical]:"vertical"===c,[N.horizontal]:x,[N.withLabel]:R},a),role:"separator"},T),R&&n.createElement(f.x,y(E({},m),{size:(null==m?void 0:m.size)||"xs",mt:(0,l.h)(2),className:P(N.label,N[h],{[N.labelDefaultStyles]:_})}),p))});T.displayName="@mantine/core/Divider"},73723:function(e,r,t){t.d(r,{x:function(){return eb}});var n=t(67294),o=t(87462),l=t(73935);function a(...e){return r=>e.forEach(e=>{var t;"function"==typeof(t=e)?t(r):null!=t&&(t.current=r)})}function i(...e){return(0,n.useCallback)(a(...e),e)}let c=(0,n.forwardRef)((e,r)=>{let{children:t,...l}=e,a=n.Children.toArray(t),i=a.find(d);if(i){let e=i.props.children,t=a.map(r=>r!==i?r:n.Children.count(e)>1?n.Children.only(null):(0,n.isValidElement)(e)?e.props.children:null);return(0,n.createElement)(s,(0,o.Z)({},l,{ref:r}),(0,n.isValidElement)(e)?(0,n.cloneElement)(e,void 0,t):null)}return(0,n.createElement)(s,(0,o.Z)({},l,{ref:r}),t)});c.displayName="Slot";let s=(0,n.forwardRef)((e,r)=>{let{children:t,...o}=e;return(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{...function(e,r){let t={...r};for(let n in r){let o=e[n],l=r[n],a=/^on[A-Z]/.test(n);a?o&&l?t[n]=(...e)=>{l(...e),o(...e)}:o&&(t[n]=o):"style"===n?t[n]={...o,...l}:"className"===n&&(t[n]=[o,l].filter(Boolean).join(" "))}return{...e,...t}}(o,t.props),ref:a(r,t.ref)}):n.Children.count(t)>1?n.Children.only(null):null});s.displayName="SlotClone";let u=({children:e})=>(0,n.createElement)(n.Fragment,null,e);function d(e){return(0,n.isValidElement)(e)&&e.type===u}let f=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=(0,n.forwardRef)((e,t)=>{let{asChild:l,...a}=e,i=l?c:r;return(0,n.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,n.createElement)(i,(0,o.Z)({},a,{ref:t}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),p=Boolean(null==globalThis?void 0:globalThis.document)?n.useLayoutEffect:()=>{},h=e=>{let{present:r,children:t}=e,o=function(e){var r;let[t,o]=(0,n.useState)(),a=(0,n.useRef)({}),i=(0,n.useRef)(e),c=(0,n.useRef)("none"),[s,u]=(r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,n.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},e?"mounted":"unmounted"));return(0,n.useEffect)(()=>{let e=m(a.current);c.current="mounted"===s?e:"none"},[s]),p(()=>{let r=a.current,t=i.current;if(t!==e){let n=c.current,o=m(r);e?u("MOUNT"):"none"===o||(null==r?void 0:r.display)==="none"?u("UNMOUNT"):t&&n!==o?u("ANIMATION_OUT"):u("UNMOUNT"),i.current=e}},[e,u]),p(()=>{if(t){let e=e=>{let r=m(a.current),n=r.includes(e.animationName);e.target===t&&n&&(0,l.flushSync)(()=>u("ANIMATION_END"))},r=e=>{e.target===t&&(c.current=m(a.current))};return t.addEventListener("animationstart",r),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",r),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,n.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),o(e)},[])}}(r),a="function"==typeof t?t({present:o.isPresent}):n.Children.only(t),c=i(o.ref,a.ref);return"function"==typeof t||o.isPresent?(0,n.cloneElement)(a,{ref:c}):null};function m(e){return(null==e?void 0:e.animationName)||"none"}function v(e){let r=(0,n.useRef)(e);return(0,n.useEffect)(()=>{r.current=e}),(0,n.useMemo)(()=>(...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)},[])}h.displayName="Presence";let b=(0,n.createContext)(void 0);function w(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(null==e||e(n),!1===t||!n.defaultPrevented)return null==r?void 0:r(n)}}let g="ScrollArea",[E,y]=function(e,r=[]){let t=[],o=()=>{let r=t.map(e=>(0,n.createContext)(e));return function(t){let o=(null==t?void 0:t[e])||r;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:o}}),[t,o])}};return o.scopeName=e,[function(r,o){let l=(0,n.createContext)(o),a=t.length;function i(r){let{scope:t,children:o,...i}=r,c=(null==t?void 0:t[e][a])||l,s=(0,n.useMemo)(()=>i,Object.values(i));return(0,n.createElement)(c.Provider,{value:s},o)}return t=[...t,o],i.displayName=r+"Provider",[i,function(t,i){let c=(null==i?void 0:i[e][a])||l,s=(0,n.useContext)(c);if(s)return s;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=t.reduce((r,{useScope:t,scopeName:n})=>{let o=t(e),l=o[`__scope${n}`];return{...r,...l}},{});return(0,n.useMemo)(()=>({[`__scope${r.scopeName}`]:o}),[o])}};return t.scopeName=r.scopeName,t}(o,...r)]}(g),[S,C]=E(g),T=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,type:l="hover",dir:a,scrollHideDelay:c=600,...s}=e,[u,d]=(0,n.useState)(null),[p,h]=(0,n.useState)(null),[m,v]=(0,n.useState)(null),[w,g]=(0,n.useState)(null),[E,y]=(0,n.useState)(null),[C,T]=(0,n.useState)(0),[N,P]=(0,n.useState)(0),[x,R]=(0,n.useState)(!1),[_,A]=(0,n.useState)(!1),L=i(r,e=>d(e)),O=function(e){let r=(0,n.useContext)(b);return e||r||"ltr"}(a);return(0,n.createElement)(S,{scope:t,type:l,dir:O,scrollHideDelay:c,scrollArea:u,viewport:p,onViewportChange:h,content:m,onContentChange:v,scrollbarX:w,onScrollbarXChange:g,scrollbarXEnabled:x,onScrollbarXEnabledChange:R,scrollbarY:E,onScrollbarYChange:y,scrollbarYEnabled:_,onScrollbarYEnabledChange:A,onCornerWidthChange:T,onCornerHeightChange:P},(0,n.createElement)(f.div,(0,o.Z)({dir:O},s,{ref:L,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":N+"px",...e.style}})))}),N=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,children:l,...a}=e,c=C("ScrollAreaViewport",t),s=(0,n.useRef)(null),u=i(r,s,c.onViewportChange);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,n.createElement)(f.div,(0,o.Z)({"data-radix-scroll-area-viewport":""},a,{ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,n.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},l)))}),P="ScrollAreaScrollbar",x=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=C(P,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:c}=a,s="horizontal"===e.orientation;return(0,n.useEffect)(()=>(s?i(!0):c(!0),()=>{s?i(!1):c(!1)}),[s,i,c]),"hover"===a.type?(0,n.createElement)(R,(0,o.Z)({},l,{ref:r,forceMount:t})):"scroll"===a.type?(0,n.createElement)(_,(0,o.Z)({},l,{ref:r,forceMount:t})):"auto"===a.type?(0,n.createElement)(A,(0,o.Z)({},l,{ref:r,forceMount:t})):"always"===a.type?(0,n.createElement)(L,(0,o.Z)({},l,{ref:r})):null}),R=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=C(P,e.__scopeScrollArea),[i,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=a.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),c(!0)},n=()=>{r=window.setTimeout(()=>c(!1),a.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",n)}}},[a.scrollArea,a.scrollHideDelay]),(0,n.createElement)(h,{present:t||i},(0,n.createElement)(A,(0,o.Z)({"data-state":i?"visible":"hidden"},l,{ref:r})))}),_=(0,n.forwardRef)((e,r)=>{var t;let{forceMount:l,...a}=e,i=C(P,e.__scopeScrollArea),c="horizontal"===e.orientation,s=q(()=>d("SCROLL_END"),100),[u,d]=(t={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,n.useReducer)((e,r)=>{let n=t[e][r];return null!=n?n:e},"hidden"));return(0,n.useEffect)(()=>{if("idle"===u){let e=window.setTimeout(()=>d("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,i.scrollHideDelay,d]),(0,n.useEffect)(()=>{let e=i.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],n=()=>{let n=e[r],o=t!==n;o&&(d("SCROLL"),s()),t=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[i.viewport,c,d,s]),(0,n.createElement)(h,{present:l||"hidden"!==u},(0,n.createElement)(L,(0,o.Z)({"data-state":"hidden"===u?"hidden":"visible"},a,{ref:r,onPointerEnter:w(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:w(e.onPointerLeave,()=>d("POINTER_LEAVE"))})))}),A=(0,n.forwardRef)((e,r)=>{let t=C(P,e.__scopeScrollArea),{forceMount:l,...a}=e,[i,c]=(0,n.useState)(!1),s="horizontal"===e.orientation,u=q(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;c(s?e:r)}},10);return G(t.viewport,u),G(t.content,u),(0,n.createElement)(h,{present:l||i},(0,n.createElement)(L,(0,o.Z)({"data-state":i?"visible":"hidden"},a,{ref:r})))}),L=(0,n.forwardRef)((e,r)=>{let{orientation:t="vertical",...l}=e,a=C(P,e.__scopeScrollArea),i=(0,n.useRef)(null),c=(0,n.useRef)(0),[s,u]=(0,n.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=X(s.viewport,s.content),f={...l,sizes:s,onSizesChange:u,hasThumb:Boolean(d>0&&d<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:e=>c.current=e};function p(e,r){return function(e,r,t,n="ltr"){let o=Y(t),l=r||o/2,a=t.scrollbar.paddingStart+l,i=t.scrollbar.size-t.scrollbar.paddingEnd-(o-l),c=t.content-t.viewport,s=V([a,i],"ltr"===n?[0,c]:[-1*c,0]);return s(e)}(e,c.current,s,r)}return"horizontal"===t?(0,n.createElement)(O,(0,o.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollLeft,r=B(e,s,a.dir);i.current.style.transform=`translate3d(${r}px, 0, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollLeft=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollLeft=p(e,a.dir))}})):"vertical"===t?(0,n.createElement)(D,(0,o.Z)({},f,{ref:r,onThumbPositionChange:()=>{if(a.viewport&&i.current){let e=a.viewport.scrollTop,r=B(e,s);i.current.style.transform=`translate3d(0, ${r}px, 0)`}},onWheelScroll:e=>{a.viewport&&(a.viewport.scrollTop=e)},onDragScroll:e=>{a.viewport&&(a.viewport.scrollTop=p(e))}})):null}),O=(0,n.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,c=C(P,e.__scopeScrollArea),[s,u]=(0,n.useState)(),d=(0,n.useRef)(null),f=i(r,d,c.onScrollbarXChange);return(0,n.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.createElement)(k,(0,o.Z)({"data-orientation":"horizontal"},a,{ref:f,sizes:t,style:{bottom:0,left:"rtl"===c.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===c.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Y(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(c.viewport){let n=c.viewport.scrollLeft+r.deltaX;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:j(s.paddingLeft),paddingEnd:j(s.paddingRight)}})}}))}),D=(0,n.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:l,...a}=e,c=C(P,e.__scopeScrollArea),[s,u]=(0,n.useState)(),d=(0,n.useRef)(null),f=i(r,d,c.onScrollbarYChange);return(0,n.useEffect)(()=>{d.current&&u(getComputedStyle(d.current))},[d]),(0,n.createElement)(k,(0,o.Z)({"data-orientation":"vertical"},a,{ref:f,sizes:t,style:{top:0,right:"ltr"===c.dir?0:void 0,left:"rtl"===c.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Y(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(c.viewport){let n=c.viewport.scrollTop+r.deltaY;e.onWheelScroll(n),n>0&&n<t&&r.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:j(s.paddingTop),paddingEnd:j(s.paddingBottom)}})}}))}),[z,M]=E(P),k=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,sizes:l,hasThumb:a,onThumbChange:c,onThumbPointerUp:s,onThumbPointerDown:u,onThumbPositionChange:d,onDragScroll:p,onWheelScroll:h,onResize:m,...b}=e,g=C(P,t),[E,y]=(0,n.useState)(null),S=i(r,e=>y(e)),T=(0,n.useRef)(null),N=(0,n.useRef)(""),x=g.viewport,R=l.content-l.viewport,_=v(h),A=v(d),L=q(m,10);function O(e){if(T.current){let r=e.clientX-T.current.left,t=e.clientY-T.current.top;p({x:r,y:t})}}return(0,n.useEffect)(()=>{let e=e=>{let r=e.target,t=null==E?void 0:E.contains(r);t&&_(e,R)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[x,E,R,_]),(0,n.useEffect)(A,[l,A]),G(E,L),G(g.content,L),(0,n.createElement)(z,{scope:t,scrollbar:E,hasThumb:a,onThumbChange:v(c),onThumbPointerUp:v(s),onThumbPositionChange:A,onThumbPointerDown:v(u)},(0,n.createElement)(f.div,(0,o.Z)({},b,{ref:S,style:{position:"absolute",...b.style},onPointerDown:w(e.onPointerDown,e=>{if(0===e.button){let r=e.target;r.setPointerCapture(e.pointerId),T.current=E.getBoundingClientRect(),N.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",O(e)}}),onPointerMove:w(e.onPointerMove,O),onPointerUp:w(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=N.current,T.current=null})})))}),I="ScrollAreaThumb",Z=(0,n.forwardRef)((e,r)=>{let{forceMount:t,...l}=e,a=M(I,e.__scopeScrollArea);return(0,n.createElement)(h,{present:t||a.hasThumb},(0,n.createElement)(U,(0,o.Z)({ref:r},l)))}),U=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,style:l,...a}=e,c=C(I,t),s=M(I,t),{onThumbPositionChange:u}=s,d=i(r,e=>s.onThumbChange(e)),p=(0,n.useRef)(),h=q(()=>{p.current&&(p.current(),p.current=void 0)},100);return(0,n.useEffect)(()=>{let e=c.viewport;if(e){let r=()=>{if(h(),!p.current){let r=F(e,u);p.current=r,u()}};return u(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[c.viewport,h,u]),(0,n.createElement)(f.div,(0,o.Z)({"data-state":s.hasThumb?"visible":"hidden"},a,{ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:w(e.onPointerDownCapture,e=>{let r=e.target,t=r.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;s.onThumbPointerDown({x:n,y:o})}),onPointerUp:w(e.onPointerUp,s.onThumbPointerUp)}))}),H="ScrollAreaCorner",W=(0,n.forwardRef)((e,r)=>{let t=C(H,e.__scopeScrollArea),l=Boolean(t.scrollbarX&&t.scrollbarY),a="scroll"!==t.type&&l;return a?(0,n.createElement)($,(0,o.Z)({},e,{ref:r})):null}),$=(0,n.forwardRef)((e,r)=>{let{__scopeScrollArea:t,...l}=e,a=C(H,t),[i,c]=(0,n.useState)(0),[s,u]=(0,n.useState)(0),d=Boolean(i&&s);return G(a.scrollbarX,()=>{var e;let r=(null===(e=a.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;a.onCornerHeightChange(r),u(r)}),G(a.scrollbarY,()=>{var e;let r=(null===(e=a.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;a.onCornerWidthChange(r),c(r)}),d?(0,n.createElement)(f.div,(0,o.Z)({},l,{ref:r,style:{width:i,height:s,position:"absolute",right:"ltr"===a.dir?0:void 0,left:"rtl"===a.dir?0:void 0,bottom:0,...e.style}})):null});function j(e){return e?parseInt(e,10):0}function X(e,r){let t=e/r;return isNaN(t)?0:t}function Y(e){let r=X(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-t)*r;return Math.max(n,18)}function B(e,r,t="ltr"){let n=Y(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-o,a=r.content-r.viewport,i=function(e,[r,t]){return Math.min(t,Math.max(r,e))}(e,"ltr"===t?[0,a]:[-1*a,0]),c=V([0,a],[0,l-n]);return c(i)}function V(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let n=(r[1]-r[0])/(e[1]-e[0]);return r[0]+n*(t-e[0])}}let F=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},a=t.left!==l.left,i=t.top!==l.top;(a||i)&&r(),t=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function q(e,r){let t=v(e),o=(0,n.useRef)(0);return(0,n.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,n.useCallback)(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(t,r)},[t,r])}function G(e,r){let t=v(r);p(()=>{let r=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return n.observe(e),()=>{window.cancelAnimationFrame(r),n.unobserve(e)}}},[e,t])}var J=t(64761),K=t(97818),Q=t(56817),ee=t(96768),er=t(58404),et=(0,Q.k)((e,{scrollbarSize:r,offsetScrollbars:t,scrollbarHovered:n,hidden:o})=>({root:{overflow:"hidden"},viewport:{width:"100%",height:"100%",paddingRight:t?(0,ee.h)(r):void 0,paddingBottom:t?(0,ee.h)(r):void 0},scrollbar:{display:o?"none":"flex",userSelect:"none",touchAction:"none",boxSizing:"border-box",padding:`calc(${(0,ee.h)(r)}  / 5)`,transition:"background-color 150ms ease, opacity 150ms ease","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],[`& .${(0,er.A)("thumb")}`]:{backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.5):e.fn.rgba(e.black,.5)}},'&[data-orientation="vertical"]':{width:(0,ee.h)(r)},'&[data-orientation="horizontal"]':{flexDirection:"column",height:(0,ee.h)(r)},'&[data-state="hidden"]':{display:"none",opacity:0}},thumb:{ref:(0,er.A)("thumb"),flex:1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.white,.4):e.fn.rgba(e.black,.4),borderRadius:(0,ee.h)(r),position:"relative",transition:"background-color 150ms ease",display:o?"none":void 0,overflow:"hidden","&::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%",minWidth:(0,ee.h)(44),minHeight:(0,ee.h)(44)}},corner:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],transition:"opacity 150ms ease",opacity:n?1:0,display:o?"none":void 0}})),en=t(7414),eo=Object.defineProperty,el=Object.defineProperties,ea=Object.getOwnPropertyDescriptors,ei=Object.getOwnPropertySymbols,ec=Object.prototype.hasOwnProperty,es=Object.prototype.propertyIsEnumerable,eu=(e,r,t)=>r in e?eo(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ed=(e,r)=>{for(var t in r||(r={}))ec.call(r,t)&&eu(e,t,r[t]);if(ei)for(var t of ei(r))es.call(r,t)&&eu(e,t,r[t]);return e},ef=(e,r)=>el(e,ea(r)),ep=(e,r)=>{var t={};for(var n in e)ec.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&ei)for(var n of ei(e))0>r.indexOf(n)&&es.call(e,n)&&(t[n]=e[n]);return t};let eh={scrollbarSize:12,scrollHideDelay:1e3,type:"hover",offsetScrollbars:!1},em=(0,n.forwardRef)((e,r)=>{let t=(0,J.N4)("ScrollArea",eh,e),{children:o,className:l,classNames:a,styles:i,scrollbarSize:c,scrollHideDelay:s,type:u,dir:d,offsetScrollbars:f,viewportRef:p,onScrollPositionChange:h,unstyled:m,variant:v,viewportProps:b}=t,w=ep(t,["children","className","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","variant","viewportProps"]),[g,E]=(0,n.useState)(!1),y=(0,J.rZ)(),{classes:S,cx:C}=et({scrollbarSize:c,offsetScrollbars:f,scrollbarHovered:g,hidden:"never"===u},{name:"ScrollArea",classNames:a,styles:i,unstyled:m,variant:v});return n.createElement(T,{type:"never"===u?"always":u,scrollHideDelay:s,dir:d||y.dir,ref:r,asChild:!0},n.createElement(en.x,ed({className:C(S.root,l)},w),n.createElement(N,ef(ed({},b),{className:S.viewport,ref:p,onScroll:"function"==typeof h?({currentTarget:e})=>h({x:e.scrollLeft,y:e.scrollTop}):void 0}),o),n.createElement(x,{orientation:"horizontal",className:S.scrollbar,forceMount:!0,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1)},n.createElement(Z,{className:S.thumb})),n.createElement(x,{orientation:"vertical",className:S.scrollbar,forceMount:!0,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1)},n.createElement(Z,{className:S.thumb})),n.createElement(W,{className:S.corner})))}),ev=(0,n.forwardRef)((e,r)=>{let t=(0,J.N4)("ScrollAreaAutosize",eh,e),{children:o,classNames:l,styles:a,scrollbarSize:i,scrollHideDelay:c,type:s,dir:u,offsetScrollbars:d,viewportRef:f,onScrollPositionChange:p,unstyled:h,sx:m,variant:v,viewportProps:b}=t,w=ep(t,["children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","sx","variant","viewportProps"]);return n.createElement(en.x,ef(ed({},w),{ref:r,sx:[{display:"flex"},...(0,K.R)(m)]}),n.createElement(en.x,{sx:{display:"flex",flexDirection:"column",flex:1}},n.createElement(em,{classNames:l,styles:a,scrollHideDelay:c,scrollbarSize:i,type:s,dir:u,offsetScrollbars:d,viewportRef:f,onScrollPositionChange:p,unstyled:h,variant:v,viewportProps:b},o)))});ev.displayName="@mantine/core/ScrollAreaAutosize",em.displayName="@mantine/core/ScrollArea",em.Autosize=ev;let eb=em},84137:function(e,r,t){t.d(r,{s:function(){return o}});var n=t(67294);function o(e,r,t){(0,n.useEffect)(()=>(window.addEventListener(e,r,t),()=>window.removeEventListener(e,r,t)),[e,r])}},58404:function(e,r,t){t.d(r,{A:function(){return n}});function n(e){return`___ref-${e||""}`}}}]);