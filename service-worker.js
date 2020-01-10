/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ddde9a92faed0a9a41b024638cc1f7a5"
  },
  {
    "url": "assets/css/0.styles.c238e674.css",
    "revision": "c0edc147f2e94ed017060f7be8dfbda0"
  },
  {
    "url": "assets/js/1.95dd623a.js",
    "revision": "34c43cc1888fa29d0d7d3318433fe22c"
  },
  {
    "url": "assets/js/10.f31cb2d5.js",
    "revision": "a8bf94456caf1a5c518898e455853cca"
  },
  {
    "url": "assets/js/11.ed163ad7.js",
    "revision": "ab9b5562ff6e1baea7307a20564592be"
  },
  {
    "url": "assets/js/12.64b04e8e.js",
    "revision": "1410f92db3154590985354c8d9f6088d"
  },
  {
    "url": "assets/js/13.5fa74513.js",
    "revision": "da5f5865ec59bb9267c4b556e46d1ae6"
  },
  {
    "url": "assets/js/14.7df68d89.js",
    "revision": "1d329aef4acc70b91a5457fa993cb488"
  },
  {
    "url": "assets/js/15.c90c4fb7.js",
    "revision": "77e79192e69fb20d023915e3d5611d07"
  },
  {
    "url": "assets/js/16.6b9a8677.js",
    "revision": "170df894c5a82d91fa730c4758828a03"
  },
  {
    "url": "assets/js/17.79acf567.js",
    "revision": "1e3c84c84a987c998bb850358c181de5"
  },
  {
    "url": "assets/js/18.ce1ecb18.js",
    "revision": "520cf00d83fa8f20688c9a24ce5a05b9"
  },
  {
    "url": "assets/js/19.116a48cc.js",
    "revision": "83755e893912e5cc503bac068ce59b53"
  },
  {
    "url": "assets/js/2.fe704f59.js",
    "revision": "49e71d0dfa054ba5c2087d0e1a4e41aa"
  },
  {
    "url": "assets/js/20.22b5bb2d.js",
    "revision": "c51b8070acf960c5eadbc5691dc3cf2e"
  },
  {
    "url": "assets/js/21.6c1b73fc.js",
    "revision": "0b0833ac56e5621ae08c1dcd5501696e"
  },
  {
    "url": "assets/js/22.6e359d19.js",
    "revision": "dd6d5f4c0feb7e85bcda804e4fb06822"
  },
  {
    "url": "assets/js/4.03b2a0a5.js",
    "revision": "411d492112ad928a75ee62779c133914"
  },
  {
    "url": "assets/js/5.a870a58e.js",
    "revision": "2b2f77d941cd65d5f4140cc2b719f0ff"
  },
  {
    "url": "assets/js/6.2e6bcd29.js",
    "revision": "b7fb7a44344c89c69003cc6ec50839e1"
  },
  {
    "url": "assets/js/7.671ccb23.js",
    "revision": "04aee03c822a5e0fb07e6d50dd2e7f36"
  },
  {
    "url": "assets/js/8.ee6b09c5.js",
    "revision": "b829dbc973c5a5faf1f1a1c09066c6a5"
  },
  {
    "url": "assets/js/9.1ee7877f.js",
    "revision": "019461ff99f0674cbffb010eb0e2bcf7"
  },
  {
    "url": "assets/js/app.ec0d30d4.js",
    "revision": "38c09042e7baa966fed5029a7e437b73"
  },
  {
    "url": "gallery/index.html",
    "revision": "b29f61cd4c144e091c35d6aa199f20b0"
  },
  {
    "url": "images/avatar.jpg",
    "revision": "27a76cec2cf7726bfd59b675e9b0cf44"
  },
  {
    "url": "images/cgqz.jpg",
    "revision": "0dbd20fb8c61f202f9484357f5c41cbf"
  },
  {
    "url": "images/icon/apple-icon.png",
    "revision": "3cd1393ae9f41d215b1f36918b6a33a0"
  },
  {
    "url": "images/icon/beijiu-144x144.png",
    "revision": "cbede35bad7d8409a265bc80b42eb340"
  },
  {
    "url": "images/icon/beijiu-168x168.png",
    "revision": "002471e3558e781eb3b736b97d7de279"
  },
  {
    "url": "images/icon/beijiu-192x192.png",
    "revision": "3c37f0760b8dadd155118c831d488002"
  },
  {
    "url": "images/icon/beijiu-48x48.png",
    "revision": "9b526be91afd55caab9a1af46067b00f"
  },
  {
    "url": "images/icon/beijiu-72x72.png",
    "revision": "0bf9f23213d6fd150bd28c3a3079c267"
  },
  {
    "url": "images/icon/beijiu-96x96.png",
    "revision": "ff4e570f9aaed14a51a47a0154518909"
  },
  {
    "url": "images/icon/favicon.png",
    "revision": "a783adb8f5c6de6bd543747abc14b31d"
  },
  {
    "url": "images/posts/去年花-破城.jpg",
    "revision": "bae14803b3a84c80f37e90d78e3fb9ac"
  },
  {
    "url": "images/posts/尤克里里.jpg",
    "revision": "42534bc641fb9b2635b271cbb1301499"
  },
  {
    "url": "images/posts/忆-远处近景的小楼.jpg",
    "revision": "bee965dc16a126841af158bb1293bf84"
  },
  {
    "url": "images/posts/雨霖铃-乌衣有志.jpg",
    "revision": "07f23ef03dc67f5a473956c0cc3353a4"
  },
  {
    "url": "index.html",
    "revision": "07ae1a0f22cc032326e11c31356500c9"
  },
  {
    "url": "posts/2019这一年.html",
    "revision": "db9db2881bb86e104b1d21749842da9c"
  },
  {
    "url": "posts/index.html",
    "revision": "599641490c50f2ed6a835af1ba2b783f"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "a132c83e9c813e6a967e96f4dfdc961f"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "52c3136bbe15868474e1b3260d8e7848"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "15a413b8edaf9f577ce6b43a474a95b2"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "930a39da098341f80c5f2c70b5022ad1"
  },
  {
    "url": "story/index.html",
    "revision": "d9cea682ac52a7bdebd11c7f9922d935"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
