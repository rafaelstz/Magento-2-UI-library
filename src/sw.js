importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([]);

  // Use the cache-first strategy and update the cache in the background
  workbox.routing.registerRoute(
      new RegExp('.*\\.(?:js|css|html|png|jpg|jpeg|svg|gif)'),
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'assets-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 50, // Maximum number of entries in the cache
            maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
          }),
        ],
      })
  );
}