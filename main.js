!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.querySelector("canvas"),i=document.querySelector("#Up"),r=document.querySelector("#Down"),o=document.querySelector("#Left"),c=document.querySelector("#Right"),u=n.getContext("2d"),l=20;n.height=500,n.width=500;const a=n.height/l;n.width;const d=function(){let e={x:200,y:200},t=[];function i(e,t){return{x:e,y:t}}for(let n=0;n<3;n++)t.push(i(e.x-l*(n+1),e.y));let r=1*l,o=0;return{drawSnake:function(){u.fillStyle="#13ba2c",u.fillRect(e.x,e.y,l,l),t.forEach(e=>{u.fillRect(e.x,e.y,l,l)})},update:function(){temp1={x:e.x,y:e.y},temp2={x:null,y:null},e.x+=r,e.y+=o,t.forEach(e=>{temp2.x=e.x,temp2.y=e.y,e.x=temp1.x,e.y=temp1.y,temp1.x=temp2.x,temp1.y=temp2.y}),e.x>n.width&&(e.x=0),e.y>n.height&&(e.y=0),e.x<0-l&&(e.x=n.width),e.y<0-l&&(e.y=n.height),this.body=[e,...t]},changeDirection:function t(i){if(e.x<0||e.x==n.width||e.y<0||e.y==n.height)setTimeout(()=>{t(i)},1);else switch(i){case"Up":o!=1*l&&(r=0,o=-1*l);break;case"Down":o!=-1*l&&(r=0,o=1*l);break;case"Left":r!=1*l&&(o=0,r=-1*l);break;case"Right":r!=-1*l&&(o=0,r=1*l)}},eating:function(){e.x==f.pos.x&&e.y==f.pos.y&&(t.splice(0,0,i(e.x,e.y)),e.x+=r,e.y+=o,this.body=[e,...t],f.setFruitLocation())},collide:function(n){for(let i=0;i<t.length;i++)t[i].x==e.x&&t[i].y==e.y&&clearInterval(n)},body:[e,...t]}}(),f=function(){function e(t,n){let i=(Math.floor(Math.random()*a-1)+1)*l;return arguments.length>0&&t.filter(e=>e.x).includes(n)&&t.filter(e=>e.y).includes(i)?i=e(t,n):i}let t,n;return{setFruitLocation:function(){t=e(),n=e(d.body,t),this.pos={x:t,y:n}},drawFruit:function(){u.fillStyle="#c92424",u.fillRect(t,n,l,l)},pos:{x:t,y:n}}}();!function(){f.setFruitLocation();const e=setInterval(()=>{u.clearRect(0,0,n.width,n.height),f.drawFruit(),d.drawSnake(),d.update(),d.eating(),d.collide(e)},120);let t=!1;window.addEventListener("keydown",(function e(n){t?setTimeout(()=>{e(n)},1):(t=!0,d.changeDirection(n.key.replace("Arrow","")),setTimeout(()=>{t=!1},120))})),i.addEventListener("click",()=>{d.changeDirection("Up")}),r.addEventListener("click",()=>{d.changeDirection("Down")}),o.addEventListener("click",()=>{d.changeDirection("Left")}),c.addEventListener("click",()=>{d.changeDirection("Right")})}()}]);