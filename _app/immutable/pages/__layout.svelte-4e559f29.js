import{F as Z,S as j,i as J,s as P,G as T,e as v,t as $,k as H,c as b,a as k,h as ee,d as h,m as R,f as K,b as A,g as w,H as te,I as O,n as q,J as ae,w as le,K as oe,L as se,M as V,N as ne,O as re,P as ie,r as E,p as I,Q as ce,x as fe,y as de,z as ue,q as me,C as he,R as pe,T as _e,o as ye}from"../chunks/index-fa29ac3f.js";function F(o,{delay:s=0,duration:n=400,easing:l=Z}={}){const i=+getComputedStyle(o).opacity;return{delay:s,duration:n,easing:l,css:c=>`opacity: ${c*i}`}}const{setTimeout:G}=se;function ge(o){let s=!1,n=()=>{s=!1},l,i,c,a,t,r,p,u,x;return T(o[5]),T(o[6]),{c(){i=v("title"),c=$("\uC11C\uB9AC"),a=H(),t=v("canvas"),r=H(),p=v("canvas"),this.h()},l(f){i=b(f,"TITLE",{});var m=k(i);c=ee(m,"\uC11C\uB9AC"),m.forEach(h),a=R(f),t=b(f,"CANVAS",{style:!0,class:!0}),k(t).forEach(h),r=R(f),p=b(f,"CANVAS",{class:!0}),k(p).forEach(h),this.h()},h(){K(t,"opacity","0"),A(t,"class","svelte-alvyvv"),A(p,"class","svelte-alvyvv")},m(f,m){w(f,i,m),te(i,c),w(f,a,m),w(f,t,m),o[7](t),w(f,r,m),w(f,p,m),o[8](p),u||(x=[O(window,"resize",o[5]),O(window,"scroll",()=>{s=!0,clearTimeout(l),l=G(n,100),o[6]()})],u=!0)},p(f,[m]){m&8&&!s&&(s=!0,clearTimeout(l),scrollTo(window.pageXOffset,f[3]),l=G(n,100))},i:q,o:q,d(f){f&&h(i),f&&h(a),f&&h(t),o[7](null),f&&h(r),f&&h(p),o[8](null),u=!1,ae(x)}}}function we(o,s,n){let l,i,c,a,t,r,p=0,u,x=!1,f=[],m=[],S={},C;function z(){a.clearRect(0,0,l,i);for(let e of m){e.o+=e.d,e.o>1&&(e.o=1,e.d=-e.d),e.o<0&&(e.o=0,e.d=-e.d),e.x+=e.speedx,e.y+=e.speedy,e.x+e.r<0&&(e.x=l+e.r),e.y+e.r<0&&(e.y=document.scrollingElement.scrollHeight+e.r),e.x-e.r>l&&(e.x=-e.r),e.y-e.r>document.scrollingElement.scrollHeight&&(e.y=-e.r);const M=a.createRadialGradient(e.x,e.y-r*e.parallax,0,e.x,e.y-r*e.parallax,e.r);M.addColorStop(0,`rgba(${e.fill}, ${.05*e.o*((36-p)/36)})`),M.addColorStop(.8,`rgba(${e.fill}, ${.01*e.o*((36-p)/36)})`),M.addColorStop(1,`rgba(${e.fill}, 0)`),a.beginPath(),a.arc(e.x,e.y-r*e.parallax,e.r,0,2*Math.PI),a.fillStyle=M,a.fill()}for(let e of f)e.y+=e.speed,e.y>document.scrollingElement.scrollHeight&&(e.y=-e.h),a.drawImage(S[e.o][p],e.x,e.y-r*e.parallax,e.w,e.h);C&&requestAnimationFrame(z)}le(async()=>{t=new Image,t.src="seorii.png",t.onload=async()=>{n(4,u.width=400,u),n(4,u.height=400,u);let e=u.getContext("2d");for(let d of[.98,.97,.89]){S[d]=[];for(let _=0;_<=12;_++)e.clearRect(0,0,u.width,u.height),e.filter=`blur(${_}px)`,e.drawImage(t,10,10,u.width-20,u.height-20),await new Promise(y=>setTimeout(y,0)),await new Promise(y=>{const g=new Image;g.onload=()=>{S[d].push(g),y()},g.src=u.toDataURL()})}n(4,u.style.display="none",u);let M=0;a=c.getContext("2d");for(let d=0;d<12&&!(M>1e4);d++){const _=x?Math.random()*200+100:Math.random()*300+400,y=_/t.width*t.height,g=Math.random()*(l-_+400)-200,D=Math.random()*(document.scrollingElement.scrollHeight+400)-200;let N=!1;for(let L of f)if(Math.abs(L.x-g)<_&&Math.abs(L.y-D)<y){N=!0;break}if(N){d--,M++;continue}f.push({x:g,y:D,w:_,h:y,o:[.98,.97,.89][Math.floor(Math.random()*3)],speed:Math.random()*.2+.02,parallax:Math.random()*.4+.4})}for(let d=0;d<Math.sqrt(i*l)/5;d++){const _=Math.random()*50+200,y=Math.random()*(l-_+400)-200,g=Math.random()*(document.scrollingElement.scrollHeight+400)-200;m.push({x:y,y:g,r:_,o:Math.random(),d:Math.random()*.001-.002,speedx:Math.random()+.02,speedy:Math.random()+.02,fill:["72, 117, 237","72, 117, 237","66, 66, 66"][Math.floor(Math.random()*3)],parallax:Math.random()*.2+.7})}C=setInterval(()=>{for(let d of m)d.speedx+=Math.random()*.1-.05,d.speedy+=Math.random()*.1-.05,d.speedx=Math.min(d.speedx,1),d.speedy=Math.min(d.speedy,1),d.speedx=Math.max(d.speedx,-1),d.speedy=Math.max(d.speedy,-1)},1e3),z()}}),oe(()=>{clearInterval(C)});function Q(){n(0,l=window.innerWidth),n(1,i=window.innerHeight)}function U(){n(3,r=window.pageYOffset)}function X(e){V[e?"unshift":"push"](()=>{u=e,n(4,u)})}function B(e){V[e?"unshift":"push"](()=>{c=e,n(2,c),n(0,l),n(1,i)})}return o.$$.update=()=>{o.$$.dirty&7&&c&&(n(2,c.width=l,c),n(2,c.height=i,c)),o.$$.dirty&1&&(x=l<1024),o.$$.dirty&10&&(p=Math.max(Math.min(12,Math.round((r-20)/(i-200)*12)),0))},[l,i,c,r,u,Q,U,X,B]}class Me extends j{constructor(s){super(),J(this,s,we,ge,P,{})}}function W(o){let s,n,l,i;const c=o[2].default,a=pe(c,o,o[1],null);return{c(){s=v("div"),a&&a.c(),this.h()},l(t){s=b(t,"DIV",{style:!0});var r=k(s);a&&a.l(r),r.forEach(h),this.h()},h(){K(s,"height","100%")},m(t,r){w(t,s,r),a&&a.m(s,null),i=!0},p(t,r){o=t,a&&a.p&&(!i||r&2)&&ne(a,c,o,o[1],i?ie(c,o[1],r,null):re(o[1]),null)},i(t){i||(E(a,t),T(()=>{l&&l.end(1),n=_e(s,F,{duration:1,delay:Y}),n.start()}),i=!0)},o(t){I(a,t),n&&n.invalidate(),l=ce(s,F,{duration:Y}),i=!1},d(t){t&&h(s),a&&a.d(t),t&&l&&l.end()}}}function xe(o){let s,n,l,i=o[0],c;s=new Me({});let a=W(o);return{c(){fe(s.$$.fragment),n=H(),l=v("main"),a.c(),this.h()},l(t){de(s.$$.fragment,t),n=R(t),l=b(t,"MAIN",{class:!0});var r=k(l);a.l(r),r.forEach(h),this.h()},h(){A(l,"class","svelte-1vekqzl")},m(t,r){ue(s,t,r),w(t,n,r),w(t,l,r),a.m(l,null),c=!0},p(t,[r]){r&1&&P(i,i=t[0])?(ye(),I(a,1,1,q),me(),a=W(t),a.c(),E(a,1),a.m(l,null)):a.p(t,r)},i(t){c||(E(s.$$.fragment,t),E(a),c=!0)},o(t){I(s.$$.fragment,t),I(a),c=!1},d(t){he(s,t),t&&h(n),t&&h(l),a.d(t)}}}const ke=async({url:o})=>({props:{url:o}}),Y=200;function ve(o,s,n){let{$$slots:l={},$$scope:i}=s,{url:c}=s;return o.$$set=a=>{"url"in a&&n(0,c=a.url),"$$scope"in a&&n(1,i=a.$$scope)},[c,i,l]}class Ee extends j{constructor(s){super(),J(this,s,ve,xe,P,{url:0})}}export{Ee as default,ke as load};