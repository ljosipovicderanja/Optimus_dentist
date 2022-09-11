(function(){"use strict";var t={2419:function(t,e){e["Z"]={userAuth:!1}},3815:function(t,e,n){var a=n(9963),r=n(6252);const o={id:"main"};function i(t,e,n,a,i,s){const l=(0,r.up)("AppNavbar"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(l),(0,r.Wm)(u)])}var s=n.p+"img/dentist_logo_transparent.7aaf72c3.png";const l=t=>((0,r.dD)("data-v-35fa1b20"),t=t(),(0,r.Cn)(),t),u={id:"mainNavbar"},c={class:"navbar navbar-expand-lg navbar-light"},d=l((()=>(0,r._)("a",{class:"navbar-brand"},[(0,r._)("img",{src:s,class:"rounded-circle centered",style:{"max-width":"40px","max-height":"40px"},alt:"Avatar"}),(0,r.Uk)(" DentistFinder ")],-1))),m=l((()=>(0,r._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1))),p={class:"collapse navbar-collapse",id:"navbarSupportedContent"},f={class:"navbar-nav mr-auto"},g={key:0,class:"nav-item"},v=(0,r.Uk)("Home"),b={key:1,class:"nav-item"},h=(0,r.Uk)("Login"),y={key:2,class:"nav-item"},k=(0,r.Uk)("Register"),w={key:3,class:"nav-item"},_=(0,r.Uk)("Find dentist"),D={key:4,class:"nav-item"},C=(0,r.Uk)("Add dentist"),A={key:5,class:"nav-item"},I=(0,r.Uk)("Logout");function x(t,e,n,a,o,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("nav",c,[d,m,(0,r._)("div",p,[(0,r._)("ul",f,[o.InternalStorage.userAuth?((0,r.wg)(),(0,r.iD)("li",g,[(0,r.Wm)(s,{class:"nav-link",to:"/"},{default:(0,r.w5)((()=>[v])),_:1})])):(0,r.kq)("",!0),o.InternalStorage.userAuth?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("li",b,[(0,r.Wm)(s,{class:"nav-link",to:"/login"},{default:(0,r.w5)((()=>[h])),_:1})])),o.InternalStorage.userAuth?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("li",y,[(0,r.Wm)(s,{class:"nav-link",to:"/register"},{default:(0,r.w5)((()=>[k])),_:1})])),o.InternalStorage.userAuth?((0,r.wg)(),(0,r.iD)("li",w,[(0,r.Wm)(s,{class:"nav-link",to:"/findDentist"},{default:(0,r.w5)((()=>[_])),_:1})])):(0,r.kq)("",!0),o.InternalStorage.userAuth?((0,r.wg)(),(0,r.iD)("li",D,[(0,r.Wm)(s,{class:"nav-link",to:"/addDentist"},{default:(0,r.w5)((()=>[C])),_:1})])):(0,r.kq)("",!0),o.InternalStorage.userAuth?((0,r.wg)(),(0,r.iD)("li",A,[(0,r.Wm)(s,{class:"nav-link",to:"/",onClick:e[0]||(e[0]=t=>i.logout())},{default:(0,r.w5)((()=>[I])),_:1})])):(0,r.kq)("",!0)])])])])}var q=n(2419),S={name:"AppNavbar",props:{},data(){return{InternalStorage:q.Z}},methods:{logout(){console.log("Logout"),this.InternalStorage.userAuth=!1}}},F=n(3744);const O=(0,F.Z)(S,[["render",x],["__scopeId","data-v-35fa1b20"]]);var N=O,L={name:"App",props:{},components:{AppNavbar:N},data(){return{}},methods:{},computed(){}};const E=(0,F.Z)(L,[["render",i]]);var j=E,T=n(4731);(0,a.ri)(j).use(T.Z).mount("#app")},4731:function(t,e,n){n.d(e,{Z:function(){return S}});var a=n(2201),r=n(6252),o=n(9963),i=n.p+"img/dentist_logo.4ef722e8.png";const s={class:"home"},l={class:"container"},u={class:"row"},c=(0,r._)("div",{class:"col"},null,-1),d={class:"col-8"},m={class:"jumbotron",style:{"background-color":"transparent"}},p=(0,r._)("h1",{class:"display-4"},"Welcome to DentistFinder",-1),f=(0,r._)("img",{src:i,class:"rounded-circle centered",style:{"max-width":"150px",margin:"20px 0px 20px 0px","box-shadow":"0px 0px 68px -7px rgba(0, 0, 0, 0.61)"},alt:"Avatar"},null,-1),g=(0,r._)("p",{class:"lead"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur blanditiis nihil iure error rem? Voluptatem dolor nemo quasi sunt, voluptates exercitationem? Cumque nobis sed voluptas dolor et excepturi aliquam consequatur! ",-1),v=(0,r._)("hr",{class:"my-4"},null,-1),b=(0,r._)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quisquam dolorum nostrum. Voluptate commodi magnam non blanditiis quod quisquam laboriosam, sequi eum unde perspiciatis fugiat quaerat neque consequuntur et sit!",-1),h={class:"lead"},y=(0,r._)("div",{class:"col"},null,-1);function k(t,e,n,a,i,k){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",l,[(0,r._)("div",u,[c,(0,r._)("div",d,[(0,r._)("div",m,[p,f,g,v,b,(0,r._)("p",h,[(0,r._)("button",{class:"btn btn-primary btn-lg",onClick:e[0]||(e[0]=(0,o.iM)((t=>k.navigateFindDentist()),["prevent"]))},"Find dentist!")])])]),y])])])}var w=n(9411),_=n(2419),D={name:"HomeView",components:{},data(){return{items:[],InternalStorage:_.Z}},async created(){this.items=await w.db.getAllItemsFromCollectionMDb("dentist")},methods:{navigateFindDentist(){_.Z.userAuth?S.push("/findDentist"):S.push("/login")},async testBaza(){return await w.db.getAllItemsFromCollectionMDb("dentist")}}},C=n(3744);const A=(0,C.Z)(D,[["render",k]]);var I=A;const x=[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7961))},{path:"/login",name:"login",component:()=>n.e(443).then(n.bind(n,461))},{path:"/register",name:"register",component:()=>n.e(443).then(n.bind(n,7338))},{path:"/findDentist",name:"findDentist",component:()=>n.e(443).then(n.bind(n,3834))},{path:"/dentistDetails",name:"dentistDetails",component:()=>n.e(443).then(n.bind(n,4804))},{path:"/addDentist",name:"addDentist",component:()=>n.e(443).then(n.bind(n,3769))}],q=(0,a.p7)({history:(0,a.PO)("/"),routes:x});var S=q},9411:function(t,e,n){n.d(e,{db:function(){return i}});var a=n(9669),r=n.n(a);let o=r().create({baseURL:"api/post",timeout:2e3}),i={async getAllItemsFromCollectionMDb(t){console.log("CALLED FUNCTION: getAllItemsFromCollectionMDb");let e=await o.get(`/${t}/`),n=e.data;return n},async addItemInCollectionMDb(t,e){console.log("CALLED FUNCTION: addItemInCollectionMDb");let n={text:e};await o.post(`/${t}/`,n)},async deleteItemFromCollectionByIdMDb(t,e){return console.log("CALLED FUNCTION: deleteItemFromCollectionByIdMDb"),o.delete(`${t}/${e}`)}}}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.fe356d43.js"}}(),function(){n.miniCssF=function(t){return"css/about.8d3d5577.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";n.l=function(a,r,o,i){if(t[a])t[a].push(r);else{var s,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=a),t[a]=[r];var m=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var r=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===t||o===e)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),s=n.p+i;if(e(i,s))return r();t(a,s,r,o)}))},r={143:0};n.f.miniCss=function(t,e){var n={443:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=a(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(e),s=new Error,l=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};n.l(i,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],s=a[1],l=a[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(e&&e(a);u<i.length;u++)o=i[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3815)}));a=n.O(a)})();
//# sourceMappingURL=app.6b0cdf44.js.map