(function(){"use strict";var t={3963:function(t,e,n){var r=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=n(1001),c={},u=(0,a.Z)(c,o,i,!1,null,null,null),s=u.exports,l=n(2809),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-container",{staticClass:"home-container"},[n("el-header",{staticClass:"home-header"},[n("div",{staticClass:"topTitle"},[n("div",{staticClass:"left nav"},[n("ul",{staticStyle:{"margin-right":"2%","margin-left":"1%"}},[n("li",{class:{nav_active:"/about"==t.show}},[n("router-link",{attrs:{to:"/about"}},[n("i",{staticClass:"iconfont icon-a-dakai1x"}),t._v("页面1")])],1),n("li",{class:{nav_active:"/second"==t.show}},[n("router-link",{attrs:{to:"/second"}},[n("i",{staticClass:"iconfont icon-a-chuangyi1x"}),t._v("页面2")])],1)])]),n("div",{staticClass:"center-topTitle"},[n("h1",[t._v("名称待定系统平台")])]),n("div",{staticClass:"right nav"},[n("ul",{staticStyle:{"margin-left":"2%"}},[n("li",{class:{nav_active:"/third"==t.show}},[n("router-link",{attrs:{to:"/third"}},[n("i",{staticClass:"iconfont icon-a-guanli1x"}),t._v("页面3")])],1),n("li",{class:{nav_active:"/forth"==t.show}},[n("router-link",{attrs:{to:"/forth"}},[n("i",{staticClass:"iconfont icon-a-gengduo1x"}),t._v("页面4")])],1)])])])]),n("el-main",{staticClass:"home-main"},[n("router-view")],1)],1)],1)},d=[],h={name:"HomeView",components:{},data(){return{show:0}},watch:{$route(){this.show=this.$route.path}}},p=h,v=(0,a.Z)(p,f,d,!1,null,"6294a58a",null),m=v.exports;r["default"].use(l.Z);const g=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:m,children:[{path:"/",component:()=>n.e(994).then(n.bind(n,5994))},{path:"/about",name:"about",component:()=>n.e(844).then(n.bind(n,1844))},{path:"/second",name:"second",component:()=>n.e(867).then(n.bind(n,7867))},{path:"/third",name:"third",component:()=>n.e(544).then(n.bind(n,5544))},{path:"/forth",name:"forth",component:()=>n.e(441).then(n.bind(n,441))}]}],b=new l.Z({base:"/rca_project_demo/",routes:g,mode:"hash"});var y=b,w=n(4665);r["default"].use(w.ZP);var _=new w.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),C=n(4549),k=n.n(C),j=n(8522);r["default"].prototype.$echarts=j,r["default"].config.productionTip=!1,r["default"].use(k()),new r["default"]({router:y,store:_,render:t=>t(s)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{441:"0353fbc3",544:"043f81d2",844:"c04249ec",867:"74af72d4",994:"7cbd148c"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{441:"fc96ceb7",544:"76ea964d",844:"bd833240",867:"031f3a58",994:"610487cf"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="rca_project:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+i),c.src=r),t[r]=[o];var d=function(e,n){c.onerror=c.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/rca_project_demo/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),c=n.p+a;if(e(a,c))return o();t(r,c,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={441:1,544:1,844:1,867:1,994:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),c=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],c=r[1],u=r[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(e&&e(r);s<a.length;s++)i=a[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkrca_project"]=self["webpackChunkrca_project"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3963)}));r=n.O(r)})();
//# sourceMappingURL=app.f6c92634.js.map