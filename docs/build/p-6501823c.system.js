var __spreadArray=this&&this.__spreadArray||function(e,r){for(var t=0,i=r.length,n=e.length;t<i;t++,n++)e[n]=r[t];return e};System.register(["./p-e8be8763.system.js"],(function(e){"use strict";var r,t;return{setters:[function(e){r=e.b;t=e.a}],execute:function(){e({a:o,u:c});function i(e,r){return r?r==="Host"||!!e.querySelector(r):!!e.firstElementChild}function n(e,t,i,n){if(!r(t)){if(e.selector){if(e.selector==="Host"){i([e.el],t)}else{var l=e.all?e.el.querySelectorAll(e.selector):[e.el.querySelector(e.selector)];if(l[0]){i(l,t);n===null||n===void 0?void 0:n.disconnect()}}}else{var s=e.all?__spreadArray([],e.el.children):[e.el.firstElementChild];if(s&&s[0]){i(s,t);n===null||n===void 0?void 0:n.disconnect()}}}}function l(e,l,s){if(t(l)&&!r(l)){if(i(e.el,e.selector)){n(e,l,s)}else{var o=new MutationObserver((function(){n(e,l,s,o)}));o.observe(e.el,{childList:true,subtree:true})}}}function s(e,r){var t=function(r,t){e.forEach((function(e){e.style[r]=""+t+(isNaN(Number(t))?"":"px")}))};for(var i=0,n=Object.entries(r);i<n.length;i++){var l=n[i],s=l[0],o=l[1];t(s,o)}}function o(e){e.style.display="inherit"}function c(e,r){if(r){l({el:e,selector:"svg"},{"border-radius":"50%"},s)}}}}}));