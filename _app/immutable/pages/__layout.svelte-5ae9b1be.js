import{F as $,S as j,i as J,s as P,G as T,e as b,t as ee,k as q,c as E,a as I,h as te,d as p,m as A,f as K,b as D,g as w,H as ae,I as F,n as L,J as le,w as oe,K as se,L as G,M as ne,N as re,O as ie,r as C,p as H,P as ce,x as fe,y as de,z as ue,q as he,C as me,Q as pe,R as _e,o as ye}from"../chunks/index-0679b3d5.js";function U(o,{delay:s=0,duration:n=400,easing:l=$}={}){const i=+getComputedStyle(o).opacity;return{delay:s,duration:n,easing:l,css:c=>`opacity: ${c*i}`}}function ge(o){let s=!1,n=()=>{s=!1},l,i,c,a,t,r,_,f,v;return T(o[5]),T(o[6]),{c(){i=b("title"),c=ee("\uC11C\uB9AC"),a=q(),t=b("canvas"),r=q(),_=b("canvas"),this.h()},l(d){i=E(d,"TITLE",{});var h=I(i);c=te(h,"\uC11C\uB9AC"),h.forEach(p),a=A(d),t=E(d,"CANVAS",{style:!0,class:!0}),I(t).forEach(p),r=A(d),_=E(d,"CANVAS",{class:!0}),I(_).forEach(p),this.h()},h(){K(t,"opacity","0"),D(t,"class","svelte-alvyvv"),D(_,"class","svelte-alvyvv")},m(d,h){w(d,i,h),ae(i,c),w(d,a,h),w(d,t,h),o[7](t),w(d,r,h),w(d,_,h),o[8](_),f||(v=[F(window,"resize",o[5]),F(window,"scroll",()=>{s=!0,clearTimeout(l),l=setTimeout(n,100),o[6]()})],f=!0)},p(d,[h]){h&8&&!s&&(s=!0,clearTimeout(l),scrollTo(window.pageXOffset,d[3]),l=setTimeout(n,100))},i:L,o:L,d(d){d&&p(i),d&&p(a),d&&p(t),o[7](null),d&&p(r),d&&p(_),o[8](null),f=!1,le(v)}}}function we(o,s,n){let l,i,c,a,t,r,_=0,f,v=!1,d=[],h=[],k={},R;const x=v?8:14,S=[.98,.97,.89];function z(){a.clearRect(0,0,l,i);for(let e of h){e.o+=e.d,e.o>1&&(e.o=1,e.d=-e.d),e.o<0&&(e.o=0,e.d=-e.d),e.x+=e.speedx,e.y+=e.speedy,e.x+e.r<0&&(e.x=l+e.r),e.y+e.r<0&&(e.y=document.scrollingElement.scrollHeight+e.r),e.x-e.r>l&&(e.x=-e.r),e.y-e.r>document.scrollingElement.scrollHeight&&(e.y=-e.r);const M=a.createRadialGradient(e.x,e.y-r*e.parallax,0,e.x,e.y-r*e.parallax,e.r);M.addColorStop(0,`rgba(${e.fill}, ${.05*e.o*(1-_/x*.3)})`),M.addColorStop(.8,`rgba(${e.fill}, ${.01*e.o*(1-_/x*.3)})`),M.addColorStop(1,`rgba(${e.fill}, 0)`),a.beginPath(),a.arc(e.x,e.y-r*e.parallax,e.r,0,2*Math.PI),a.fillStyle=M,a.fill()}for(let e of d)e.y+=e.speed,e.y>document.scrollingElement.scrollHeight&&(e.y=-e.h),a.drawImage(k[e.o][_],e.x,e.y-r*e.parallax,e.w,e.h);R&&requestAnimationFrame(z)}oe(async()=>{t=new Image,t.src="seorii.png",t.onload=async()=>{n(4,f.width=400,f),n(4,f.height=400,f);let e=f.getContext("2d");for(let u of S)k[u]=[],e.clearRect(0,0,f.width,f.height),e.drawImage(t,15,15,f.width-30,f.height-30),await new Promise(m=>{const g=new Image;g.onload=()=>{for(let y=0;y<=x;y++)k[u][y]=g;m()},g.src=f.toDataURL()});(async()=>{for(let u of S)for(let m=0;m<=x;m++)e.clearRect(0,0,f.width,f.height),e.filter=`blur(${m}px)`,e.drawImage(t,15,15,f.width-30,f.height-30),await new Promise(g=>{const y=new Image;y.onload=()=>{k[u][m]=y,g()},y.src=f.toDataURL()});n(4,f.style.display="none",f)})().then();let M=0;a=c.getContext("2d");for(let u=0;u<Math.sqrt(document.scrollingElement.scrollHeight)/4&&!(M>1e4);u++){const m=v?Math.random()*250+100:Math.random()*300+400,g=m/t.width*t.height,y=Math.random()*(l-m+400)-200,N=Math.random()*(document.scrollingElement.scrollHeight+400)-200;let O=!1;for(let V of d)if(Math.abs(V.x-y)<m&&Math.abs(V.y-N)<g){O=!0;break}if(O){u--,M++;continue}d.push({x:y,y:N,w:m,h:g,o:S[Math.floor(Math.random()*S.length)],speed:Math.random()*.2+.02,parallax:Math.random()*.4+.4})}for(let u=0;u<Math.sqrt(document.scrollingElement.scrollHeight*l)/8;u++){const m=Math.random()*50+200,g=Math.random()*(l-m+400)-200,y=Math.random()*(document.scrollingElement.scrollHeight+400)-200;h.push({x:g,y,r:m,o:Math.random(),d:Math.random()*.001-.002,speedx:Math.random()*2-1,speedy:Math.random()*2-1,fill:["72, 117, 237","72, 117, 237","66, 66, 66"][Math.floor(Math.random()*3)],parallax:Math.random()*.2+.7})}R=setInterval(()=>{for(let u of h)u.speedx+=Math.random()*.1-.05,u.speedy+=Math.random()*.1-.05,u.speedx=Math.min(u.speedx,1),u.speedy=Math.min(u.speedy,1),u.speedx=Math.max(u.speedx,-1),u.speedy=Math.max(u.speedy,-1)},200),z()}}),se(()=>{clearInterval(R)});function Q(){n(0,l=window.innerWidth),n(1,i=window.innerHeight)}function X(){n(3,r=window.pageYOffset)}function B(e){G[e?"unshift":"push"](()=>{f=e,n(4,f)})}function Z(e){G[e?"unshift":"push"](()=>{c=e,n(2,c),n(0,l),n(1,i)})}return o.$$.update=()=>{o.$$.dirty&1&&(v=l<1024),o.$$.dirty&7&&c&&(n(2,c.width=l,c),n(2,c.height=i,c)),o.$$.dirty&10&&(_=Math.max(Math.min(x,Math.round((r-20)/(i-200)*x)),0))},[l,i,c,r,f,Q,X,B,Z]}class Me extends j{constructor(s){super(),J(this,s,we,ge,P,{})}}function W(o){let s,n,l,i;const c=o[2].default,a=pe(c,o,o[1],null);return{c(){s=b("div"),a&&a.c(),this.h()},l(t){s=E(t,"DIV",{style:!0});var r=I(s);a&&a.l(r),r.forEach(p),this.h()},h(){K(s,"height","100%")},m(t,r){w(t,s,r),a&&a.m(s,null),i=!0},p(t,r){o=t,a&&a.p&&(!i||r&2)&&ne(a,c,o,o[1],i?ie(c,o[1],r,null):re(o[1]),null)},i(t){i||(C(a,t),T(()=>{l&&l.end(1),n=_e(s,U,{duration:1,delay:Y}),n.start()}),i=!0)},o(t){H(a,t),n&&n.invalidate(),l=ce(s,U,{duration:Y}),i=!1},d(t){t&&p(s),a&&a.d(t),t&&l&&l.end()}}}function ve(o){let s,n,l,i=o[0],c;s=new Me({});let a=W(o);return{c(){fe(s.$$.fragment),n=q(),l=b("main"),a.c(),this.h()},l(t){de(s.$$.fragment,t),n=A(t),l=E(t,"MAIN",{class:!0});var r=I(l);a.l(r),r.forEach(p),this.h()},h(){D(l,"class","svelte-1vekqzl")},m(t,r){ue(s,t,r),w(t,n,r),w(t,l,r),a.m(l,null),c=!0},p(t,[r]){r&1&&P(i,i=t[0])?(ye(),H(a,1,1,L),he(),a=W(t),a.c(),C(a,1),a.m(l,null)):a.p(t,r)},i(t){c||(C(s.$$.fragment,t),C(a),c=!0)},o(t){H(s.$$.fragment,t),H(a),c=!1},d(t){me(s,t),t&&p(n),t&&p(l),a.d(t)}}}const Ee=async({url:o})=>({props:{url:o}}),Y=200;function xe(o,s,n){let{$$slots:l={},$$scope:i}=s,{url:c}=s;return o.$$set=a=>{"url"in a&&n(0,c=a.url),"$$scope"in a&&n(1,i=a.$$scope)},[c,i,l]}class Ie extends j{constructor(s){super(),J(this,s,xe,ve,P,{url:0})}}export{Ie as default,Ee as load};