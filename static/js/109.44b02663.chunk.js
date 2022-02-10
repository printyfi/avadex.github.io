(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[109],{1687:function(e,t,n){"use strict";n.r(t),n.d(t,"BrainWallet",(function(){return d})),n.d(t,"Eip1193Bridge",(function(){return T})),n.d(t,"NonceManager",(function(){return b}));var r=n(6),a=n(5),s=n(17),i=n(18),u=n(54),c=n(371),o=n.n(c),h="experimental/5.4.0",l=new u.a.utils.Logger(h),g=!1,d=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,null,[{key:"_generate",value:function(e,t,r,a){g||(l.warn("Warning: using Brain Wallets should be considered insecure (this warning will not be repeated)"),g=!0);var s=null,i=null;return"string"===typeof e?(l.checkNormalize(),s=u.a.utils.toUtf8Bytes(e.normalize("NFKC"))):s=u.a.utils.arrayify(e),"string"===typeof t?(l.checkNormalize(),i=u.a.utils.toUtf8Bytes(t.normalize("NFKC"))):i=u.a.utils.arrayify(t),o.a.scrypt(i,s,1<<18,8,1,32,a).then((function(e){if(r)return new n(e);var t=u.a.utils.entropyToMnemonic(u.a.utils.arrayify(e).slice(0,16));return new n(u.a.Wallet.fromMnemonic(t))}))}},{key:"generate",value:function(e,t,r){return n._generate(e,t,!1,r)}},{key:"generateLegacy",value:function(e,t,r){return n._generate(e,t,!0,r)}}]),n}(u.a.Wallet),p=n(40),f=new u.a.utils.Logger(h),b=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),f.checkNew(this instanceof n?this.constructor:void 0,n),(a=t.call(this))._deltaCount=0,u.a.utils.defineReadOnly(Object(p.a)(a),"signer",e),u.a.utils.defineReadOnly(Object(p.a)(a),"provider",e.provider||null),a}return Object(a.a)(n,[{key:"connect",value:function(e){return new n(this.signer.connect(e))}},{key:"getAddress",value:function(){return this.signer.getAddress()}},{key:"getTransactionCount",value:function(e){if("pending"===e){this._initialPromise||(this._initialPromise=this.signer.getTransactionCount("pending"));var t=this._deltaCount;return this._initialPromise.then((function(e){return e+t}))}return this.signer.getTransactionCount(e)}},{key:"setTransactionCount",value:function(e){this._initialPromise=Promise.resolve(e).then((function(e){return u.a.BigNumber.from(e).toNumber()})),this._deltaCount=0}},{key:"incrementTransactionCount",value:function(e){this._deltaCount+=e||1}},{key:"signMessage",value:function(e){return this.signer.signMessage(e)}},{key:"signTransaction",value:function(e){return this.signer.signTransaction(e)}},{key:"sendTransaction",value:function(e){return null==e.nonce?((e=u.a.utils.shallowCopy(e)).nonce=this.getTransactionCount("pending"),this.incrementTransactionCount()):this.setTransactionCount(e.nonce),this.signer.sendTransaction(e).then((function(e){return e}))}}]),n}(u.a.Signer),v=n(3),y=n.n(v),_=n(270),k=n.n(_),x=function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function i(e){try{c(r.next(e))}catch(t){s(t)}}function u(e){try{c(r.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},m=new u.a.utils.Logger(h),T=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e,a){var s;return Object(r.a)(this,n),s=t.call(this),u.a.utils.defineReadOnly(Object(p.a)(s),"signer",e),u.a.utils.defineReadOnly(Object(p.a)(s),"provider",a||null),s}return Object(a.a)(n,[{key:"request",value:function(e){return this.send(e.method,e.params||[])}},{key:"send",value:function(e,t){return x(this,void 0,void 0,y.a.mark((function n(){var r,a,s,i,c,o,h,l,g,d,p,f,b,v,_,k;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=function(n){return m.throwError(n,u.a.utils.Logger.errors.UNSUPPORTED_OPERATION,{method:e,params:t})},a=function(e){return e},n.t0=e,n.next="eth_gasPrice"===n.t0?5:"eth_accounts"===n.t0?9:"eth_blockNumber"===n.t0?16:"eth_chainId"===n.t0?19:"eth_getBalance"===n.t0?23:"eth_getStorageAt"===n.t0?27:"eth_getTransactionCount"===n.t0?28:"eth_getBlockTransactionCountByHash"===n.t0||"eth_getBlockTransactionCountByNumber"===n.t0?32:"eth_getCode"===n.t0?36:"eth_sendRawTransaction"===n.t0?40:"eth_call"===n.t0?43:"estimateGas"===n.t0?47:"eth_getBlockByHash"===n.t0||"eth_getBlockByNumber"===n.t0?53:"eth_getTransactionByHash"===n.t0?62:"eth_getTransactionReceipt"===n.t0?65:"eth_sign"===n.t0?68:"eth_sendTransaction"===n.t0?75:"eth_getUncleCountByBlockHash"===n.t0||"eth_getUncleCountByBlockNumber"===n.t0?82:"eth_getTransactionByBlockHashAndIndex"===n.t0||"eth_getTransactionByBlockNumberAndIndex"===n.t0||"eth_getUncleByBlockHashAndIndex"===n.t0||"eth_getUncleByBlockNumberAndIndex"===n.t0||"eth_newFilter"===n.t0||"eth_newBlockFilter"===n.t0||"eth_newPendingTransactionFilter"===n.t0||"eth_uninstallFilter"===n.t0||"eth_getFilterChanges"===n.t0||"eth_getFilterLogs"===n.t0||"eth_getLogs"===n.t0?84:85;break;case 5:return n.next=7,this.provider.getGasPrice();case 7:return s=n.sent,n.abrupt("return",s.toHexString());case 9:if(i=[],!this.signer){n.next=15;break}return n.next=13,this.signer.getAddress();case 13:c=n.sent,i.push(c);case 15:return n.abrupt("return",i);case 16:return n.next=18,this.provider.getBlockNumber();case 18:return n.abrupt("return",n.sent);case 19:return n.next=21,this.provider.getNetwork();case 21:return o=n.sent,n.abrupt("return",o.chainId);case 23:return n.next=25,this.provider.getBalance(t[0],t[1]);case 25:return h=n.sent,n.abrupt("return",h.toHexString());case 27:return n.abrupt("return",this.provider.getStorageAt(t[0],t[1],t[2]));case 28:return n.next=30,this.provider.getTransactionCount(t[0],t[1]);case 30:return l=n.sent,n.abrupt("return",u.a.utils.hexValue(l));case 32:return n.next=34,this.provider.getBlock(t[0]);case 34:return g=n.sent,n.abrupt("return",u.a.utils.hexValue(g.transactions.length));case 36:return n.next=38,this.provider.getBlock(t[0]);case 38:return d=n.sent,n.abrupt("return",d);case 40:return n.next=42,this.provider.sendTransaction(t[0]);case 42:return n.abrupt("return",n.sent);case 43:return p=u.a.providers.JsonRpcProvider.hexlifyTransaction(t[0]),n.next=46,this.provider.call(p,t[1]);case 46:return n.abrupt("return",n.sent);case 47:return t[1]&&"latest"!==t[1]&&r("estimateGas does not support blockTag"),f=u.a.providers.JsonRpcProvider.hexlifyTransaction(t[0]),n.next=51,this.provider.estimateGas(f);case 51:return b=n.sent,n.abrupt("return",b.toHexString());case 53:if(!t[1]){n.next=59;break}return n.next=56,this.provider.getBlockWithTransactions(t[0]);case 56:return n.abrupt("return",n.sent);case 59:return n.next=61,this.provider.getBlock(t[0]);case 61:return n.abrupt("return",n.sent);case 62:return n.next=64,this.provider.getTransaction(t[0]);case 64:return n.abrupt("return",n.sent);case 65:return n.next=67,this.provider.getTransactionReceipt(t[0]);case 67:return n.abrupt("return",n.sent);case 68:if(this.signer){n.next=70;break}return n.abrupt("return",r("eth_sign requires an account"));case 70:return n.next=72,this.signer.getAddress();case 72:return n.sent!==u.a.utils.getAddress(t[0])&&m.throwArgumentError("account mismatch or account not found","params[0]",t[0]),n.abrupt("return",this.signer.signMessage(u.a.utils.arrayify(t[1])));case 75:if(this.signer){n.next=77;break}return n.abrupt("return",r("eth_sendTransaction requires an account"));case 77:return v=u.a.providers.JsonRpcProvider.hexlifyTransaction(t[0]),n.next=80,this.signer.sendTransaction(v);case 80:return _=n.sent,n.abrupt("return",_.hash);case 82:return a=u.a.utils.hexValue,n.abrupt("break",85);case 84:return n.abrupt("break",85);case 85:if(!this.provider.send){n.next=90;break}return n.next=88,this.provider.send(e,t);case 88:return k=n.sent,n.abrupt("return",a(k));case 90:return n.abrupt("return",r("unsupported method: ".concat(e)));case 91:case"end":return n.stop()}}),n,this)})))}}]),n}(k.a)},54:function(e,t,n){"use strict";var r=n(1063);n.d(t,"a",(function(){return r}));try{var a=window;null==a._ethers&&(a._ethers=r)}catch(s){}}}]);
//# sourceMappingURL=109.44b02663.chunk.js.map