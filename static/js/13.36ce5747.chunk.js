(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[13,60,67,68,69,80,87],{401:function(e,t,n){"use strict";n.r(t),n.d(t,"amountAtom",(function(){return l})),n.d(t,"useSwitchSwapCurrencies",(function(){return s})),n.d(t,"useSwapCurrency",(function(){return b})),n.d(t,"useSwapAmount",(function(){return O})),n.d(t,"useIsAmountPopulated",(function(){return f}));var u=n(11),r=n(267),o=n(164),i=n(635),c=n(633),a=n(1),d=n(648);n.d(t,"useSwapInfo",(function(){return d.default}));var l=Object(i.pickAtom)(c.swapAtom,"amount");function s(){var e=Object(o.useUpdateAtom)(c.swapAtom);return Object(a.useCallback)((function(){e((function(e){var t=e[c.Field.OUTPUT];switch(e[c.Field.OUTPUT]=e[c.Field.INPUT],e[c.Field.INPUT]=t,e.independentField){case c.Field.INPUT:e.independentField=c.Field.OUTPUT;break;case c.Field.OUTPUT:e.independentField=c.Field.INPUT}}))}),[e])}function b(e){var t=Object(a.useMemo)((function(){return Object(i.pickAtom)(c.swapAtom,e)}),[e]),n=Object(a.useMemo)((function(){return Object(i.pickAtom)(c.swapAtom,function(e){switch(e){case c.Field.INPUT:return c.Field.OUTPUT;case c.Field.OUTPUT:return c.Field.INPUT}}(e))}),[e]),d=Object(r.useAtom)(t),l=Object(u.a)(d,2),b=l[0],O=l[1],f=Object(o.useAtomValue)(n),m=s(),v=Object(a.useCallback)((function(e){e===f?m():O(e)}),[f,O,m]);return[b,v]}function O(e){var t=Object(o.useAtomValue)(l),n=Object(o.useAtomValue)(c.independentFieldAtom),u=Object(a.useMemo)((function(){return n===e?t:void 0}),[t,n,e]),r=Object(o.useUpdateAtom)(c.swapAtom),i=Object(a.useCallback)((function(t){return r((function(n){n.independentField=e,n.amount=t}))}),[e,r]);return[u,i]}function f(){return Boolean(Object(o.useAtomValue)(l))}},633:function(e,t,n){"use strict";n.r(t),n.d(t,"Field",(function(){return u})),n.d(t,"swapAtom",(function(){return l})),n.d(t,"independentFieldAtom",(function(){return s})),n.d(t,"displayTxHashAtom",(function(){return b})),n.d(t,"feeOptionsAtom",(function(){return O}));var u,r=n(10),o=n(13),i=n(30),c=n(267),a=n(1144),d=n(635);!function(e){e.INPUT="INPUT",e.OUTPUT="OUTPUT"}(u||(u={}));var l=Object(a.atomWithImmer)(Object(r.a)({independentField:u.INPUT,amount:""},u.INPUT,Object(i.B)(o.f.AVALANCHE))),s=Object(d.pickAtom)(l,"independentField"),b=Object(c.atom)(void 0),O=Object(c.atom)(void 0)},635:function(e,t,n){"use strict";n.r(t),n.d(t,"pickAtom",(function(){return o})),n.d(t,"setTogglable",(function(){return i}));var u=n(267),r=n(1144);function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){return t};return Object(u.atom)((function(n){return n(e)[t]}),(function(u,o,i){return o(Object(r.withImmer)(e),(function(e){var u=n(e[t],i);e[t]=u}))}))}function i(e){return!e}},636:function(e,t,n){"use strict";n.r(t),n.d(t,"MAX_VALID_SLIPPAGE",(function(){return i})),n.d(t,"MIN_HIGH_SLIPPAGE",(function(){return c})),n.d(t,"settingsAtom",(function(){return d})),n.d(t,"maxSlippageAtom",(function(){return l})),n.d(t,"transactionTtlAtom",(function(){return s})),n.d(t,"mockTogglableAtom",(function(){return b})),n.d(t,"clientSideRouterAtom",(function(){return O}));var u=n(9),r=n(164),o=n(635),i=new u.Percent(1,2),c=new u.Percent(1,100),a={maxSlippage:"auto",transactionTtl:void 0,mockTogglable:!0,clientSideRouter:!0},d=Object(r.atomWithReset)(a),l=Object(o.pickAtom)(d,"maxSlippage"),s=Object(o.pickAtom)(d,"transactionTtl"),b=Object(o.pickAtom)(d,"mockTogglable",o.setTogglable),O=Object(o.pickAtom)(d,"clientSideRouter")},648:function(e,t,n){"use strict";n.r(t),n.d(t,"SwapInfoUpdater",(function(){return U})),n.d(t,"default",(function(){return I}));var u=n(10),r=n(2),o=n(9),i=n(459),c=n(267),a=n(164),d=n(155),l=n(636),s=n(633),b=n(121),O=n(1),f=n(116),m=n(72),v=n(205),j=n(654),p=n(0),T={"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10":!0,"0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106":!0,"0x60aE616a2155Ee3d9A68541Ba4544862310933d4":!0};var A=Object(c.atom)({currencies:{},currencyBalances:{},currencyAmounts:{},trade:{state:f.b.INVALID},allowedSlippage:new o.Percent(0),feeOptions:void 0});function U(){var e=Object(a.useUpdateAtom)(A),t=function(){var e,t,n,c=Object(v.default)().account,f=Object(a.useAtomValue)(s.swapAtom),A=f.independentField,U=f.amount,I=f[s.Field.INPUT],P=f[s.Field.OUTPUT],F=Object(a.useAtomValue)(s.feeOptionsAtom),N=c,w=Object(d.useCurrencyBalances)(c,Object(O.useMemo)((function(){return[null!==I&&void 0!==I?I:void 0,null!==P&&void 0!==P?P:void 0]}),[I,P])),y=A===s.Field.INPUT,C=Object(O.useMemo)((function(){var e;return Object(b.default)(U,null!==(e=y?I:P)&&void 0!==e?e:void 0)}),[I,y,P,U]),g=Object(j.useBestTrade)(y?o.TradeType.EXACT_INPUT:o.TradeType.EXACT_OUTPUT,C,null!==(e=y?P:I)&&void 0!==e?e:void 0),k=Object(O.useMemo)((function(){var e;return e={},Object(u.a)(e,s.Field.INPUT,null!==I&&void 0!==I?I:void 0),Object(u.a)(e,s.Field.OUTPUT,null!==P&&void 0!==P?P:void 0),e}),[I,P]),S=Object(O.useMemo)((function(){var e;return e={},Object(u.a)(e,s.Field.INPUT,w[0]),Object(u.a)(e,s.Field.OUTPUT,w[1]),e}),[w]),E=Object(O.useMemo)((function(){var e,t,n;return n={},Object(u.a)(n,s.Field.INPUT,null===(e=g.trade)||void 0===e?void 0:e.inputAmount),Object(u.a)(n,s.Field.OUTPUT,null===(t=g.trade)||void 0===t?void 0:t.outputAmount),n}),[null===(t=g.trade)||void 0===t?void 0:t.inputAmount,null===(n=g.trade)||void 0===n?void 0:n.outputAmount]),h=Object(i.a)(g.trade),x=Object(a.useAtomValue)(l.maxSlippageAtom),M=Object(O.useMemo)((function(){return"auto"===x?h:x}),[h,x]),V=Object(O.useMemo)((function(){var e,t,n,u;c||(t=Object(p.jsx)(r.b,{id:"Connect Wallet"})),k[s.Field.INPUT]&&k[s.Field.OUTPUT]||(t=null!==(n=t)&&void 0!==n?n:Object(p.jsx)(r.b,{id:"Select token"})),C||(t=null!==(u=t)&&void 0!==u?u:Object(p.jsx)(r.b,{id:"Enter an amount"}));var o,i,a=Object(m.c)(N);N&&a?T[a]&&(t=null!==(o=t)&&void 0!==o?o:Object(p.jsx)(r.b,{id:"Invalid recipient"})):t=null!==(i=t)&&void 0!==i?i:Object(p.jsx)(r.b,{id:"Enter a recipient"});var d=[S[s.Field.INPUT],null===(e=g.trade)||void 0===e?void 0:e.maximumAmountIn(M)],l=d[0],b=d[1];return l&&b&&l.lessThan(b)&&(t=Object(p.jsx)(r.b,{id:"Insufficient {0} balance",values:{0:b.currency.symbol}})),t}),[c,M,k,S,C,N,g.trade]);return Object(O.useMemo)((function(){return{currencies:k,currencyBalances:S,currencyAmounts:E,inputError:V,trade:g,allowedSlippage:M,feeOptions:F}}),[k,S,E,V,g,M,F])}();return Object(O.useEffect)((function(){e(t)}),[t,e]),null}function I(){return Object(a.useAtomValue)(A)}},651:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var u=n(3),r=n.n(u),o=n(25),i=n(11),c=n(78),a=n(9),d=n(105),l=n(1),s=n(116),b=n(408),O=n(205),f=n(206),m=n(337),v={protocols:[c.Protocol.V2,c.Protocol.V3]};function j(e,t,n){var u,c=null===t||void 0===t?void 0:t.currency.chainId,j=Object(O.default)().library,p=Object(l.useMemo)((function(){return e===a.TradeType.EXACT_INPUT?[null===t||void 0===t?void 0:t.currency,n]:[n,null===t||void 0===t?void 0:t.currency]}),[t,n,e]),T=Object(i.a)(p,2),A=T[0],U=T[1],I=Object(m.useRoutingAPIArguments)({tokenIn:A,tokenOut:U,amount:t,tradeType:e,useClientSideRouter:!0}),P=Object(l.useMemo)((function(){return c&&j&&{chainId:c,provider:j}}),[c,j]),F=Object(l.useState)(!1),N=Object(i.a)(F,2),w=N[0],y=N[1],C=Object(l.useState)({quoteResult:void 0,error:void 0}),g=Object(i.a)(C,2),k=g[0],S=k.quoteResult,E=k.error,h=g[1];Object(l.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!I||!P){e.next=6;break}return e.next=4,Object(f.getClientSideQuote)(I,P,v);case 4:t=e.sent,h({quoteResult:t.data,error:t.error});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h({quoteResult:void 0,error:!0});case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}y(!0),function(){e.apply(this,arguments)}()}),[I,P]);var x=Object(l.useMemo)((function(){return Object(b.a)(A,U,e,S)}),[A,U,S,e]),M=null!==(u=Object(d.b)(null===S||void 0===S?void 0:S.gasUseEstimateUSD))&&void 0!==u?u:null;return Object(l.useMemo)((function(){if(!A||!U)return{state:s.b.INVALID,trade:void 0};if(w&&!S)return{state:s.b.LOADING,trade:void 0};var t=void 0;if(e===a.TradeType.EXACT_INPUT&&U&&S&&(t=a.CurrencyAmount.fromRawAmount(U,S.quote)),e===a.TradeType.EXACT_OUTPUT&&A&&S&&(t=a.CurrencyAmount.fromRawAmount(A,S.quote)),E||!t||!x||0===x.length||!I)return{state:s.b.NO_ROUTE_FOUND,trade:void 0};try{var n=Object(b.b)(x,e,M);return{state:s.b.VALID,trade:n}}catch(u){return console.debug("transformRoutesToTrade failed: ",u),{state:s.b.INVALID,trade:void 0}}}),[A,U,w,S,e,E,x,I,M])}},654:function(e,t,n){"use strict";n.r(t),n.d(t,"useBestTrade",(function(){return s}));var u=n(15),r=n(11),o=n(9),i=n(338),c=n(137),a=n(1),d=n(116),l=n(651);function s(e,t,n){var s=Object(c.a)(Object(a.useMemo)((function(){return[t,n]}),[t,n]),200),b=Object(r.a)(s,2),O=b[0],f=b[1],m=Object(l.default)(e,O,f),v=function(e,t){if(e){if(t===o.TradeType.EXACT_INPUT)return[e.inputAmount,e.inputAmount.currency,e.outputAmount.currency];if(t===o.TradeType.EXACT_OUTPUT)return[e.outputAmount,e.outputAmount.currency,e.inputAmount.currency]}return[void 0,void 0,void 0]}(m.trade,e),j=Object(r.a)(v,3),p=j[0],T=j[1],A=j[2],U=t&&O&&t!==O||t&&f&&n&&f!==n,I=t&&function(e){var t,n,u,r=e.amounts,o=e.indepdenentCurrencies,i=e.dependentCurrencies,c=r[0]&&(null===(t=r[1])||void 0===t?void 0:t.equalTo(r[0])),a=o[0]&&(null===(n=o[1])||void 0===n?void 0:n.equals(o[0]))&&i[0]&&(null===(u=i[1])||void 0===u?void 0:u.equals(i[0]));return!c||!a}({amounts:[p,t],indepdenentCurrencies:[T,null===t||void 0===t?void 0:t.currency],dependentCurrencies:[A,f]}),P=!I&&m.state===d.b.NO_ROUTE_FOUND,F=Object(i.a)(e,P?O:void 0,P?f:void 0);return Object(a.useMemo)((function(){return Object(u.a)(Object(u.a)(Object(u.a)({},P?F:m),I?{state:d.b.SYNCING}:{}),U?{state:d.b.LOADING}:{})}),[U,F,I,m,P])}}}]);
//# sourceMappingURL=13.36ce5747.chunk.js.map