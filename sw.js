// Word Memorizer - service worker
// HTML icin "once ag, olmazsa onbellek" (guncellemeler hemen gelsin)
// Ses dosyalari ve zaman haritalari icin de "once ag"
// Diger dosyalar (ikon, manifest) icin "once onbellek" (hizli acilsin)
const CACHE = 'wordmem-v81';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

// Ses dosyalari ve zaman haritalari.
// ONEMLI: bunlar eskiden "once onbellek" dalina dusuyordu. Zaman haritasi
// (ses/<id>.json) bir kez indirilince bir daha guncellenmiyordu; ses yeniden
// uretildiginde uygulama YENI mp3'u ESKI haritayla calisiyor ve metin ile ses
// birbirini tutmuyordu. Tarayicida bu onbellek olmadigi icin sorun gorunmuyordu.
function sesKaynagiMi(url) {
  try {
    const yol = new URL(url, self.location.origin).pathname;
    if (yol.indexOf('/ses/') >= 0) return true;
    return /\.(json|mp3|opus|m4a|aac|wav)$/i.test(yol) && yol.indexOf('manifest') < 0;
  } catch (e) { return false; }
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Sayfa istekleri: once agdan dene, basarisizsa onbellekten ver.
  // ONEMLI: tarayicinin kendi HTTP onbellegini atla ({cache:'no-store'}),
  // yoksa guncelleme yapildiginda kullaniciya eski sayfa donebiliyor.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req.url, { cache: 'no-store' })
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Ses ve zaman haritalari: once ag, olmazsa onbellek.
  // Boylece ses yeniden uretildiginde harita da hemen guncellenir;
  // cevrimdisiyken eski kopya calismaya devam eder.
  if (sesKaynagiMi(req.url)) {
    e.respondWith(
      fetch(req).then((res) => {
        // Kismi yanit (206) onbellege alinamaz; ses caları Range istegi yollar.
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  // Diger dosyalar: once onbellek
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      });
    })
  );
});
