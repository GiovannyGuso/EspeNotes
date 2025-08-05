self.addEventListener("install", (event)=>{
  console.log("Almacenando archivos en caché");
  const wu = new Promise((resolve, reject) => {
   try {
    setTimeout(() => {
    const addFiles = "";
    console.log("Service Worker instalado ESPE NOTES");
    resolve();
  }, 1000);
  self.skipWaiting(); // Forzar la activación del Service Worker
   } catch (error) {
    reject(error);
   }
  });
  event.waitUntil(wu);
});

self.addEventListener("activate", (event)=>{
  console.log("Service Worker activado ESPE NOTES");
  event.waitUntil(clients.claim()); // Asegura que el Service Worker tome el control de las páginas abiertas
});

self.addEventListener("fetch", (event)=>{
  console.log("Cacheando claims");
  console.log(event.request.url);
});

