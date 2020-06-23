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
    "revision": "840bea90c4e242b84fe6ff67b5b25c76"
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
    "url": "assets/js/15.f029fde6.js",
    "revision": "f5a97b409f092b9311cd1cf434304ae2"
  },
  {
    "url": "assets/js/16.69f59135.js",
    "revision": "0cdcbe1724d635d852e8669c6047b2b8"
  },
  {
    "url": "assets/js/17.79acf567.js",
    "revision": "1e3c84c84a987c998bb850358c181de5"
  },
  {
    "url": "assets/js/18.e5853deb.js",
    "revision": "a8f4c5ded77375dd50870356991bdb4f"
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
    "url": "assets/js/20.05bf28a4.js",
    "revision": "19892f63177e8b311755d7b40d656325"
  },
  {
    "url": "assets/js/21.8fa2c70d.js",
    "revision": "e3d6ec115a05671c54bf37f8a65d6ea4"
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
    "url": "assets/js/app.eeb1984a.js",
    "revision": "d4d5131631550a3c7b72fd1ea90a01e7"
  },
  {
    "url": "gallery/index.html",
    "revision": "c38c19e7a1fa5b742359b0da5a92e629"
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
    "url": "images/posts/2019这一年.jpg",
    "revision": "c1fb99d8776725f94eae306a1cd0bf63"
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
    "revision": "c28afdafce0df64c36250f612a97ec8e"
  },
  {
    "url": "posts/2019这一年.html",
    "revision": "978745f9e4afaded3496f3b76bbfea27"
  },
  {
    "url": "posts/index.html",
    "revision": "451d2ddf361ac68882cd055b76ad6233"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "cd3fe66beafeaed18180f1e7a997cdcc"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "d3d035ea46c4b97b778bd6a0b9fcd0bd"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "0e0684e7d797f60301099b6e1c1177aa"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "f9aaf85a705cf581a960d887dc566b61"
  },
  {
    "url": "story/index.html",
    "revision": "9bfc63e645efb47485ed168d791774b7"
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
