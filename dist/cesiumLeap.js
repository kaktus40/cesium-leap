//Copyright 2012, etc.

/**
 * almond 0.1.2 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

(function(e,t){typeof define=="function"&&define.amd?define(["Leap"],t):e.CesiumLeap=t(e.Leap)})(this,function(e){var t,n,r;return function(e){function c(e,t){var n=t&&t.split("/"),r=o.map,i=r&&r["*"]||{},s,u,a,f,l,c,h,p,d,v;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(p=0;v=e[p];p++)if(v===".")e.splice(p,1),p-=1;else if(v===".."){if(p===1&&(e[2]===".."||e[0]===".."))return!0;p>0&&(e.splice(p-1,2),p-=2)}e=e.join("/")}if((n||i)&&r){s=e.split("/");for(p=s.length;p>0;p-=1){u=s.slice(0,p).join("/");if(n)for(d=n.length;d>0;d-=1){a=r[n.slice(0,d).join("/")];if(a){a=a[u];if(a){f=a,l=p;break}}}if(f)break;!c&&i&&i[u]&&(c=i[u],h=p)}!f&&c&&(f=c,l=h),f&&(s.splice(0,l,f),e=s.join("/"))}return e}function h(t,n){return function(){return l.apply(e,a.call(arguments,0).concat([t,n]))}}function p(e){return function(t){return c(t,e)}}function d(e){return function(t){i[e]=t}}function v(t){if(s.hasOwnProperty(t)){var n=s[t];delete s[t],u[t]=!0,f.apply(e,n)}if(!i.hasOwnProperty(t))throw new Error("No "+t);return i[t]}function m(e,t){var n,r,i=e.indexOf("!");return i!==-1?(n=c(e.slice(0,i),t),e=e.slice(i+1),r=v(n),r&&r.normalize?e=r.normalize(e,p(t)):e=c(e,t)):e=c(e,t),{f:n?n+"!"+e:e,n:e,p:r}}function g(e){return function(){return o&&o.config&&o.config[e]||{}}}var i={},s={},o={},u={},a=[].slice,f,l;f=function(t,n,r,o){var a=[],f,l,c,p,y,b;o=o||t;if(typeof r=="function"){n=!n.length&&r.length?["require","exports","module"]:n;for(b=0;b<n.length;b++){y=m(n[b],o),c=y.f;if(c==="require")a[b]=h(t);else if(c==="exports")a[b]=i[t]={},f=!0;else if(c==="module")l=a[b]={id:t,uri:"",exports:i[t],config:g(t)};else if(i.hasOwnProperty(c)||s.hasOwnProperty(c))a[b]=v(c);else if(y.p)y.p.load(y.n,h(o,!0),d(c),{}),a[b]=i[c];else if(!u[c])throw new Error(t+" missing "+c)}p=r.apply(i[t],a);if(t)if(l&&l.exports!==e&&l.exports!==i[t])i[t]=l.exports;else if(p!==e||!f)i[t]=p}else t&&(i[t]=r)},t=n=l=function(t,n,r,i){return typeof t=="string"?v(m(t,n).f):(t.splice||(o=t,n.splice?(t=n,n=r,r=null):t=e),n=n||function(){},i?f(e,t,n,r):setTimeout(function(){f(e,t,n,r)},15),l)},l.config=function(e){return o=e,l},r=function(e,t,n){t.splice||(n=t,t=[]),s[e]=[e,t,n]},r.amd={jQuery:!0}}(),r("tools/almond",function(){}),r("CesiumLeap",["require","Leap"],function(e){var t=e("Leap"),n="0.0.1",r=function(e){var r=this;this.version=n,this.ellipsoid=e.ellipsoid,this.scene=e.scene,this.leapController=new t.Controller,this.leapController.on("connect",function(){r.onConnect.apply(r,arguments)}),this.leapController.on("frame",function(e){r.onFrame(e)})};return r.prototype.onConnect=function(){console.log("successfully connected with leap controller!")},r.prototype.onFrame=function(e){var e=frame.data;if(frame.valid&&e.hands.length===1){var t=e.pointables;if(t.length>1){e=e.hands[0];if(e.timeVisible>.75){var n=this,r=n.scene.getCamera(),i=r.controller,s={},o=controller.ellipsoid.cartesianToCartographic(r.position).height,u=o/100;s.x=e.palmPosition[0],s.y=e.palmPosition[2],s.z=e.palmPosition[1];var a=e.palmNormal;s.pitch=-1*a[2],s.rotate=e.direction[0],s.yaw=-1*a[0];var f=175,l=(s.z-f)/-100;i.moveForward(l*u),i.moveRight(s.x*u/100),i.moveDown(s.y*u/100),i.lookUp(s.pitch/100),i.twistRight(s.yaw/100),i.lookRight(s.rotate/100)}}}},r}),r("Leap",function(){return e}),n("CesiumLeap")});