(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[59,86],{629:function(n,e,t){"use strict";t.r(e);var r,o=t(32),c=t(399),i=t(1),u=c.default.div(r||(r=Object(o.a)(["\n  align-items: ",";\n  color: ",";\n  display: ",";\n  flex-flow: wrap;\n  flex-grow: ",";\n  gap: ",";\n  grid-auto-flow: column;\n  grid-template-columns: ",";\n  justify-content: ",";\n  padding: ",";\n"])),(function(n){var e=n.align;return null!==e&&void 0!==e?e:"center"}),(function(n){var e=n.color,t=n.theme;return e&&t[e]}),(function(n){return n.flex?"flex":"grid"}),(function(n){return n.grow&&1}),(function(n){var e=n.gap;return e&&"".concat(e,"em")}),(function(n){var e=n.grow,t=n.children;return"first"===e?"1fr":"last"===e?"repeat(".concat(i.Children.count(t)-1,", auto) 1fr"):e?"repeat(".concat(i.Children.count(t),", 1fr)"):void 0}),(function(n){var e=n.justify;return null!==e&&void 0!==e?e:"space-between"}),(function(n){var e=n.pad;return e&&"0 ".concat(e,"em")}));e.default=u},630:function(n,e,t){"use strict";t.r(e),t.d(e,"BaseButton",(function(){return s})),t.d(e,"TextButton",(function(){return b})),t.d(e,"IconButton",(function(){return m}));var r,o,c,i=t(15),u=t(67),a=t(32),l=t(399),d=t(0),f=["icon","iconProps"],s=l.default.button(r||(r=Object(a.a)(["\n  background-color: transparent;\n  border: none;\n  border-radius: 0.5em;\n  color: currentColor;\n  cursor: pointer;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n\n  :disabled {\n    cursor: initial;\n    filter: saturate(0) opacity(0.4);\n  }\n"])));e.default=Object(l.default)(s)(o||(o=Object(a.a)(["\n  color: ",";\n\n  :enabled {\n    background-color: ",";\n  }\n\n  :enabled:hover {\n    background-color: ",";\n  }\n\n  :disabled {\n    border: 1px solid ",";\n    color: ",";\n    cursor: initial;\n  }\n"])),(function(n){var e=n.color,t=void 0===e?"interactive":e,r=n.theme;return"interactive"===t&&r.onInteractive}),(function(n){var e=n.color,t=void 0===e?"interactive":e;return n.theme[t]}),(function(n){var e=n.color,t=void 0===e?"interactive":e,r=n.theme;return r.onHover(r[t])}),(function(n){return n.theme.outline}),(function(n){return n.theme.secondary}));var v=function(n){return Object(l.default)(s)(c||(c=Object(a.a)(["\n  color: ",";\n\n  :enabled:hover {\n    color: ",";\n  }\n"])),(function(e){var t=e.color,r=void 0===t?n:t;return e.theme[r]}),(function(e){var t=e.color,r=void 0===t?n:t,o=e.theme;return o.onHover(o[r])}))},b=v("accent"),j=v("secondary");function m(n){var e=n.icon,t=n.iconProps,r=Object(u.a)(n,f);return Object(d.jsx)(j,Object(i.a)(Object(i.a)({},r),{},{children:Object(d.jsx)(e,Object(i.a)({},t))}))}},631:function(n,e,t){"use strict";t.r(e);var r,o=t(32),c=t(399).default.div(r||(r=Object(o.a)(["\n  align-items: ",";\n  color: ",";\n  display: ",";\n  flex-direction: column;\n  flex-grow: ",";\n  gap: ",";\n  grid-auto-flow: row;\n  grid-template-columns: 1fr;\n  justify-content: ",";\n  padding: ",";\n\n  ","\n"])),(function(n){var e=n.align;return null!==e&&void 0!==e?e:"center"}),(function(n){var e=n.color,t=n.theme;return e&&t[e]}),(function(n){return n.flex?"flex":"grid"}),(function(n){return n.grow&&1}),(function(n){var e=n.gap;return e&&"".concat(e,"em")}),(function(n){var e=n.justify;return null!==e&&void 0!==e?e:"space-between"}),(function(n){return n.padded&&"0.75em"}),(function(n){return n.css}));e.default=c},635:function(n,e,t){"use strict";t.r(e);var r,o=t(32),c=t(399).default.hr(r||(r=Object(o.a)(["\n  border: none;\n  border-bottom: 1px solid ",";\n  margin: 0 ",";\n  margin-bottom: ","px;\n  margin-top: ","px;\n"])),(function(n){return n.theme.outline}),(function(n){return n.padded?"0.75em":0}),(function(n){return"bottom"===n.scrollingEdge?-1:0}),(function(n){return"bottom"!==n.scrollingEdge?-1:0}));e.default=c},637:function(n,e,t){"use strict";t.r(e),t.d(e,"Provider",(function(){return h})),t.d(e,"Header",(function(){return p})),t.d(e,"Modal",(function(){return O})),t.d(e,"default",(function(){return x}));var r,o=t(32),c=t(11),i=(t(1154),t(645)),u=t(400),a=t(399),l=t(1),d=t(268),f=t(630),s=t(631),v=t(647),b=t(635),j=t(0),m=Object(l.createContext)({element:null,active:!1,setActive:function(n){}});function h(n){var e=n.value,t=n.children,r=Object(l.useRef)(null),o=Object(l.useState)(!1),i=Object(c.a)(o,2),u=i[0],a=i[1],d={element:e,active:u,setActive:a};return Object(l.useEffect)((function(){r.current&&(r.current.inert=u)}),[u]),Object(j.jsx)("div",{ref:r,children:Object(j.jsx)(m.Provider,{value:d,children:t})})}var g=Object(l.createContext)((function(){}));function p(n){var e=n.title,t=n.children,r=n.ruled;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.default,{children:[Object(j.jsxs)(v.default,{title:e,children:[t,Object(j.jsx)(f.IconButton,{color:"primary",onClick:Object(l.useContext)(g),icon:u.X})]}),r&&Object(j.jsx)(b.default,{padded:!0})]})})}var O=a.default.div(r||(r=Object(o.a)(["\n  background-color: ",";\n  border-radius: ","em;\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - 0.5em);\n  left: 0;\n  margin: 0.25em;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: calc(100% - 0.5em);\n  z-index: ",";\n"])),(function(n){var e=n.color;return n.theme[e]}),(function(n){return.75*n.theme.borderRadius}),a.Layer.DIALOG);function x(n){var e=n.color,t=n.children,r=n.onClose,o=void 0===r?function(){}:r,c=Object(l.useContext)(m);Object(l.useEffect)((function(){return c.setActive(!0),function(){return c.setActive(!1)}}),[c]);var u=Object(l.useRef)(null);return Object(i.default)(u),Object(l.useEffect)((function(){var n=function(n){return"Escape"===n.key&&(null===o||void 0===o?void 0:o())};return document.addEventListener("keydown",n,!0),function(){return document.removeEventListener("keydown",n,!0)}}),[o]),c.element&&Object(d.createPortal)(Object(j.jsx)(a.ThemeProvider,{children:Object(j.jsx)(O,{color:e,ref:u,children:Object(j.jsx)(g.Provider,{value:o,children:t})})}),c.element)}},645:function(n,e,t){"use strict";t.r(e),t.d(e,"UNMOUNTING",(function(){return o})),t.d(e,"default",(function(){return c}));var r=t(1),o="unmounting";function c(n){Object(r.useEffect)((function(){var e=n.current,t=null===e||void 0===e?void 0:e.parentElement,r=null===t||void 0===t?void 0:t.removeChild;return t&&r&&(t.removeChild=function(n){return n===e?(e.classList.add(o),e.onanimationend=function(){r.call(t,n)},n):r.call(t,n)}),function(){t&&r&&(t.removeChild=r)}}),[n])}},647:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return d}));var r,o=t(32),c=t(400),i=t(399),u=t(629),a=t(0),l=Object(i.default)(u.default)(r||(r=Object(o.a)(["\n  height: 1.75em;\n  margin: 0 0.75em 0.75em;\n  padding-top: 0.5em;\n  ","\n"])),c.largeIconCss);function d(n){var e=n.title,t=n.children;return Object(a.jsxs)(l,{iconSize:1.2,children:[Object(a.jsx)(u.default,{gap:.5,children:e&&Object(a.jsx)(i.ThemedText.Subhead1,{children:e})}),Object(a.jsx)(u.default,{gap:1,children:t})]})}}}]);
//# sourceMappingURL=59.a57b1e3c.chunk.js.map