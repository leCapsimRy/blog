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
    "revision": "38fb6e92e53eb87303781e2f599ecfe5"
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
    "url": "assets/js/15.8116b252.js",
    "revision": "9d2ef8c0e1992034c06806f2aad7964f"
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
    "url": "assets/js/18.3d82cb0c.js",
    "revision": "670929bae96504706958e591dada07f0"
  },
  {
    "url": "assets/js/19.fad61365.js",
    "revision": "51243ce8b9c4b8492b59890f80e5dccc"
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
    "url": "assets/js/app.7d183f91.js",
    "revision": "9b68f816a736d10b5538e5b0d5dbe4f8"
  },
  {
    "url": "gallery/index.html",
    "revision": "41b1629078d2a4ac08ef5f0b465bc698"
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
    "revision": "1ed20208048a35adaafbcb57806ad196"
  },
  {
    "url": "posts/2019这一年.html",
    "revision": "bbdaeca11ab3fa028da834645819ca75"
  },
  {
    "url": "posts/index.html",
    "revision": "d5754fc7340e71295ff0e0d94b16be29"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "6ddac37d9e8045ba354b2c03e7167975"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "e04dd6a7bd1859fc864d862c0aef2d09"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "28fdd1ff38302e018d325dd07d2a9c60"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "f19772e19e5b0aa847743baa2f689617"
  },
  {
    "url": "story/index.html",
    "revision": "29f1126b199836b4c5dc3ef228db3f0c"
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
