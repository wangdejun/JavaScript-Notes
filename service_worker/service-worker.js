// service-worker.js
self.addEventListener('install', e => {
    console.log('installing service worker');
  });

  self.addEventListener('activate', e => {
    console.log('activating service worker');
  });

//   self.addEventListener('fetch', e => {
//     console.log(`fetching ${e.request.url}`);
//   });
