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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "baa0afe83f64adc4de8d84d928de5110"
  },
  {
    "url": "assets/css/0.styles.e0a7736d.css",
    "revision": "2a39b55bbd8a027e008296644f2721f2"
  },
  {
    "url": "assets/fonts/Montserrat-Light.f5e955ef.otf",
    "revision": "f5e955efb2bef154ac6dd150903f2d45"
  },
  {
    "url": "assets/js/10.6504f38b.js",
    "revision": "a64e5fe4dbb57ba9c3c6e48135ec38a7"
  },
  {
    "url": "assets/js/11.ffc27587.js",
    "revision": "87e2cafc397e30d30bcada15c7ec33c5"
  },
  {
    "url": "assets/js/2.8db7f74f.js",
    "revision": "a28627c432a3facfb99b7fd13381e424"
  },
  {
    "url": "assets/js/3.954c4633.js",
    "revision": "5e2508f9b88adbec823cf918dbcfce20"
  },
  {
    "url": "assets/js/4.73e00012.js",
    "revision": "c3c31898b0ac2c4b152815b45b77980f"
  },
  {
    "url": "assets/js/5.755d1487.js",
    "revision": "e484560725ae368600db30f5587f1749"
  },
  {
    "url": "assets/js/6.cb4f8948.js",
    "revision": "347dfedf97f5bf96f561910fcc0c4aba"
  },
  {
    "url": "assets/js/7.c5737849.js",
    "revision": "aac07d32fe91e13f80ae50f4070bb876"
  },
  {
    "url": "assets/js/8.50f7ee23.js",
    "revision": "3d4c4f612de6ec36b68b3ce79383bce3"
  },
  {
    "url": "assets/js/9.8a67c14c.js",
    "revision": "cf8bd13d6d925d35e5138ecd6e1d1d29"
  },
  {
    "url": "assets/js/app.c135d57e.js",
    "revision": "820827d40b7800f4ff037483400f9c6b"
  },
  {
    "url": "gallery/index.html",
    "revision": "de2f80790895e8ea3520ef7dbfe69c57"
  },
  {
    "url": "images/404.png",
    "revision": "6ad349bcda7dbdbfd295bc2ed9b8394d"
  },
  {
    "url": "images/avatar.jpg",
    "revision": "87e320525c312fa31d7ece7f497d1cad"
  },
  {
    "url": "images/cgqz.jpg",
    "revision": "0dbd20fb8c61f202f9484357f5c41cbf"
  },
  {
    "url": "images/icon/favicon.png",
    "revision": "610b4de0627f25dc442f855cd1eaa67a"
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
    "revision": "356bd54c27dc5c0df5005802c0039994"
  },
  {
    "url": "posts/index.html",
    "revision": "42c5b23994a9e1cb0eab0c6a1b7cd473"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "ef2e11c8849b6b8258bfa5e5877f900a"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "649c2d93abd6b0ae59065ac0bbb7dcfc"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "cb8995cbc7f68ac00e3c671656be6d33"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "c03e8cc00a18a8cd8eafa6efc95d575d"
  },
  {
    "url": "story/index.html",
    "revision": "42a91b13c3d56fde706512c1d77a22cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
