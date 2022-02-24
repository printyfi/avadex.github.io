(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[65],{658:function(e,t,n){"use strict";n.r(t),n.d(t,"StatusHeader",(function(){return v})),n.d(t,"default",(function(){return y}));var i,c,r,o,s=n(11),a=n(32),d=n(2),l=n(639),u=n(400),j=n(399),b=n(1),f=n(650),x=n(630),h=n(631),O=n(629),p=n(635),g=n(0),m=Object(j.default)(u.LargeIcon)(i||(i=Object(a.a)(["\n  flex-grow: 1;\n\n  svg {\n    transition: height 0.25s, width 0.25s;\n  }\n"])));function v(e){var t=e.icon,n=e.iconColor,i=e.iconSize,c=void 0===i?4:i,r=e.children;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(h.default,{flex:!0,style:{flexGrow:1},children:[Object(g.jsx)(m,{icon:t,color:n,size:c}),Object(g.jsx)(h.default,{gap:.75,flex:!0,style:{textAlign:"center"},children:r})]}),Object(g.jsx)(p.default,{})]})}var w=Object(j.default)(h.default)(c||(c=Object(a.a)(["\n  transition: gap 0.25s;\n\n  div:last-child {\n    max-height: ","em; // 3 * line-height\n    overflow-y: hidden;\n    transition: max-height 0.25s;\n  }\n"])),(function(e){return e.open?0:60/14})),T=Object(j.default)(h.default)(r||(r=Object(a.a)([""]))),C=Object(j.default)(h.default)(o||(o=Object(a.a)(["\n  flex-grow: ",";\n  transition: flex-grow 0.25s, gap 0.25s;\n\n  "," {\n    margin-bottom: ","em;\n    transition: margin-bottom 0.25s;\n  }\n\n  "," {\n    flex-basis: 0;\n    flex-grow: ",";\n    overflow-y: hidden;\n    position: relative;\n    transition: flex-grow 0.25s;\n\n    "," {\n      height: 100%;\n      padding: ",";\n      transition: padding 0.25s;\n\n      :after {\n        background: linear-gradient(#ffffff00, ",");\n        bottom: 0;\n        content: '';\n        height: 0.75em;\n        pointer-events: none;\n        position: absolute;\n        width: calc(100% - 1em);\n      }\n    }\n  }\n"])),(function(e){return e.open?2:0}),p.default,(function(e){return e.open?0:.75}),T,(function(e){return e.open?1:0}),h.default,(function(e){return e.open?"0.5em 0":0}),(function(e){return e.theme.dialog}));function y(e){var t=e.header,n=e.error,i=e.action,c=e.onAction,r=Object(b.useState)(!1),o=Object(s.a)(r,2),a=o[0],m=o[1],y=Object(b.useState)(null),S=Object(s.a)(y,2),k=S[0],A=S[1],z=Object(l.default)(k);return Object(g.jsxs)(h.default,{flex:!0,padded:!0,gap:.75,align:"stretch",style:{height:"100%"},children:[Object(g.jsx)(v,{icon:u.AlertTriangle,iconColor:"error",iconSize:a?3:4,children:Object(g.jsxs)(w,{gap:a?0:.75,open:a,children:[Object(g.jsx)(j.ThemedText.Subhead1,{children:Object(g.jsx)(d.b,{id:"Something went wrong."})}),Object(g.jsx)(j.ThemedText.Body2,{children:t})]})}),Object(g.jsxs)(O.default,{children:[Object(g.jsxs)(O.default,{gap:.5,children:[Object(g.jsx)(u.Info,{color:"secondary"}),Object(g.jsx)(j.ThemedText.Subhead2,{color:"secondary",children:Object(g.jsx)(d.b,{id:"Error details"})})]}),Object(g.jsx)(x.IconButton,{color:"secondary",onClick:function(){return m(!a)},icon:u.Expando,iconProps:{open:a}})]}),Object(g.jsxs)(C,{flex:!0,align:"stretch",open:a,children:[Object(g.jsx)(p.default,{}),Object(g.jsx)(T,{children:Object(g.jsx)(h.default,{gap:.5,ref:A,css:z,children:Object(g.jsxs)(j.ThemedText.Code,{children:[n.name,n.message?": ".concat(n.message):""]})})}),Object(g.jsx)(f.default,{onClick:c,children:i})]})]})}},666:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var i,c,r=n(11),o=n(32),s=n(2),a=n(658),d=n(219),l=n(400),u=n(399),j=n(1),b=n(650),f=n(631),x=n(629),h=n(405),O=n(0),p=Object(O.jsx)(s.b,{id:"Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.",components:{0:Object(O.jsx)("br",{})}}),g=Object(u.default)(x.default)(i||(i=Object(o.a)(["\n  flex-direction: row-reverse;\n"])));function m(e){var t=e.tx,n=Object(j.useState)(0),i=Object(r.a)(n,2),c=i[0],o=i[1];Object(d.default)((function(){t.info.response.timestamp?o(t.info.response.timestamp-t.addedTime):o(Date.now()-t.addedTime)}),c===t.info.response.timestamp?null:1e3);var a=Object(j.useCallback)((function(e){var t=Math.floor(e/1e3),n=Math.floor(t/60);return t%=60,n?Object(O.jsx)(s.b,{id:"{min}m {sec}s",values:{min:n,sec:t}}):Object(O.jsx)(s.b,{id:"{sec}s",values:{sec:t}})}),[]);return Object(O.jsxs)(x.default,{gap:.5,children:[Object(O.jsx)(l.Clock,{}),Object(O.jsx)(u.ThemedText.Body2,{children:a(c)})]})}var v=u.default.a(c||(c=Object(o.a)(["\n  color: ",";\n  text-decoration: none;\n"])),(function(e){return e.theme.accent}));function w(e){var t,n,i,c=e.tx,r=e.onClose,o=Object(j.useMemo)((function(){var e;return(null===(e=c.receipt)||void 0===e?void 0:e.status)?l.CheckCircle:l.Spinner}),[null===(t=c.receipt)||void 0===t?void 0:t.status]),d=Object(j.useMemo)((function(){var e;return(null===(e=c.receipt)||void 0===e?void 0:e.status)?Object(O.jsx)(s.b,{id:"Transaction submitted"}):Object(O.jsx)(s.b,{id:"Transaction pending"})}),[null===(n=c.receipt)||void 0===n?void 0:n.status]);return Object(O.jsxs)(f.default,{flex:!0,padded:!0,gap:.75,align:"stretch",style:{height:"100%"},children:[Object(O.jsxs)(a.StatusHeader,{icon:o,iconColor:(null===(i=c.receipt)||void 0===i?void 0:i.status)?"success":void 0,children:[Object(O.jsx)(u.ThemedText.Subhead1,{children:d}),Object(O.jsx)(h.default,{input:c.info.inputCurrencyAmount,output:c.info.outputCurrencyAmount})]}),Object(O.jsxs)(g,{flex:!0,children:[Object(O.jsx)(u.ThemedText.ButtonSmall,{children:Object(O.jsx)(v,{href:"//etherscan.io",target:"_blank",children:Object(O.jsx)(s.b,{id:"View on Etherscan"})})}),Object(O.jsx)(m,{tx:c})]}),Object(O.jsx)(b.default,{onClick:r,children:Object(O.jsx)(s.b,{id:"Close"})})]})}function T(e){var t,n=e.tx,i=e.onClose;return 0===(null===(t=n.receipt)||void 0===t?void 0:t.status)?Object(O.jsx)(a.default,{header:p,error:new Error("TODO(zzmp)"),action:Object(O.jsx)(s.b,{id:"Dismiss"}),onAction:i}):Object(O.jsx)(w,{tx:n,onClose:i})}}}]);
//# sourceMappingURL=65.241d36ff.chunk.js.map