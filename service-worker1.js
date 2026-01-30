const CACHE_NAME = "renk-carki-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style1.css",
    "./script1.js",
    "./AnaRenklerCarki-Arka.png",
    "./AnaRenklerCarki-On.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
