var doCache = true; // Set this to true for production

var CACHE_NAME = "my-pwa-cache-v1";

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log("Deleting cache: " + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("install", function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        fetch("manifest.json")
          .then(response => {
            response.json();
          })
          .then(assets => {
            const urlsToCache = ["/", assets["main.js"]];
            cache.addAll(urlsToCache);
            console.log("cached");
          });
      })
    );
  }
});

self.addEventListener("fetch", function(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
  
          return fetch(event.request).then(
            function(response) {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              // IMPORTANT: Clone the response. A response is a stream
              // and because we want the browser to consume the response
              // as well as the cache consuming the response, we need
              // to clone it so we have two streams.
              var responseToCache = response.clone();
  
              caches.open(CACHE_NAME)
                .then(function(cache) {
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  }
});