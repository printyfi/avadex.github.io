(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[18,11,13,48,59,60,63,68,69,70,81,83,86,88],{401:function(e,t,n){"use strict";n.r(t),n.d(t,"amountAtom",(function(){return d})),n.d(t,"useSwitchSwapCurrencies",(function(){return s})),n.d(t,"useSwapCurrency",(function(){return f})),n.d(t,"useSwapAmount",(function(){return b})),n.d(t,"useIsAmountPopulated",(function(){return j}));var r=n(11),c=n(267),o=n(164),u=n(634),i=n(633),a=n(1),l=n(648);n.d(t,"useSwapInfo",(function(){return l.default}));var d=Object(u.pickAtom)(i.swapAtom,"amount");function s(){var e=Object(o.useUpdateAtom)(i.swapAtom);return Object(a.useCallback)((function(){e((function(e){var t=e[i.Field.OUTPUT];switch(e[i.Field.OUTPUT]=e[i.Field.INPUT],e[i.Field.INPUT]=t,e.independentField){case i.Field.INPUT:e.independentField=i.Field.OUTPUT;break;case i.Field.OUTPUT:e.independentField=i.Field.INPUT}}))}),[e])}function f(e){var t=Object(a.useMemo)((function(){return Object(u.pickAtom)(i.swapAtom,e)}),[e]),n=Object(a.useMemo)((function(){return Object(u.pickAtom)(i.swapAtom,function(e){switch(e){case i.Field.INPUT:return i.Field.OUTPUT;case i.Field.OUTPUT:return i.Field.INPUT}}(e))}),[e]),l=Object(c.useAtom)(t),d=Object(r.a)(l,2),f=d[0],b=d[1],j=Object(o.useAtomValue)(n),O=s(),v=Object(a.useCallback)((function(e){e===j?O():b(e)}),[j,b,O]);return[f,v]}function b(e){var t=Object(o.useAtomValue)(d),n=Object(o.useAtomValue)(i.independentFieldAtom),r=Object(a.useMemo)((function(){return n===e?t:void 0}),[t,n,e]),c=Object(o.useUpdateAtom)(i.swapAtom),u=Object(a.useCallback)((function(t){return c((function(n){n.independentField=e,n.amount=t}))}),[e,c]);return[r,u]}function j(){return Boolean(Object(o.useAtomValue)(d))}},404:function(e,t,n){"use strict";n.r(t),n.d(t,"TokenSelectDialog",(function(){return T})),n.d(t,"default",(function(){return y}));var r,c=n(11),o=n(32),u=n(2),i=n(93),a=n(248),l=n(399),d=n(1),s=n(59),f=n(631),b=n(637),j=n(646),O=n(629),v=n(635),m=n(661),p=n(662),h=n(663),g=n(0),x=Object(l.default)(j.StringInput)(r||(r=Object(o.a)(["\n  ","\n"])),j.inputCss);function T(e){var t=e.value,n=e.onSelect,r=Object(d.useState)(""),o=Object(c.a)(r,2),j=o[0],p=o[1],T=Object(a.useQueryTokenList)(j),y=Object(d.useMemo)((function(){return T.filter((function(e){return e!==t}))}),[T,t]),w=[],k=Object(d.useRef)(null);Object(d.useEffect)((function(){var e;return null===(e=k.current)||void 0===e?void 0:e.focus()}),[k]);var A=Object(d.useState)(null),C=Object(c.a)(A,2),I=C[0],U=C[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.Header,{title:Object(g.jsx)(u.b,{id:"Selec token"})}),Object(g.jsxs)(f.default,{gap:.75,children:[Object(g.jsx)(O.default,{pad:.75,grow:!0,children:Object(g.jsx)(l.ThemedText.Body1,{children:Object(g.jsx)(x,{value:j,onChange:p,placeholder:i.a._("Search by token name or address"),onKeyDown:null===I||void 0===I?void 0:I.onKeyDown,onBlur:null===I||void 0===I?void 0:I.blur,ref:k})})}),Boolean(w.length)&&Object(g.jsx)(O.default,{pad:.75,gap:.25,justify:"flex-start",flex:!0,children:w.map((function(e){return Object(g.jsx)(m.default,{value:e,onClick:n},Object(s.a)(e))}))}),Object(g.jsx)(v.default,{padded:!0})]}),Object(g.jsx)(h.default,{tokens:y,onSelect:n,ref:U})]})}function y(e){var t=e.value,n=e.collapsed,r=e.disabled,o=e.onSelect,u=Object(d.useState)(!1),i=Object(c.a)(u,2),a=i[0],l=i[1],s=Object(d.useCallback)((function(e){o(e),l(!1)}),[o,l]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.default,{value:t,collapsed:n,disabled:r,onClick:function(){return l(!0)}}),a&&Object(g.jsx)(b.default,{color:"module",onClose:function(){return l(!1)},children:Object(g.jsx)(T,{value:t,onSelect:s})})]})}},629:function(e,t,n){"use strict";n.r(t);var r,c=n(32),o=n(399),u=n(1),i=o.default.div(r||(r=Object(c.a)(["\n  align-items: ",";\n  color: ",";\n  display: ",";\n  flex-flow: wrap;\n  flex-grow: ",";\n  gap: ",";\n  grid-auto-flow: column;\n  grid-template-columns: ",";\n  justify-content: ",";\n  padding: ",";\n"])),(function(e){var t=e.align;return null!==t&&void 0!==t?t:"center"}),(function(e){var t=e.color,n=e.theme;return t&&n[t]}),(function(e){return e.flex?"flex":"grid"}),(function(e){return e.grow&&1}),(function(e){var t=e.gap;return t&&"".concat(t,"em")}),(function(e){var t=e.grow,n=e.children;return"first"===t?"1fr":"last"===t?"repeat(".concat(u.Children.count(n)-1,", auto) 1fr"):t?"repeat(".concat(u.Children.count(n),", 1fr)"):void 0}),(function(e){var t=e.justify;return null!==t&&void 0!==t?t:"space-between"}),(function(e){var t=e.pad;return t&&"0 ".concat(t,"em")}));t.default=i},630:function(e,t,n){"use strict";n.r(t),n.d(t,"BaseButton",(function(){return f})),n.d(t,"TextButton",(function(){return j})),n.d(t,"IconButton",(function(){return v}));var r,c,o,u=n(15),i=n(67),a=n(32),l=n(399),d=n(0),s=["icon","iconProps"],f=l.default.button(r||(r=Object(a.a)(["\n  background-color: transparent;\n  border: none;\n  border-radius: 0.5em;\n  color: currentColor;\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n\n  :disabled {\n    cursor: initial;\n    filter: saturate(0) opacity(0.4);\n  }\n"])));t.default=Object(l.default)(f)(c||(c=Object(a.a)(["\n  color: ",";\n\n  :enabled {\n    background-color: ",";\n  }\n\n  :enabled:hover {\n    background-color: ",";\n  }\n\n  :disabled {\n    border: 1px solid ",";\n    color: ",";\n    cursor: initial;\n  }\n"])),(function(e){var t=e.color,n=void 0===t?"interactive":t,r=e.theme;return"interactive"===n&&r.onInteractive}),(function(e){var t=e.color,n=void 0===t?"interactive":t;return e.theme[n]}),(function(e){var t=e.color,n=void 0===t?"interactive":t,r=e.theme;return r.onHover(r[n])}),(function(e){return e.theme.outline}),(function(e){return e.theme.secondary}));var b=function(e){return Object(l.default)(f)(o||(o=Object(a.a)(["\n  color: ",";\n\n  :enabled:hover {\n    color: ",";\n  }\n"])),(function(t){var n=t.color,r=void 0===n?e:n;return t.theme[r]}),(function(t){var n=t.color,r=void 0===n?e:n,c=t.theme;return c.onHover(c[r])}))},j=b("accent"),O=b("secondary");function v(e){var t=e.icon,n=e.iconProps,r=Object(i.a)(e,s);return Object(d.jsx)(O,Object(u.a)(Object(u.a)({},r),{},{children:Object(d.jsx)(t,Object(u.a)({},n))}))}},631:function(e,t,n){"use strict";n.r(t);var r,c=n(32),o=n(399).default.div(r||(r=Object(c.a)(["\n  align-items: ",";\n  color: ",";\n  display: ",";\n  flex-direction: column;\n  flex-grow: ",";\n  gap: ",";\n  grid-auto-flow: row;\n  grid-template-columns: 1fr;\n  justify-content: ",";\n  padding: ",";\n\n  ","\n"])),(function(e){var t=e.align;return null!==t&&void 0!==t?t:"center"}),(function(e){var t=e.color,n=e.theme;return t&&n[t]}),(function(e){return e.flex?"flex":"grid"}),(function(e){return e.grow&&1}),(function(e){var t=e.gap;return t&&"".concat(t,"em")}),(function(e){var t=e.justify;return null!==t&&void 0!==t?t:"space-between"}),(function(e){return e.padded&&"0.75em"}),(function(e){return e.css}));t.default=o},633:function(e,t,n){"use strict";n.r(t),n.d(t,"Field",(function(){return r})),n.d(t,"swapAtom",(function(){return d})),n.d(t,"independentFieldAtom",(function(){return s})),n.d(t,"displayTxHashAtom",(function(){return f})),n.d(t,"feeOptionsAtom",(function(){return b}));var r,c=n(10),o=n(13),u=n(30),i=n(267),a=n(1146),l=n(634);!function(e){e.INPUT="INPUT",e.OUTPUT="OUTPUT"}(r||(r={}));var d=Object(a.atomWithImmer)(Object(c.a)({independentField:r.INPUT,amount:""},r.INPUT,Object(u.B)(o.f.AVALANCHE))),s=Object(l.pickAtom)(d,"independentField"),f=Object(i.atom)(void 0),b=Object(i.atom)(void 0)},634:function(e,t,n){"use strict";n.r(t),n.d(t,"pickAtom",(function(){return o})),n.d(t,"setTogglable",(function(){return u}));var r=n(267),c=n(1146);function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){return t};return Object(r.atom)((function(n){return n(e)[t]}),(function(r,o,u){return o(Object(c.withImmer)(e),(function(e){var r=n(e[t],u);e[t]=r}))}))}function u(e){return!e}},635:function(e,t,n){"use strict";n.r(t);var r,c=n(32),o=n(399).default.hr(r||(r=Object(c.a)(["\n  border: none;\n  border-bottom: 1px solid ",";\n  margin: 0 ",";\n  margin-bottom: ","px;\n  margin-top: ","px;\n"])),(function(e){return e.theme.outline}),(function(e){return e.padded?"0.75em":0}),(function(e){return"bottom"===e.scrollingEdge?-1:0}),(function(e){return"bottom"!==e.scrollingEdge?-1:0}));t.default=o},636:function(e,t,n){"use strict";n.r(t),n.d(t,"MAX_VALID_SLIPPAGE",(function(){return u})),n.d(t,"MIN_HIGH_SLIPPAGE",(function(){return i})),n.d(t,"settingsAtom",(function(){return l})),n.d(t,"autoSlippageAtom",(function(){return d})),n.d(t,"maxSlippageAtom",(function(){return s})),n.d(t,"transactionTtlAtom",(function(){return f})),n.d(t,"mockTogglableAtom",(function(){return b})),n.d(t,"clientSideRouterAtom",(function(){return j}));var r=n(9),c=n(164),o=n(634),u=new r.Percent(1,2),i=new r.Percent(1,100),a={autoSlippage:!0,maxSlippage:void 0,transactionTtl:void 0,mockTogglable:!0,clientSideRouter:!0},l=Object(c.atomWithReset)(a),d=Object(o.pickAtom)(l,"autoSlippage"),s=Object(o.pickAtom)(l,"maxSlippage"),f=Object(o.pickAtom)(l,"transactionTtl"),b=Object(o.pickAtom)(l,"mockTogglable",o.setTogglable),j=Object(o.pickAtom)(l,"clientSideRouter")},637:function(e,t,n){"use strict";n.r(t),n.d(t,"Provider",(function(){return m})),n.d(t,"Header",(function(){return h})),n.d(t,"Modal",(function(){return g})),n.d(t,"default",(function(){return x}));var r,c=n(32),o=n(11),u=(n(1154),n(645)),i=n(400),a=n(399),l=n(1),d=n(268),s=n(630),f=n(631),b=n(647),j=n(635),O=n(0),v=Object(l.createContext)({element:null,active:!1,setActive:function(e){}});function m(e){var t=e.value,n=e.children,r=Object(l.useRef)(null),c=Object(l.useState)(!1),u=Object(o.a)(c,2),i=u[0],a=u[1],d={element:t,active:i,setActive:a};return Object(l.useEffect)((function(){r.current&&(r.current.inert=i)}),[i]),Object(O.jsx)("div",{ref:r,children:Object(O.jsx)(v.Provider,{value:d,children:n})})}var p=Object(l.createContext)((function(){}));function h(e){var t=e.title,n=e.children,r=e.ruled;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(f.default,{children:[Object(O.jsxs)(b.default,{title:t,children:[n,Object(O.jsx)(s.IconButton,{color:"primary",onClick:Object(l.useContext)(p),icon:i.X})]}),r&&Object(O.jsx)(j.default,{padded:!0})]})})}var g=a.default.div(r||(r=Object(c.a)(["\n  background-color: ",";\n  border-radius: ","em;\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 0.5em);\n  left: 0;\n  margin: 0.25em;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: calc(100% - 0.5em);\n  z-index: ",";\n"])),(function(e){var t=e.color;return e.theme[t]}),(function(e){return.75*e.theme.borderRadius}),a.Layer.DIALOG);function x(e){var t=e.color,n=e.children,r=e.onClose,c=void 0===r?function(){}:r,o=Object(l.useContext)(v);Object(l.useEffect)((function(){return o.setActive(!0),function(){return o.setActive(!1)}}),[o]);var i=Object(l.useRef)(null);return Object(u.default)(i),Object(l.useEffect)((function(){var e=function(e){return"Escape"===e.key&&(null===c||void 0===c?void 0:c())};return document.addEventListener("keydown",e,!0),function(){return document.removeEventListener("keydown",e,!0)}}),[c]),o.element&&Object(d.createPortal)(Object(O.jsx)(a.ThemeProvider,{children:Object(O.jsx)(g,{color:t,ref:i,children:Object(O.jsx)(p.Provider,{value:c,children:n})})}),o.element)}},638:function(e,t,n){"use strict";n.r(t);var r,c=n(32),o=n(11),u=n(269),i=n(400),a=n(399),l=n(1),d=n(0),s=new Set;t.default=Object(a.default)((function(e){var t=e.className,n=e.token,r=Object(u.default)(n),c=Object(l.useState)(),a=Object(o.a)(c,2),f=a[0],b=a[1];Object(l.useEffect)((function(){b(r.find((function(e){return!s.has(e)})))}),[r]);var j=Object(l.useCallback)((function(){f&&s.add(f),b(r.find((function(e){return!s.has(e)})))}),[f,r]);return f?Object(d.jsx)("img",{className:t,src:f,alt:n.name||n.symbol,onError:j}):Object(d.jsx)(i.Slash,{className:t,color:"secondary"})}))(r||(r=Object(c.a)(["\n  // radial-gradient calculates distance from the corner, not the edge: divide by sqrt(2)\n  background: radial-gradient(\n    "," calc(100% / "," - 1.5px),\n    "," calc(100% / "," - 1.5px)\n  );\n  border-radius: 100%;\n  height: ","em;\n  width: ","em;\n"])),(function(e){return e.theme.module}),Math.sqrt(2),(function(e){return e.theme.outline}),Math.sqrt(2),(function(e){return e.size||1}),(function(e){return e.size||1}))},639:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r,c,o=n(11),u=n(32),i=n(399),a=n(1),l=n(640),d=Object(i.css)(r||(r=Object(u.a)(["\n  overflow-y: scroll;\n"]))),s=function(e){return Object(i.css)(c||(c=Object(u.a)(["\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    width: 1.25em;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: radial-gradient(\n        closest-corner at 0.25em 0.25em,\n        "," 0.25em,\n        transparent 0.25em\n      ),\n      linear-gradient(\n        to bottom,\n        #ffffff00 0.25em,\n        "," 0.25em,\n        "," calc(100% - 0.25em),\n        #ffffff00 calc(100% - 0.25em)\n      ),\n      radial-gradient(\n        closest-corner at 0.25em calc(100% - 0.25em),\n        "," 0.25em,\n        #ffffff00 0.25em\n      );\n    background-clip: padding-box;\n    border: none;\n    ",": 0.75em solid transparent;\n  }\n\n  @supports not selector(::-webkit-scrollbar-thumb) {\n    scrollbar-color: "," transparent;\n  }\n"])),(function(e){return e.theme.interactive}),(function(e){return e.theme.interactive}),(function(e){return e.theme.interactive}),(function(e){return e.theme.interactive}),e?"border-right":"border-left",(function(e){return e.theme.interactive}))};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.padded,r=void 0!==n&&n,c=Object(a.useState)(!0),u=Object(o.a)(c,2),i=u[0],f=u[1];return Object(a.useEffect)((function(){f(b(e))}),[e]),Object(l.default)(e,"transitionend",(function(){return f(b(e))})),Object(a.useMemo)((function(){return i?s(r):d}),[i,r]);function b(e){return!e||e.scrollHeight>e.clientHeight}}},640:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(1);function c(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];Object(r.useEffect)((function(){return null===e||void 0===e||e.addEventListener.apply(e,n),function(){return null===e||void 0===e?void 0:e.removeEventListener.apply(e,n)}}),[e,n])}},645:function(e,t,n){"use strict";n.r(t),n.d(t,"UNMOUNTING",(function(){return c})),n.d(t,"default",(function(){return o}));var r=n(1),c="unmounting";function o(e){Object(r.useEffect)((function(){var t=e.current,n=null===t||void 0===t?void 0:t.parentElement,r=null===n||void 0===n?void 0:n.removeChild;return n&&r&&(n.removeChild=function(e){return e===t?(t.classList.add(c),t.onanimationend=function(){r.call(n,e)},e):r.call(n,e)}),function(){n&&r&&(n.removeChild=r)}}),[e])}},646:function(e,t,n){"use strict";n.r(t),n.d(t,"StringInput",(function(){return m})),n.d(t,"IntegerInput",(function(){return T})),n.d(t,"DecimalInput",(function(){return k})),n.d(t,"inputCss",(function(){return A}));var r,c,o=n(11),u=n(15),i=n(67),a=n(32),l=n(7),d=n.n(l),s=n(399),f=n(1),b=n(0),j=["value","onChange"],O=["value","onChange","enforcer","pattern"],v=s.default.input(r||(r=Object(a.a)(["\n  -webkit-appearance: textfield;\n  background-color: transparent;\n  border: none;\n  color: currentColor;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  margin: 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0;\n  text-align: left;\n  text-overflow: ellipsis;\n  width: 100%;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n"])),(function(e){return e.theme.secondary}));t.default=v;var m=Object(f.forwardRef)((function(e,t){var n=e.value,r=e.onChange,c=Object(i.a)(e,j);return Object(b.jsx)(v,Object(u.a)({value:n,onChange:function(e){return r(e.target.value)},inputMode:"text",autoComplete:"off",autoCorrect:"off",type:"text",placeholder:c.placeholder||"-",minLength:1,spellCheck:"false",ref:t},c))}));function p(e,t){var n=e.split("."),r=Object(o.a)(n,2),c=r[0],u=r[1],i=t.split("."),a=Object(o.a)(i,2),l=a[0],s=a[1];return d.a.equal(d.a.BigInt(null!==c&&void 0!==c?c:0),d.a.BigInt(null!==l&&void 0!==l?l:0))&&d.a.equal(d.a.BigInt(null!==u&&void 0!==u?u:0),d.a.BigInt(null!==s&&void 0!==s?s:0))}var h=Object(f.forwardRef)((function(e,t){var n=e.value,r=e.onChange,c=e.enforcer,a=e.pattern,l=Object(i.a)(e,O),d=Object(f.useState)(null!==n&&void 0!==n?n:""),s=Object(o.a)(d,2),j=s[0],m=s[1];Object(f.useEffect)((function(){p(j,n)||m(null!==n&&void 0!==n?n:"")}),[n,j,m]);var h=Object(f.useCallback)((function(e){var t=c(e.target.value.replace(/,/g,"."));null!==t&&(m(null!==t&&void 0!==t?t:""),p(t,n)||r(t))}),[n,r,c]);return Object(b.jsx)(v,Object(u.a)({value:j,onChange:h,inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:a,placeholder:l.placeholder||"0",minLength:1,maxLength:79,spellCheck:"false",ref:t},l))})),g=/^\d*$/,x=function(e){if(""===e||g.test(e)){var t=parseInt(e);return isNaN(t)?"":t.toString()}return null},T=Object(f.forwardRef)((function(e,t){return Object(b.jsx)(h,Object(u.a)({pattern:"^[0-9]*$",enforcer:x,ref:t},e))})),y=/^\d*(?:[.])?\d*$/,w=function(e){return""===e?"":"."===e?"0.":y.test(e)?e:null},k=Object(f.forwardRef)((function(e,t){return Object(b.jsx)(h,Object(u.a)({pattern:"^[0-9]*[.,]?[0-9]*$",enforcer:w,ref:t},e))})),A=Object(s.css)(c||(c=Object(a.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: ","em;\n  cursor: text;\n  padding: calc(0.5em - 1px);\n\n  :hover:not(:focus-within) {\n    background-color: ",";\n    border-color: ",";\n  }\n\n  :focus-within {\n    border-color: ",";\n  }\n"])),(function(e){return e.theme.container}),(function(e){return e.theme.container}),(function(e){return e.theme.borderRadius}),(function(e){var t=e.theme;return t.onHover(t.container)}),(function(e){var t=e.theme;return t.onHover(t.container)}),(function(e){return e.theme.active}))},647:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r,c=n(32),o=n(400),u=n(399),i=n(629),a=n(0),l=Object(u.default)(i.default)(r||(r=Object(c.a)(["\n  height: 1.75em;\n  margin: 0 0.75em 0.75em;\n  padding-top: 0.5em;\n  ","\n"])),o.largeIconCss);function d(e){var t=e.title,n=e.children;return Object(a.jsxs)(l,{iconSize:1.2,children:[Object(a.jsx)(i.default,{gap:.5,children:t&&Object(a.jsx)(u.ThemedText.Subhead1,{children:t})}),Object(a.jsx)(i.default,{gap:1,children:n})]})}},648:function(e,t,n){"use strict";n.r(t),n.d(t,"SwapInfoUpdater",(function(){return g})),n.d(t,"default",(function(){return x}));var r=n(10),c=n(2),o=n(9),u=n(267),i=n(164),a=n(155),l=n(633),d=n(121),s=n(1),f=n(116),b=n(72),j=n(205),O=n(654),v=n(655),m=n(0),p={"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10":!0,"0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106":!0,"0x60aE616a2155Ee3d9A68541Ba4544862310933d4":!0};var h=Object(u.atom)({currencies:{},currencyBalances:{},currencyAmounts:{},trade:{state:f.b.INVALID},allowedSlippage:new o.Percent(0),feeOptions:void 0});function g(){var e=Object(i.useUpdateAtom)(h),t=function(){var e,t,n,u=Object(j.default)().account,f=Object(i.useAtomValue)(l.swapAtom),h=f.independentField,g=f.amount,x=f[l.Field.INPUT],T=f[l.Field.OUTPUT],y=Object(i.useAtomValue)(l.feeOptionsAtom),w=u,k=Object(a.useCurrencyBalances)(u,Object(s.useMemo)((function(){return[null!==x&&void 0!==x?x:void 0,null!==T&&void 0!==T?T:void 0]}),[x,T])),A=h===l.Field.INPUT,C=Object(s.useMemo)((function(){var e;return Object(d.default)(g,null!==(e=A?x:T)&&void 0!==e?e:void 0)}),[x,A,T,g]),I=Object(v.useBestTrade)(A?o.TradeType.EXACT_INPUT:o.TradeType.EXACT_OUTPUT,C,null!==(e=A?T:x)&&void 0!==e?e:void 0),U=Object(s.useMemo)((function(){var e;return e={},Object(r.a)(e,l.Field.INPUT,null!==x&&void 0!==x?x:void 0),Object(r.a)(e,l.Field.OUTPUT,null!==T&&void 0!==T?T:void 0),e}),[x,T]),S=Object(s.useMemo)((function(){var e;return e={},Object(r.a)(e,l.Field.INPUT,k[0]),Object(r.a)(e,l.Field.OUTPUT,k[1]),e}),[k]),P=Object(s.useMemo)((function(){var e,t,n;return n={},Object(r.a)(n,l.Field.INPUT,null===(e=I.trade)||void 0===e?void 0:e.inputAmount),Object(r.a)(n,l.Field.OUTPUT,null===(t=I.trade)||void 0===t?void 0:t.outputAmount),n}),[null===(t=I.trade)||void 0===t?void 0:t.inputAmount,null===(n=I.trade)||void 0===n?void 0:n.outputAmount]),F=Object(O.default)(I.trade),N=Object(s.useMemo)((function(){var e,t,n,r;u||(t=Object(m.jsx)(c.b,{id:"Connect Wallet"})),U[l.Field.INPUT]&&U[l.Field.OUTPUT]||(t=null!==(n=t)&&void 0!==n?n:Object(m.jsx)(c.b,{id:"Select token"})),C||(t=null!==(r=t)&&void 0!==r?r:Object(m.jsx)(c.b,{id:"Enter an amount"}));var o,i,a=Object(b.c)(w);w&&a?p[a]&&(t=null!==(o=t)&&void 0!==o?o:Object(m.jsx)(c.b,{id:"Invalid recipient"})):t=null!==(i=t)&&void 0!==i?i:Object(m.jsx)(c.b,{id:"Enter a recipient"});var d=[S[l.Field.INPUT],null===(e=I.trade)||void 0===e?void 0:e.maximumAmountIn(F)],s=d[0],f=d[1];return s&&f&&s.lessThan(f)&&(t=Object(m.jsx)(c.b,{id:"Insufficient {0} balance",values:{0:f.currency.symbol}})),t}),[u,F,U,S,C,w,I.trade]);return Object(s.useMemo)((function(){return{currencies:U,currencyBalances:S,currencyAmounts:P,inputError:N,trade:I,allowedSlippage:F,feeOptions:y}}),[U,S,P,N,I,F,y])}();return Object(s.useEffect)((function(){e(t)}),[t,e]),null}function x(){return Object(i.useAtomValue)(h)}},651:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(3),c=n.n(r),o=n(25),u=n(11),i=n(78),a=n(9),l=n(105),d=n(1),s=n(116),f=n(408),b=n(205),j=n(206),O=n(337),v={protocols:[i.Protocol.V2,i.Protocol.V3]};function m(e,t,n){var r,i=null===t||void 0===t?void 0:t.currency.chainId,m=Object(b.default)().library,p=Object(d.useMemo)((function(){return e===a.TradeType.EXACT_INPUT?[null===t||void 0===t?void 0:t.currency,n]:[n,null===t||void 0===t?void 0:t.currency]}),[t,n,e]),h=Object(u.a)(p,2),g=h[0],x=h[1],T=Object(O.useRoutingAPIArguments)({tokenIn:g,tokenOut:x,amount:t,tradeType:e,useClientSideRouter:!0}),y=Object(d.useMemo)((function(){return i&&m&&{chainId:i,provider:m}}),[i,m]),w=Object(d.useState)(!1),k=Object(u.a)(w,2),A=k[0],C=k[1],I=Object(d.useState)({quoteResult:void 0,error:void 0}),U=Object(u.a)(I,2),S=U[0],P=S.quoteResult,F=S.error,N=U[1];Object(d.useEffect)((function(){function e(){return(e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!T||!y){e.next=6;break}return e.next=4,Object(j.getClientSideQuote)(T,y,v);case 4:t=e.sent,N({quoteResult:t.data,error:t.error});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N({quoteResult:void 0,error:!0});case 11:return e.prev=11,C(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}C(!0),function(){e.apply(this,arguments)}()}),[T,y]);var E=Object(d.useMemo)((function(){return Object(f.a)(g,x,e,P)}),[g,x,P,e]),M=null!==(r=Object(l.b)(null===P||void 0===P?void 0:P.gasUseEstimateUSD))&&void 0!==r?r:null;return Object(d.useMemo)((function(){if(!g||!x)return{state:s.b.INVALID,trade:void 0};if(A&&!P)return{state:s.b.LOADING,trade:void 0};var t=void 0;if(e===a.TradeType.EXACT_INPUT&&x&&P&&(t=a.CurrencyAmount.fromRawAmount(x,P.quote)),e===a.TradeType.EXACT_OUTPUT&&g&&P&&(t=a.CurrencyAmount.fromRawAmount(g,P.quote)),F||!t||!E||0===E.length||!T)return{state:s.b.NO_ROUTE_FOUND,trade:void 0};try{var n=Object(f.b)(E,e,M);return{state:s.b.VALID,trade:n}}catch(r){return console.debug("transformRoutesToTrade failed: ",r),{state:s.b.INVALID,trade:void 0}}}),[g,x,A,P,e,F,E,T,M])}},654:function(e,t,n){"use strict";n.r(t),n.d(t,"toPercent",(function(){return i})),n.d(t,"default",(function(){return a}));var r=n(9),c=n(459),o=n(164),u=n(636);function i(e){if(e){var t=Math.floor(100*e);return new r.Percent(t,1e4)}}function a(e){var t=Object(c.a)(e),n=i(Object(o.useAtomValue)(u.maxSlippageAtom));return Object(o.useAtomValue)(u.autoSlippageAtom)?t:null!==n&&void 0!==n?n:t}},655:function(e,t,n){"use strict";n.r(t),n.d(t,"useBestTrade",(function(){return s}));var r=n(15),c=n(11),o=n(9),u=n(338),i=n(137),a=n(1),l=n(116),d=n(651);function s(e,t,n){var s=Object(i.a)(Object(a.useMemo)((function(){return[t,n]}),[t,n]),200),f=Object(c.a)(s,2),b=f[0],j=f[1],O=Object(d.default)(e,b,j),v=function(e,t){if(e){if(t===o.TradeType.EXACT_INPUT)return[e.inputAmount,e.inputAmount.currency,e.outputAmount.currency];if(t===o.TradeType.EXACT_OUTPUT)return[e.outputAmount,e.outputAmount.currency,e.inputAmount.currency]}return[void 0,void 0,void 0]}(O.trade,e),m=Object(c.a)(v,3),p=m[0],h=m[1],g=m[2],x=t&&b&&t!==b||t&&j&&n&&j!==n,T=t&&function(e){var t,n,r,c=e.amounts,o=e.indepdenentCurrencies,u=e.dependentCurrencies,i=c[0]&&(null===(t=c[1])||void 0===t?void 0:t.equalTo(c[0])),a=o[0]&&(null===(n=o[1])||void 0===n?void 0:n.equals(o[0]))&&u[0]&&(null===(r=u[1])||void 0===r?void 0:r.equals(u[0]));return!i||!a}({amounts:[p,t],indepdenentCurrencies:[h,null===t||void 0===t?void 0:t.currency],dependentCurrencies:[g,j]}),y=!T&&O.state===l.b.NO_ROUTE_FOUND,w=Object(u.a)(e,y?b:void 0,y?j:void 0);return Object(a.useMemo)((function(){return Object(r.a)(Object(r.a)(Object(r.a)({},y?w:O),T?{state:l.b.SYNCING}:{}),x?{state:l.b.LOADING}:{})}),[x,w,T,O,y])}},657:function(e,t,n){"use strict";n.r(t),n.d(t,"loadingOpacityCss",(function(){return u}));var r,c=n(32),o=n(399),u=Object(o.css)(r||(r=Object(c.a)(["\n  filter: ",";\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.$loading?"grayscale(1)":"none"}),(function(e){return e.$loading?"0.4":"1"}))},661:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r,c=n(32),o=n(399),u=n(630),i=n(629),a=n(638),l=n(0),d=Object(o.default)(u.default)(r||(r=Object(c.a)(["\n  border-radius: ","em;\n  padding: 0.25em 0.75em 0.25em 0.25em;\n"])),(function(e){return e.theme.borderRadius}));function s(e){var t=e.value,n=e.onClick;return Object(l.jsx)(d,{onClick:function(){return n(t)},children:Object(l.jsx)(o.ThemedText.ButtonMedium,{children:Object(l.jsxs)(i.default,{gap:.5,children:[Object(l.jsx)(a.default,{token:t,size:1.5}),t.symbol]})})})}},662:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r,c,o=n(32),u=n(2),i=n(400),a=n(399),l=n(1),d=n(630),s=n(629),f=n(638),b=n(0),j=Object(a.default)(d.default)(r||(r=Object(o.a)(["\n  border-radius: ","em;\n  padding: 0.25em;\n  padding-left: ","em;\n\n  :disabled {\n    // prevents border from expanding the button's box size\n    padding: calc(0.25em - 1px);\n    padding-left: calc(","em - 1px);\n  }\n"])),(function(e){return e.theme.borderRadius}),(function(e){return e.empty?.75:.25}),(function(e){return e.empty?.75:.25})),O=Object(a.default)(s.default)(c||(c=Object(o.a)(["\n  height: 1.2em;\n  max-width: ","em;\n  overflow-x: hidden;\n  transition: max-width 0.25s linear;\n"])),(function(e){return e.collapsed?"1.2":"8.2"}));function v(e){var t=e.value,n=e.collapsed,r=e.disabled,c=e.onClick,o=Object(l.useMemo)((function(){return t?"interactive":"accent"}),[t]),d=Object(l.useMemo)((function(){return t||r?"onInteractive":"onAccent"}),[t,r]);return Object(b.jsx)(j,{onClick:c,empty:!t,color:o,disabled:r,children:Object(b.jsx)(a.ThemedText.ButtonLarge,{color:d,children:Object(b.jsxs)(O,{gap:.4,collapsed:Boolean(t)&&n,children:[t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.default,{token:t,size:1.2}),t.symbol]}):Object(b.jsx)(u.b,{id:"Select a token"}),Object(b.jsx)(i.ChevronDown,{color:d,strokeWidth:3})]})})})}},663:function(e,t,n){"use strict";n.r(t);var r,c,o,u=n(11),i=n(32),a=n(2),l=n(205),d=n(155),s=n(640),f=n(639),b=n(399),j=n(1),O=n(460),v=n(461),m=n(31),p=n(59),h=n(154),g=n(630),x=n(631),T=n(629),y=n(638),w=n(0),k=Object(b.default)(g.BaseButton)(r||(r=Object(i.a)(["\n  border-radius: 0;\n  outline: none;\n  padding: 0.5em 0.75em;\n"]))),A=Object(b.default)(v.a)(c||(c=Object(i.a)(["\n  ","[data-index='","'] {\n    background-color: ",";\n  }\n\n  ","\n  overscroll-behavior: none; // prevent Firefox's bouncy overscroll effect (because it does not trigger the scroll handler)\n"])),k,(function(e){return e.hover}),(function(e){var t=e.theme;return t.onHover(t.module)}),(function(e){return e.scrollbar})),C=b.default.div(o||(o=Object(i.a)(["\n  background-color: ",";\n  height: ","px;\n  left: 0;\n  position: absolute;\n  top: ","px;\n  width: 100%;\n"])),(function(e){var t=e.theme;return t.onHover(t.module)}),56,(function(e){return 56*e.hover}));function I(e){var t=e.index,n=e.value,r=e.style,c=Object(a.c)().i18n,o=Object(j.useRef)(null),u=function(e){var r;e.index=t,e.token=n,e.ref=null!==(r=o.current)&&void 0!==r?r:void 0},i=Object(l.default)().account,s=Object(d.default)(i,n);return Object(w.jsx)(k,{"data-index":t,style:r,onClick:u,onBlur:u,onFocus:u,onMouseMove:u,onKeyDown:u,ref:o,children:Object(w.jsx)(b.ThemedText.Body1,{children:Object(w.jsxs)(T.default,{children:[Object(w.jsxs)(T.default,{gap:.5,children:[Object(w.jsx)(y.default,{token:n,size:1.5}),Object(w.jsxs)(x.default,{flex:!0,gap:.125,align:"flex-start",children:[Object(w.jsx)(b.ThemedText.Subhead1,{children:n.symbol}),Object(w.jsx)(b.ThemedText.Caption,{color:"secondary",children:n.name})]})]}),(null===s||void 0===s?void 0:s.greaterThan(0))&&Object(h.a)(s,2,c.locale)]})})})}var U=function(e,t){return Object(p.a)(t[e])},S=Object(j.memo)((function(e){var t=e.data,n=e.index,r=e.style;return Object(w.jsx)(I,{index:n,value:t[n],style:r})}),v.b),P=Object(j.forwardRef)((function(e,t){var n=e.tokens,r=e.onSelect,c=Object(j.useState)(!1),o=Object(u.a)(c,2),i=o[0],a=o[1],l=Object(j.useState)(-1),d=Object(u.a)(l,2),b=d[0],v=d[1];Object(j.useEffect)((function(){return v(-1)}),[n]);var p=Object(j.useRef)(null),h=Object(j.useCallback)((function(e){function t(e){var t;null===(t=p.current)||void 0===t||t.scrollToItem(e),v(e)}"ArrowDown"!==e.key&&"ArrowUp"!==e.key||("ArrowDown"===e.key&&b<n.length-1?t(b+1):"ArrowUp"===e.key&&b>0?t(b-1):"ArrowUp"===e.key&&-1===b&&t(n.length-1),e.preventDefault()),"Enter"===e.key&&b&&r(n[b])}),[b,r,n]),g=Object(j.useCallback)((function(){return v(-1)}),[]);Object(j.useImperativeHandle)(t,(function(){return{onKeyDown:h,blur:g}}),[g,h]);var T=Object(j.useCallback)((function(e){var t=e.token;return t&&r(t)}),[r]),y=Object(j.useCallback)((function(e){var t=e.index;void 0!==t&&(v(t),a(!0))}),[]),k=Object(j.useCallback)((function(){return a(!1)}),[]),I=Object(j.useCallback)((function(e){var t=e.index,n=e.ref;void 0!==t&&(v(t),i&&(null===n||void 0===n||n.focus()))}),[i]),P=Object(j.useState)(null),F=Object(u.a)(P,2),N=F[0],E=F[1],M=Object(f.default)(N,{padded:!0}),B=Object(j.useRef)(null);return Object(s.default)(N,"scroll",(function(e){Object(m.default)(N),B.current&&(B.current.style.marginTop="".concat(-N.scrollTop,"px"))})),Object(w.jsxs)(x.default,{align:"unset",grow:!0,onKeyDown:h,onClick:T,onBlur:k,onFocus:y,onMouseMove:I,style:{overflow:"hidden"},children:[Object(w.jsx)(C,{hover:b,ref:B}),Object(w.jsx)(O.a,{disableWidth:!0,children:function(e){var t=e.height;return Object(w.jsx)(A,{hover:b,height:t,width:"100%",itemCount:n.length,itemData:n,itemKey:U,itemSize:56,className:"scrollbar",ref:p,outerRef:E,scrollbar:M,children:S})}})]})}));t.default=P},664:function(e,t,n){"use strict";n.r(t),n.d(t,"usePrefetchCurrencyColor",(function(){return p})),n.d(t,"default",(function(){return h}));var r=n(3),c=n.n(r),o=n(43),u=n(11),i=n(25),a=n(399),l=n(462),d=n.n(l),s=n(1),f=n(269),b=new Map;function j(e){return O.apply(this,arguments)}function O(){return O=Object(i.a)(c.a.mark((function e(t){var n,r,u,i,a,l,d,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:function(){},r=t[0],u=b.get(r)){e.next=26;break}i=Object(o.a)(t),e.prev=5,i.s();case 7:if((a=i.n()).done){e.next=18;break}return l=a.value,d=l,l.startsWith("http")&&(d+="?color"),e.next=13,v(d);case 13:if(!(u=e.sent)){e.next=16;break}return e.abrupt("break",18);case 16:e.next=7;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),i.e(e.t0);case 23:return e.prev=23,i.f(),e.finish(23);case 26:return b.set(r,u),e.abrupt("return",n(u));case 28:case"end":return e.stop()}}),e,null,[[5,20,23,26]])}))),O.apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.from(t).getPalette();case 3:return r=e.sent,e.abrupt("return",null===(n=r.Vibrant)||void 0===n?void 0:n.hex);case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){var t=Object(a.useTheme)(),n=Object(f.default)(e);Object(s.useEffect)((function(){t.tokenColorExtraction&&e&&j(n)}),[e,n,t.tokenColorExtraction])}function h(e){var t=Object(s.useState)(void 0),n=Object(u.a)(t,2),r=n[0],c=n[1],o=Object(a.useTheme)(),i=Object(f.default)(e);return Object(s.useLayoutEffect)((function(){var t=!1;return o.tokenColorExtraction&&e&&j(i,(function(e){!t&&e&&c(e)})),function(){t=!0,c(void 0)}}),[e,i,o.tokenColorExtraction]),r}},665:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r,c,o,u,i=n(11),a=n(32),l=n(2),d=n(657),s=n(399),f=n(1),b=n(630),j=n(631),O=n(646),v=n(629),m=n(404),p=n(0),h=Object(s.default)(v.default)(r||(r=Object(a.a)(["\n  grid-template-columns: 1fr;\n"]))),g=Object(s.default)(O.DecimalInput)(c||(c=Object(a.a)(["\n  color: ",";\n\n  :hover:not(:focus-within) {\n    color: ",";\n  }\n\n  :hover:not(:focus-within)::placeholder {\n    color: ",";\n  }\n\n  ","\n"])),(function(e){return e.theme.primary}),(function(e){var t=e.theme;return t.onHover(t.primary)}),(function(e){var t=e.theme;return t.onHover(t.secondary)}),d.loadingOpacityCss),x=Object(s.keyframes)(o||(o=Object(a.a)(["\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),T=Object(s.default)(b.default)(u||(u=Object(a.a)(["\n  animation: "," 0.25s linear;\n  border-radius: 0.75em;\n  padding: 0.5em;\n"])),x);function y(e){var t=e.currency,n=e.amount,r=e.disabled,c=e.onMax,o=e.onChangeInput,u=e.onChangeCurrency,a=e.loading,d=e.children,b=Object(f.useRef)(null),O=Object(f.useState)(!1),v=Object(i.a)(O,2),x=v[0],y=v[1],w=Object(f.useCallback)((function(){return y(Boolean(c))}),[c]),k=Object(f.useCallback)((function(e){e.relatedTarget!==b.current&&y(!1)}),[]);return Object(p.jsxs)(j.default,{gap:.25,children:[Object(p.jsxs)(h,{gap:.5,onBlur:k,children:[Object(p.jsx)(s.ThemedText.H2,{children:Object(p.jsx)(g,{value:n,onFocus:w,onChange:o,disabled:r||!t,$loading:Boolean(a)})}),x&&Object(p.jsx)(T,{onClick:c,ref:b,children:Object(p.jsx)(s.ThemedText.ButtonMedium,{children:Object(p.jsx)(l.b,{id:"Max"})})}),Object(p.jsx)(m.default,{value:t,collapsed:x,disabled:r,onSelect:u})]}),d]})}},680:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r,c,o=n(11),u=n(32),i=n(2),a=n(105),l=n(164),d=n(657),s=n(401),f=n(664),b=n(633),j=n(399),O=n(1),v=n(116),m=n(154),p=n(631),h=n(629),g=n(638),x=n(665),T=n(0),y=j.default.span(r||(r=Object(u.a)(["\n  ",";\n"])),d.loadingOpacityCss),w=Object(j.default)(p.default)(c||(c=Object(u.a)(["\n  margin: 0.75em;\n  position: relative;\n\n  "," {\n    filter: ",";\n    transition: filter 0.25s;\n  }\n"])),g.default,(function(e){return e.approved?void 0:"saturate(0) opacity(0.4)"}));function k(e){var t,n=e.disabled,r=Object(i.c)().i18n,c=Object(s.useSwapInfo)(),u=c.trade.state,d=c.currencyBalances[b.Field.INPUT],p=c.currencyAmounts[b.Field.INPUT],g=Object(a.c)(p),k=Object(s.useSwapAmount)(b.Field.INPUT),A=Object(o.a)(k,2),C=A[0],I=A[1],U=Object(s.useSwapCurrency)(b.Field.INPUT),S=Object(o.a)(U,2),P=S[0],F=S[1];Object(f.usePrefetchCurrencyColor)(P);var N=Object(O.useMemo)((function(){return v.b.LOADING===u||v.b.SYNCING===u}),[u]),E=Object(l.useAtomValue)(b.independentFieldAtom)!==b.Field.INPUT&&N,M=Object(O.useMemo)((function(){if(null===d||void 0===d?void 0:d.greaterThan(0))return function(){return I(d.toExact())}}),[d,I]);return Object(T.jsxs)(w,{gap:.5,approved:!0,children:[Object(T.jsx)(h.default,{children:Object(T.jsx)(j.ThemedText.Subhead2,{color:"secondary",children:Object(T.jsx)(i.b,{id:"Trading"})})}),Object(T.jsx)(x.default,{currency:P,amount:null!==(t=void 0!==C?C:null===p||void 0===p?void 0:p.toSignificant(6))&&void 0!==t?t:"",disabled:n,onMax:M,onChangeInput:I,onChangeCurrency:F,loading:E,children:Object(T.jsx)(j.ThemedText.Body2,{color:"secondary",children:Object(T.jsxs)(h.default,{children:[Object(T.jsx)(y,{$loading:E,children:g?"$".concat(g.toFixed(2)):"-"}),d&&Object(T.jsxs)(j.ThemedText.Body2,{color:(null===p||void 0===p?void 0:p.greaterThan(d))?"error":void 0,children:["Balance: ",Object(T.jsx)("span",{style:{userSelect:"text"},children:Object(m.a)(d,4,r.locale)})]})]})})}),Object(T.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=18.ed982749.chunk.js.map