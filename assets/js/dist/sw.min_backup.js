---
permalink: /:basename
---
/*!
 * jekyll-theme-chirpy v7.1.1 | © 2019 Cotes Chung | MIT Licensed | https://github.com/cotes2020/jekyll-theme-chirpy/
 */
!function(){"use strict";importScripts("./assets/js/data/swconf.js");const e=swconf.purge,t=swconf.interceptor;self.addEventListener("install",(t=>{e||t.waitUntil(caches.open(swconf.cacheName).then((e=>e.addAll(swconf.resources))))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((t=>Promise.all(t.map((t=>e||t!==swconf.cacheName?caches.delete(t):void 0))))))})),self.addEventListener("message",(e=>{"SKIP_WAITING"===e.data&&self.skipWaiting()})),self.addEventListener("fetch",(s=>{s.request.headers.has("range")||s.respondWith(caches.match(s.request).then((n=>n||fetch(s.request).then((n=>{const r=s.request.url;if(e||"GET"!==s.request.method||!function(e){const s=new URL(e),n=s.pathname;if(!s.protocol.startsWith("http"))return!1;for(const e of t.urlPrefixes)if(s.href.startsWith(e))return!1;for(const e of t.paths)if(n.startsWith(e))return!1;return!0}(r))return n;let a=n.clone();return caches.open(swconf.cacheName).then((e=>{e.put(s.request,a)})),n})))))}))}();
