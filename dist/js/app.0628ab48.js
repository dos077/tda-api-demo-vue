(function(e){function t(t){for(var r,o,u=t[0],i=t[1],a=t[2],s=0,O=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&O.push(l[o][0]),l[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(O.length)O.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==l[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},l={app:0},c=[];function o(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4a87c1b8"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=l[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=l[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(e);var a=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=l[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",a.name="ChunkLoadError",a.type=r,a.request=c,n[1](a)}l[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2852:function(e,t,n){},"3d71":function(e,t,n){"use strict";n("7da9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function l(e,t){var n=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["d"])(n)}n("b475");var c=n("6b0d"),o=n.n(c);const u={},i=o()(u,[["render",l]]);var a=i,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=n("2909"),O=(n("99af"),n("caad"),n("2532"),{key:1});function d(e,t,n,l,c,o){var u=Object(r["w"])("config-panel"),i=Object(r["w"])("auth-panel"),a=Object(r["w"])("instruments-panel"),s=Object(r["w"])("movers-panel"),d=Object(r["w"])("option-chain-panel"),p=Object(r["w"])("price-history-panel"),j=Object(r["w"])("quotes-panel"),g=Object(r["w"])("acc-panel"),y=Object(r["w"])("orders-panel"),f=Object(r["w"])("transaction-panel");return Object(r["r"])(),Object(r["f"])("div",null,[e.APIClient?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["d"])(u,{key:0,onBuildClient:o.loadClient},null,8,["onBuildClient"])),e.APIClient?(Object(r["r"])(),Object(r["f"])("div",O,[Object(r["i"])(i,{isLogIn:e.isLogIn,APIClient:e.APIClient},null,8,["isLogIn","APIClient"]),Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.tabsSelected=t}),multiple:"",size:"5"},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.isLogIn?[].concat(Object(b["a"])(e.tabOptions),Object(b["a"])(e.authedTabOtionis)):e.tabOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e},Object(r["y"])(e),1)})),128))],512),[[r["B"],e.tabsSelected]]),e.tabsSelected.includes("instruments")?(Object(r["r"])(),Object(r["d"])(a,{key:0,isLogIn:e.isLogIn,APIClient:e.APIClient},null,8,["isLogIn","APIClient"])):Object(r["e"])("",!0),e.tabsSelected.includes("movers")?(Object(r["r"])(),Object(r["d"])(s,{key:1,isLogIn:e.isLogIn,APIClient:e.APIClient},null,8,["isLogIn","APIClient"])):Object(r["e"])("",!0),e.tabsSelected.includes("options")?(Object(r["r"])(),Object(r["d"])(d,{key:2,isLogIn:e.isLogIn,APIClient:e.APIClient},null,8,["isLogIn","APIClient"])):Object(r["e"])("",!0),e.tabsSelected.includes("priceHistory")?(Object(r["r"])(),Object(r["d"])(p,{key:3,isLogIn:e.isLogIn,APIClient:e.APIClient},null,8,["isLogIn","APIClient"])):Object(r["e"])("",!0),e.tabsSelected.includes("quotes")?(Object(r["r"])(),Object(r["d"])(j,{key:4,isLogIn:e.isLogIn,APIClient:e.APIClient},null,8,["isLogIn","APIClient"])):Object(r["e"])("",!0),e.tabsSelected.includes("account")?(Object(r["r"])(),Object(r["d"])(g,{key:5,isLogIn:e.isLogIn,APIClient:e.APIClient},null,8,["isLogIn","APIClient"])):Object(r["e"])("",!0),e.tabsSelected.includes("orders")?(Object(r["r"])(),Object(r["d"])(y,{key:6,isLogIn:e.isLogIn,APIClient:e.APIClient},null,8,["isLogIn","APIClient"])):Object(r["e"])("",!0),e.tabsSelected.includes("transactions")?(Object(r["r"])(),Object(r["d"])(f,{key:7,isLogIn:e.isLogIn,APIClient:e.APIClient},null,8,["isLogIn","APIClient"])):Object(r["e"])("",!0)])):Object(r["e"])("",!0)])}var p=n("5530"),j=Object(r["g"])("h2",null,"Setup API Client",-1),g=Object(r["g"])("label",null,"API Key:",-1),y=Object(r["g"])("label",null,"Redirect URI:",-1),f=Object(r["g"])("label",null,"Local Store Token",-1),m=Object(r["g"])("label",null,"Redirect for Login",-1);function I(e,t,n,l,c,o){return Object(r["r"])(),Object(r["f"])("section",null,[j,g,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.clientId=t}),placeholder:"apiky@AMER.OAUTHAP"},null,512),[[r["C"],e.clientId]]),y,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.redirectUri=t})},null,512),[[r["C"],e.redirectUri]]),f,Object(r["E"])(Object(r["g"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.storeAuth=t})},null,512),[[r["A"],e.storeAuth]]),m,Object(r["E"])(Object(r["g"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.logInRedirect=t})},null,512),[[r["A"],e.logInRedirect]]),Object(r["g"])("button",{onClick:t[4]||(t[4]=function(){return o.buildClient&&o.buildClient.apply(o,arguments)}),value:"initialize client"}," initialize client ")])}var h={name:"ConfigPanel",data:function(){return{clientId:null,redirectUri:null,storeAuth:!1,logInRedirect:!0}},methods:{buildClient:function(){var e=this.clientId,t=this.redirectUri,n=this.storeAuth,r=this.logInRedirect;this.$emit("buildClient",{clientId:e,redirectUri:t,storeAuth:n,logInRedirect:r})}}};const v=o()(h,[["render",I]]);var C=v,A={key:0};function P(e,t,n,l,c,o){return Object(r["r"])(),Object(r["f"])("section",null,[Object(r["g"])("h2",null,Object(r["y"])(n.isLogIn?"Logged In":"Login for More Features"),1),n.isLogIn?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("p",A," If logInRedirect is set to true, click login to be redirected to TD Ameritrade OAuth portal. ")),n.isLogIn?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("button",{key:1,onClick:t[0]||(t[0]=function(){return o.logIn&&o.logIn.apply(o,arguments)})},"login")),n.isLogIn?(Object(r["r"])(),Object(r["f"])("button",{key:2,onClick:t[1]||(t[1]=function(){return o.logOut&&o.logOut.apply(o,arguments)})},"logout")):Object(r["e"])("",!0)])}n("ac1f"),n("5319");var E={name:"AuthPanel",props:["APIClient","isLogIn"],methods:{logIn:function(){var e=this.$route.query,t=e?e.code:null;this.APIClient.authentication.logIn(t),t&&this.$router.replace({query:null})},logOut:function(){this.APIClient.authentication.logOut()}}};const L=o()(E,[["render",P]]);var x=L,k=Object(r["g"])("h2",null,"Instruments",-1),T=Object(r["g"])("label",null,"Search Instruments",-1),S=Object(r["g"])("label",null,"symbol",-1),w=Object(r["g"])("label",null,"projection",-1);function U(e,t,n,l,c,o){return Object(r["r"])(),Object(r["f"])("section",null,[k,Object(r["g"])("p",null,[T,S,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.symbol=t})},null,512),[[r["C"],e.symbol]]),w,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.projection=t})},null,512),[[r["C"],e.projection]]),Object(r["g"])("button",{onClick:t[2]||(t[2]=function(){return o.searchInstruments&&o.searchInstruments.apply(o,arguments)})},"search")]),Object(r["g"])("p",null,Object(r["y"])(e.screenStr),1)])}var D=n("1da1"),V=(n("96cf"),n("e9c4"),{name:"InstrumentsPanel",props:["APIClient","isLogIn"],data:function(){return{cusip:null,symbol:null,projection:"fundamental",screenStr:null}},methods:{searchInstruments:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.symbol,r=e.projection,l=e.isLogIn?e.APIClient.instruments:e.APIClient.instruments.unauthenticated,t.next=4,l.searchInstruments({symbol:n,projection:r});case 4:c=t.sent,console.log(c),e.screenStr=JSON.stringify(c);case 7:case"end":return t.stop()}}),t)})))()}}});const R=o()(V,[["render",U]]);var q=R,N=Object(r["g"])("h2",null,"Movers",-1),H=Object(r["g"])("label",null,"Show Movers",-1),M=Object(r["g"])("label",null,"index",-1),Q=Object(r["g"])("label",null,"direction",-1),B=["value"],J=Object(r["g"])("label",null,"change",-1),_=["value"];function G(e,t,n,l,c,o){return Object(r["r"])(),Object(r["f"])("section",null,[N,Object(r["g"])("p",null,[H,M,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.index=t}),placeholder:"ie. $COMPX, $DJI"},null,512),[[r["C"],e.index]]),Q,Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.direction=t})},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.directionOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e,value:e},Object(r["y"])(e),9,B)})),128))],512),[[r["B"],e.direction]]),J,Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.change=t})},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.changeOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e,value:e},Object(r["y"])(e),9,_)})),128))],512),[[r["B"],e.change]]),Object(r["g"])("button",{onClick:t[3]||(t[3]=function(){return o.getMovers&&o.getMovers.apply(o,arguments)})},"get movers")]),Object(r["g"])("p",null,Object(r["y"])(e.screenStr),1)])}var Y={name:"MoversPanel",props:["APIClient","isLogIn"],data:function(){return{index:null,directionOptions:["up","down"],direction:"up",changeOptions:["value","percent"],change:"value",screenStr:null}},methods:{getMovers:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r,l,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.index,r=e.direction,l=e.change,c=e.isLogIn?e.APIClient.movers:e.APIClient.movers.unauthenticated,t.next=4,c.getMovers({index:n,direction:r,change:l});case 4:o=t.sent,console.log(o),e.screenStr=JSON.stringify(o);case 7:case"end":return t.stop()}}),t)})))()}}};const K=o()(Y,[["render",G]]);var $=K,F=(n("2315"),Object(r["g"])("h2",null,"Option Chain",-1)),z=Object(r["g"])("label",null,"symbol",-1),X=Object(r["g"])("label",null,"contract type",-1),W=["value"],Z=Object(r["g"])("label",null,"strike count",-1),ee=Object(r["g"])("label",null,"include quotes",-1),te=Object(r["g"])("label",null,"strategy",-1),ne=["value"],re=Object(r["g"])("label",null,"interval",-1),le=Object(r["g"])("label",null,"strike",-1),ce=Object(r["g"])("label",null,"range",-1),oe=["value"],ue=Object(r["g"])("label",null,"from date",-1),ie=Object(r["g"])("label",null,"to date",-1),ae=Object(r["g"])("label",null,"volatility",-1),se=Object(r["g"])("label",null,"underlying price",-1),be=Object(r["g"])("label",null,"interest rate",-1),Oe=Object(r["g"])("label",null,"days to expiration",-1),de=Object(r["g"])("label",null,"expire month",-1),pe=Object(r["g"])("label",null,"option type",-1),je=["value"],ge={key:0};function ye(e,t,n,l,c,o){return Object(r["r"])(),Object(r["f"])("section",null,[F,Object(r["g"])("p",null,[z,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.symbol=t})},null,512),[[r["C"],e.symbol]]),X,Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.contractType=t})},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.contractOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e,value:e},Object(r["y"])(e),9,W)})),128))],512),[[r["B"],e.contractType]]),Z,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.strikeCount=t})},null,512),[[r["C"],e.strikeCount]]),ee,Object(r["E"])(Object(r["g"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.includeQuotes=t})},null,512),[[r["A"],e.includeQuotes]]),te,Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.strategy=t})},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.strategyOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e,value:e},Object(r["y"])(e),9,ne)})),128))],512),[[r["B"],e.strategy]]),re,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.interval=t})},null,512),[[r["C"],e.interval]]),le,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.strike=t})},null,512),[[r["C"],e.strike]]),ce,Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.range=t})},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.rangeOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e,value:e},Object(r["y"])(e),9,oe)})),128))],512),[[r["B"],e.range]]),ue,Object(r["E"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.fromDate=t})},null,512),[[r["C"],e.fromDate]]),ie,Object(r["E"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.toDate=t})},null,512),[[r["C"],e.toDate]]),ae,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.volatility=t})},null,512),[[r["C"],e.volatility]]),se,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=function(t){return e.underlyingPrice=t})},null,512),[[r["C"],e.underlyingPrice]]),be,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[12]||(t[12]=function(t){return e.interestRate=t})},null,512),[[r["C"],e.interestRate]]),Oe,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[13]||(t[13]=function(t){return e.daysToExpiration=t})},null,512),[[r["C"],e.daysToExpiration]]),de,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[14]||(t[14]=function(t){return e.expMonth=t})},null,512),[[r["C"],e.expMonth]]),pe,Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.optionType=t})},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.optionTypeOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e,value:e},Object(r["y"])(e),9,je)})),128))],512),[[r["B"],e.optionType]]),Object(r["g"])("button",{onClick:t[16]||(t[16]=function(){return o.getChain&&o.getChain.apply(o,arguments)})},"get chain")]),e.screenStr?(Object(r["r"])(),Object(r["f"])("p",ge,Object(r["y"])(e.screenStr),1)):Object(r["e"])("",!0)])}var fe={name:"OptionChainPanel",props:["APIClient","isLogIn"],data:function(){return{symbol:null,contractOptions:["ALL","CALL","PUT"],contractType:"ALL",strikeCount:5,includeQuotes:!1,strategyOptions:["SINGLE","ANALYTICAL","COVERED","VERTICAL","CALENDAR","STRANGLE","STRADDLE","BUTTERFLY","CONDOR","DIAGONAL","COLLAR","ROLL"],strategy:"SINGLE",interval:null,strike:null,rangeOptions:["ALL","ITM","NTM","OTM","SAK","SBK","SNK"],range:"ALL",fromDate:null,toDate:null,volatility:null,underlyingPrice:null,interestRate:null,daysToExpiration:null,expMonth:null,optionTypeOptions:["S","NS","ALL"],optionType:"ALL",screenStr:null}},methods:{getChain:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r,l,c,o,u,i,a,s,b,O,d,p,j,g,y,f,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.symbol,r=e.contractType,l=e.strikeCount,c=e.includeQuotes,o=e.strategy,u=e.interval,i=e.strike,a=e.range,s=e.fromDate,b=e.toDate,O=e.volatility,d=e.underlyingPrice,p=e.interestRate,j=e.daysToExpiration,g=e.expMonth,y=e.optionType,f=e.isLogIn?e.APIClient.optionChains:e.APIClient.optionChains.unauthenticated,t.next=4,f.getOptionChain({symbol:n,contractType:r,strikeCount:l,includeQuotes:c,strategy:o,interval:u,strike:i,range:a,fromDate:s?new Date(s):null,toDate:b?new Date(b):null,volatility:O,underlyingPrice:d,interestRate:p,daysToExpiration:j,expMonth:g,optionType:y});case 4:m=t.sent,console.log(m),e.screenStr=JSON.stringify(m);case 7:case"end":return t.stop()}}),t)})))()}}};const me=o()(fe,[["render",ye]]);var Ie=me,he=Object(r["g"])("h2",null,"Price History",-1),ve=Object(r["g"])("label",null,"symbol",-1),Ce=Object(r["g"])("label",null,"period type",-1),Ae=["value"],Pe=Object(r["g"])("label",null,"period",-1),Ee=Object(r["g"])("label",null,"frequency type",-1),Le=["value"],xe=Object(r["g"])("label",null,"frequency",-1),ke=Object(r["g"])("label",null,"end date",-1),Te=Object(r["g"])("label",null,"start date",-1),Se=Object(r["g"])("label",null,"extended hours",-1);function we(e,t,n,l,c,o){return Object(r["r"])(),Object(r["f"])("section",null,[he,Object(r["g"])("p",null,[ve,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.symbol=t})},null,512),[[r["C"],e.symbol]]),Ce,Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.periodType=t})},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.periodOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e,value:e},Object(r["y"])(e),9,Ae)})),128))],512),[[r["B"],e.periodType]]),Pe,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.period=t})},null,512),[[r["C"],e.period]]),Ee,Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.frequencyType=t})},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.frequencyOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e,value:e},Object(r["y"])(e),9,Le)})),128))],512),[[r["B"],e.frequencyType]]),xe,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.frequency=t})},null,512),[[r["C"],e.frequency]]),ke,Object(r["E"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.endDate=t})},null,512),[[r["C"],e.endDate]]),Te,Object(r["E"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.startDate=t})},null,512),[[r["C"],e.startDate]]),Se,Object(r["E"])(Object(r["g"])("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.needExtendedHoursData=t})},null,512),[[r["A"],e.needExtendedHoursData]]),Object(r["g"])("button",{onClick:t[8]||(t[8]=function(){return o.getHistory&&o.getHistory.apply(o,arguments)})},"get history"),Object(r["h"])(" "+Object(r["y"])(e.screenStr),1)])])}var Ue={name:"PriceHistoryPanel",props:["APIClient","isLogIn"],data:function(){return{symbol:null,periodOptions:["day","month","year","ytd"],periodType:"day",period:1,frequencyOptions:["minute","daily","weekly","monthly"],frequencyType:"minute",frequency:1,endDate:null,startDate:null,needExtendedHoursData:!1,screenStr:null}},methods:{getHistory:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r,l,c,o,u,i,a,s,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.symbol,r=e.periodType,l=e.period,c=e.frequencyType,o=e.frequency,u=e.endDate,i=e.startDate,a=e.needExtendedHoursData,s=e.isLogIn?e.APIClient.priceHistory:e.APIClient.priceHistory.unauthenticated,t.next=4,s.getPriceHistory({symbol:n,periodType:r,period:l,frequencyType:c,frequency:o,endDate:u?new Date(u):null,startDate:i?new Date(i):null,needExtendedHoursData:a});case 4:b=t.sent,console.log(b),e.screenStr=JSON.stringify(b);case 7:case"end":return t.stop()}}),t)})))()}}};const De=o()(Ue,[["render",we]]);var Ve=De,Re=Object(r["g"])("h2",null,"Quotes",-1),qe=Object(r["g"])("label",null,"single quote",-1),Ne=Object(r["g"])("label",null,"symbol",-1),He=Object(r["g"])("label",null,"multiple quotes",-1),Me=Object(r["g"])("label",null,"symbols",-1);function Qe(e,t,n,l,c,o){return Object(r["r"])(),Object(r["f"])("section",null,[Re,Object(r["g"])("p",null,[qe,Ne,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.symbol=t})},null,512),[[r["C"],e.symbol]]),Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return o.getQuote&&o.getQuote.apply(o,arguments)})},"get quote")]),Object(r["g"])("p",null,[He,Me,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.symbols=t}),placeholder:"separated by space"},null,512),[[r["C"],e.symbols]]),Object(r["g"])("button",{onClick:t[3]||(t[3]=function(){return o.getQuotes&&o.getQuotes.apply(o,arguments)})},"get quotes")]),Object(r["g"])("p",null,Object(r["y"])(e.screenStr),1)])}n("1276");var Be={name:"QuotesPanel",props:["APIClient","isLogIn"],data:function(){return{symbol:null,symbols:null,projection:"fundamental",screenStr:null}},methods:{getQuote:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.symbol,!e.isLogIn){t.next=7;break}return t.next=4,e.APIClient.quotes.getQuote({symbol:n});case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,e.APIClient.quotes.unauthenticated.getQuote({symbol:n});case 9:t.t0=t.sent;case 10:r=t.t0,console.log(r),e.screenStr=JSON.stringify(r);case 13:case"end":return t.stop()}}),t)})))()},getQuotes:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.symbols.split(" "),!e.isLogIn){t.next=7;break}return t.next=4,e.APIClient.quotes.getQuotes({symbols:n});case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,e.APIClient.quotes.unauthenticated.getQuotes({symbols:n});case 9:t.t0=t.sent;case 10:r=t.t0,console.log(r),e.screenStr=JSON.stringify(r);case 13:case"end":return t.stop()}}),t)})))()}}};const Je=o()(Be,[["render",Qe]]);var _e=Je,Ge={key:0},Ye=Object(r["g"])("h2",null,"Account Info",-1),Ke=Object(r["g"])("label",null,"Get Accounts",-1);function $e(e,t,n,l,c,o){return n.isLogIn?(Object(r["r"])(),Object(r["f"])("section",Ge,[Ye,Object(r["g"])("p",null,[Ke,Object(r["g"])("button",{value:"get",onClick:t[0]||(t[0]=function(){return o.getAccs&&o.getAccs.apply(o,arguments)})},"get")]),Object(r["g"])("p",null,Object(r["y"])(e.screenStr),1)])):Object(r["e"])("",!0)}var Fe={name:"AccPanel",props:["APIClient","isLogIn"],data:function(){return{screenStr:null}},methods:{getAcc:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.APIClient.accounts.getAccount();case 2:n=t.sent,console.log(n),e.screenStr=JSON.stringify(n);case 5:case"end":return t.stop()}}),t)})))()},getAccs:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.APIClient.accounts.getAccounts();case 2:n=t.sent,console.log(n),e.screenStr=JSON.stringify(n);case 5:case"end":return t.stop()}}),t)})))()}}};const ze=o()(Fe,[["render",$e]]);var Xe=ze,We={key:0},Ze=Object(r["g"])("h2",null,"Orders",-1),et=Object(r["g"])("label",null,"Place Equity Order(Placing Actual Order in Your Account!)",-1),tt=Object(r["g"])("label",null,"Account Id",-1),nt=Object(r["g"])("label",null,"Quantity",-1),rt=Object(r["g"])("label",null,"symbol",-1),lt=Object(r["g"])("label",null,"Order Type",-1),ct=Object(r["g"])("label",null,"price",-1),ot=Object(r["g"])("label",null,"instruction",-1),ut=Object(r["g"])("label",null,"Cancel Order",-1),it=Object(r["g"])("label",null,"Account Id",-1),at=Object(r["g"])("label",null,"Order Id",-1),st=Object(r["g"])("label",null,"Get Orders",-1),bt=Object(r["g"])("label",null,"Account Id",-1),Ot=Object(r["g"])("label",null,"From Date",-1),dt=Object(r["g"])("label",null,"To Date",-1);function pt(e,t,n,l,c,o){return n.isLogIn?(Object(r["r"])(),Object(r["f"])("section",We,[Ze,Object(r["g"])("p",null,[et,tt,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.accountId=t})},null,512),[[r["C"],e.accountId]]),nt,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.quantity=t})},null,512),[[r["C"],e.quantity]]),rt,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.symbol=t})},null,512),[[r["C"],e.symbol]]),lt,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.orderType=t})},null,512),[[r["C"],e.orderType]]),ct,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.price=t}),placeholder:"for limit order"},null,512),[[r["C"],e.price]]),ot,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.instruction=t}),placeholder:"BUY or SELL"},null,512),[[r["C"],e.instruction]]),Object(r["g"])("button",{value:"place order",onClick:t[6]||(t[6]=function(){return o.placeEquity&&o.placeEquity.apply(o,arguments)})},"placec order")]),Object(r["g"])("p",null,[ut,it,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.accountId=t})},null,512),[[r["C"],e.accountId]]),at,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.orderId=t})},null,512),[[r["C"],e.orderId]]),Object(r["g"])("button",{value:"cancel order",onClick:t[9]||(t[9]=function(){return o.cancelOrder&&o.cancelOrder.apply(o,arguments)})},"cancel order")]),Object(r["g"])("p",null,[st,bt,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=function(t){return e.accountId=t})},null,512),[[r["C"],e.accountId]]),Ot,Object(r["E"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[11]||(t[11]=function(t){return e.fromEnteredTime=t})},null,512),[[r["C"],e.fromEnteredTime]]),dt,Object(r["E"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[12]||(t[12]=function(t){return e.toEnteredTime=t})},null,512),[[r["C"],e.toEnteredTime]]),Object(r["g"])("button",{value:"Get Orders",onClick:t[13]||(t[13]=function(){return o.getOrders&&o.getOrders.apply(o,arguments)})},"get orders")]),Object(r["g"])("p",null,Object(r["y"])(e.screenStr),1)])):Object(r["e"])("",!0)}var jt={name:"OrdersPanel",props:["APIClient","isLogIn"],data:function(){return{accountId:null,quantity:0,symbol:"",orderType:"MARKET",price:null,instruction:null,orderId:null,fromEnteredTime:null,toEnteredTime:null,screenStr:null}},methods:{placeEquity:function(){var e=this.accountId,t=this.quantity,n=this.symbol,r=this.orderType,l=this.price,c=this.instruction;this.APIClient.orders.placeOrderEquity({accountId:e,quantity:t,symbol:n,orderType:r,price:l,instruction:c})},cancelOrder:function(){var e=this.accountId,t=this.orderId;this.APIClient.orders.cancelOrder({accountId:e,orderId:t})},getOrder:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.accountId,r=e.orderId,t.next=3,e.APIClient.orders.getOrder({accountId:n,orderId:r});case 3:l=t.sent,console.log(l),e.screenStr=JSON.stringify(l);case 6:case"end":return t.stop()}}),t)})))()},getOrders:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.accountId,r=e.fromEnteredTime,l=e.toEnteredTime,t.next=3,e.APIClient.orders.getOrdersByPath({accountId:n,fromEnteredTime:r?new Date(r):void 0,toEnteredTime:l?new Date(l):null});case 3:c=t.sent,console.log(c),e.screenStr=JSON.stringify(c);case 6:case"end":return t.stop()}}),t)})))()}}};const gt=o()(jt,[["render",pt]]);var yt=gt,ft={key:0},mt=Object(r["g"])("h2",null,"Transaction History",-1),It=Object(r["g"])("label",null,"get transaction",-1),ht=Object(r["g"])("label",null,"account ID",-1),vt=Object(r["g"])("label",null,"transaction ID",-1),Ct=Object(r["g"])("label",null,"get transactions",-1),At=Object(r["g"])("label",null,"account ID",-1),Pt=Object(r["g"])("label",null,"type",-1),Et=["value"],Lt=Object(r["g"])("label",null,"symbol",-1),xt=Object(r["g"])("label",null,"start date",-1),kt=Object(r["g"])("label",null,"end date",-1);function Tt(e,t,n,l,c,o){return n.isLogIn?(Object(r["r"])(),Object(r["f"])("section",ft,[mt,Object(r["g"])("p",null,[It,ht,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.accountId=t})},null,512),[[r["C"],e.accountId]]),vt,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.transactionId=t})},null,512),[[r["C"],e.transactionId]]),Object(r["g"])("button",{value:"search",onClick:t[2]||(t[2]=function(){return o.getTransaction&&o.getTransaction.apply(o,arguments)})},"search")]),Object(r["g"])("p",null,[Ct,At,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.accountId=t})},null,512),[[r["C"],e.accountId]]),Pt,Object(r["E"])(Object(r["g"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.type=t})},[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(e.typeOptions,(function(e){return Object(r["r"])(),Object(r["f"])("option",{key:e,value:e},Object(r["y"])(e),9,Et)})),128))],512),[[r["B"],e.type]]),Lt,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.symbol=t})},null,512),[[r["C"],e.symbol]]),xt,Object(r["E"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.startDate=t})},null,512),[[r["C"],e.startDate]]),kt,Object(r["E"])(Object(r["g"])("input",{type:"date","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.endDate=t})},null,512),[[r["C"],e.endDate]]),Object(r["g"])("button",{value:"search",onClick:t[8]||(t[8]=function(){return o.getTransactions&&o.getTransactions.apply(o,arguments)})},"search")]),Object(r["g"])("p",null,Object(r["y"])(e.screenStr),1)])):Object(r["e"])("",!0)}var St={name:"TransactionPanel",props:["APIClient","isLogIn"],data:function(){return{accountId:null,transactionId:null,typeOptions:["ALL","TRADE","BUY_ONLY","SELL_ONLY","CASH_IN_OR_CASH_OUT","CHECKING","DIVIDEND","INTEREST","OTHER","ADVISOR_FEES"],type:"ALL",symbol:null,startDate:null,endDate:null,screenStr:null}},methods:{getTransaction:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.accountId,r=e.transactionId,t.next=3,e.APIClient.transactionHistory.getTransaction({accountId:n,transactionId:r});case 3:l=t.sent,console.log(l),e.screenStr=JSON.stringify(l);case 6:case"end":return t.stop()}}),t)})))()},getTransactions:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,r,l,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.type,r=e.symbol,l=e.startDate,c=e.endDate,o=e.accountId,t.next=3,e.APIClient.transactionHistory.getTransactions({type:n,symbol:r,accountId:o,endDate:c?new Date(c):void 0,startDate:l?new Date(l):void 0});case 3:u=t.sent,console.log(u),e.screenStr=JSON.stringify(u);case 6:case"end":return t.stop()}}),t)})))()}}};const wt=o()(St,[["render",Tt]]);var Ut=wt,Dt=n("b619"),Vt={name:"Home",components:{ConfigPanel:C,AuthPanel:x,InstrumentsPanel:q,MoversPanel:$,OptionChainPanel:Ie,PriceHistoryPanel:Ve,QuotesPanel:_e,AccPanel:Xe,OrdersPanel:yt,TransactionPanel:Ut},data:function(){return{APIClient:null,isLogIn:!1,tabOptions:["instruments","movers","options","priceHistory","quotes"],authedTabOtionis:["account","orders","transactions"],tabsSelected:[]}},methods:{afterLogIn:function(){this.isLogIn=!0},afterLogOut:function(){this.isLogIn=!1},loadClient:function(e){var t=this.afterLogIn,n=this.afterLogOut;this.APIClient=Object(Dt["a"])(Object(p["a"])(Object(p["a"])({},e),{},{afterLogIn:t,afterLogOut:n}))}}};n("3d71");const Rt=o()(Vt,[["render",d]]);var qt=Rt,Nt=[{path:"/",name:"Home",component:qt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Ht=Object(s["a"])({history:Object(s["b"])(""),routes:Nt}),Mt=Ht;Object(r["c"])(a).use(Mt).mount("#app")},"7da9":function(e,t,n){},b475:function(e,t,n){"use strict";n("2852")}});
//# sourceMappingURL=app.0628ab48.js.map