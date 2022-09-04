(function(){"use strict";var e={2579:function(e,t,n){var o=n(9242),r=n(3396);function i(e,t,n,o,i,c){const a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(a)}var c={name:"App"},a=n(89);const u=(0,a.Z)(c,[["render",i]]);var s=u,d=n(2483);const f=[{path:"/",name:"Home",component:()=>Promise.all([n.e(471),n.e(177)]).then(n.bind(n,7570))},{path:"/cartList",name:"CartList",component:()=>n.e(77).then(n.bind(n,1750))},{path:"/orderConfirmation/:id",name:"OrderConfirmation",component:()=>Promise.all([n.e(471),n.e(32)]).then(n.bind(n,8485))},{path:"/orderList",name:"OrderList",component:()=>Promise.all([n.e(471),n.e(844)]).then(n.bind(n,4857))},{path:"/shop/:id",name:"Shop",component:()=>Promise.all([n.e(471),n.e(523)]).then(n.bind(n,2796))},{path:"/register",name:"Register",component:()=>Promise.all([n.e(471),n.e(685)]).then(n.bind(n,292)),beforeEnter(e,t,n){const{isLogin:o}=localStorage;o?n({name:"Home"}):n()}},{path:"/login",name:"Login",component:()=>Promise.all([n.e(471),n.e(535)]).then(n.bind(n,3681)),beforeEnter(e,t,n){const{isLogin:o}=localStorage;o?n({name:"Home"}):n()}}],l=(0,d.p7)({history:(0,d.r5)(),routes:f});l.beforeEach(((e,t,n)=>{const{isLogin:o}=localStorage,{name:r}=e,i="Login"===r||"Register"===r;o||i?n():n({name:"Login"})}));var p=l,h=n(65);const m=e=>{const{cartList:t}=e,n=JSON.stringify(t);localStorage.cartList=n},g=()=>void 0==localStorage.cartList?{}:JSON.parse(localStorage.cartList)||{};var v=h.ZP.createStore({state:{cartList:g(),productCheckedTotal:0},mutations:{changeCartItemInfo(e,t){const{shopId:n,productId:o,productInfo:r}=t;let i=e.cartList[n]||{shopName:"",productList:{}},c=i.productList[o];c||(r.count=0,c=r),c.count=c.count+t.num,t.num>0&&(c.check=!0),c.count<0&&(c.count=0),i.productList[o]=c,e.cartList[n]=i,m(e)},changeShopName(e,t){const{shopId:n,shopName:o}=t,r=e.cartList[n]||{shopName:"",productList:{}};r.shopName=o,e.cartList[n]=r,m(e)},changeCartItemChecked(e,t){const{shopId:n,productId:o}=t,r=e.cartList[n].productList[o];r.check?e.productCheckedTotal--:e.productCheckedTotal++,r.check=!r.check,m(e)},cleanCartProducts(e,t){const{shopId:n}=t;e.cartList[n].productList={},e.productCheckedTotal=0,m(e)},setCartItemsChecked(e,t){const{shopId:n}=t,o=e.cartList[n].productList;if(o)if(Object.keys(o).length===e.productCheckedTotal)for(let r in o){const t=o[r];t.check=!1,e.productCheckedTotal=e.productCheckedTotal-1}else{e.productCheckedTotal=0;for(let t in o){const n=o[t];n.check=!0,e.productCheckedTotal=e.productCheckedTotal+1}}m(e)},cleanCartData(e,t){e.cartList[t].productList={}}},actions:{},modules:{}});(0,o.ri)(s).use(v).use(p).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var c=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(a=!1,i<c&&(c=i));if(a){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({32:"orderConfirmation",77:"cartList",177:"home",523:"shop",535:"login",685:"register",844:"orderList"}[e]||e)+"."+{32:"129306b6",77:"0b20a3fd",177:"103124b0",471:"5a216dfe",523:"ce514ebb",535:"9593f8ed",685:"495c958c",844:"4a643f1c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{32:"orderConfirmation",177:"home",523:"shop",535:"login",685:"register",844:"orderList"}[e]+"."+{32:"172a2aeb",177:"424c80ff",523:"9bb22318",535:"53598e12",685:"3ce66ff3",844:"84f90012"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="jingdong:";n.l=function(o,r,i,c){if(e[o])e[o].push(r);else{var a,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var f=s[d];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=c,u.request=a,r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){r=c[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var c=n.miniCssF(o),a=n.p+c;if(t(c,a))return r();e(o,a,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={32:1,177:1,523:1,535:1,685:1,844:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var c=n.p+n.u(t),a=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+c+")",a.name="ChunkLoadError",a.type=i,a.request=c,r[1](a)}};n.l(c,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,c=o[0],a=o[1],u=o[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var d=u(n)}for(t&&t(o);s<c.length;s++)i=c[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2579)}));o=n.O(o)})();
//# sourceMappingURL=app.fa96ad63.js.map