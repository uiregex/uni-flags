var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{u(n.next(e))}catch(t){i(t)}}function l(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?r(e.value):a(e.value).then(o,l)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(l){o=[6,l];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,a=e.length;r<n;r++,a++)e[a]=t[r];return e};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","flag");var a=false;var i=false;var o=e("w",typeof window!=="undefined"?window:{});var l=e("C",o.CSS);var u=e("d",o.document||{head:{}});var f=e("H",o.HTMLElement||function(){function e(){}return e}());var s=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var c=e("a",(function(e){return Promise.resolve(e)}));var $=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var v="{visibility:hidden}.hydrated{visibility:inherit}";var h=function(e,t){if(t===void 0){t=""}{return function(){return}}};var p=function(e,t){{return function(){return}}};var d=new WeakMap;var m=function(e,t,r){var n=ye.get(e);if($&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}ye.set(e,n)};var g=function(e,t,r,n){var a=b(t);var i=ye.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var o=d.get(e);var l=void 0;if(!o){d.set(e,o=new Set)}if(!o.has(a)){{if(s.$cssShim$){l=s.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var f=l["s-sc"];if(f){a=f;o=null}}else{l=u.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets),[i])}}return a};var y=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=h("attachStyles",t.$tagName$);g(r.getRootNode(),t,e.$modeName$,r);n()};var b=function(e,t){return"sc-"+e.$tagName$};var w={};var _=function(e){e=typeof e;return e==="object"||e==="function"};var S=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var l=[];var u=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!_(a)){a=String(a)}if(i&&o){l[l.length-1].$text$+=a}else{l.push(i?N(null,a):a)}o=i}}};u(r);if(typeof e==="function"){return e(t===null?{}:t,l,R)}var f=N(e,null);f.$attrs$=t;if(l.length>0){f.$children$=l}return f}));var N=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}return r};var C={};var E=function(e){return e&&e.$tag$===C};var R={forEach:function(e,t){return e.map(x).forEach(t)},map:function(e,t){return e.map(x).map(t).map(k)}};var x=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var k=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return S.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[]))}var r=N(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var j=function(e,t,r,n,a,i){if(r!==n){var o=pe(e,t);t.toLowerCase();{var l=_(n);if((o||l&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var u=n==null?"":n;if(t==="list"){o=false}else if(r==null||e[t]!=u){e[t]=u}}else{e[t]=n}}catch(f){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!o||i&4||a)&&!l){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var M=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||w;var o=t.$attrs$||w;{for(n in i){if(!(n in o)){j(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){j(a,n,i[n],o[n],r,t.$flags$)}};var P=function(e,t,r,n){var i=t.$children$[r];var o=0;var l;var f;{l=i.$elm$=u.createElement(i.$tag$);{M(null,i,a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){f=P(e,i,o);if(f){l.appendChild(f)}}}}return l};var T=function(e,t,r,n,a,i){var o=e;var l;for(;a<=i;++a){if(n[a]){l=P(null,r,a);if(l){n[a].$elm$=l;o.insertBefore(l,t)}}}};var O=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;a.remove()}}};var A=function(e,t,r,n){var a=0;var i=0;var o=t.length-1;var l=t[0];var u=t[o];var f=n.length-1;var s=n[0];var c=n[f];var $;while(a<=o&&i<=f){if(l==null){l=t[++a]}else if(u==null){u=t[--o]}else if(s==null){s=n[++i]}else if(c==null){c=n[--f]}else if(L(l,s)){B(l,s);l=t[++a];s=n[++i]}else if(L(u,c)){B(u,c);u=t[--o];c=n[--f]}else if(L(l,c)){B(l,c);e.insertBefore(l.$elm$,u.$elm$.nextSibling);l=t[++a];c=n[--f]}else if(L(u,s)){B(u,s);e.insertBefore(u.$elm$,l.$elm$);u=t[--o];s=n[++i]}else{{$=P(t&&t[i],r,i);s=n[++i]}if($){{l.$elm$.parentNode.insertBefore($,l.$elm$)}}}}if(a>o){T(e,n[f+1]==null?null:n[f+1].$elm$,r,n,i,f)}else if(i>f){O(t,a,o)}};var L=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var B=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var i=t.$children$;{{{M(e,t,a)}}if(n!==null&&i!==null){A(r,n,t,i)}else if(i!==null){T(r,null,t,i,0,i.length-1)}else if(n!==null){O(n,0,n.length-1)}}};var H=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var a=e.$vnode$||N(null,null);var i=E(t)?t:S(null,null,t);if(n.$attrsToReflect$){i.$attrs$=i.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return i.$attrs$[n]=r[t]}))}i.$tag$=null;i.$flags$|=4;e.$vnode$=i;i.$elm$=a.$elm$=r;B(a,i)};var I=e("g",(function(e){return $e(e).$hostElement$}));var U=function(e,t,r){var n=s.ce(t,r);e.dispatchEvent(n);return n};var z=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var V=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}z(e,e.$ancestorComponent$);var r=function(){return q(e,t)};return Ee(r)};var q=function(e,t){var r=h("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{a=J(n,"componentWillLoad")}}r();return K(a,(function(){return W(e,n,t)}))};var W=function(e,t,n){return __awaiter(r,void 0,void 0,(function(){var r,a,i,o,l,u;return __generator(this,(function(f){r=e.$hostElement$;a=h("update",e.$cmpMeta$.$tagName$);i=r["s-rc"];if(n){y(e)}o=h("render",e.$cmpMeta$.$tagName$);{G(e,t)}if(s.$cssShim$){s.$cssShim$.updateHost(r)}if(i){i.map((function(e){return e()}));r["s-rc"]=undefined}o();a();{l=r["s-p"];u=function(){return F(e)};if(l.length===0){u()}else{Promise.all(l).then(u);e.$flags$|=4;l.length=0}}return[2]}))}))};var G=function(e,t,r){try{t=t.render&&t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{H(e,t)}}}}catch(n){de(n,e.$hostElement$)}return null};var F=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=h("postUpdate",t);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{Q(r)}n();{e.$onReadyResolve$(r);if(!a){D()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ce((function(){return V(e,false)}))}e.$flags$&=~(4|512)}};var D=function(e){{Q(u.documentElement)}Ce((function(){return U(o,"appload",{detail:{namespace:n}})}))};var J=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){de(n)}}return undefined};var K=function(e,t){return e&&e.then?e.then(t):t()};var Q=function(e){return e.classList.add("hydrated")};var X=function(e,t){if(e!=null&&!_(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var Y=function(e,t){return $e(e).$instanceValues$.get(t)};var Z=function(e,t,r,n){var a=$e(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(t);var l=a.$flags$;var u=a.$lazyInstance$;r=X(r,n.$members$[t][0]);if((!(l&8)||o===undefined)&&r!==o){a.$instanceValues$.set(t,r);if(u){if(n.$watchers$&&l&128){var f=n.$watchers$[t];if(f){f.map((function(e){try{u[e](r,o,t)}catch(n){de(n,i)}}))}}if((l&(2|16))===2){V(a,false)}}}};var ee=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Y(this,n)},set:function(e){Z(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;s.jmp((function(){var t=i.get(e);if(n.hasOwnProperty(t)){r=n[t];delete n[t]}else if(a.hasOwnProperty(t)&&typeof n[t]==="number"&&n[t]==r){return}n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var te=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,(function(){var e,r,a,o,l,u,f;return __generator(this,(function(s){switch(s.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;i=ge(n);if(!i.then)return[3,2];e=p();return[4,i];case 1:i=s.sent();e();s.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}ee(i,n,2);i.isProxied=true}r=h("createInstance",n.$tagName$);{t.$flags$|=8}try{new i(t)}catch(c){de(c)}{t.$flags$&=~8}{t.$flags$|=128}r();if(i.style){a=i.style;o=b(n);if(!ye.has(o)){l=h("registerStyles",n.$tagName$);m(o,a,!!(n.$flags$&1));l()}}s.label=3;case 3:u=t.$ancestorComponent$;f=function(){return V(t,true)};if(u&&u["s-rc"]){u["s-rc"].push(f)}else{f()}return[2]}}))}))};var re=function(e){if((s.$flags$&1)===0){var t=$e(e);var r=t.$cmpMeta$;var n=h("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){z(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Ce((function(){return te(e,t,r)}))}}n()}};var ne=function(e){if((s.$flags$&1)===0){$e(e);if(s.$cssShim$){s.$cssShim$.removeHost(e)}}};var ae=function(e){var t=e.cloneNode;e.cloneNode=function(e){var r=this;var n=t.call(r,false);return n}};var ie=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var t=e["s-sn"]=le(e);var r=ue(this.childNodes,t);if(r){var n=fe(r,t);var a=n[n.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var oe=function(e,t){var r=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.item=function(e){return this[e]};return t}(Array);if(t.$flags$&8){var n=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=n.call(this);if((s.$flags$&1)===0&&$e(this).$flags$&2){var t=new r;for(var a=0;a<e.length;a++){var i=e[a]["s-nr"];if(i){t.push(i)}}return t}return r.from(e)}})}};var le=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var ue=function(e,t){var r=0;var n;for(;r<e.length;r++){n=e[r];if(n["s-sr"]&&n["s-sn"]===t){return n}n=ue(n.childNodes,t);if(n){return n}}return null};var fe=function(e,t){var r=[e];while((e=e.nextSibling)&&e["s-sn"]===t){r.push(e)}return r};var se=e("b",(function(e,t){if(t===void 0){t={}}var r=h();var n=[];var a=t.exclude||[];var i=o.customElements;var l=u.head;var f=l.querySelector("meta[charset]");var c=u.createElement("style");var $=[];var p;var d=true;Object.assign(s,t);s.$resourcesUrl$=new URL(t.resourcesUrl||"./",u.baseURI).href;e.map((function(e){e[1].map((function(r){var o={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{o.$members$=r[2]}{o.$attrsToReflect$=[]}{o.$watchers$={}}var l=t.transformTagName?t.transformTagName(o.$tagName$):o.$tagName$;var u=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;he(t,o);{oe(t,o)}return r}t.prototype.connectedCallback=function(){var e=this;if(p){clearTimeout(p);p=null}if(d){$.push(this)}else{s.jmp((function(){return re(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;s.jmp((function(){return ne(e)}))};t.prototype.componentOnReady=function(){return $e(this).$onReadyPromise$};return t}(HTMLElement);{ae(u.prototype)}{ie(u.prototype)}o.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,ee(u,o,1))}}))}));{c.innerHTML=n+v;c.setAttribute("data-styles","");l.insertBefore(c,f?f.nextSibling:l.firstChild)}d=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{s.jmp((function(){return p=setTimeout(D,30)}))}}r()}));var ce=new WeakMap;var $e=function(e){return ce.get(e)};var ve=e("r",(function(e,t){return ce.set(t.$lazyInstance$=e,t)}));var he=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return ce.set(e,r)};var pe=function(e,t){return t in e};var de=function(e,t){return(0,console.error)(e,t)};var me=new Map;var ge=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var o=me.get(i);if(o){return o[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{me.set(i,e)}return e[a]}),de)};var ye=new Map;var be=[];var we=[];var _e=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&s.$flags$&4){Ce(Ne)}else{s.raf(Ne)}}}};var Se=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){de(r)}}e.length=0};var Ne=function(){Se(be);{Se(we);if(i=be.length>0){s.raf(Ne)}}};var Ce=function(e){return c().then(e)};var Ee=_e(we,true)}}}));