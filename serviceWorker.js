const staticAssets = ['./']

self.addEventListener("install", async () => {
  const cache = await caches.open("talkcache");
  cache.addAll(staticAssets);
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(networkFirst(event.request));
});

const networkFirst = async (request) => {
  const cache = await caches.open("talkcache");
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return await cache.match(request);
  }
};
