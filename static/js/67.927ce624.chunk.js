(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[67,80],{651:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return T}));var n=r(3),u=r.n(n),o=r(25),c=r(11),i=r(78),a=r(9),d=r(105),s=r(1),v=r(116),b=r(408),l=r(205),O=r(206),f=r(337),p={protocols:[i.Protocol.V2,i.Protocol.V3]};function T(e,t,r){var n,i=null===t||void 0===t?void 0:t.currency.chainId,T=Object(l.default)().library,j=Object(s.useMemo)((function(){return e===a.TradeType.EXACT_INPUT?[null===t||void 0===t?void 0:t.currency,r]:[r,null===t||void 0===t?void 0:t.currency]}),[t,r,e]),m=Object(c.a)(j,2),A=m[0],y=m[1],I=Object(f.useRoutingAPIArguments)({tokenIn:A,tokenOut:y,amount:t,tradeType:e,useClientSideRouter:!0}),C=Object(s.useMemo)((function(){return i&&T&&{chainId:i,provider:T}}),[i,T]),N=Object(s.useState)(!1),U=Object(c.a)(N,2),h=U[0],R=U[1],w=Object(s.useState)({quoteResult:void 0,error:void 0}),q=Object(c.a)(w,2),E=q[0],_=E.quoteResult,g=E.error,D=q[1];Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!I||!C){e.next=6;break}return e.next=4,Object(O.getClientSideQuote)(I,C,p);case 4:t=e.sent,D({quoteResult:t.data,error:t.error});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),D({quoteResult:void 0,error:!0});case 11:return e.prev=11,R(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}R(!0),function(){e.apply(this,arguments)}()}),[I,C]);var P=Object(s.useMemo)((function(){return Object(b.a)(A,y,e,_)}),[A,y,_,e]),k=null!==(n=Object(d.b)(null===_||void 0===_?void 0:_.gasUseEstimateUSD))&&void 0!==n?n:null;return Object(s.useMemo)((function(){if(!A||!y)return{state:v.b.INVALID,trade:void 0};if(h&&!_)return{state:v.b.LOADING,trade:void 0};var t=void 0;if(e===a.TradeType.EXACT_INPUT&&y&&_&&(t=a.CurrencyAmount.fromRawAmount(y,_.quote)),e===a.TradeType.EXACT_OUTPUT&&A&&_&&(t=a.CurrencyAmount.fromRawAmount(A,_.quote)),g||!t||!P||0===P.length||!I)return{state:v.b.NO_ROUTE_FOUND,trade:void 0};try{var r=Object(b.b)(P,e,k);return{state:v.b.VALID,trade:r}}catch(n){return console.debug("transformRoutesToTrade failed: ",n),{state:v.b.INVALID,trade:void 0}}}),[A,y,h,_,e,g,P,I,k])}},654:function(e,t,r){"use strict";r.r(t),r.d(t,"useBestTrade",(function(){return v}));var n=r(15),u=r(11),o=r(9),c=r(338),i=r(137),a=r(1),d=r(116),s=r(651);function v(e,t,r){var v=Object(i.a)(Object(a.useMemo)((function(){return[t,r]}),[t,r]),200),b=Object(u.a)(v,2),l=b[0],O=b[1],f=Object(s.default)(e,l,O),p=function(e,t){if(e){if(t===o.TradeType.EXACT_INPUT)return[e.inputAmount,e.inputAmount.currency,e.outputAmount.currency];if(t===o.TradeType.EXACT_OUTPUT)return[e.outputAmount,e.outputAmount.currency,e.inputAmount.currency]}return[void 0,void 0,void 0]}(f.trade,e),T=Object(u.a)(p,3),j=T[0],m=T[1],A=T[2],y=t&&l&&t!==l||t&&O&&r&&O!==r,I=t&&function(e){var t,r,n,u=e.amounts,o=e.indepdenentCurrencies,c=e.dependentCurrencies,i=u[0]&&(null===(t=u[1])||void 0===t?void 0:t.equalTo(u[0])),a=o[0]&&(null===(r=o[1])||void 0===r?void 0:r.equals(o[0]))&&c[0]&&(null===(n=c[1])||void 0===n?void 0:n.equals(c[0]));return!i||!a}({amounts:[j,t],indepdenentCurrencies:[m,null===t||void 0===t?void 0:t.currency],dependentCurrencies:[A,O]}),C=!I&&f.state===d.b.NO_ROUTE_FOUND,N=Object(c.a)(e,C?l:void 0,C?O:void 0);return Object(a.useMemo)((function(){return Object(n.a)(Object(n.a)(Object(n.a)({},C?N:f),I?{state:d.b.SYNCING}:{}),y?{state:d.b.LOADING}:{})}),[y,N,I,f,C])}}}]);
//# sourceMappingURL=67.927ce624.chunk.js.map