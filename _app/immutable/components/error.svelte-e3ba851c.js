import{S as B,i as C,s as H,k as v,q as k,a as h,e as q,l as E,m as g,r as P,h as p,c as R,b as u,E as $,u as S,B as w,P as O}from"../chunks/index-26bfa88e.js";import{s as z}from"../chunks/singletons-6d3e532a.js";const A=()=>{const t=z,s={page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated};return Object.defineProperties(s,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},enumerable:!1},session:{get(){return F(),{}},enumerable:!1}}),s},D={subscribe(t){return A().page.subscribe(t)}};function F(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function N(t){let s,i=t[0].error.frame+"",o;return{c(){s=v("pre"),o=k(i)},l(r){s=E(r,"PRE",{});var a=g(s);o=P(a,i),a.forEach(p)},m(r,a){u(r,s,a),$(s,o)},p(r,a){a&1&&i!==(i=r[0].error.frame+"")&&S(o,i)},d(r){r&&p(s)}}}function y(t){let s,i=t[0].error.stack+"",o;return{c(){s=v("pre"),o=k(i)},l(r){s=E(r,"PRE",{});var a=g(s);o=P(a,i),a.forEach(p)},m(r,a){u(r,s,a),$(s,o)},p(r,a){a&1&&i!==(i=r[0].error.stack+"")&&S(o,i)},d(r){r&&p(s)}}}function G(t){let s,i=t[0].status+"",o,r,a,b=t[0].error.message+"",_,d,c,m,l=t[0].error.frame&&N(t),n=t[0].error.stack&&y(t);return{c(){s=v("h1"),o=k(i),r=h(),a=v("pre"),_=k(b),d=h(),l&&l.c(),c=h(),n&&n.c(),m=q()},l(e){s=E(e,"H1",{});var f=g(s);o=P(f,i),f.forEach(p),r=R(e),a=E(e,"PRE",{});var j=g(a);_=P(j,b),j.forEach(p),d=R(e),l&&l.l(e),c=R(e),n&&n.l(e),m=q()},m(e,f){u(e,s,f),$(s,o),u(e,r,f),u(e,a,f),$(a,_),u(e,d,f),l&&l.m(e,f),u(e,c,f),n&&n.m(e,f),u(e,m,f)},p(e,[f]){f&1&&i!==(i=e[0].status+"")&&S(o,i),f&1&&b!==(b=e[0].error.message+"")&&S(_,b),e[0].error.frame?l?l.p(e,f):(l=N(e),l.c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null),e[0].error.stack?n?n.p(e,f):(n=y(e),n.c(),n.m(m.parentNode,m)):n&&(n.d(1),n=null)},i:w,o:w,d(e){e&&p(s),e&&p(r),e&&p(a),e&&p(d),l&&l.d(e),e&&p(c),n&&n.d(e),e&&p(m)}}}function I(t,s,i){let o;return O(t,D,r=>i(0,o=r)),[o]}class L extends B{constructor(s){super(),C(this,s,I,G,H,{})}}export{L as default};
