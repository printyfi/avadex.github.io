(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[63,68,87],{635:function(t,n,e){"use strict";e.r(n),e.d(n,"pickAtom",(function(){return c})),e.d(n,"setTogglable",(function(){return i}));var r=e(267),u=e(1144);function c(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t,n){return n};return Object(r.atom)((function(e){return e(t)[n]}),(function(r,c,i){return c(Object(u.withImmer)(t),(function(t){var r=e(t[n],i);t[n]=r}))}))}function i(t){return!t}},636:function(t,n,e){"use strict";e.r(n),e.d(n,"MAX_VALID_SLIPPAGE",(function(){return i})),e.d(n,"MIN_HIGH_SLIPPAGE",(function(){return o})),e.d(n,"settingsAtom",(function(){return s})),e.d(n,"maxSlippageAtom",(function(){return f})),e.d(n,"transactionTtlAtom",(function(){return l})),e.d(n,"mockTogglableAtom",(function(){return d})),e.d(n,"clientSideRouterAtom",(function(){return m}));var r=e(9),u=e(164),c=e(635),i=new r.Percent(1,2),o=new r.Percent(1,100),a={maxSlippage:"auto",transactionTtl:void 0,mockTogglable:!0,clientSideRouter:!0},s=Object(u.atomWithReset)(a),f=Object(c.pickAtom)(s,"maxSlippage"),l=Object(c.pickAtom)(s,"transactionTtl"),d=Object(c.pickAtom)(s,"mockTogglable",c.setTogglable),m=Object(c.pickAtom)(s,"clientSideRouter")},659:function(t,n,e){"use strict";e.r(n),e.d(n,"useDefaultTransactionTtl",(function(){return l})),e.d(n,"useTransactionTtl",(function(){return d})),e.d(n,"default",(function(){return m}));var r=e(11),u=e(13),c=e(47),i=e(215),o=e(267),a=e(636),s=e(1),f=e(205);function l(){var t=Object(f.default)().chainId;return t&&u.d.includes(t)?c.k/60:c.h/60}function d(){return Object(o.useAtom)(a.transactionTtlAtom)}function m(){var t=d(),n=Object(r.a)(t,1)[0],e=l(),u=Object(i.a)();return Object(s.useMemo)((function(){if(u)return u.add(60*(n||e))}),[u,e,n])}}}]);
//# sourceMappingURL=63.8040c20d.chunk.js.map