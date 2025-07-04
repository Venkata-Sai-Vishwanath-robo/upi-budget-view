
const CACHE_NAME = 'paymentzero-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/script.js',
    '/lovable-uploads/ec5da4c6-2950-4d82-b3b6-0e2a5a592fc6.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});
