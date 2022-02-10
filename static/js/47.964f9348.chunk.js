(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[47,15,54,58,65,77,78,82,85,88],{402:function(n,e,t){"use strict";t.r(e),t.d(e,"usePendingTransactions",(function(){return l})),t.d(e,"useAddTransaction",(function(){return f})),t.d(e,"usePendingApproval",(function(){return b})),t.d(e,"TransactionsUpdater",(function(){return h}));var r=t(164),o=t(205),c=t(653),i=t(1),a=t(31),u=t(118),d=t(339),s=t(0);function l(){var n,e=Object(o.default)().chainId,t=Object(r.useAtomValue)(c.transactionsAtom);return null!==(n=e?t[e]:null)&&void 0!==n?n:{}}function f(){var n=Object(o.default)().chainId,e=Object(u.default)(),t=Object(r.useUpdateAtom)(c.transactionsAtom);return Object(i.useCallback)((function(r){Object(a.default)(n);var o=n,c=r.response.hash;t((function(t){var i=t[o]||{};i[c]={addedTime:(new Date).getTime(),lastCheckedBlockNumber:e,info:r},t[n]=i}))}),[e,n,t])}function b(n,e){var t,i=Object(o.default)().chainId,a=Object(r.useAtomValue)(c.transactionsAtom);if(i&&n&&e){var u=a[i];if(u)return null===(t=Object.values(u).find((function(t){return t&&void 0===t.receipt&&t.info.type===c.TransactionType.APPROVAL&&t.info.tokenAddress===n.address&&t.info.spenderAddress===e&&(r=t,Date.now()-r.addedTime<864e5);var r})))||void 0===t?void 0:t.info.response.hash}}function h(){var n=l(),e=Object(r.useUpdateAtom)(c.transactionsAtom),t=Object(i.useCallback)((function(n){var t=n.chainId,r=n.hash,o=n.blockNumber;e((function(n){var e,c=null===(e=n[t])||void 0===e?void 0:e[r];c&&(c.lastCheckedBlockNumber=c.lastCheckedBlockNumber?Math.max(c.lastCheckedBlockNumber,o):o)}))}),[e]),o=Object(i.useCallback)((function(n){var t=n.chainId,r=n.hash,o=n.receipt;e((function(n){var e,c=null===(e=n[t])||void 0===e?void 0:e[r];c&&(c.receipt=o)}))}),[e]);return Object(s.jsx)(d.default,{pendingTransactions:n,onCheck:t,onReceipt:o})}},629:function(n,e,t){"use strict";t.r(e);var r,o=t(32),c=t(399),i=t(1),a=c.default.div(r||(r=Object(o.a)(["\n  align-items: ",";\n  color: ",";\n  display: ",";\n  flex-flow: wrap;\n  flex-grow: ",";\n  gap: ",";\n  grid-auto-flow: column;\n  grid-template-columns: ",";\n  justify-content: ",";\n  padding: ",";\n"])),(function(n){var e=n.align;return null!==e&&void 0!==e?e:"center"}),(function(n){var e=n.color,t=n.theme;return e&&t[e]}),(function(n){return n.flex?"flex":"grid"}),(function(n){return n.grow&&1}),(function(n){var e=n.gap;return e&&"".concat(e,"em")}),(function(n){var e=n.grow,t=n.children;return"first"===e?"1fr":"last"===e?"repeat(".concat(i.Children.count(t)-1,", auto) 1fr"):e?"repeat(".concat(i.Children.count(t),", 1fr)"):void 0}),(function(n){var e=n.justify;return null!==e&&void 0!==e?e:"space-between"}),(function(n){var e=n.pad;return e&&"0 ".concat(e,"em")}));e.default=a},630:function(n,e,t){"use strict";t.r(e),t.d(e,"BaseButton",(function(){return f})),t.d(e,"TextButton",(function(){return h})),t.d(e,"IconButton",(function(){return v}));var r,o,c,i=t(15),a=t(67),u=t(32),d=t(399),s=t(0),l=["icon","iconProps"],f=d.default.button(r||(r=Object(u.a)(["\n  background-color: transparent;\n  border: none;\n  border-radius: 0.5em;\n  color: currentColor;\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n\n  :disabled {\n    cursor: initial;\n    filter: saturate(0) opacity(0.4);\n  }\n"])));e.default=Object(d.default)(f)(o||(o=Object(u.a)(["\n  color: ",";\n\n  :enabled {\n    background-color: ",";\n  }\n\n  :enabled:hover {\n    background-color: ",";\n  }\n\n  :disabled {\n    border: 1px solid ",";\n    color: ",";\n    cursor: initial;\n  }\n"])),(function(n){var e=n.color,t=void 0===e?"interactive":e,r=n.theme;return"interactive"===t&&r.onInteractive}),(function(n){var e=n.color,t=void 0===e?"interactive":e;return n.theme[t]}),(function(n){var e=n.color,t=void 0===e?"interactive":e,r=n.theme;return r.onHover(r[t])}),(function(n){return n.theme.outline}),(function(n){return n.theme.secondary}));var b=function(n){return Object(d.default)(f)(c||(c=Object(u.a)(["\n  color: ",";\n\n  :enabled:hover {\n    color: ",";\n  }\n"])),(function(e){var t=e.color,r=void 0===t?n:t;return e.theme[r]}),(function(e){var t=e.color,r=void 0===t?n:t,o=e.theme;return o.onHover(o[r])}))},h=b("accent"),j=b("secondary");function v(n){var e=n.icon,t=n.iconProps,r=Object(a.a)(n,l);return Object(s.jsx)(j,Object(i.a)(Object(i.a)({},r),{},{children:Object(s.jsx)(e,Object(i.a)({},t))}))}},631:function(n,e,t){"use strict";t.r(e);var r,o=t(32),c=t(399).default.div(r||(r=Object(o.a)(["\n  align-items: ",";\n  color: ",";\n  display: ",";\n  flex-direction: column;\n  flex-grow: ",";\n  gap: ",";\n  grid-auto-flow: row;\n  grid-template-columns: 1fr;\n  justify-content: ",";\n  padding: ",";\n\n  ","\n"])),(function(n){var e=n.align;return null!==e&&void 0!==e?e:"center"}),(function(n){var e=n.color,t=n.theme;return e&&t[e]}),(function(n){return n.flex?"flex":"grid"}),(function(n){return n.grow&&1}),(function(n){var e=n.gap;return e&&"".concat(e,"em")}),(function(n){var e=n.justify;return null!==e&&void 0!==e?e:"space-between"}),(function(n){return n.padded&&"0.75em"}),(function(n){return n.css}));e.default=c},634:function(n,e,t){"use strict";t.r(e);var r,o=t(32),c=t(399).default.hr(r||(r=Object(o.a)(["\n  border: none;\n  border-bottom: 1px solid ",";\n  margin: 0 ",";\n  margin-bottom: ","px;\n  margin-top: ","px;\n"])),(function(n){return n.theme.outline}),(function(n){return n.padded?"0.75em":0}),(function(n){return"bottom"===n.scrollingEdge?-1:0}),(function(n){return"bottom"!==n.scrollingEdge?-1:0}));e.default=c},637:function(n,e,t){"use strict";t.r(e),t.d(e,"Provider",(function(){return m})),t.d(e,"Header",(function(){return O})),t.d(e,"Modal",(function(){return g})),t.d(e,"default",(function(){return x}));var r,o=t(32),c=t(11),i=(t(1153),t(645)),a=t(400),u=t(399),d=t(1),s=t(268),l=t(630),f=t(631),b=t(647),h=t(634),j=t(0),v=Object(d.createContext)({element:null,active:!1,setActive:function(n){}});function m(n){var e=n.value,t=n.children,r=Object(d.useRef)(null),o=Object(d.useState)(!1),i=Object(c.a)(o,2),a=i[0],u=i[1],s={element:e,active:a,setActive:u};return Object(d.useEffect)((function(){r.current&&(r.current.inert=a)}),[a]),Object(j.jsx)("div",{ref:r,children:Object(j.jsx)(v.Provider,{value:s,children:t})})}var p=Object(d.createContext)((function(){}));function O(n){var e=n.title,t=n.children,r=n.ruled;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(f.default,{children:[Object(j.jsxs)(b.default,{title:e,children:[t,Object(j.jsx)(l.IconButton,{color:"primary",onClick:Object(d.useContext)(p),icon:a.X})]}),r&&Object(j.jsx)(h.default,{padded:!0})]})})}var g=u.default.div(r||(r=Object(o.a)(["\n  background-color: ",";\n  border-radius: ","em;\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 0.5em);\n  left: 0;\n  margin: 0.25em;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: calc(100% - 0.5em);\n  z-index: ",";\n"])),(function(n){var e=n.color;return n.theme[e]}),(function(n){return.75*n.theme.borderRadius}),u.Layer.DIALOG);function x(n){var e=n.color,t=n.children,r=n.onClose,o=void 0===r?function(){}:r,c=Object(d.useContext)(v);Object(d.useEffect)((function(){return c.setActive(!0),function(){return c.setActive(!1)}}),[c]);var a=Object(d.useRef)(null);return Object(i.default)(a),Object(d.useEffect)((function(){var n=function(n){return"Escape"===n.key&&(null===o||void 0===o?void 0:o())};return document.addEventListener("keydown",n,!0),function(){return document.removeEventListener("keydown",n,!0)}}),[o]),c.element&&Object(s.createPortal)(Object(j.jsx)(u.ThemeProvider,{children:Object(j.jsx)(g,{className:"dialog",color:e,ref:a,children:Object(j.jsx)(p.Provider,{value:o,children:t})})}),c.element)}},639:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return f}));var r,o,c=t(11),i=t(32),a=t(399),u=t(1),d=t(640),s=Object(a.css)(r||(r=Object(i.a)(["\n  overflow-y: scroll;\n"]))),l=function(n){return Object(a.css)(o||(o=Object(i.a)(["\n  overflow-y: scroll;\n\n  ::-webkit-scrollbar {\n    width: 1.25em;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: radial-gradient(\n        closest-corner at 0.25em 0.25em,\n        "," 0.25em,\n        transparent 0.25em\n      ),\n      linear-gradient(\n        to bottom,\n        #ffffff00 0.25em,\n        "," 0.25em,\n        "," calc(100% - 0.25em),\n        #ffffff00 calc(100% - 0.25em)\n      ),\n      radial-gradient(\n        closest-corner at 0.25em calc(100% - 0.25em),\n        "," 0.25em,\n        #ffffff00 0.25em\n      );\n    background-clip: padding-box;\n    border: none;\n    ",": 0.75em solid transparent;\n  }\n\n  @supports not selector(::-webkit-scrollbar-thumb) {\n    scrollbar-color: "," transparent;\n  }\n"])),(function(n){return n.theme.interactive}),(function(n){return n.theme.interactive}),(function(n){return n.theme.interactive}),(function(n){return n.theme.interactive}),n?"border-right":"border-left",(function(n){return n.theme.interactive}))};function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.padded,r=void 0!==t&&t,o=Object(u.useState)(!0),i=Object(c.a)(o,2),a=i[0],f=i[1];return Object(u.useEffect)((function(){f(b(n))}),[n]),Object(d.default)(n,"transitionend",(function(){return f(b(n))})),Object(u.useMemo)((function(){return a?l(r):s}),[a,r]);function b(n){return!n||n.scrollHeight>n.clientHeight}}},640:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return o}));var r=t(1);function o(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];Object(r.useEffect)((function(){return null===n||void 0===n||n.addEventListener.apply(n,t),function(){return null===n||void 0===n?void 0:n.removeEventListener.apply(n,t)}}),[n,t])}},645:function(n,e,t){"use strict";t.r(e),t.d(e,"UNMOUNTING",(function(){return o})),t.d(e,"default",(function(){return c}));var r=t(1),o="unmounting";function c(n){Object(r.useEffect)((function(){var e=n.current,t=null===e||void 0===e?void 0:e.parentElement,r=null===t||void 0===t?void 0:t.removeChild;return t&&r&&(t.removeChild=function(n){return n===e?(e.classList.add(o),e.onanimationend=function(){r.call(t,n)},n):r.call(t,n)}),function(){t&&r&&(t.removeChild=r)}}),[n])}},647:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));var r,o=t(32),c=t(400),i=t(399),a=t(629),u=t(0),d=Object(i.default)(a.default)(r||(r=Object(o.a)(["\n  height: 1.75em;\n  margin: 0 0.75em 0.75em;\n  padding-top: 0.5em;\n  ","\n"])),c.largeIconCss);function s(n){var e=n.title,t=n.children;return Object(u.jsxs)(d,{iconSize:1.2,children:[Object(u.jsx)(a.default,{gap:.5,children:e&&Object(u.jsx)(i.ThemedText.Subhead1,{children:e})}),Object(u.jsx)(a.default,{gap:1,children:t})]})}},650:function(n,e,t){"use strict";t.r(e),t.d(e,"Overlay",(function(){return O})),t.d(e,"default",(function(){return g}));var r,o,c,i,a,u=t(32),d=t(400),s=t(399),l=t(1),f=t(630),b=t(629),h=t(0),j=Object(s.default)(f.default)(r||(r=Object(u.a)(["\n  border-radius: ","em;\n  flex-grow: 1;\n  transition: background-color 0.25s ease-out, flex-grow 0.25s ease-out, padding 0.25s ease-out;\n\n  :disabled {\n    margin: -1px;\n  }\n"])),(function(n){return n.theme.borderRadius})),v=Object(s.default)(b.default)(o||(o=Object(u.a)([""]))),m=Object(s.keyframes)(c||(c=Object(u.a)(["\n  from {\n    opacity: 0;\n    width: 0;\n  }\n  to {\n    opacity: 1;\n    width: max-content;\n  }\n"]))),p=Object(s.css)(i||(i=Object(u.a)(["\n  border: 1px solid ",";\n  padding: calc(0.25em - 1px);\n  padding-left: calc(0.75em - 1px);\n\n  "," {\n    animation: "," 0.25s ease-in;\n    white-space: nowrap;\n  }\n\n  "," {\n    border-radius: ","em;\n    flex-grow: 0;\n    padding: 1em;\n  }\n"])),(function(n){return n.theme.outline}),v,m,j,(function(n){return.75*n.theme.borderRadius})),O=Object(s.default)(b.default)(a||(a=Object(u.a)(["\n  border-radius: ","em;\n  flex-direction: row-reverse;\n  min-height: 3.5em;\n  transition: padding 0.25s ease-out;\n\n  ","\n"])),(function(n){return n.theme.borderRadius}),(function(n){return n.update&&p}));function g(n){var e=n.color,t=void 0===e?"accent":e,r=n.disabled,o=n.update,c=n.onClick,i=n.onUpdate,a=n.children,u=Object(l.useMemo)((function(){return"accent"!==t||r?"currentColor":"onAccent"}),[t,r]);return Object(h.jsxs)(O,{update:Boolean(o),flex:!0,align:"stretch",children:[Object(h.jsx)(j,{color:t,disabled:r,onClick:o?i:c,children:Object(h.jsx)(s.ThemedText.TransitionButton,{buttonSize:o?"medium":"large",color:u,children:o?o.action:a})}),o&&Object(h.jsxs)(v,{gap:.5,children:[Object(h.jsx)(d.LargeIcon,{color:"currentColor",icon:o.icon||d.AlertTriangle}),Object(h.jsx)(s.ThemedText.Subhead2,{children:null===o||void 0===o?void 0:o.message})]})]})}},653:function(n,e,t){"use strict";t.r(e),t.d(e,"TransactionType",(function(){return r})),t.d(e,"transactionsAtom",(function(){return c}));var r,o=t(1144);!function(n){n[n.APPROVAL=0]="APPROVAL",n[n.SWAP=1]="SWAP"}(r||(r={}));var c=Object(o.atomWithImmer)({})},657:function(n,e,t){"use strict";t.r(e),t.d(e,"StatusHeader",(function(){return x})),t.d(e,"default",(function(){return A}));var r,o,c,i,a=t(11),u=t(32),d=t(2),s=t(639),l=t(400),f=t(399),b=t(1),h=t(650),j=t(630),v=t(631),m=t(629),p=t(634),O=t(0),g=Object(f.default)(l.LargeIcon)(r||(r=Object(u.a)(["\n  flex-grow: 1;\n\n  svg {\n    transition: height 0.25s, width 0.25s;\n  }\n"])));function x(n){var e=n.icon,t=n.iconColor,r=n.iconSize,o=void 0===r?4:r,c=n.children;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(v.default,{flex:!0,style:{flexGrow:1},children:[Object(O.jsx)(g,{icon:e,color:t,size:o}),Object(O.jsx)(v.default,{gap:.75,flex:!0,style:{textAlign:"center"},children:c})]}),Object(O.jsx)(p.default,{})]})}var w=Object(f.default)(v.default)(o||(o=Object(u.a)(["\n  transition: gap 0.25s;\n\n  div:last-child {\n    max-height: ","em; // 3 * line-height\n    overflow-y: hidden;\n    transition: max-height 0.25s;\n  }\n"])),(function(n){return n.open?0:60/14})),y=Object(f.default)(v.default)(c||(c=Object(u.a)([""]))),k=Object(f.default)(v.default)(i||(i=Object(u.a)(["\n  flex-grow: ",";\n  transition: flex-grow 0.25s, gap 0.25s;\n\n  "," {\n    margin-bottom: ","em;\n    transition: margin-bottom 0.25s;\n  }\n\n  "," {\n    flex-basis: 0;\n    flex-grow: ",";\n    overflow-y: hidden;\n    position: relative;\n    transition: flex-grow 0.25s;\n\n    "," {\n      height: 100%;\n      padding: ",";\n      transition: padding 0.25s;\n\n      :after {\n        background: linear-gradient(#ffffff00, ",");\n        bottom: 0;\n        content: '';\n        height: 0.75em;\n        pointer-events: none;\n        position: absolute;\n        width: calc(100% - 1em);\n      }\n    }\n  }\n"])),(function(n){return n.open?2:0}),p.default,(function(n){return n.open?0:.75}),y,(function(n){return n.open?1:0}),v.default,(function(n){return n.open?"0.5em 0":0}),(function(n){return n.theme.dialog}));function A(n){var e=n.header,t=n.error,r=n.action,o=n.onAction,c=Object(b.useState)(!1),i=Object(a.a)(c,2),u=i[0],g=i[1],A=Object(b.useState)(null),E=Object(a.a)(A,2),C=E[0],T=E[1],I=Object(s.default)(C);return Object(O.jsxs)(v.default,{flex:!0,padded:!0,gap:.75,align:"stretch",style:{height:"100%"},children:[Object(O.jsx)(x,{icon:l.AlertTriangle,iconColor:"error",iconSize:u?3:4,children:Object(O.jsxs)(w,{gap:u?0:.75,open:u,children:[Object(O.jsx)(f.ThemedText.Subhead1,{children:Object(O.jsx)(d.b,{id:"Something went wrong."})}),Object(O.jsx)(f.ThemedText.Body2,{children:e})]})}),Object(O.jsxs)(m.default,{children:[Object(O.jsxs)(m.default,{gap:.5,children:[Object(O.jsx)(l.Info,{color:"secondary"}),Object(O.jsx)(f.ThemedText.Subhead2,{color:"secondary",children:Object(O.jsx)(d.b,{id:"Error details"})})]}),Object(O.jsx)(j.IconButton,{color:"secondary",onClick:function(){return g(!u)},icon:l.Expando,iconProps:{open:u}})]}),Object(O.jsxs)(k,{flex:!0,align:"stretch",open:u,children:[Object(O.jsx)(p.default,{}),Object(O.jsx)(y,{children:Object(O.jsx)(v.default,{gap:.5,ref:T,css:I,children:Object(O.jsxs)(f.ThemedText.Code,{children:[t.name,t.message?": ".concat(t.message):""]})})}),Object(O.jsx)(h.default,{onClick:o,children:r})]})]})}},658:function(n,e,t){"use strict";t.r(e),t.d(e,"IntegrationError",(function(){return u}));var r=t(5),o=t(6),c=t(17),i=t(18),a=t(144),u=function(n){Object(c.a)(t,n);var e=Object(i.a)(t);function t(n){var r;return Object(o.a)(this,t),(r=e.call(this,n)).name="Integration Error",r}return Object(r.a)(t)}(Object(a.a)(Error))},672:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return b}));var r=t(6),o=t(5),c=t(17),i=t(18),a=t(2),u=t(1),d=t.n(u),s=t(637),l=t(657),f=t(0),b=function(n){Object(c.a)(t,n);var e=Object(i.a)(t);function t(n){var o;return Object(r.a)(this,t),(o=e.call(this,n)).state={error:null},o}return Object(o.a)(t,[{key:"componentDidCatch",value:function(n,e){var t,r;null===(t=(r=this.props).onError)||void 0===t||t.call(r,n,e)}},{key:"render",value:function(){return this.state.error?Object(f.jsx)(s.default,{color:"dialog",children:Object(f.jsx)(l.default,{error:this.state.error,header:Object(f.jsx)(a.b,{id:"Something went wrong."}),action:Object(f.jsx)(a.b,{id:"Reload the page"}),onAction:function(){return window.location.reload()}})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{error:n}}}]),t}(d.a.Component)},673:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return a}));var r=t(107),o=t(658),c=t(1),i=t(0);function a(n){var e=n.jsonRpcEndpoint,t=n.provider;Object(c.useEffect)((function(){if(!t&&!e)throw new o.IntegrationError("This widget requires a provider or jsonRpcEndpoint.")}),[t,e]);var a=n.width;Object(c.useEffect)((function(){if(a&&a<300)throw new o.IntegrationError("Set widget width to at least 300px. (You set it to ".concat(a,".)"))}),[a]);var u=n.locale;return Object(c.useEffect)((function(){u&&"pseudo"!==u&&!r.d.includes(u)&&console.warn("Unsupported locale: ",u)}),[u]),Object(i.jsx)(i.Fragment,{children:n.children})}},675:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return w}));var r=t(11),o=t(412),c=t(3),i=t.n(c),a=t(6),u=t(5),d=t(17),s=t(18),l=t(458),f=function(n,e,t,r){return new(t||(t=Promise))((function(o,c){function i(n){try{u(r.next(n))}catch(e){c(e)}}function a(n){try{u(r.throw(n))}catch(e){c(e)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,a)}u((r=r.apply(n,e||[])).next())}))};function b(n){return Number.parseInt(n,16)}var h=function(n){Object(d.a)(t,n);var e=Object(s.a)(t);function t(n,o){var c,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(Object(a.a)(this,t),(c=e.call(this,n)).provider=o,c.provider.on("connect",(function(n){var e=n.chainId;c.actions.update({chainId:b(e)})})),c.provider.on("disconnect",(function(n){c.actions.reportError(n)})),c.provider.on("chainChanged",(function(n){c.actions.update({chainId:b(n)})})),c.provider.on("accountsChanged",(function(n){c.actions.update({accounts:n})})),i){var u=c.actions.startActivation();Promise.all([c.provider.request({method:"eth_chainId"}),c.provider.request({method:"eth_accounts"})]).then((function(n){var e=Object(r.a)(n,2),t=e[0],o=e[1];c.actions.update({chainId:b(t),accounts:o})})).catch((function(n){console.debug("Could not connect eagerly",n),u()}))}return c}return Object(u.a)(t,[{key:"activate",value:function(){return f(this,void 0,void 0,i.a.mark((function n(){var e=this;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this.actions.startActivation(),n.abrupt("return",Promise.all([this.provider.request({method:"eth_chainId"}),this.provider.request({method:"eth_requestAccounts"})]).then((function(n){var t=Object(r.a)(n,2),o=t[0],c=t[1];e.actions.update({chainId:b(o),accounts:c})})).catch((function(n){e.actions.reportError(n)})));case 2:case"end":return n.stop()}}),n,this)})))}}]),t}(l.a),j=function(n,e,t,r){return new(t||(t=Promise))((function(o,c){function i(n){try{u(r.next(n))}catch(e){c(e)}}function a(n){try{u(r.throw(n))}catch(e){c(e)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,a)}u((r=r.apply(n,e||[])).next())}))},v=function(n){Object(d.a)(o,n);var e=Object(s.a)(o);function o(n,t){var r,c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(a.a)(this,o),(r=e.call(this,n)).url=t,c&&r.initialize(),r}return Object(u.a)(o,[{key:"initialize",value:function(){return j(this,void 0,void 0,i.a.mark((function n(){var e,o,c,a,u,d=this;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.actions.startActivation(),this.provider){n.next=10;break}return n.next=4,Promise.all([t.e(112).then(t.bind(null,1686)).then((function(n){return n.JsonRpcProvider})),t.e(109).then(t.bind(null,1687)).then((function(n){return n.Eip1193Bridge}))]);case 4:e=n.sent,o=Object(r.a)(e,2),c=o[0],a=o[1],u=new c(this.url),this.provider=new a(u.getSigner(),u);case 10:return n.abrupt("return",this.provider.request({method:"eth_chainId"}).then((function(n){d.actions.update({chainId:n,accounts:[]})})).catch((function(n){d.actions.reportError(n)})));case 11:case"end":return n.stop()}}),n,this)})))}},{key:"activate",value:function(){return j(this,void 0,void 0,i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.initialize());case 1:case"end":return n.stop()}}),n,this)})))}}]),o}(l.a),m=t(164),p=t(309),O=t(1),g=t(0);function x(n,e,t){return Object(O.useEffect)((function(){if(e){var c=Object(o.initializeConnector)((function(t){return new n(t,e)})),i=Object(r.a)(c,2),a=i[0],u=i[1];t([a,u])}else t(m.RESET)}),[n,e,t])}function w(n){var e=n.jsonRpcEndpoint,t=n.provider,r=n.children,o=Object(m.useUpdateAtom)(p.urlAtom);x(v,e,o);var c=Object(m.useUpdateAtom)(p.injectedAtom);return x(h,t,c),Object(g.jsx)(g.Fragment,{children:r})}},688:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return T}));var r,o,c,i=t(15),a=t(11),u=t(32),d=t(107),s=t(267),l=t(402),f=t(118),b=t(645),h=t(311),j=t(176),v=t(399),m=t(1),p=t(99),O=t(637),g=t(672),x=t(673),w=t(675),y=t(0),k=Object(v.keyframes)(r||(r=Object(u.a)(["\n  to {\n    top: calc(100% - 0.25em);\n  }\n"]))),A=Object(v.keyframes)(o||(o=Object(u.a)(["\n  from {\n    top: calc(100% - 0.25em);\n  }\n"]))),E=v.default.div(c||(c=Object(u.a)(["\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background-color: ",";\n  border-radius: ","em;\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;\n  font-size: 16px;\n  font-smooth: always;\n  font-variant: none;\n  height: 368px;\n  min-width: 300px;\n  overflow-y: hidden;\n  padding: 0.25em;\n  position: relative;\n  width: ",";\n\n  @supports (overflow: clip) {\n    overflow-y: clip;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: ",";\n    user-select: none;\n\n    @supports (font-variation-settings: normal) {\n      font-family: ",";\n    }\n  }\n\n  .dialog {\n    animation: "," 0.25s ease-in-out;\n  }\n\n  .dialog."," {\n    animation: "," 0.25s ease-in-out;\n  }\n"])),(function(n){return n.theme.container}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.primary}),(function(n){var e=n.width;return e&&(isNaN(Number(e))?e:"".concat(e,"px"))}),(function(n){return n.theme.fontFamily}),(function(n){return n.theme.fontFamilyVariable}),A,b.UNMOUNTING,k);function C(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(f.BlockUpdater,{}),Object(y.jsx)(j.MulticallUpdater,{}),Object(y.jsx)(l.TransactionsUpdater,{})]})}function T(n){var e=n.children,t=n.theme,r=n.locale,o=void 0===r?d.b:r,c=n.provider,u=n.jsonRpcEndpoint,l=n.width,f=void 0===l?360:l,b=n.dialog,k=n.className,A=n.onError,T=Object(m.useState)(null),I=Object(a.a)(T,2),P=I[0],S=I[1];return Object(y.jsx)(m.StrictMode,{children:Object(y.jsx)(h.Provider,{locale:o,children:Object(y.jsx)(v.ThemeProvider,{theme:t,children:Object(y.jsx)(E,{width:f,className:k,ref:S,children:Object(y.jsx)(O.Provider,{value:b||P,children:Object(y.jsx)(g.default,{onError:A,children:Object(y.jsx)(x.default,Object(i.a)(Object(i.a)({},n),{},{children:Object(y.jsx)(p.a,{store:j.store,children:Object(y.jsx)(s.Provider,{children:Object(y.jsxs)(w.default,{provider:c,jsonRpcEndpoint:u,children:[Object(y.jsx)(C,{}),e]})})})}))})})})})})})}}}]);
//# sourceMappingURL=47.964f9348.chunk.js.map