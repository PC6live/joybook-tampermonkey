// ==UserScript==
// @name        bilibili-joybook-dev
// @version     0.0.6
// @author      PC6live
// @description 共享大会员
// @homepage    https://github.com/PC6live/joybook-tampermonkey
// @supportURL  https://github.com/PC6live/joybook-tampermonkey/issue
// @include     *://*.bilibili.com/*
// @exclude     *://passport.bilibili.com/*
// @grant       GM_cookie
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addStyle
// @grant       GM_deleteValue
// @grant       GM_getTab
// @grant       GM_getTabs
// @grant       GM_listValues
// @grant       GM_saveTab
// @grant       unsafeWindow
// @run-at      document-start
// @noframes    
// ==/UserScript==

(()=>{"use strict";var e={517:(e,t,n)=>{function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){var n={};for(var o in e)n[o]=e[o];return n.target=n.currentTarget=t,n}function i(e){function t(t){return function(){var n=this.hasOwnProperty(t+"_")?this[t+"_"]:this.xhr[t],o=(e[t]||{}).getter;return o&&o(n,this)||n}}function n(t){return function(n){var o=this.xhr,i=this,a=e[t];if("on"===t.substring(0,2))i[t+"_"]=n,o[t]=function(a){a=r(a,i),e[t]&&e[t].call(i,o,a)||n.call(i,a)};else{var s=(a||{}).setter;n=s&&s(n,i)||n,this[t+"_"]=n;try{o[t]=n}catch(e){}}}}function i(t){return function(){var n=[].slice.call(arguments);if(e[t]){var o=e[t].call(this,n,this.xhr);if(o)return o}return this.xhr[t].apply(this.xhr,n)}}return window._rxhr=window._rxhr||XMLHttpRequest,unsafeWindow.XMLHttpRequest=function(){var e=new window._rxhr;for(var r in e){var a="";try{a=o(e[r])}catch(e){}"function"===a?this[r]=i(r):Object.defineProperty(this,r,{get:t(r),set:n(r),enumerable:!0})}var s=this;e.getProxy=function(){return s},this.xhr=e},window._rxhr}function a(){window._rxhr&&(XMLHttpRequest=window._rxhr),window._rxhr=void 0}n.r(t),n.d(t,{configEvent:()=>r,hook:()=>i,proxy:()=>h,unHook:()=>a,unProxy:()=>y});var s,u=["load","loadend","timeout","error","readystatechange","abort"],c=u[0],l=u[1],d=u[2],f=u[3],p=u[4],v=u[5];function h(e){if(s)throw"Proxy already exists";return s=new k(e)}function y(){s=null,a()}function m(e){return e.watcher||(e.watcher=document.createElement("a"))}function g(e,t){var n=e.getProxy(),o="on"+t+"_",i=r({type:t},n);n[o]&&n[o](i),m(e).dispatchEvent(new Event(t,{bubbles:!1}))}function w(e){this.xhr=e,this.xhrProxy=e.getProxy()}function x(e){function t(e){w.call(this,e)}return t.prototype=Object.create(w.prototype),t.prototype.next=e,t}w.prototype=Object.create({resolve:function(e){var t=this.xhrProxy,n=this.xhr;t.readyState=4,n.resHeader=e.headers,t.response=t.responseText=e.response,t.statusText=e.statusText,t.status=e.status,g(n,p),g(n,c),g(n,l)},reject:function(e){this.xhrProxy.status=0,g(this.xhr,e.type),g(this.xhr,l)}});var b=x((function(e){var t=this.xhr;for(var n in e=e||t.config,t.withCredentials=e.withCredentials,t.open(e.method,e.url,!1!==e.async,e.user,e.password),e.headers)t.setRequestHeader(n,e.headers[n]);t.send(e.body)})),_=x((function(e){this.resolve(e)})),C=x((function(e){this.reject(e)}));function k(e){var t=e.onRequest,n=e.onResponse,o=e.onError;function a(e,t,n){var r=new C(e),i={config:e.config,error:n};o?o(i,r):r.next(i)}function s(){return!0}function c(e,t){return a(e,0,t),!0}function l(e,t){return 4===e.readyState&&0!==e.status?function(e,t){var o=new _(e);if(!n)return o.resolve();var r={response:t.response,status:t.status,statusText:t.statusText,config:e.config,headers:e.resHeader||e.getAllResponseHeaders().split("\r\n").reduce((function(e,t){if(""===t)return e;var n=t.split(":");return e[n.shift()]=function(e){return e.replace(/^\s+|\s+$/g,"")}(n.join(":")),e}),{})};n(r,o)}(e,t):4!==e.readyState&&g(e,p),!0}return i({onload:s,onloadend:s,onerror:c,ontimeout:c,onabort:c,onreadystatechange:function(e){return l(e,this)},open:function(e,n){var o=this,i=n.config={headers:{}};i.method=e[0],i.url=e[1],i.async=e[2],i.user=e[3],i.password=e[4],i.xhr=n;var s="on"+p;n[s]||(n[s]=function(){return l(n,o)});var u=function(e){a(n,0,r(e,o))};if([f,d,v].forEach((function(e){var t="on"+e;n[t]||(n[t]=u)})),t)return!0},send:function(e,n){var o=n.config;if(o.withCredentials=n.withCredentials,o.body=e[0],t){var r=function(){t(o,new b(n))};return!1===o.async?r():setTimeout(r),!0}},setRequestHeader:function(e,t){return t.config.headers[e[0].toLowerCase()]=e[1],!0},addEventListener:function(e,t){var n=this;if(-1!==u.indexOf(e[0])){var o=e[1];return m(t).addEventListener(e[0],(function(t){var i=r(t,n);i.type=e[0],i.isTrusted=!0,o.call(n,i)})),!0}},getAllResponseHeaders:function(e,t){var n=t.resHeader;if(n){var o="";for(var r in n)o+=r+": "+n[r]+"\r\n";return o}},getResponseHeader:function(e,t){var n=t.resHeader;if(n)return n[(e[0]||"").toLowerCase()]}})}},452:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"#bili-avatar{width:32px;height:32px;border-radius:50%;display:inline-block;margin-right:5px;border:2px solid #fb7299}#vip-btn{width:100%;display:flex;align-items:center;cursor:pointer;font-size:14px;color:#eee;padding:7px 0}#vip-btn>*{background:#fb7299;padding:8px 23px;transition:.3s ease;width:100%;display:flex;align-items:center}#vip-btn:hover>*{background:#f75582}#clear-btn{width:100%;display:flex;align-items:center;cursor:pointer;font-size:14px;color:#eee;padding:7px 0}#clear-btn>*{background:#ff4646;padding:8px 23px;transition:.3s ease;width:100%;display:flex;align-items:center}#clear-btn:hover>*{background:#f82b2b}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},468:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var o=n(379),r=n.n(o),i=n(452);r()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var s=e[r],u=t.base?s[0]+t.base:s[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var d=a(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:h(f,t),references:1}),o.push(l)}return o}function u(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,v=0;function h(e,t){var n,o,r;if(t.singleton){var i=v++;n=p||(p=u(t)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=u(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var u=s(e,t),c=0;c<n.length;c++){var l=a(n[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=u}}}},50:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function s(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(611),a=n(33),s=r(n(382)),u=()=>o(void 0,void 0,void 0,(function*(){l(),c(),requestAnimationFrame(u)})),c=()=>{var e;const{isLogin:t,vipStatus:n,vipAvator:o}=s.default;if(o)return;const r=document.querySelector(".mini-avatar"),a=document.querySelector(".mini-login");if(r||a)if(console.log("gen avator"),s.default.vipAvator=!0,r){if(t&&0===n){if(!i.getVipCookie())return;const t=r.cloneNode(!0),n=t.querySelector("img");n&&(n.src=GM_getValue("face")),r.parentElement&&(r.parentElement.style.display="flex"),null===(e=r.parentNode)||void 0===e||e.appendChild(t)}}else if(a){if(!i.getVipCookie())return;const e=a.querySelector("img"),t=null==e?void 0:e.cloneNode(!0);t&&(t.id="bili-avatar",t.src=GM_getValue("face"),a.parentElement&&(a.parentElement.style.display="flex",a.parentElement.insertBefore(t,a)))}},l=()=>{var e,t;const{isLogin:n,vipStatus:o,logoutBtn:r}=s.default;if(r)return;const u=document.querySelector(".logout");if(u){if(console.log("gen button"),s.default.logoutBtn=!0,n){const t='\n\t\t\t\t<div id="clear-btn">\n\t\t\t\t<span>清除脚本数据</span>\n\t\t\t\t</div>\n\t\t\t\t',n=a.createElement(t);n&&(n.addEventListener("click",(()=>{i.removeCookies().then((()=>{a.deleteAllValue(),window.location.reload()}))})),null===(e=u.parentNode)||void 0===e||e.appendChild(n))}if(n&&0!==o){const e='\n\t\t\t\t\t\t<div id="vip-btn">\n\t\t\t\t\t\t\t<span>共享大会员</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t',n=a.createElement(e);n&&(n.addEventListener("click",(()=>{console.log("reload"),GM_deleteValue("userCookie"),i.removeCookies().then((()=>{window.location.reload()}))})),null===(t=u.parentNode)||void 0===t||t.appendChild(n))}}};t.default=()=>{requestAnimationFrame(u)}},879:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function s(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(517),a=r(n(787)),s=n(611),u=r(n(382));t.default=()=>o(void 0,void 0,void 0,(function*(){console.log("listening");const e=s.getUserCookie(),t=s.getVipCookie();if(!e||!t)return void(()=>{const{isLogin:e,vipStatus:t,face:n}=u.default;e&&(0===t?s.storeCookies("userCookie",["SESSDATA"]):(GM_setValue("face",n),s.storeCookies("vipCookie",["SESSDATA"])))})();const n={onRequest:(t,n)=>o(void 0,void 0,void 0,(function*(){const{xhr:o}=t;o.onloadstart=()=>{s.setCookies(e)},yield a.default(t),n.next(t)})),onResponse:(e,t)=>{t.next(e)},onError:(e,t)=>{t.next(e)}};i.proxy(n)}))},382:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function s(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.initState=void 0;const o={isLogin:!1,vipStatus:0,face:"",logoutBtn:!1,vipAvator:!1};t.initState=()=>n(void 0,void 0,void 0,(function*(){yield n(void 0,void 0,void 0,(function*(){const e=yield fetch("https://api.bilibili.com/x/web-interface/nav",{method:"Get",credentials:"include"}),t=(yield e.json()).data;o.isLogin=t.isLogin,o.vipStatus=t.vipStatus,o.face=t.face}))})),t.default=o},529:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=()=>{let e;Object.defineProperty(unsafeWindow,"__PGC_USERSTATE__",{set(t){console.log(t),e=Object.assign(Object.assign({},t),{area_limit:0,ban_area_show:1,follow:1,follow_status:2,login:1,pay:1,pay_pack_paid:0,sponsor:0,vip_info:{due_date:0,status:1,type:2}}),delete e.dialog},get:()=>e})}},787:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function s(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(611),i=n(33);t.default=e=>o(void 0,void 0,void 0,(function*(){const{url:t,xhr:n}=e;var a;return i.isVideo()&&(yield(a=["playurl?cid","player/v2"],o(void 0,void 0,void 0,(function*(){for(let e=0;e<a.length;e+=1)if(t.includes(a[e]))return n.onloadstart=()=>{const e=r.getVipCookie();e&&r.setCookies(e)},n.onload=()=>{const e=r.getUserCookie();e&&r.setCookies(e)},Promise.resolve()})))),Promise.resolve()}))},607:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function s(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((o=o.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(879)),a=r(n(50)),s=r(n(529)),u=n(382);n(468),o(void 0,void 0,void 0,(function*(){console.log("run main"),s.default(),i.default(),yield u.initState(),a.default()}))},611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getVipCookie=t.getUserCookie=t.setCookies=t.storeCookies=t.removeCookies=t.getCookies=void 0,t.getUserCookie=()=>GM_getValue("userCookie"),t.getVipCookie=()=>GM_getValue("vipCookie");const n=()=>new Promise((e=>{const{hostname:t,protocol:n}=window.location,o=`${n}//${t}/`;GM_cookie.list({url:o},(t=>e(t)))}));t.getCookies=n,t.removeCookies=()=>new Promise((e=>{const{hostname:t,protocol:o}=window.location,r=`${o}//${t}/`;n().then((t=>(t.forEach((e=>{GM_cookie.delete({name:e.name,url:r})})),e())))})),t.storeCookies=(e,t)=>new Promise((o=>{n().then((n=>{const r=[];return n.forEach((e=>{e.name&&t.includes(e.name)&&r.push({domain:e.domain,storeId:e.storeId,expirationDate:e.expirationDate,httpOnly:e.httpOnly,name:e.name,path:e.path,sameSite:e.sameSite,secure:e.secure,value:e.value})})),GM_setValue(e,r),o()}))})),t.setCookies=e=>new Promise((t=>(e.forEach((e=>{GM_cookie.set(e)})),t())))},33:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deleteAllValue=t.isVideo=t.createElement=t.sleep=void 0,t.sleep=(e=1)=>new Promise((t=>setTimeout(t,1e3*e))),t.createElement=e=>{const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},t.isVideo=()=>/(bangumi\/play\/*)|(video\/*)/gi.test(window.location.href),t.deleteAllValue=()=>GM_listValues().forEach((e=>GM_deleteValue(e)))}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(607)})();