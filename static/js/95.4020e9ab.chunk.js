(this["webpackJsonp@uniswap/widgets"]=this["webpackJsonp@uniswap/widgets"]||[]).push([[95],{719:function(e,t,l){"use strict";l.r(t);var a=l(227);describe("parseENSAddress",(function(){it("test cases",(function(){expect(Object(a.default)("hello.eth")).toEqual({ensName:"hello.eth",ensPath:void 0}),expect(Object(a.default)("hello.eth/")).toEqual({ensName:"hello.eth",ensPath:"/"}),expect(Object(a.default)("hello.world.eth/")).toEqual({ensName:"hello.world.eth",ensPath:"/"}),expect(Object(a.default)("hello.world.eth/abcdef")).toEqual({ensName:"hello.world.eth",ensPath:"/abcdef"}),expect(Object(a.default)("abso.lutely")).toEqual(void 0),expect(Object(a.default)("abso.lutely.eth")).toEqual({ensName:"abso.lutely.eth",ensPath:void 0}),expect(Object(a.default)("eth")).toEqual(void 0),expect(Object(a.default)("eth/hello-world")).toEqual(void 0),expect(Object(a.default)("hello-world.eth")).toEqual({ensName:"hello-world.eth",ensPath:void 0}),expect(Object(a.default)("-prefix-dash.eth")).toEqual(void 0),expect(Object(a.default)("suffix-dash-.eth")).toEqual(void 0),expect(Object(a.default)("it.eth")).toEqual({ensName:"it.eth",ensPath:void 0}),expect(Object(a.default)("only-single--dash.eth")).toEqual(void 0)}))}))}}]);
//# sourceMappingURL=95.4020e9ab.chunk.js.map