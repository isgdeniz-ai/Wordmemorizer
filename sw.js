// Word Memorizer - service worker
// HTML icin "once ag, olmazsa onbellek" (guncellemeler hemen gelsin)
// Ses dosyalari ve zaman haritalari icin de "once ag"
// Diger dosyalar (ikon, manifest) icin "once onbellek" (hizli acilsin)
const CACHE = 'wordmem-v82';
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


// =====================================================================
// GUNLUK HATIRLATMA — Firebase Cloud Messaging
// =====================================================================

// Bildirime dokununca uygulamayi ac / one getir.
// TUZAK 1: FCM'nin kendi tiklama isleyicisi, baglantisi (link) olmayan
// bildirimlerde hicbir sayfa acmiyor ve kendinden sonraki isleyicileri
// durduruyor. Bu yuzden bizimkini FCM'DEN ONCE kaydediyoruz.
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil((async () => {
    const pencereler = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const p of pencereler) { if ('focus' in p) return p.focus(); }
    if (self.clients.openWindow) return self.clients.openWindow('./');
  })());
});

// Firebase kutuphanelerini yukle. Once sayfayla ayni surumu dene, olmazsa
// yaygin bir eski surume dus. Ikisi de yuklenemezse (orn. gstatic'e erisim
// yoksa) servis calisani YINE kurulur; cevrimdisi calisma bozulmaz,
// sadece bildirim gelmez.
let fcmHazir = false;
for (const surum of ['12.15.0', '10.12.2']) {
  try {
    importScripts(
      `https://www.gstatic.com/firebasejs/${surum}/firebase-app-compat.js`,
      `https://www.gstatic.com/firebasejs/${surum}/firebase-messaging-compat.js`
    );
    fcmHazir = true;
    break;
  } catch (err) { /* sonraki surumu dene */ }
}

if (fcmHazir && self.firebase) {
  firebase.initializeApp({
    apiKey: "AIzaSyADXePsyOkHyoBbjY6nznBcx5tGbk_76rI",
    authDomain: "glizwor.com",
    projectId: "word-memorizer-718b5",
    storageBucket: "word-memorizer-718b5.firebasestorage.app",
    messagingSenderId: "1058175451313",
    appId: "1:1058175451313:web:6a8274910d8115d656e290"
  });
  const messaging = firebase.messaging();

  // TUZAK 2: Firebase Console'dan gonderilen bildirimler "notification"
  // alani tasir ve FCM bunlari arka planda KENDISI gosterir. Burada bir de
  // biz gosterirsek kullanici ayni bildirimi iki kez gorur.
  // Yalnizca veri tasiyan (data-only) mesajlari biz gosteriyoruz.
  messaging.onBackgroundMessage((p) => {
    if (p && p.notification) return;
    const d = (p && p.data) || {};
    return self.registration.showNotification(d.title || 'Word Memorizer', {
      body: d.body || 'Bugünün kelimeleri seni bekliyor.',
      icon: './icon-192.png',
      data: d
    });
  });
}
