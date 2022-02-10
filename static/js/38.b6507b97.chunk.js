(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[38,9,70,71,89,90,91,106],{1061:function(e,t,n){},1139:function(e,t,n){},1140:function(e,t,n){},1141:function(e,t,n){},1142:function(e,t,n){},1143:function(e,t,n){},399:function(e,t,n){"use strict";n.r(t),n.d(t,"brand",(function(){return f})),n.d(t,"lightTheme",(function(){return h})),n.d(t,"darkTheme",(function(){return j})),n.d(t,"defaultTheme",(function(){return p})),n.d(t,"useSystemTheme",(function(){return O})),n.d(t,"ThemeProvider",(function(){return x}));var r=n(11),i=n(15),o=(n(1061),n(1139),n(1140),n(1141),n(1142),n(1143),n(49)),a=n(1),c=n(632),u=n(641);n.d(t,"getDynamicTheme",(function(){return u.getDynamicTheme})),n.d(t,"DynamicThemeProvider",(function(){return u.DynamicThemeProvider}));var s=n(642);n.d(t,"Layer",(function(){return s.Layer})),n.d(t,"css",(function(){return c.css})),n.d(t,"keyframes",(function(){return c.keyframes})),n.d(t,"useTheme",(function(){return c.useTheme})),n.d(t,"ThemedProvider",(function(){return c.ThemedProvider}));n(643);var d=n(644);n.d(t,"ThemedText",(function(){return d}));var l=n(0);t.default=c.default;var f="hsl(331.3, 100%, 50%)",b={active:"hsl(215, 79%, 51.4%)",success:"hsl(145, 63.4%, 41.8%)",warning:"hsl(43, 89.9%, 53.5%)",error:"hsl(0, 98%, 62.2%)"},h=Object(i.a)(Object(i.a)({accent:f,container:"hsl(220, 23%, 97.5%)",module:"hsl(231, 14%, 90%)",interactive:"hsl(229, 13%, 83%)",outline:"hsl(225, 7%, 78%)",dialog:"hsl(0, 0%, 100%)",onAccent:"hsl(0, 0%, 100%)",primary:"hsl(0, 0%, 0%)",secondary:"hsl(227, 10%, 37.5%)",hint:"hsl(224, 9%, 57%)",onInteractive:"hsl(0, 0%, 0%)"},b),{},{currentColor:"currentColor"}),m="hsl(215, 79%, 51.4%)",j=Object(i.a)(Object(i.a)({accent:m,container:"hsl(220, 10.7%, 11%)",module:"hsl(222, 10.2%, 19.2%)",interactive:"hsl(224, 10.5%, 281%)",outline:"hsl(227, 10%, 37.5%)",dialog:"hsl(0, 0%, 0%)",onAccent:Object(o.e)(m),primary:"hsl(0, 0%, 100%)",secondary:"hsl(224, 8.7%, 57.1%)",hint:"hsl(225, 10%, 47.1%)",onInteractive:"hsl(0, 0%, 100%)"},b),{},{currentColor:"currentColor"}),p=Object(i.a)({borderRadius:1,fontFamily:'"Inter", sans-serif',fontFamilyVariable:'"InterVariable", sans-serif',fontFamilyCode:"IBM Plex Mono",tokenColorExtraction:!1},h);function O(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=Object(a.useState)(e.matches?j:h),n=Object(r.a)(t,2),i=n[0],o=n[1];return e.addEventListener("change",(function(e){o(e.matches?j:h)})),i}var g=Object(a.createContext)(v(p));function x(e){var t=e.theme,n=e.children,r=Object(a.useContext)(g),o=Object(a.useMemo)((function(){return v(Object(i.a)(Object(i.a)({},r),t))}),[r,t]);return Object(l.jsx)(g.Provider,{value:o,children:Object(l.jsx)(c.ThemedProvider,{theme:o,children:n})})}function v(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:(t=Number.isFinite(e.borderRadius)?e.borderRadius:e.borderRadius?1:0,Math.min(Math.max(t,0),1)),onHover:function(t){return t===e.primary?Object(o.h)(.4,e.primary):Object(o.c)(.16,e.primary,t)}});var t}},632:function(e,t,n){"use strict";n.r(t),n.d(t,"css",(function(){return i})),n.d(t,"keyframes",(function(){return o})),n.d(t,"useTheme",(function(){return a})),n.d(t,"ThemedProvider",(function(){return c}));var r=n(4);t.default=r.default;var i=r.css,o=r.keyframes,a=r.useTheme,c=r.ThemeProvider},641:function(e,t,n){"use strict";n.r(t),n.d(t,"getDynamicTheme",(function(){return b})),n.d(t,"DynamicThemeProvider",(function(){return h}));var r=n(15),i=n(49),o=n(1),a=n(406),c=n(632),u=n(0),s="hsl(0, 0%, 0%)",d="hsl(0, 0%, 100%)",l={interactive:Object(i.h)(1-.54,s),outline:Object(i.h)(.76,s),primary:s,secondary:Object(i.h)(.36,s),onInteractive:d},f={interactive:Object(i.h)(.52,d),outline:Object(i.h)(.88,d),primary:d,secondary:Object(i.h)(.4,d),onInteractive:s};function b(e,t){var n={light:l,dark:f}[Object(i.e)(t,"light","dark",!1)];return Object(r.a)(Object(r.a)(Object(r.a)({},e),n),{},{module:t,onHover:function(e){return e===n.primary?Object(i.h)(.4,n.primary):Object(i.d)(.25,e)}})}function h(e){var t=e.color,n=e.children,r=Object(c.useTheme)(),s=Object(o.useMemo)((function(){if(!t)return r;var e=function(e,t){for(var n=b(e,t).primary,r=Object(a.a)(t,n),o=Object(a.a)(t,"#000")>Object(a.a)(t,"#fff")?i.a:i.b;r<3;)n=b(e,t=o(.005,t)).primary,r=Object(a.a)(t,n);return t}(r,t);return b(r,e)}),[r,t]);return Object(u.jsx)(c.ThemedProvider,{theme:s,children:Object(u.jsx)("div",{style:{color:s.primary},children:n})})}},642:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"Layer",(function(){return r})),function(e){e[e.OVERLAY=100]="OVERLAY",e[e.DIALOG=1e3]="DIALOG",e[e.TOOLTIP=2e3]="TOOLTIP"}(r||(r={}))},643:function(e,t,n){"use strict";n.r(t)},644:function(e,t,n){"use strict";n.r(t),n.d(t,"H1",(function(){return f})),n.d(t,"H2",(function(){return b})),n.d(t,"H3",(function(){return h})),n.d(t,"Subhead1",(function(){return m})),n.d(t,"Subhead2",(function(){return j})),n.d(t,"Body1",(function(){return p})),n.d(t,"Body2",(function(){return O})),n.d(t,"Caption",(function(){return g})),n.d(t,"Badge",(function(){return x})),n.d(t,"ButtonLarge",(function(){return v})),n.d(t,"ButtonMedium",(function(){return y})),n.d(t,"ButtonSmall",(function(){return T})),n.d(t,"TransitionButton",(function(){return w})),n.d(t,"Code",(function(){return S}));var r,i,o=n(15),a=n(32),c=n(27),u=n(632),s=n(0),d=Object(u.default)(c.b)(r||(r=Object(a.a)(["\n  color: ",";\n  // Avoid the need for placeholders by setting min-height to line-height.\n  min-height: ",";\n"])),(function(e){var t=e.color,n=void 0===t?"currentColor":t;return e.theme[n]}),(function(e){return e.lineHeight})),l=Object(u.default)(d)(i||(i=Object(a.a)(["\n  transition: font-size 0.25s ease-out, line-height 0.25s ease-out;\n"])));function f(e){return Object(s.jsx)(d,Object(o.a)({className:"headline headline-1",fontSize:36,fontWeight:400,lineHeight:"36px"},e))}function b(e){return Object(s.jsx)(d,Object(o.a)({className:"headline headline-2",fontSize:24,fontWeight:400,lineHeight:"32px"},e))}function h(e){return Object(s.jsx)(d,Object(o.a)({className:"headline headline-3",fontSize:20,fontWeight:400,lineHeight:"20px"},e))}function m(e){return Object(s.jsx)(d,Object(o.a)({className:"subhead subhead-1",fontSize:16,fontWeight:500,lineHeight:"16px"},e))}function j(e){return Object(s.jsx)(d,Object(o.a)({className:"subhead subhead-2",fontSize:14,fontWeight:500,lineHeight:"14px"},e))}function p(e){return Object(s.jsx)(d,Object(o.a)({className:"body body-1",fontSize:16,fontWeight:400,lineHeight:"24px"},e))}function O(e){return Object(s.jsx)(d,Object(o.a)({className:"body body-2",fontSize:14,fontWeight:400,lineHeight:"20px"},e))}function g(e){return Object(s.jsx)(d,Object(o.a)({className:"caption",fontSize:12,fontWeight:400,lineHeight:"16px"},e))}function x(e){return Object(s.jsx)(d,Object(o.a)({className:"badge",fontSize:8,fontWeight:600,lineHeight:"8px"},e))}function v(e){return Object(s.jsx)(d,Object(o.a)({className:"button button-large",fontSize:20,fontWeight:500,lineHeight:"20px"},e))}function y(e){return Object(s.jsx)(d,Object(o.a)({className:"button button-medium",fontSize:16,fontWeight:500,lineHeight:"16px"},e))}function T(e){return Object(s.jsx)(d,Object(o.a)({className:"button button-small",fontSize:14,fontWeight:500,lineHeight:"14px"},e))}function w(e){var t="button button-".concat(e.buttonSize),n={small:14,medium:16,large:20}[e.buttonSize],r="".concat(n,"px");return Object(s.jsx)(l,Object(o.a)({className:t,fontSize:n,fontWeight:500,lineHeight:r},e))}function S(e){var t=Object(u.useTheme)().fontFamilyCode;return Object(s.jsx)(d,Object(o.a)({className:"code",fontSize:12,fontWeight:400,lineHeight:"16px",fontFamily:t},e))}},649:function(e,t,n){"use strict";n.r(t),n.d(t,"BoundaryProvider",(function(){return p})),n.d(t,"default",(function(){return v}));var r,i,o,a=n(15),c=n(11),u=n(32),s=n(399),d=n(178),l={name:"maxSize",enabled:!0,phase:"main",requiresIfExists:["offset","preventOverflow","flip"],fn:function(e){var t=e.state,n=e.name,r=e.options,i=Object(d.a)(t,r),o=t.modifiersData.preventOverflow||{x:0,y:0},a=o.x,c=o.y,u=t.rects.popper,s=u.width,l=u.height,f=t.placement.split("-")[0],b="left"===f?"left":"right",h="top"===f?"top":"bottom";t.modifiersData[n]={width:s-i[b]-a,height:l-i[h]-c}}},f=n(1),b=n(268),h=n(1135),m=n(0),j=Object(f.createContext)(null),p=j.Provider,O=s.default.div(r||(r=Object(u.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 0.5em;\n  opacity: ",";\n  padding: 8px;\n  transition: visibility 0.25s linear, opacity 0.25s linear;\n  visibility: ",";\n  z-index: ",";\n"])),(function(e){return e.theme.dialog}),(function(e){return e.theme.outline}),(function(e){return e.show?1:0}),(function(e){return e.show?"visible":"hidden"}),s.Layer.TOOLTIP),g=s.default.div(i||(i=Object(u.a)(["\n  display: inline-block;\n"]))),x=s.default.div(o||(o=Object(u.a)(["\n  height: 8px;\n  width: 8px;\n  z-index: ",";\n\n  ::before {\n    background: ",";\n    border: 1px solid ",";\n    content: '';\n    height: 8px;\n    position: absolute;\n    transform: rotate(45deg);\n    width: 8px;\n  }\n\n  &.arrow-top {\n    bottom: -4px;\n    ::before {\n      border-radius: 1px;\n      border-left: none;\n      border-top: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px; // includes -1px from border\n    ::before {\n      border-bottom: none;\n      border-right: none;\n      border-radius: 1px;\n    }\n  }\n\n  &.arrow-left {\n    right: -4px;\n    ::before {\n      border-bottom: none;\n      border-left: none;\n      border-radius: 1px;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px; // includes -1px from border\n    ::before {\n      border-radius: 1px;\n      border-right: none;\n      border-top: none;\n    }\n  }\n"])),s.Layer.TOOLTIP,(function(e){return e.theme.dialog}),(function(e){return e.theme.outline}));function v(e){var t,n,r=e.content,i=e.show,o=e.children,u=e.placement,s=e.offset,d=e.contained,p=Object(f.useContext)(j),v=Object(f.useRef)(null),y=Object(f.useState)(null),T=Object(c.a)(y,2),w=T[0],S=T[1],z=Object(f.useState)(null),H=Object(c.a)(z,2),P=H[0],N=H[1],W=Object(f.useMemo)((function(){var e=[{name:"offset",options:{offset:[4,s||4]}},{name:"arrow",options:{element:P,padding:4}}];return d&&e.push({name:"preventOverflow",options:{boundary:p,padding:8}},{name:"flip",options:{boundary:p,padding:8}},Object(a.a)(Object(a.a)({},l),{},{options:{boundary:p,padding:8}}),{name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn:function(e){var t=e.state,n=t.modifiersData.maxSize.width;t.styles.popper=Object(a.a)(Object(a.a)({},t.styles.popper),{},{maxWidth:"".concat(n,"px")})}}),{placement:u,strategy:"absolute",modifiers:e}}),[s,P,d,u,p]),L=Object(h.a)(v.current,w,W),k=L.styles,C=L.attributes;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{ref:v,children:o}),p&&Object(b.createPortal)(Object(m.jsxs)(O,Object(a.a)(Object(a.a)({show:i,ref:S,style:k.popper},C.popper),{},{children:[r,Object(m.jsx)(x,Object(a.a)({className:"arrow-".concat(null!==(t=null===(n=C.popper)||void 0===n?void 0:n["data-popper-placement"])&&void 0!==t?t:""),ref:N,style:k.arrow},C.arrow))]})),p)]})}}}]);
//# sourceMappingURL=38.b6507b97.chunk.js.map