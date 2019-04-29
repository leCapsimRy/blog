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
    "revision": "f54fc0d07e31bab85a999be3a2578fe4"
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
    "url": "assets/js/app.c1e946a7.js",
    "revision": "43ec1d2ffd8cf71f615c530e2218e69b"
  },
  {
    "url": "gallery/index.html",
    "revision": "418dc0f0a72277fd5ba402530397dac5"
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
    "url": "images/icon/beijiu-114x114.png",
    "revision": "8482c15d6759699df928a055c6c75350"
  },
  {
    "url": "images/icon/beijiu-120x120.png",
    "revision": "7b21ade096a01d1eb7c1e15087c1c887"
  },
  {
    "url": "images/icon/beijiu-144x144.png",
    "revision": "cbede35bad7d8409a265bc80b42eb340"
  },
  {
    "url": "images/icon/beijiu-152x152.png",
    "revision": "53994ad69729a2ad8174ff1cf4997f39"
  },
  {
    "url": "images/icon/beijiu-168x168.png",
    "revision": "002471e3558e781eb3b736b97d7de279"
  },
  {
    "url": "images/icon/beijiu-180x180.png",
    "revision": "c985713159584182741509672059f52b"
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
    "url": "images/icon/beijiu-57x57.png",
    "revision": "cc28702b89a7c0135891398a67c6fe24"
  },
  {
    "url": "images/icon/beijiu-60x60.png",
    "revision": "fb36b7b50046b015b2134671d72c852b"
  },
  {
    "url": "images/icon/beijiu-72x72.png",
    "revision": "0bf9f23213d6fd150bd28c3a3079c267"
  },
  {
    "url": "images/icon/beijiu-76x76.png",
    "revision": "88b3191744c75a9ca56def68120bc3d9"
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
    "revision": "92a95a7f2a41917f171ecca2991f2adb"
  },
  {
    "url": "posts/index.html",
    "revision": "eb6970e93c6e8764c7eb7ab679a57e09"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "0c2a73bc1248c69084ed5ffceb4850c5"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "849f9bc14470cd849471ae7532c5b009"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "0b25fab2b379398d6928bb181c124f23"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "1d0ca31fdce1adb1cb155c52f91efdd4"
  },
  {
    "url": "story/index.html",
    "revision": "ea4bd2af240c77ae97807ca098a9e191"
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
