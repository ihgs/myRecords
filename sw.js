if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>s(e,o),l={module:{uri:o},exports:t,require:d};i[o]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-785ed399.css",revision:null},{url:"assets/index-9f4da03c.js",revision:null},{url:"index.html",revision:"e32d9e639ab2513a90ced457d212d58c"},{url:"registerSW.js",revision:"03a62641615780082038a93026e0d1bb"},{url:"favicon.ico",revision:"3465226d2d6e971f45697e88ef58eca1"},{url:"apple-touch-icon.png",revision:"27d7119100186bb7523a300a739e7e1e"},{url:"manifest.webmanifest",revision:"f3d5a0a1d829807fbc363072fe4832dc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
