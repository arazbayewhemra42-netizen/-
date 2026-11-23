const CACHE="stomat-tm-v1";
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./index.html","./manifest.webmanifest","./icon.svg"]))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).catch(()=>caches.match("./index.html"))));});
