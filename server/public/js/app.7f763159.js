(function(){"use strict";var t={648:function(t,n,e){var a=e(963),r=e(252);const o={id:"main"};function i(t,n,e,a,i,s){const l=(0,r.up)("AppNavbar"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(l),(0,r.Wm)(c)])}const s=t=>((0,r.dD)("data-v-75310c34"),t=t(),(0,r.Cn)(),t),l={id:"mainNavbar"},c={class:"navbar navbar-expand-lg navbar-light"},u=s((()=>(0,r._)("a",{class:"navbar-brand"},"DentistFinder",-1))),d=s((()=>(0,r._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1))),p={class:"collapse navbar-collapse",id:"navbarSupportedContent"},v={class:"navbar-nav mr-auto"},m={class:"nav-item"},f=(0,r.Uk)("Home"),b={class:"nav-item"},g=(0,r.Uk)("Login"),h={class:"nav-item"},_=(0,r.Uk)("Register"),w={class:"nav-item"},y=(0,r.Uk)("Find dentist"),C={class:"nav-item"},D=(0,r.Uk)("Add dentist");function k(t,n,e,a,o,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("nav",c,[u,d,(0,r._)("div",p,[(0,r._)("ul",v,[(0,r._)("li",m,[(0,r.Wm)(s,{class:"nav-link",to:"/"},{default:(0,r.w5)((()=>[f])),_:1})]),(0,r._)("li",b,[(0,r.Wm)(s,{class:"nav-link",to:"/login"},{default:(0,r.w5)((()=>[g])),_:1})]),(0,r._)("li",h,[(0,r.Wm)(s,{class:"nav-link",to:"/register"},{default:(0,r.w5)((()=>[_])),_:1})]),(0,r._)("li",w,[(0,r.Wm)(s,{class:"nav-link",to:"/findDentist"},{default:(0,r.w5)((()=>[y])),_:1})]),(0,r._)("li",C,[(0,r.Wm)(s,{class:"nav-link",to:"/addDentist"},{default:(0,r.w5)((()=>[D])),_:1})])])])])])}var O={name:"AppNavbar",props:{}},A=e(744);const I=(0,A.Z)(O,[["render",k],["__scopeId","data-v-75310c34"]]);var j=I,F={name:"App",props:{},components:{AppNavbar:j},data(){return{}},methods:{},computed(){}};const N=(0,A.Z)(F,[["render",i]]);var M=N,T=e(201),E=e(577);const L={class:"home"},S=(0,r._)("br",null,null,-1);function x(t,n,e,a,o,i){const s=(0,r.up)("DentistCard");return(0,r.wg)(),(0,r.iD)("div",L,[(0,r.Wm)(s),S,(0,r._)("button",{onClick:n[0]||(n[0]=t=>i.testBaza())},"test button"),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.items,(t=>((0,r.wg)(),(0,r.iD)("div",{id:"items",key:t._id},[(0,r._)("p",null,(0,E.zw)(t._id),1)])))),128))])}var U=e.p+"img/male_avatar.5d761acc.png";const W=t=>((0,r.dD)("data-v-7a5b5736"),t=t(),(0,r.Cn)(),t),P={id:"dentistCard"},z={class:"card",style:{width:"18rem","background-color":"transparent"}},B=W((()=>(0,r._)("img",{src:U,class:"rounded-circle centered",style:{width:"150px"},alt:"Avatar"},null,-1))),Z={class:"card-body"},$={class:"card-title"},H={class:"card-text"},R=(0,r.uE)('<ul class="list-group list-group-flush" data-v-7a5b5736><li class="list-group-item" data-v-7a5b5736>Cras justo odio</li><li class="list-group-item" data-v-7a5b5736>Dapibus ac facilisis in</li><li class="list-group-item" data-v-7a5b5736>Vestibulum at eros</li></ul><div class="card-body" data-v-7a5b5736><a href="#" class="card-link" data-v-7a5b5736>Card link</a></div>',2);function V(t,n,e,a,o,i){return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("div",z,[B,(0,r._)("div",Z,[(0,r._)("h5",$,"name: "+(0,E.zw)(e.name),1),(0,r._)("p",H,"description: "+(0,E.zw)(e.description),1)]),R])])}var q={name:"DentistCard",props:{name:String,description:String},data(){return{}},setup(){}};const K=(0,A.Z)(q,[["render",V],["__scopeId","data-v-7a5b5736"]]);var Y=K,G=e(411),J={name:"HomeView",components:{DentistCard:Y},data(){return{items:[]}},async created(){this.items=await G.db.getAllItemsFromCollectionMDb("test")},methods:{async testBaza(){return await G.db.getAllItemsFromCollectionMDb("test")}}};const Q=(0,A.Z)(J,[["render",x]]);var X=Q;const tt=[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:()=>e.e(443).then(e.bind(e,466))},{path:"/login",name:"login",component:()=>e.e(443).then(e.bind(e,242))},{path:"/register",name:"register",component:()=>e.e(443).then(e.bind(e,86))},{path:"/findDentist",name:"findDentist",component:()=>e.e(443).then(e.bind(e,828))},{path:"/addDentist",name:"addDentist",component:()=>e.e(443).then(e.bind(e,52))}],nt=(0,T.p7)({history:(0,T.PO)("/"),routes:tt});var et=nt;(0,a.ri)(M).use(et).mount("#app")},411:function(t,n,e){e.d(n,{db:function(){return i}});var a=e(669),r=e.n(a);let o=r().create({baseURL:"api/post",timeout:2e3}),i={async getAllItemsFromCollectionMDb(t){console.log("CALLED FUNCTION: getAllItemsFromCollectionMDb");let n=await o.get(`/${t}/`),e=n.data;return e},async addItemInCollectionMDb(t,n){console.log("CALLED FUNCTION: addItemInCollectionMDb");let e={text:n};await o.post(`/${t}/`,e)},async deleteItemFromCollectionByIdMDb(t,n){return console.log("CALLED FUNCTION: deleteItemFromCollectionByIdMDb"),o.delete(`${t}/${n}`)}}}},n={};function e(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={exports:{}};return t[a](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,a,r,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],o=t[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(u--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,r,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,a){return e.f[a](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/about.554c2945.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="client:";e.l=function(a,r,o,i){if(t[a])t[a].push(r);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==n+o){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,e.nc&&s.setAttribute("nonce",e.nc),s.setAttribute("data-webpack",n+o),s.src=a),t[a]=[r];var p=function(n,e){s.onerror=s.onload=null,clearTimeout(v);var r=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(e)})),n)return n(e)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.f.j=function(n,a){var r=e.o(t,n)?t[n]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(e,a){r=t[n]=[e,a]}));a.push(r[2]=o);var i=e.p+e.u(n),s=new Error,l=function(a){if(e.o(t,n)&&(r=t[n],0!==r&&(t[n]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};e.l(i,l,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,a){var r,o,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(l)var u=l(e)}for(n&&n(a);c<i.length;c++)o=i[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(u)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(648)}));a=e.O(a)})();
//# sourceMappingURL=app.7f763159.js.map