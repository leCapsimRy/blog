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
    "revision": "fb757495cf31a27048c42d45282d7261"
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
    "url": "assets/js/app.32b710ea.js",
    "revision": "e24826b7705407502ab6ae2a2d8eba49"
  },
  {
    "url": "gallery/index.html",
    "revision": "c04147eb2b08e902fd37e16bc82b9bf6"
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
    "revision": "8c2a0127afebcdfa6e5248b147b9975f"
  },
  {
    "url": "posts/index.html",
    "revision": "1f24d7d37d4c9351b52a3de6391b0ffe"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "f1a8a70b086f28e86a8a1899f57519f5"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "090fbf5c3c908e70cc6af4fc8ae2e73d"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "1b98eaa321500dd036f7cbd9d6df51f1"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "884705071d53f0fbdb743d0e4888f482"
  },
  {
    "url": "story/index.html",
    "revision": "15ace91d8b5d77b961f8bbba29b95ca7"
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
