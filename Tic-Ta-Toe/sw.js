self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(`static`).then(cache => {
            return cache.addAll(["./", "./css/main.css", "./img/flame-education.png"])
        })
    );
});
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(respomnse => {
            return response || fetch(e.request);
        })
    )
});