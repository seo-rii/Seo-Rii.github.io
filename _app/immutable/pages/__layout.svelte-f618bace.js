import{F as V,S as R,i as O,s as S,G as k,e as x,t as W,k as P,c as b,a as v,h as Y,d as m,m as D,b as g,g as p,H as j,I as N,n as E,J,w as K,K as Q,f as X,L as B,M as U,N as Z,r as M,p as w,O as ee,x as te,y as ae,z as le,q as oe,C as se,P as ne,Q as re,o as ie}from"../chunks/index-97fb54bb.js";function $(s,{delay:o=0,duration:i=400,easing:l=V}={}){const r=+getComputedStyle(s).opacity;return{delay:o,duration:i,easing:l,css:f=>`opacity: ${f*r}`}}function fe(s){let o=!1,i=()=>{o=!1},l,r,f,a,t,n,h,_;return k(s[5]),k(s[6]),{c(){r=x("title"),f=W("\uC11C\uB9AC"),a=P(),t=x("canvas"),this.h()},l(d){r=b(d,"TITLE",{});var c=v(r);f=Y(c,"\uC11C\uB9AC"),c.forEach(m),a=D(d),t=b(d,"CANVAS",{style:!0,class:!0}),v(t).forEach(m),this.h()},h(){g(t,"style",n=`filter:blur(${s[4]}px);`),g(t,"class","svelte-alvyvv")},m(d,c){p(d,r,c),j(r,f),p(d,a,c),p(d,t,c),s[7](t),h||(_=[N(window,"resize",s[5]),N(window,"scroll",()=>{o=!0,clearTimeout(l),l=setTimeout(i,100),s[6]()})],h=!0)},p(d,[c]){c&8&&!o&&(o=!0,clearTimeout(l),scrollTo(window.pageXOffset,d[3]),l=setTimeout(i,100)),c&16&&n!==(n=`filter:blur(${d[4]}px);`)&&g(t,"style",n)},i:E,o:E,d(d){d&&m(r),d&&m(a),d&&m(t),s[7](null),h=!1,J(_)}}}function de(s,o,i){let l,r,f,a,t,n,h=0,_=[],d=[];function c(){a.filter="",a.clearRect(0,0,l,r);for(let e of d){if(isNaN(e.x))continue;const u=a.createRadialGradient(e.x,e.y-n*e.parallax,0,e.x,e.y-n*e.parallax,e.r);u.addColorStop(0,`rgba(${e.fill}, ${.05*e.o})`),u.addColorStop(.8,`rgba(${e.fill}, ${.01*e.o})`),u.addColorStop(1,`rgba(${e.fill}, 0)`),a.beginPath(),a.arc(e.x,e.y-n*e.parallax,e.r,0,2*Math.PI),a.fillStyle=u,a.fill(),e.o+=e.d,e.o>1&&(e.o=1,e.d=-e.d),e.o<0&&(e.o=0,e.d=-e.d),e.x+=e.speedx,e.y+=e.speedy,e.speedx+=Math.random()*.1-.05,e.speedy+=Math.random()*.1-.05,e.speedx=Math.min(e.speedx,1),e.speedy=Math.min(e.speedy,1),e.speedx=Math.max(e.speedx,-1),e.speedy=Math.max(e.speedy,-1),e.x+e.r<0&&(e.x=l+e.r),e.y+e.r<0&&(e.y=document.scrollingElement.scrollHeight+e.r),e.x-e.r>l&&(e.x=-e.r),e.y-e.r>document.scrollingElement.scrollHeight&&(e.y=-e.r)}a.globalAlpha=1;for(let e of _)e.y+=e.speed,e.y>document.scrollingElement.scrollHeight&&(e.y=-e.h),a.filter=`brightness(${e.o})`,a.drawImage(t,e.x,e.y-n*e.parallax,e.w,e.h);requestAnimationFrame(c)}K(()=>{t=new Image,t.src="seorii.png",t.onload=()=>{let e=0;a=f.getContext("2d");for(let u=0;u<12&&!(e>1e4);u++){const y=Math.random()*300+400,C=y/t.width*t.height,H=Math.random()*(l-y+400)-200,T=Math.random()*(document.scrollingElement.scrollHeight+400)-200;let I=!1;for(let A of _)if(Math.abs(A.x-H)<y&&Math.abs(A.y-T)<C){I=!0;break}if(I){u--,e++;continue}_.push({x:H,y:T,w:y,h:C,o:[.98,.97,.89][Math.floor(Math.random()*2)],speed:Math.random()*.2+.02,parallax:Math.random()*.4+.4})}for(let u=0;u<r*l/1e4;u++)d.push({x:Math.random()*l,y:Math.random()*document.scrollingElement.scrollHeight,r:Math.random()*50+200,o:Math.random(),d:Math.random()*.001-.002,speedx:Math.random()*1+.02,speedy:Math.random()*1+.02,fill:["72, 117, 237","99, 99, 99"][Math.floor(Math.random()*2)],parallax:Math.random()*.2+.7});c()}});function F(){i(0,l=window.innerWidth),i(1,r=window.innerHeight)}function G(){i(3,n=window.pageYOffset)}function L(e){Q[e?"unshift":"push"](()=>{f=e,i(2,f),i(0,l),i(1,r)})}return s.$$.update=()=>{s.$$.dirty&7&&f&&(i(2,f.width=l,f),i(2,f.height=r,f)),s.$$.dirty&8&&i(4,h=Math.min(25,Math.round((n-20)/10)))},[l,r,f,n,h,F,G,L]}class ce extends R{constructor(o){super(),O(this,o,de,fe,S,{})}}function q(s){let o,i,l,r;const f=s[2].default,a=ne(f,s,s[1],null);return{c(){o=x("div"),a&&a.c(),this.h()},l(t){o=b(t,"DIV",{style:!0});var n=v(o);a&&a.l(n),n.forEach(m),this.h()},h(){X(o,"height","100%")},m(t,n){p(t,o,n),a&&a.m(o,null),r=!0},p(t,n){s=t,a&&a.p&&(!r||n&2)&&B(a,f,s,s[1],r?Z(f,s[1],n,null):U(s[1]),null)},i(t){r||(M(a,t),k(()=>{l&&l.end(1),i=re(o,$,{duration:1,delay:z}),i.start()}),r=!0)},o(t){w(a,t),i&&i.invalidate(),l=ee(o,$,{duration:z}),r=!1},d(t){t&&m(o),a&&a.d(t),t&&l&&l.end()}}}function ue(s){let o,i,l,r=s[0],f;o=new ce({});let a=q(s);return{c(){te(o.$$.fragment),i=P(),l=x("main"),a.c(),this.h()},l(t){ae(o.$$.fragment,t),i=D(t),l=b(t,"MAIN",{class:!0});var n=v(l);a.l(n),n.forEach(m),this.h()},h(){g(l,"class","svelte-1vekqzl")},m(t,n){le(o,t,n),p(t,i,n),p(t,l,n),a.m(l,null),f=!0},p(t,[n]){n&1&&S(r,r=t[0])?(ie(),w(a,1,1,E),oe(),a=q(t),a.c(),M(a,1),a.m(l,null)):a.p(t,n)},i(t){f||(M(o.$$.fragment,t),M(a),f=!0)},o(t){w(o.$$.fragment,t),w(a),f=!1},d(t){se(o,t),t&&m(i),t&&m(l),a.d(t)}}}const _e=async({url:s})=>({props:{url:s}}),z=200;function me(s,o,i){let{$$slots:l={},$$scope:r}=o,{url:f}=o;return s.$$set=a=>{"url"in a&&i(0,f=a.url),"$$scope"in a&&i(1,r=a.$$scope)},[f,r,l]}class pe extends R{constructor(o){super(),O(this,o,me,ue,S,{url:0})}}export{pe as default,_e as load};
