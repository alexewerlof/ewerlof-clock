const packageJson = require('../package.json');

const cacheName = `${packageJson.name}-${packageJson.version}`;
const filesToCache = [
  'index.html',
  'index.js',
  'manifest.json',
  'service-worker.js',
];

self.addEventListener('install', function(e) {
  console.log('Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('Activate');
  e.waitUntil(caches.delete(caches.keys()));
  return self.clients.claim();
});