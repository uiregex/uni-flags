System.register([],(function(n){"use strict";return{execute:function(){n({d:i,e:c});var t=n("i",(function(n){return typeof n!=="undefined"}));var r=n("a",(function(n){return Array.isArray(n)}));var e=n("b",(function(n){return typeof n==="object"&&n!==null&&!r(n)}));var u=n("c",(function(n){return typeof n==="string"}));function i(n){return t(n)&&(u(n)&&n==="")}function c(n){return t(n)&&(r(n)&&n.length===0||e(n)&&Object.keys(n).length===0||u(n)&&n===""||n===null)}}}}));