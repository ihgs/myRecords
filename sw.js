if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>n(e,r),t={module:{uri:r},exports:o,require:d};i[r]=Promise.all(c.map((e=>t[e]||d(e)))).then((e=>(s(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-c7e05d32.js",revision:null},{url:"assets/index-d526a0c5.css",revision:null},{url:"index.html",revision:"19fc25c9801b4a2fe1261153de026c17"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"2630f7c9761b5c62cee576f24fa3f8c7"},{url:"apple-touch-icon.png",revision:"efce82cc2f69ee6c4a3ca0a7d81cb54e"},{url:"icon-192x192.png",revision:"5fd24603975452bd6ee5a764abe5f158"},{url:"icon-256x256.png",revision:"a68e2b7ed6bc60bf3257a8eb60f8e5d8"},{url:"icon-384x384.png",revision:"e8f8335505d558bcd024dac06d13719b"},{url:"icon-512x512.png",revision:"c3d14c4c9eb52666b463d1ebd538685a"},{url:"manifest.webmanifest",revision:"1baac30ca2d1f2dd4d17a4cd080dd21a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
