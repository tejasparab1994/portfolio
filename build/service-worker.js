"use strict";var precacheConfig=[["/index.html","305656be511f4cee5e93bf7ae8a24bda"],["/static/css/main.b8a24042.css","9817ad7065a23c456f4a5be254fb4917"],["/static/js/main.f9337a84.js","2f947662940d7bf20921da9a87465f2b"],["/static/media/devconnector.30357a30.png","30357a300a4462ddf9168fa9e082c0b4"],["/static/media/icomoon.0dccf71b.svg","0dccf71bb9284a748146047fc2654031"],["/static/media/icomoon.1da9919a.ttf","1da9919a66086c04a60c94d1ab20f096"],["/static/media/icomoon.44f8da98.woff","44f8da986916613b7c11b8f83bb41094"],["/static/media/icomoon.e227f6b7.eot","e227f6b7f39ac17ed17e804305dc3295"],["/static/media/jobs.501e770d.png","501e770dbd0ac78da51c9914eedb19a4"],["/static/media/memory.caa915d5.png","caa915d55cdfbe2254a8fee23acf2651"],["/static/media/othello.bdba6081.png","bdba6081743d6fd80b5aa871295333d9"],["/static/media/resume.afbaf506.pdf","afbaf506d01c32ff88ed45471caa4800"],["/static/media/search.5c18c6d1.png","5c18c6d188b9258f114227782c884191"],["/static/media/server.136e16d5.png","136e16d5e76aedd5289d4b4701fc6e5f"],["/static/media/tasktracker.c5ce2951.png","c5ce2951a0f0cb48548b98275d1cdccc"],["/static/media/tejas1.5538ab12.jpeg","5538ab12c5e3c5ec18bc70d090a61b7d"],["/static/media/virtual.e1ce97f8.png","e1ce97f85aab27f416bf19fd2b969972"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});