const t="flags";let e,n,l,s=!1,o=!1,r=!1,i=!1;const c="undefined"!=typeof window?window:{},f=c.CSS,a=c.document||{head:{}},u=c.HTMLElement||class{},h={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},d=(()=>(a.head.attachShadow+"").indexOf("[native")>-1)(),$=t=>Promise.resolve(t),y=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1})(),m=new WeakMap,p=t=>"sc-"+t.o,b={},w=t=>"object"==(t=typeof t)||"function"===t,g=(t,e,...n)=>{let l=null,s=null,o=!1,r=!1,i=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!w(l))&&(l+=""),o&&r?i[i.length-1].i+=l:i.push(o?v(null,l):l),r=o)};if(c(n),e){e.name&&(s=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}}if("function"==typeof t)return t(null===e?{}:e,i,S);const f=v(t,null);return f.u=e,i.length>0&&(f.h=i),f.$=s,f},v=(t,e)=>({t:0,m:t,i:e,p:null,h:null,u:null,$:null}),j={},S={forEach:(t,e)=>t.map(k).forEach(e),map:(t,e)=>t.map(k).map(e).map(O)},k=t=>({vattrs:t.u,vchildren:t.h,vkey:t.g,vname:t.$,vtag:t.m,vtext:t.i}),O=t=>{if("function"==typeof t.vtag){const e=Object.assign({},t.vattrs);return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),g(t.vtag,e,...t.vchildren||[])}const e=v(t.vtag,t.vtext);return e.u=t.vattrs,e.h=t.vchildren,e.g=t.vkey,e.$=t.vname,e},_=(t,e,n,l,s,o)=>{if(n!==l){let i=ut(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,s=M(n),o=M(l);e.remove(...s.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!s.includes(t))))}else{const c=w(l);if((i||c&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?i=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(r){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!i||4&o||s)&&!c&&t.setAttribute(e,l=!0===l?"":l)}}},C=/\s/,M=t=>t?t.split(C):[],N=(t,e,n,l)=>{const s=11===e.p.nodeType&&e.p.host?e.p.host:e.p,o=t&&t.u||b,r=e.u||b;for(l in o)l in r||_(s,l,o[l],void 0,n,e.t);for(l in r)_(s,l,o[l],r[l],n,e.t)},R=(t,o,i,c)=>{let f,u,h,d=o.h[i],$=0;if(s||(r=!0,"slot"===d.m&&(e&&c.classList.add(e+"-s"),d.t|=d.h?2:1)),1&d.t)f=d.p=a.createTextNode("");else if(f=d.p=a.createElement(2&d.t?"slot-fb":d.m),N(null,d,!1),null!=e&&f["s-si"]!==e&&f.classList.add(f["s-si"]=e),d.h)for($=0;$<d.h.length;++$)u=R(t,d,$,f),u&&f.appendChild(u);return f["s-hn"]=l,3&d.t&&(f["s-sr"]=!0,f["s-cr"]=n,f["s-sn"]=d.$||"",h=t&&t.h&&t.h[i],h&&h.m===d.m&&t.p&&x(t.p,!1)),f},x=(t,e)=>{h.t|=1;const n=t.childNodes;for(let s=n.length-1;s>=0;s--){const t=n[s];t["s-hn"]!==l&&t["s-ol"]&&(L(t).insertBefore(t,A(t)),t["s-ol"].remove(),t["s-ol"]=void 0,r=!0),e&&x(t,e)}h.t&=-2},E=(t,e,n,s,o,r)=>{let i,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=r;++o)s[o]&&(i=R(null,n,o,t),i&&(s[o].p=i,c.insertBefore(i,A(e))))},T=(t,e,n,l,s)=>{for(;e<=n;++e)(l=t[e])&&(o=!0,(s=l.p)["s-ol"]?s["s-ol"].remove():x(s,!0),s.remove())},P=(t,e)=>t.m===e.m&&("slot"!==t.m||t.$===e.$),A=t=>t&&t["s-ol"]||t,L=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,W=(t,e)=>{const n=e.p=t.p,l=t.h,s=e.h;"slot"===e.m||N(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,i=e.length-1,c=e[0],f=e[i],a=l.length-1,u=l[0],h=l[a];for(;o<=i&&r<=a;)null==c?c=e[++o]:null==f?f=e[--i]:null==u?u=l[++r]:null==h?h=l[--a]:P(c,u)?(W(c,u),c=e[++o],u=l[++r]):P(f,h)?(W(f,h),f=e[--i],h=l[--a]):P(c,h)?("slot"!==c.m&&"slot"!==h.m||x(c.p.parentNode,!1),W(c,h),t.insertBefore(c.p,f.p.nextSibling),c=e[++o],h=l[--a]):P(f,u)?("slot"!==c.m&&"slot"!==h.m||x(f.p.parentNode,!1),W(f,u),t.insertBefore(f.p,c.p),f=e[--i],u=l[++r]):(s=R(e&&e[r],n,r,t),u=l[++r],s&&L(c.p).insertBefore(s,A(c.p)));o>i?E(t,null==l[a+1]?null:l[a+1].p,n,l,r,a):r>a&&T(e,o,i)})(n,l,e,s):null!==s?E(n,null,e,s,0,s.length-1):null!==l&&T(l,0,l.length-1)},U=t=>{let e,n,l,s,o,r,i=t.childNodes;for(n=0,l=i.length;n<l;n++)if(e=i[n],1===e.nodeType){if(e["s-sr"])for(o=e["s-sn"],e.hidden=!1,s=0;s<l;s++)if(r=i[s].nodeType,i[s]["s-hn"]!==e["s-hn"]||""!==o){if(1===r&&o===i[s].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==i[s].textContent.trim()){e.hidden=!0;break}U(e)}},q=[],F=t=>{let e,n,l,s,r,i,c=0,f=t.childNodes,a=f.length;for(;c<a;c++){if(e=f[c],e["s-sr"]&&(n=e["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=e["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(H(n,s)?(r=q.find((t=>t.v===n)),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.j=e:q.push({j:e,v:n}),n["s-sr"]&&q.map((t=>{H(t.v,n["s-sn"])&&(r=q.find((t=>t.v===n)),r&&!t.j&&(t.j=r.j))}))):q.some((t=>t.v===n))||q.push({v:n}));1===e.nodeType&&F(e)}},H=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,V=t=>ct(t).S,z=(t,e)=>{e&&!t.k&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.k=e)))},B=(t,e)=>{if(t.t|=16,!(4&t.t))return z(t,t.O),jt((()=>D(t,e)));t.t|=512},D=(t,e)=>{const n=t._;let l;return e&&(l=Q(n,"componentWillLoad")),X(l,(()=>G(t,n,e)))},G=async(t,e,n)=>{const l=t.S,s=l["s-rc"];n&&(t=>{const e=t.C,n=t.S,l=e.t,s=((t,e)=>{let n=p(e),l=yt.get(n);if(t=11===t.nodeType?t:a,l)if("string"==typeof l){let e,s=m.get(t=t.head||t);s||m.set(t,s=new Set),s.has(n)||(e=a.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(d&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(t);I(t,e),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>J(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},I=(t,i)=>{try{i=i.render&&i.render(),t.t&=-17,t.t|=2,((t,i)=>{const c=t.S,f=t.C,u=t.M||v(null,null),$=(t=>t&&t.m===j)(i)?i:g(null,null,i);if(l=c.tagName,f.N&&($.u=$.u||{},f.N.map((([t,e])=>$.u[e]=c[t]))),$.m=null,$.t|=4,t.M=$,$.p=u.p=c.shadowRoot||c,e=c["s-sc"],n=c["s-cr"],s=d&&0!=(1&f.t),o=!1,W(u,$),h.t|=1,r){let t,e,n,l,s,o;F($.p);let r=0;for(;r<q.length;r++)t=q[r],e=t.v,e["s-ol"]||(n=a.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(r=0;r<q.length;r++)if(t=q[r],e=t.v,t.j){for(l=t.j.parentNode,s=t.j.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===e["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==e.parentNode||e.nextSibling!==s)&&e!==s&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,s))}else 1===e.nodeType&&(e.hidden=!0)}o&&U($.p),h.t&=-2,q.length=0})(t,i)}catch(c){ht(c,t.S)}return null},J=t=>{const e=t.S,n=t.O;64&t.t||(t.t|=64,Y(e),t.R(e),n||K()),t.k&&(t.k(),t.k=void 0),512&t.t&&vt((()=>B(t,!1))),t.t&=-517},K=()=>{Y(a.documentElement),vt((()=>(t=>{const e=h.ce("appload",{detail:{namespace:"flags"}});return t.dispatchEvent(e),e})(c)))},Q=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){ht(l)}},X=(t,e)=>t&&t.then?t.then(e):e(),Y=t=>t.classList.add("hydrated"),Z=(t,e,n)=>{if(e.T){t.watchers&&(e.P=t.watchers);const l=Object.entries(e.T),s=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>ct(this).A.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=ct(t),o=s.S,r=s.A.get(e),i=s.t,c=s._;if(n=((t,e)=>null==t||w(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?t+"":t)(n,l.T[e][0]),(!(8&i)||void 0===r)&&n!==r&&(!Number.isNaN(r)||!Number.isNaN(n))&&(s.A.set(e,n),c)){if(l.P&&128&i){const t=l.P[e];t&&t.map((t=>{try{c[t](n,r,e)}catch(l){ht(l,o)}}))}2==(18&i)&&B(s,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,l){h.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e))l=this[e],delete this[e];else if(s.hasOwnProperty(e)&&"number"==typeof this[e]&&this[e]==l)return;this[e]=(null!==l||"boolean"!=typeof this[e])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,l])=>{const s=l[1]||t;return n.set(s,t),512&l[0]&&e.N.push([t,s]),s}))}}return t},tt=t=>{const e=t.cloneNode;t.cloneNode=function(t){const n=this,l=n.shadowRoot&&d,s=e.call(n,!!l&&t);if(!l&&t){let t,e,l=0,o=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;l<n.childNodes.length;l++)t=n.childNodes[l]["s-nr"],e=o.every((t=>!n.childNodes[l][t])),t&&(s.__appendChild?s.__appendChild(t.cloneNode(!0)):s.appendChild(t.cloneNode(!0))),e&&s.appendChild(n.childNodes[l].cloneNode(!0))}return s}},et=t=>{t.__appendChild=t.appendChild,t.appendChild=function(t){const e=t["s-sn"]=lt(t),n=st(this.childNodes,e);if(n){const l=ot(n,e),s=l[l.length-1];return s.parentNode.insertBefore(t,s.nextSibling)}return this.__appendChild(t)}},nt=(t,e)=>{class n extends Array{item(t){return this[t]}}if(8&e.t){const e=t.__lookupGetter__("childNodes");Object.defineProperty(t,"children",{get(){return this.childNodes.map((t=>1===t.nodeType))}}),Object.defineProperty(t,"childElementCount",{get:()=>t.children.length}),Object.defineProperty(t,"childNodes",{get(){const t=e.call(this);if(0==(1&h.t)&&2&ct(this).t){const e=new n;for(let n=0;n<t.length;n++){const l=t[n]["s-nr"];l&&e.push(l)}return e}return n.from(t)}})}},lt=t=>t["s-sn"]||1===t.nodeType&&t.getAttribute("slot")||"",st=(t,e)=>{let n,l=0;for(;l<t.length;l++){if(n=t[l],n["s-sr"]&&n["s-sn"]===e)return n;if(n=st(n.childNodes,e),n)return n}return null},ot=(t,e)=>{const n=[t];for(;(t=t.nextSibling)&&t["s-sn"]===e;)n.push(t);return n},rt=(t,e={})=>{const n=[],l=e.exclude||[],s=c.customElements,o=a.head,r=o.querySelector("meta[charset]"),i=a.createElement("style"),f=[];let u,$=!0;Object.assign(h,e),h.l=new URL(e.resourcesUrl||"./",a.baseURI).href,t.map((t=>{t[1].map((o=>{const r={t:o[0],o:o[1],T:o[2],L:o[3]};r.T=o[2],r.N=[],r.P={},!d&&1&r.t&&(r.t|=8);const i=e.transformTagName?e.transformTagName(r.o):r.o,c=class extends HTMLElement{constructor(t){super(t),at(t=this,r),1&r.t&&(d?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t)),nt(t,r)}connectedCallback(){u&&(clearTimeout(u),u=null),$?f.push(this):h.jmp((()=>(t=>{if(0==(1&h.t)){const e=ct(t),n=e.C,l=()=>{};if(!(1&e.t)){e.t|=1,12&n.t&&(t=>{const e=t["s-cr"]=a.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){z(e,e.O=n);break}}n.T&&Object.entries(n.T).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),vt((()=>(async(t,e,n,l,s)=>{if(0==(32&e.t)){{if(e.t|=32,(s=$t(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.P=s.watchers,Z(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(i){ht(i)}e.t&=-9,e.t|=128,t()}if(s.style){let t=s.style;const e=p(n);if(!yt.has(e)){const l=()=>{};8&n.t&&(t=await __sc_import_flags("./p-b10887b2.js").then((n=>n.scopeCss(t,e,!1)))),((t,e,n)=>{let l=yt.get(t);y&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,yt.set(t,l)})(e,t,!!(1&n.t)),l()}}}const o=e.O,r=()=>B(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)))}l()}})(this)))}disconnectedCallback(){h.jmp((()=>{}))}componentOnReady(){return ct(this).W}};tt(c.prototype),et(c.prototype),r.U=t[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,Z(c,r,1)))}))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),$=!1,f.length?f.map((t=>t.connectedCallback())):h.jmp((()=>u=setTimeout(K,30)))},it=new WeakMap,ct=t=>it.get(t),ft=(t,e)=>it.set(e._=t,e),at=(t,e)=>{const n={t:0,S:t,C:e,A:new Map};return n.W=new Promise((t=>n.R=t)),t["s-p"]=[],t["s-rc"]=[],it.set(t,n)},ut=(t,e)=>e in t,ht=(t,e)=>(0,console.error)(t,e),dt=new Map,$t=t=>{const e=t.o.replace(/-/g,"_"),n=t.U,l=dt.get(n);return l?l[e]:__sc_import_flags(`./${n}.entry.js`).then((t=>(dt.set(n,t),t[e])),ht)},yt=new Map,mt=[],pt=[],bt=(t,e)=>n=>{t.push(n),i||(i=!0,e&&4&h.t?vt(gt):h.raf(gt))},wt=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){ht(e)}t.length=0},gt=()=>{wt(mt),wt(pt),(i=mt.length>0)&&h.raf(gt)},vt=t=>$().then(t),jt=bt(pt,!0);export{f as C,u as H,t as N,$ as a,rt as b,a as d,V as g,g as h,h as p,ft as r,c as w}