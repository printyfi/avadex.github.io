(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[28,9,70,71,82,89,90,91,106],{1061:function(e,t,n){},1139:function(e,t,n){},1140:function(e,t,n){},1141:function(e,t,n){},1142:function(e,t,n){},1143:function(e,t,n){},399:function(e,t,n){"use strict";n.r(t),n.d(t,"brand",(function(){return d})),n.d(t,"lightTheme",(function(){return b})),n.d(t,"darkTheme",(function(){return j})),n.d(t,"defaultTheme",(function(){return O})),n.d(t,"useSystemTheme",(function(){return v})),n.d(t,"ThemeProvider",(function(){return p}));var r=n(11),i=n(15),c=(n(1061),n(1139),n(1140),n(1141),n(1142),n(1143),n(49)),o=n(1),u=n(632),a=n(641);n.d(t,"getDynamicTheme",(function(){return a.getDynamicTheme})),n.d(t,"DynamicThemeProvider",(function(){return a.DynamicThemeProvider}));var s=n(642);n.d(t,"Layer",(function(){return s.Layer})),n.d(t,"css",(function(){return u.css})),n.d(t,"keyframes",(function(){return u.keyframes})),n.d(t,"useTheme",(function(){return u.useTheme})),n.d(t,"ThemedProvider",(function(){return u.ThemedProvider}));n(643);var f=n(644);n.d(t,"ThemedText",(function(){return f}));var l=n(0);t.default=u.default;var d="hsl(331.3, 100%, 50%)",h={active:"hsl(215, 79%, 51.4%)",success:"hsl(145, 63.4%, 41.8%)",warning:"hsl(43, 89.9%, 53.5%)",error:"hsl(0, 98%, 62.2%)"},b=Object(i.a)(Object(i.a)({accent:d,container:"hsl(220, 23%, 97.5%)",module:"hsl(231, 14%, 90%)",interactive:"hsl(229, 13%, 83%)",outline:"hsl(225, 7%, 78%)",dialog:"hsl(0, 0%, 100%)",onAccent:"hsl(0, 0%, 100%)",primary:"hsl(0, 0%, 0%)",secondary:"hsl(227, 10%, 37.5%)",hint:"hsl(224, 9%, 57%)",onInteractive:"hsl(0, 0%, 0%)"},h),{},{currentColor:"currentColor"}),m="hsl(215, 79%, 51.4%)",j=Object(i.a)(Object(i.a)({accent:m,container:"hsl(220, 10.7%, 11%)",module:"hsl(222, 10.2%, 19.2%)",interactive:"hsl(224, 10.5%, 281%)",outline:"hsl(227, 10%, 37.5%)",dialog:"hsl(0, 0%, 0%)",onAccent:Object(c.e)(m),primary:"hsl(0, 0%, 100%)",secondary:"hsl(224, 8.7%, 57.1%)",hint:"hsl(225, 10%, 47.1%)",onInteractive:"hsl(0, 0%, 100%)"},h),{},{currentColor:"currentColor"}),O=Object(i.a)({borderRadius:1,fontFamily:'"Inter", sans-serif',fontFamilyVariable:'"InterVariable", sans-serif',fontFamilyCode:"IBM Plex Mono",tokenColorExtraction:!1},b);function v(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=Object(o.useState)(e.matches?j:b),n=Object(r.a)(t,2),i=n[0],c=n[1];return e.addEventListener("change",(function(e){c(e.matches?j:b)})),i}var g=Object(o.createContext)(y(O));function p(e){var t=e.theme,n=e.children,r=Object(o.useContext)(g),c=Object(o.useMemo)((function(){return y(Object(i.a)(Object(i.a)({},r),t))}),[r,t]);return Object(l.jsx)(g.Provider,{value:c,children:Object(l.jsx)(u.ThemedProvider,{theme:c,children:n})})}function y(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:(t=Number.isFinite(e.borderRadius)?e.borderRadius:e.borderRadius?1:0,Math.min(Math.max(t,0),1)),onHover:function(t){return t===e.primary?Object(c.h)(.4,e.primary):Object(c.c)(.16,e.primary,t)}});var t}},632:function(e,t,n){"use strict";n.r(t),n.d(t,"css",(function(){return i})),n.d(t,"keyframes",(function(){return c})),n.d(t,"useTheme",(function(){return o})),n.d(t,"ThemedProvider",(function(){return u}));var r=n(4);t.default=r.default;var i=r.css,c=r.keyframes,o=r.useTheme,u=r.ThemeProvider},639:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r,i,c=n(11),o=n(32),u=n(399),a=n(1),s=n(640),f=Object(u.css)(r||(r=Object(o.a)(["\n  overflow-y: scroll;\n"]))),l=function(e){return Object(u.css)(i||(i=Object(o.a)(["\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    width: 1.25em;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: radial-gradient(\n        closest-corner at 0.25em 0.25em,\n        "," 0.25em,\n        transparent 0.25em\n      ),\n      linear-gradient(\n        to bottom,\n        #ffffff00 0.25em,\n        "," 0.25em,\n        "," calc(100% - 0.25em),\n        #ffffff00 calc(100% - 0.25em)\n      ),\n      radial-gradient(\n        closest-corner at 0.25em calc(100% - 0.25em),\n        "," 0.25em,\n        #ffffff00 0.25em\n      );\n    background-clip: padding-box;\n    border: none;\n    ",": 0.75em solid transparent;\n  }\n\n  @supports not selector(::-webkit-scrollbar-thumb) {\n    scrollbar-color: "," transparent;\n  }\n"])),(function(e){return e.theme.interactive}),(function(e){return e.theme.interactive}),(function(e){return e.theme.interactive}),(function(e){return e.theme.interactive}),e?"border-right":"border-left",(function(e){return e.theme.interactive}))};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.padded,r=void 0!==n&&n,i=Object(a.useState)(!0),o=Object(c.a)(i,2),u=o[0],d=o[1];return Object(a.useEffect)((function(){d(h(e))}),[e]),Object(s.default)(e,"transitionend",(function(){return d(h(e))})),Object(a.useMemo)((function(){return u?l(r):f}),[u,r]);function h(e){return!e||e.scrollHeight>e.clientHeight}}},640:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n(1);function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];Object(r.useEffect)((function(){return null===e||void 0===e||e.addEventListener.apply(e,n),function(){return null===e||void 0===e?void 0:e.removeEventListener.apply(e,n)}}),[e,n])}},641:function(e,t,n){"use strict";n.r(t),n.d(t,"getDynamicTheme",(function(){return h})),n.d(t,"DynamicThemeProvider",(function(){return b}));var r=n(15),i=n(49),c=n(1),o=n(406),u=n(632),a=n(0),s="hsl(0, 0%, 0%)",f="hsl(0, 0%, 100%)",l={interactive:Object(i.h)(1-.54,s),outline:Object(i.h)(.76,s),primary:s,secondary:Object(i.h)(.36,s),onInteractive:f},d={interactive:Object(i.h)(.52,f),outline:Object(i.h)(.88,f),primary:f,secondary:Object(i.h)(.4,f),onInteractive:s};function h(e,t){var n={light:l,dark:d}[Object(i.e)(t,"light","dark",!1)];return Object(r.a)(Object(r.a)(Object(r.a)({},e),n),{},{module:t,onHover:function(e){return e===n.primary?Object(i.h)(.4,n.primary):Object(i.d)(.25,e)}})}function b(e){var t=e.color,n=e.children,r=Object(u.useTheme)(),s=Object(c.useMemo)((function(){if(!t)return r;var e=function(e,t){for(var n=h(e,t).primary,r=Object(o.a)(t,n),c=Object(o.a)(t,"#000")>Object(o.a)(t,"#fff")?i.a:i.b;r<3;)n=h(e,t=c(.005,t)).primary,r=Object(o.a)(t,n);return t}(r,t);return h(r,e)}),[r,t]);return Object(a.jsx)(u.ThemedProvider,{theme:s,children:Object(a.jsx)("div",{style:{color:s.primary},children:n})})}},642:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"Layer",(function(){return r})),function(e){e[e.OVERLAY=100]="OVERLAY",e[e.DIALOG=1e3]="DIALOG",e[e.TOOLTIP=2e3]="TOOLTIP"}(r||(r={}))},643:function(e,t,n){"use strict";n.r(t)},644:function(e,t,n){"use strict";n.r(t),n.d(t,"H1",(function(){return d})),n.d(t,"H2",(function(){return h})),n.d(t,"H3",(function(){return b})),n.d(t,"Subhead1",(function(){return m})),n.d(t,"Subhead2",(function(){return j})),n.d(t,"Body1",(function(){return O})),n.d(t,"Body2",(function(){return v})),n.d(t,"Caption",(function(){return g})),n.d(t,"Badge",(function(){return p})),n.d(t,"ButtonLarge",(function(){return y})),n.d(t,"ButtonMedium",(function(){return x})),n.d(t,"ButtonSmall",(function(){return T})),n.d(t,"TransitionButton",(function(){return H})),n.d(t,"Code",(function(){return S}));var r,i,c=n(15),o=n(32),u=n(27),a=n(632),s=n(0),f=Object(a.default)(u.b)(r||(r=Object(o.a)(["\n  color: ",";\n  // Avoid the need for placeholders by setting min-height to line-height.\n  min-height: ",";\n"])),(function(e){var t=e.color,n=void 0===t?"currentColor":t;return e.theme[n]}),(function(e){return e.lineHeight})),l=Object(a.default)(f)(i||(i=Object(o.a)(["\n  transition: font-size 0.25s ease-out, line-height 0.25s ease-out;\n"])));function d(e){return Object(s.jsx)(f,Object(c.a)({className:"headline headline-1",fontSize:36,fontWeight:400,lineHeight:"36px"},e))}function h(e){return Object(s.jsx)(f,Object(c.a)({className:"headline headline-2",fontSize:24,fontWeight:400,lineHeight:"32px"},e))}function b(e){return Object(s.jsx)(f,Object(c.a)({className:"headline headline-3",fontSize:20,fontWeight:400,lineHeight:"20px"},e))}function m(e){return Object(s.jsx)(f,Object(c.a)({className:"subhead subhead-1",fontSize:16,fontWeight:500,lineHeight:"16px"},e))}function j(e){return Object(s.jsx)(f,Object(c.a)({className:"subhead subhead-2",fontSize:14,fontWeight:500,lineHeight:"14px"},e))}function O(e){return Object(s.jsx)(f,Object(c.a)({className:"body body-1",fontSize:16,fontWeight:400,lineHeight:"24px"},e))}function v(e){return Object(s.jsx)(f,Object(c.a)({className:"body body-2",fontSize:14,fontWeight:400,lineHeight:"20px"},e))}function g(e){return Object(s.jsx)(f,Object(c.a)({className:"caption",fontSize:12,fontWeight:400,lineHeight:"16px"},e))}function p(e){return Object(s.jsx)(f,Object(c.a)({className:"badge",fontSize:8,fontWeight:600,lineHeight:"8px"},e))}function y(e){return Object(s.jsx)(f,Object(c.a)({className:"button button-large",fontSize:20,fontWeight:500,lineHeight:"20px"},e))}function x(e){return Object(s.jsx)(f,Object(c.a)({className:"button button-medium",fontSize:16,fontWeight:500,lineHeight:"16px"},e))}function T(e){return Object(s.jsx)(f,Object(c.a)({className:"button button-small",fontSize:14,fontWeight:500,lineHeight:"14px"},e))}function H(e){var t="button button-".concat(e.buttonSize),n={small:14,medium:16,large:20}[e.buttonSize],r="".concat(n,"px");return Object(s.jsx)(l,Object(c.a)({className:t,fontSize:n,fontWeight:500,lineHeight:r},e))}function S(e){var t=Object(a.useTheme)().fontFamilyCode;return Object(s.jsx)(f,Object(c.a)({className:"code",fontSize:12,fontWeight:400,lineHeight:"16px",fontFamily:t},e))}}}]);
//# sourceMappingURL=28.77ae0621.chunk.js.map