!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=document.querySelector("canvas"),o=r.getContext("2d"),i=20;r.height=500,r.width=500;const c=r.height/i;r.width;var u=function(){function e(t,n){let r=(Math.floor(Math.random()*c-1)+1)*i;if(arguments.length>0){let o=!1;for(let e=0;e<t.length;e++)if(t[e].x==n&&t[e].y==r){o=!0;break}if(o)return r=e(t,n)}return r}let t,n;return{setFruitLocation:function(r){t=e(),n=e(r,t),this.pos={x:t,y:n}},drawFruit:function(){o.fillStyle="#c92424",o.fillRect(t,n,i,i)},pos:{x:t,y:n}}};var l=function(){let e={x:200,y:200},t=[],n=3,c=1*i,u=0;for(let r=0;r<n;r++)t.push((l=e.x+c*(r+1),a=e.y+u*(r+1),{x:l,y:a}));var l,a;return{drawSnake:function(){o.fillStyle="#13ba2c",t.forEach(e=>{o.fillRect(e.x,e.y,i,i)}),o.fillRect(e.x,e.y,i,i)},update:function(){for(let e=0;e<t.length-1;e++)t[e]=t[e+1];t[n-1]={x:e.x,y:e.y},e.x+=c,e.y+=u,e.x>r.width&&(e.x=0),e.y>r.height&&(e.y=0),e.x<0-i&&(e.x=r.width),e.y<0-i&&(e.y=r.height),this.body=[e,...t]},changeDirection:function t(n){if(e.x<0||e.x==r.width||e.y<0||e.y==r.height)setTimeout(()=>{t(n)},1);else switch(n){case"Up":u!=1*i&&(c=0,u=-1*i);break;case"Down":u!=-1*i&&(c=0,u=1*i);break;case"Left":c!=1*i&&(u=0,c=-1*i);break;case"Right":c!=-1*i&&(u=0,c=1*i)}},eating:function(t){e.x==t.pos.x&&e.y==t.pos.y&&(n++,t.setFruitLocation(this.body))},collide:function(n){t.forEach(t=>{t.x==e.x&&t.y==e.y&&clearInterval(n)})},body:[e,...t]}};const a=document.querySelector("#Up"),f=document.querySelector("#Down"),d=document.querySelector("#Left"),s=document.querySelector("#Right"),y=l(),h=u();!function(){h.setFruitLocation(y.body);const e=setInterval(()=>{o.clearRect(0,0,r.width,r.height),h.drawFruit(),y.drawSnake(),y.update(),y.eating(h),y.collide(e)},120);let t=!1;function n(e){t?setTimeout(()=>{n(e)},1):(t=!0,y.changeDirection(e.target.id),setTimeout(()=>{t=!1},120))}window.addEventListener("keydown",(function e(n){t?setTimeout(()=>{e(n)},1):(t=!0,y.changeDirection(n.key.replace("Arrow","")),setTimeout(()=>{t=!1},120))})),a.addEventListener("click",n),f.addEventListener("click",n),d.addEventListener("click",n),s.addEventListener("click",n)}()}]);