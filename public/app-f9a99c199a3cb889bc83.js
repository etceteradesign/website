webpackJsonp([0xd2a57dc1d883],{52:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(291),options:{plugins:[],color:"tomato",showSpinner:!0}}]},154:function(n,e,t){"use strict";var o;e.components={"component---src-templates-project-template-js":t(280),"component---src-pages-404-js":t(272),"component---src-pages-federal-menu-js":t(273),"component---src-pages-festival-of-you-js":t(274),"component---src-pages-index-js":t(275),"component---src-pages-jamie-veg-patch-js":t(276),"component---src-pages-mercury-js":t(277),"component---src-pages-open-market-presentation-js":t(278),"component---src-pages-reebok-project-js":t(279)},e.json=(o={"layout-index.json":t(9),"buffalo-7-infographic.json":t(283)},o["layout-index.json"]=t(9),o["404.json"]=t(281),o["layout-index.json"]=t(9),o["federal-menu.json"]=t(284),o["layout-index.json"]=t(9),o["festival-of-you.json"]=t(285),o["layout-index.json"]=t(9),o["index.json"]=t(286),o["layout-index.json"]=t(9),o["jamie-veg-patch.json"]=t(287),o["layout-index.json"]=t(9),o["mercury.json"]=t(288),o["layout-index.json"]=t(9),o["open-market-presentation.json"]=t(289),o["layout-index.json"]=t(9),o["reebok-project.json"]=t(290),o["layout-index.json"]=t(9),o["404-html.json"]=t(282),o),e.layouts={"layout---index":t(271)}},155:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},s=t(1),c=o(s),l=t(4),f=o(l),p=t(87),d=o(p),m=t(36),h=o(m),g=t(52),y=t(408),v=o(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},b=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,v.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);b.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=b,n.exports=e.default},36:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(337),a=o(r),u=(0,a.default)();n.exports=u},156:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(48),a=t(88),u=o(a),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return s=n,i[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return s=n,i[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return s=n,i[a]=n,!0}return!1}),s}}},157:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(75),a=o(r),u=t(52),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();n.exports=c},282:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(325)})})}},281:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(326)})})}},283:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9d6c7429d858,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(327)})})}},284:function(n,e,t){t(3),n.exports=function(n){return t.e(2790815192247,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(328)})})}},285:function(n,e,t){t(3),n.exports=function(n){return t.e(0xdd74a7577107,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(329)})})}},286:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(330)})})}},287:function(n,e,t){t(3),n.exports=function(n){return t.e(65993904204962,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(331)})})}},9:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(79)})})}},288:function(n,e,t){t(3),n.exports=function(n){return t.e(51304961104401,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(332)})})}},289:function(n,e,t){t(3),n.exports=function(n){return t.e(0x88b131353eba,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(333)})})}},290:function(n,e,t){t(3),n.exports=function(n){return t.e(0x78c58ce258e6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(334)})})}},271:function(n,e,t){t(3),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(158)})})}},87:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(156)),u=o(a),i=t(36),s=o(i),c=t(88),l=o(c),f=void 0,p={},d={},m={},h={},g={},y=[],v=[],x={},b="",R=[],j={},w=function(n){return n&&n.default||n},_=void 0,k=!0,P=[],C={},N={},E=5;_=t(159)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(n){O(n,function(){R=R.filter(function(e){return e!==n}),_.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){_.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){_.onPostLoadPageResources(n)});var S=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},T=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,P.push({resource:e,succeeded:!n}),N[e]||(N[e]=n),P=P.slice(-E),t(n,o)})}},L=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):N[e]?n.nextTick(function(){t(N[e])}):O(e,function(n,o){if(n)t(n);else{var r=w(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=P.find(function(n){return n.succeeded});return!!e},M=function(n,e){console.log(e),C[n]||(C[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},D=1,U={empty:function(){v=[],x={},j={},R=[],y=[],b=""},addPagesArray:function(n){y=n,f=(0,u.default)(n,b)},addDevRequires:function(n){p=n},addProdRequires:function(n){d=n},dequeue:function(){return v.pop()},enqueue:function(n){var e=(0,l.default)(n,b);if(!y.some(function(n){return n.path===e}))return!1;var t=1/D;D+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||v.unshift(e),v.sort(T);var o=f(e);return o.jsonName&&(j[o.jsonName]?j[o.jsonName]+=1+t:j[o.jsonName]=1+t,R.indexOf(o.jsonName)!==-1||h[o.jsonName]||R.unshift(o.jsonName)),o.componentChunkName&&(j[o.componentChunkName]?j[o.componentChunkName]+=1+t:j[o.componentChunkName]=1+t,R.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||R.unshift(o.componentChunkName)),R.sort(S),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:j}},getPages:function(){return{pathArray:v,pathCount:x}},getPage:function(n){return f(n)},has:function(n){return v.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),k=!1;if(C[e])return M(e,'Previously detected load failure for "'+e+'"'),t();var o=f(e);if(!o)return M(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return L(o.componentChunkName,function(n,e){n&&M(o.path,"Loading the component for "+o.path+" failed"),r=e,i()}),L(o.jsonName,function(n,e){n&&M(o.path,"Loading the JSON for "+o.path+" failed"),a=e,i()}),void(o.layoutComponentChunkName&&L(o.layout,function(n,e){n&&M(o.path,"Loading the Layout for "+o.path+" failed"),u=e,i()}))},peek:function(n){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(n){return v.length-v.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(340))},335:function(n,e){n.exports=[{componentChunkName:"component---src-templates-project-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"buffalo-7-infographic.json",path:"/buffalo7-infographic"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-federal-menu-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"federal-menu.json",path:"/federal-menu/"},{componentChunkName:"component---src-pages-festival-of-you-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"festival-of-you.json",path:"/festival-of-you/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-jamie-veg-patch-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"jamie-veg-patch.json",path:"/jamie-veg-patch/"},{componentChunkName:"component---src-pages-mercury-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"mercury.json",path:"/mercury/"},{componentChunkName:"component---src-pages-open-market-presentation-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"open-market-presentation.json",path:"/open-market-presentation/"},{componentChunkName:"component---src-pages-reebok-project-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"reebok-project.json",path:"/reebok-project/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},159:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(52),u=t(1),i=o(u),s=t(137),c=o(s),l=t(48),f=t(295),p=t(254),d=o(p),m=t(123),h=t(157),g=o(h),y=t(36),v=o(y),x=t(335),b=o(x),R=t(336),j=o(R),w=t(155),_=o(w),k=t(154),P=o(k),C=t(87),N=o(C);t(245),window.___history=g.default,window.___emitter=v.default,N.default.addPagesArray(b.default),N.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=N.default,window.matchPath=l.matchPath;var E=j.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),S=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};S(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){S(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(160);var o=function(n){function e(n){n.page.path===N.default.getPage(o).path&&(v.default.off("onPostLoadPageResources",e),clearTimeout(a),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,g.default.location),o=t.pathname,r=E[o];if(r&&(o=r.toPath),window.location.pathname!==o){var a=setTimeout(function(){v.default.off("onPostLoadPageResources",e),v.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);N.default.getResourcesForPathname(o)?(clearTimeout(a),window.___history.push(t)):v.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return i.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(_.default);N.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:h,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return N.default.getPage(o.location.pathname)?(0,u.createElement)(_.default,r({page:!0},o)):(0,u.createElement)(_.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},336:function(n,e){n.exports=[]},160:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(36),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},88:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},254:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},291:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(339),a=o(r);e.onClientEntry=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:"#29d"};window.___emitter.on("onDelayedLoadPageResources",function(){a.default.configure(e),a.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){a.default.done()});var t="#nprogress {\n    pointer-events: none;\n}\n#nprogress .bar {\n    background: "+e.color+";\n    position: fixed;\n    z-index: 1031;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n}\n#nprogress .peg {\n    display: block;\n    position: absolute;\n    right: 0px;\n    width: 100px;\n    height: 100%;\n    box-shadow: 0 0 10px "+e.color+", 0 0 5px "+e.color+";\n    opacity: 1.0;\n    -webkit-transform: rotate(3deg) translate(0px, -4px);\n    -ms-transform: rotate(3deg) translate(0px, -4px);\n    transform: rotate(3deg) translate(0px, -4px);\n}\n#nprogress .spinner {\n    display: block;\n    position: fixed;\n    z-index: 1031;\n    top: 15px;\n    right: 15px;\n}\n#nprogress .spinner-icon {\n    width: 18px;\n    height: 18px;\n    box-sizing: border-box;\n    border: solid 2px transparent;\n    border-top-color: "+e.color+";\n    border-left-color: "+e.color+";\n    border-radius: 50%;\n    -webkit-animation: nprogress-spinner 400ms linear infinite;\n    animation: nprogress-spinner 400ms linear infinite;\n}\n.nprogress-custom-parent {\n    overflow: hidden;\n    position: relative;\n}\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n    position: absolute;\n}\n@-webkit-keyframes nprogress-spinner {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@keyframes nprogress-spinner {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n",o=document.createElement("style");o.id="nprogress-styles",o.innerHTML=t,document.head.appendChild(o)}},337:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},339:function(n,e,t){var o,r;!function(a,u){o=u,r="function"==typeof o?o.call(e,t,e,n):o,!(void 0!==r&&(n.exports=r))}(this,function(){function n(n,e,t){return n<e?e:n>t?t:n}function e(n){return 100*(-1+n)}function t(n,t,o){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"}:{"margin-left":e(n)+"%"},r.transition="all "+t+"ms "+o,r}function o(n,e){var t="string"==typeof n?n:u(n);return t.indexOf(" "+e+" ")>=0}function r(n,e){var t=u(n),r=t+e;o(t,e)||(n.className=r.substring(1))}function a(n,e){var t,r=u(n);o(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function u(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function i(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var s={};s.version="0.2.0";var c=s.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};s.configure=function(n){var e,t;for(e in n)t=n[e],void 0!==t&&n.hasOwnProperty(e)&&(c[e]=t);return this},s.status=null,s.set=function(e){var o=s.isStarted();e=n(e,c.minimum,1),s.status=1===e?null:e;var r=s.render(!o),a=r.querySelector(c.barSelector),u=c.speed,i=c.easing;return r.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=s.getPositioningCSS()),f(a,t(e,u,i)),1===e?(f(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){f(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){s.remove(),n()},u)},u)):setTimeout(n,u)}),this},s.isStarted=function(){return"number"==typeof s.status},s.start=function(){s.status||s.set(0);var n=function(){setTimeout(function(){s.status&&(s.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},s.done=function(n){return n||s.status?s.inc(.3+.5*Math.random()).set(1):this},s.inc=function(e){var t=s.status;return t?("number"!=typeof e&&(e=(1-t)*n(Math.random()*t,.1,.95)),t=n(t+e,0,.994),s.set(t)):s.start()},s.trickle=function(){return s.inc(Math.random()*c.trickleRate)},function(){var n=0,e=0;s.promise=function(t){return t&&"resolved"!==t.state()?(0===e&&s.start(),n++,e++,t.always(function(){e--,0===e?(n=0,s.done()):s.set((n-e)/n)}),this):this}}(),s.render=function(n){if(s.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=c.template;var o,a=t.querySelector(c.barSelector),u=n?"-100":e(s.status||0),l=document.querySelector(c.parent);return f(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),c.showSpinner||(o=t.querySelector(c.spinnerSelector),o&&i(o)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(t),t},s.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&i(n)},s.isRendered=function(){return!!document.getElementById("nprogress")},s.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var t=e.shift();t&&t(n)}var e=[];return function(t){e.push(t),1==e.length&&n()}}(),f=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var t,o=r.length,a=n.charAt(0).toUpperCase()+n.slice(1);o--;)if(t=r[o]+a,t in e)return t;return n}function t(t){return t=n(t),a[t]||(a[t]=e(t))}function o(n,e,o){e=t(e),n.style[e]=o}var r=["Webkit","O","Moz","ms"],a={};return function(n,e){var t,r,a=arguments;if(2==a.length)for(t in e)r=e[t],void 0!==r&&e.hasOwnProperty(t)&&o(n,t,r);else o(n,a[1],a[2])}}();return s})},340:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(f===clearTimeout)return clearTimeout(n);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(n);try{return f(n)}catch(e){try{return f.call(null,n)}catch(e){return f.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&i())}function i(){if(!h){var n=r(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function s(n,e){this.fun=n,this.array=e}function c(){}var l,f,p=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(n){f=o}}();var d,m=[],h=!1,g=-1;p.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new s(n,e)),1!==m.length||h||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(n){return[]},p.binding=function(n){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},408:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},272:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(171)})})}},273:function(n,e,t){t(3),n.exports=function(n){return t.e(0x7c4d36a37b47,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(172)})})}},274:function(n,e,t){t(3),n.exports=function(n){return t.e(0x6556ddfea7bc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(173)})})}},275:function(n,e,t){t(3),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(174)})})}},276:function(n,e,t){t(3),n.exports=function(n){return t.e(0x5fa61dfae97f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(175)})})}},277:function(n,e,t){t(3),n.exports=function(n){return t.e(0xba103be1dc7d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(176)})})}},278:function(n,e,t){t(3),n.exports=function(n){return t.e(0x840d6d5df2b5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(177)})})}},279:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc1b7d3cd5904,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(178)})})}},280:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8532625e7af6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(179)})})}}});
//# sourceMappingURL=app-f9a99c199a3cb889bc83.js.map