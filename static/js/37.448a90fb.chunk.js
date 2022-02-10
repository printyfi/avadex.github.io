(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[37,9,70,71,89,90,91,106],{1061:function(e,n,t){},1139:function(e,n,t){},1140:function(e,n,t){},1141:function(e,n,t){},1142:function(e,n,t){},1143:function(e,n,t){},399:function(e,n,t){"use strict";t.r(n),t.d(n,"brand",(function(){return d})),t.d(n,"lightTheme",(function(){return b})),t.d(n,"darkTheme",(function(){return m})),t.d(n,"defaultTheme",(function(){return O})),t.d(n,"useSystemTheme",(function(){return p})),t.d(n,"ThemeProvider",(function(){return g}));var r=t(11),i=t(15),o=(t(1061),t(1139),t(1140),t(1141),t(1142),t(1143),t(49)),c=t(1),a=t(632),u=t(641);t.d(n,"getDynamicTheme",(function(){return u.getDynamicTheme})),t.d(n,"DynamicThemeProvider",(function(){return u.DynamicThemeProvider}));var l=t(642);t.d(n,"Layer",(function(){return l.Layer})),t.d(n,"css",(function(){return a.css})),t.d(n,"keyframes",(function(){return a.keyframes})),t.d(n,"useTheme",(function(){return a.useTheme})),t.d(n,"ThemedProvider",(function(){return a.ThemedProvider}));t(643);var s=t(644);t.d(n,"ThemedText",(function(){return s}));var f=t(0);n.default=a.default;var d="hsl(331.3, 100%, 50%)",h={active:"hsl(215, 79%, 51.4%)",success:"hsl(145, 63.4%, 41.8%)",warning:"hsl(43, 89.9%, 53.5%)",error:"hsl(0, 98%, 62.2%)"},b=Object(i.a)(Object(i.a)({accent:d,container:"hsl(220, 23%, 97.5%)",module:"hsl(231, 14%, 90%)",interactive:"hsl(229, 13%, 83%)",outline:"hsl(225, 7%, 78%)",dialog:"hsl(0, 0%, 100%)",onAccent:"hsl(0, 0%, 100%)",primary:"hsl(0, 0%, 0%)",secondary:"hsl(227, 10%, 37.5%)",hint:"hsl(224, 9%, 57%)",onInteractive:"hsl(0, 0%, 0%)"},h),{},{currentColor:"currentColor"}),j="hsl(215, 79%, 51.4%)",m=Object(i.a)(Object(i.a)({accent:j,container:"hsl(220, 10.7%, 11%)",module:"hsl(222, 10.2%, 19.2%)",interactive:"hsl(224, 10.5%, 281%)",outline:"hsl(227, 10%, 37.5%)",dialog:"hsl(0, 0%, 0%)",onAccent:Object(o.e)(j),primary:"hsl(0, 0%, 100%)",secondary:"hsl(224, 8.7%, 57.1%)",hint:"hsl(225, 10%, 47.1%)",onInteractive:"hsl(0, 0%, 100%)"},h),{},{currentColor:"currentColor"}),O=Object(i.a)({borderRadius:1,fontFamily:'"Inter", sans-serif',fontFamilyVariable:'"InterVariable", sans-serif',fontFamilyCode:"IBM Plex Mono",tokenColorExtraction:!1},b);function p(){var e=window.matchMedia("(prefers-color-scheme: dark)"),n=Object(c.useState)(e.matches?m:b),t=Object(r.a)(n,2),i=t[0],o=t[1];return e.addEventListener("change",(function(e){o(e.matches?m:b)})),i}var v=Object(c.createContext)(x(O));function g(e){var n=e.theme,t=e.children,r=Object(c.useContext)(v),o=Object(c.useMemo)((function(){return x(Object(i.a)(Object(i.a)({},r),n))}),[r,n]);return Object(f.jsx)(v.Provider,{value:o,children:Object(f.jsx)(a.ThemedProvider,{theme:o,children:t})})}function x(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:(n=Number.isFinite(e.borderRadius)?e.borderRadius:e.borderRadius?1:0,Math.min(Math.max(n,0),1)),onHover:function(n){return n===e.primary?Object(o.h)(.4,e.primary):Object(o.c)(.16,e.primary,n)}});var n}},632:function(e,n,t){"use strict";t.r(n),t.d(n,"css",(function(){return i})),t.d(n,"keyframes",(function(){return o})),t.d(n,"useTheme",(function(){return c})),t.d(n,"ThemedProvider",(function(){return a}));var r=t(4);n.default=r.default;var i=r.css,o=r.keyframes,c=r.useTheme,a=r.ThemeProvider},641:function(e,n,t){"use strict";t.r(n),t.d(n,"getDynamicTheme",(function(){return h})),t.d(n,"DynamicThemeProvider",(function(){return b}));var r=t(15),i=t(49),o=t(1),c=t(406),a=t(632),u=t(0),l="hsl(0, 0%, 0%)",s="hsl(0, 0%, 100%)",f={interactive:Object(i.h)(1-.54,l),outline:Object(i.h)(.76,l),primary:l,secondary:Object(i.h)(.36,l),onInteractive:s},d={interactive:Object(i.h)(.52,s),outline:Object(i.h)(.88,s),primary:s,secondary:Object(i.h)(.4,s),onInteractive:l};function h(e,n){var t={light:f,dark:d}[Object(i.e)(n,"light","dark",!1)];return Object(r.a)(Object(r.a)(Object(r.a)({},e),t),{},{module:n,onHover:function(e){return e===t.primary?Object(i.h)(.4,t.primary):Object(i.d)(.25,e)}})}function b(e){var n=e.color,t=e.children,r=Object(a.useTheme)(),l=Object(o.useMemo)((function(){if(!n)return r;var e=function(e,n){for(var t=h(e,n).primary,r=Object(c.a)(n,t),o=Object(c.a)(n,"#000")>Object(c.a)(n,"#fff")?i.a:i.b;r<3;)t=h(e,n=o(.005,n)).primary,r=Object(c.a)(n,t);return n}(r,n);return h(r,e)}),[r,n]);return Object(u.jsx)(a.ThemedProvider,{theme:l,children:Object(u.jsx)("div",{style:{color:l.primary},children:t})})}},642:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"Layer",(function(){return r})),function(e){e[e.OVERLAY=100]="OVERLAY",e[e.DIALOG=1e3]="DIALOG",e[e.TOOLTIP=2e3]="TOOLTIP"}(r||(r={}))},643:function(e,n,t){"use strict";t.r(n)},644:function(e,n,t){"use strict";t.r(n),t.d(n,"H1",(function(){return d})),t.d(n,"H2",(function(){return h})),t.d(n,"H3",(function(){return b})),t.d(n,"Subhead1",(function(){return j})),t.d(n,"Subhead2",(function(){return m})),t.d(n,"Body1",(function(){return O})),t.d(n,"Body2",(function(){return p})),t.d(n,"Caption",(function(){return v})),t.d(n,"Badge",(function(){return g})),t.d(n,"ButtonLarge",(function(){return x})),t.d(n,"ButtonMedium",(function(){return y})),t.d(n,"ButtonSmall",(function(){return T})),t.d(n,"TransitionButton",(function(){return C})),t.d(n,"Code",(function(){return w}));var r,i,o=t(15),c=t(32),a=t(27),u=t(632),l=t(0),s=Object(u.default)(a.b)(r||(r=Object(c.a)(["\n  color: ",";\n  // Avoid the need for placeholders by setting min-height to line-height.\n  min-height: ",";\n"])),(function(e){var n=e.color,t=void 0===n?"currentColor":n;return e.theme[t]}),(function(e){return e.lineHeight})),f=Object(u.default)(s)(i||(i=Object(c.a)(["\n  transition: font-size 0.25s ease-out, line-height 0.25s ease-out;\n"])));function d(e){return Object(l.jsx)(s,Object(o.a)({className:"headline headline-1",fontSize:36,fontWeight:400,lineHeight:"36px"},e))}function h(e){return Object(l.jsx)(s,Object(o.a)({className:"headline headline-2",fontSize:24,fontWeight:400,lineHeight:"32px"},e))}function b(e){return Object(l.jsx)(s,Object(o.a)({className:"headline headline-3",fontSize:20,fontWeight:400,lineHeight:"20px"},e))}function j(e){return Object(l.jsx)(s,Object(o.a)({className:"subhead subhead-1",fontSize:16,fontWeight:500,lineHeight:"16px"},e))}function m(e){return Object(l.jsx)(s,Object(o.a)({className:"subhead subhead-2",fontSize:14,fontWeight:500,lineHeight:"14px"},e))}function O(e){return Object(l.jsx)(s,Object(o.a)({className:"body body-1",fontSize:16,fontWeight:400,lineHeight:"24px"},e))}function p(e){return Object(l.jsx)(s,Object(o.a)({className:"body body-2",fontSize:14,fontWeight:400,lineHeight:"20px"},e))}function v(e){return Object(l.jsx)(s,Object(o.a)({className:"caption",fontSize:12,fontWeight:400,lineHeight:"16px"},e))}function g(e){return Object(l.jsx)(s,Object(o.a)({className:"badge",fontSize:8,fontWeight:600,lineHeight:"8px"},e))}function x(e){return Object(l.jsx)(s,Object(o.a)({className:"button button-large",fontSize:20,fontWeight:500,lineHeight:"20px"},e))}function y(e){return Object(l.jsx)(s,Object(o.a)({className:"button button-medium",fontSize:16,fontWeight:500,lineHeight:"16px"},e))}function T(e){return Object(l.jsx)(s,Object(o.a)({className:"button button-small",fontSize:14,fontWeight:500,lineHeight:"14px"},e))}function C(e){var n="button button-".concat(e.buttonSize),t={small:14,medium:16,large:20}[e.buttonSize],r="".concat(t,"px");return Object(l.jsx)(f,Object(o.a)({className:n,fontSize:t,fontWeight:500,lineHeight:r},e))}function w(e){var n=Object(u.useTheme)().fontFamilyCode;return Object(l.jsx)(s,Object(o.a)({className:"code",fontSize:12,fontWeight:400,lineHeight:"16px",fontFamily:n},e))}},646:function(e,n,t){"use strict";t.r(n),t.d(n,"StringInput",(function(){return O})),t.d(n,"IntegerInput",(function(){return y})),t.d(n,"DecimalInput",(function(){return w})),t.d(n,"inputCss",(function(){return S}));var r,i,o=t(11),c=t(15),a=t(67),u=t(32),l=t(7),s=t.n(l),f=t(399),d=t(1),h=t(0),b=["value","onChange"],j=["value","onChange","enforcer","pattern"],m=f.default.input(r||(r=Object(u.a)(["\n  -webkit-appearance: textfield;\n  background-color: transparent;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  margin: 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0;\n  text-align: left;\n  text-overflow: ellipsis;\n  width: 100%;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(e){return e.theme.secondary}));n.default=m;var O=Object(d.forwardRef)((function(e,n){var t=e.value,r=e.onChange,i=Object(a.a)(e,b);return Object(h.jsx)(m,Object(c.a)({value:t,onChange:function(e){return r(e.target.value)},inputMode:"text",autoComplete:"off",autoCorrect:"off",type:"text",placeholder:i.placeholder||"-",minLength:1,spellCheck:"false",ref:n},i))}));function p(e,n){var t=e.split("."),r=Object(o.a)(t,2),i=r[0],c=r[1],a=n.split("."),u=Object(o.a)(a,2),l=u[0],f=u[1];return s.a.equal(s.a.BigInt(null!==i&&void 0!==i?i:0),s.a.BigInt(null!==l&&void 0!==l?l:0))&&s.a.equal(s.a.BigInt(null!==c&&void 0!==c?c:0),s.a.BigInt(null!==f&&void 0!==f?f:0))}var v=Object(d.forwardRef)((function(e,n){var t=e.value,r=e.onChange,i=e.enforcer,u=e.pattern,l=Object(a.a)(e,j),s=Object(d.useState)(null!==t&&void 0!==t?t:""),f=Object(o.a)(s,2),b=f[0],O=f[1];Object(d.useEffect)((function(){p(b,t)||O(null!==t&&void 0!==t?t:"")}),[t,b,O]);var v=Object(d.useCallback)((function(e){var n=i(e.target.value.replace(/,/g,"."));null!==n&&(O(null!==n&&void 0!==n?n:""),p(n,t)||r(n))}),[t,r,i]);return Object(h.jsx)(m,Object(c.a)({value:b,onChange:v,inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:u,placeholder:l.placeholder||"0",minLength:1,maxLength:79,spellCheck:"false",ref:n},l))})),g=/^\d*$/,x=function(e){if(""===e||g.test(e)){var n=parseInt(e);return isNaN(n)?"":n.toString()}return null},y=Object(d.forwardRef)((function(e,n){return Object(h.jsx)(v,Object(c.a)({pattern:"^[0-9]*$",enforcer:x,ref:n},e))})),T=/^\d*(?:[.])?\d*$/,C=function(e){return""===e?"":"."===e?"0.":T.test(e)?e:null},w=Object(d.forwardRef)((function(e,n){return Object(h.jsx)(v,Object(c.a)({pattern:"^[0-9]*[.,]?[0-9]*$",enforcer:C,ref:n},e))})),S=Object(f.css)(i||(i=Object(u.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: ","em;\n  cursor: text;\n  padding: calc(0.5em - 1px);\n\n  :hover:not(:focus-within) {\n    background-color: ",";\n    border-color: ",";\n  }\n\n  :focus-within {\n    border-color: ",";\n  }\n"])),(function(e){return e.theme.container}),(function(e){return e.theme.container}),(function(e){return e.theme.borderRadius}),(function(e){var n=e.theme;return n.onHover(n.container)}),(function(e){var n=e.theme;return n.onHover(n.container)}),(function(e){return e.theme.active}))}}]);
//# sourceMappingURL=37.448a90fb.chunk.js.map