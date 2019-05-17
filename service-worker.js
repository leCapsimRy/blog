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
    "revision": "46b7c0f29b032ef4c863db0a79e8ef80"
  },
  {
    "url": "assets/css/0.styles.6c891455.css",
    "revision": "e4ef159752373470f8b87a760cd49852"
  },
  {
    "url": "assets/js/10.0bcf2492.js",
    "revision": "c0b9d7a823541c0d37497cd087b964e3"
  },
  {
    "url": "assets/js/11.93f6f172.js",
    "revision": "fa894296b0e85aa52616ff13c3c826b0"
  },
  {
    "url": "assets/js/2.fff3499e.js",
    "revision": "39c963c6bbe938608caf00eba9cb72ea"
  },
  {
    "url": "assets/js/3.e68df712.js",
    "revision": "25f02220ed35a35423fc632680a16715"
  },
  {
    "url": "assets/js/4.7621df3b.js",
    "revision": "7a8473b00cf3acee8eb9738903f61d70"
  },
  {
    "url": "assets/js/5.2cd27de6.js",
    "revision": "e84671447b4bd58c6288c7ac73fe43a6"
  },
  {
    "url": "assets/js/6.4f603486.js",
    "revision": "16bd4f0398b0df7be745c2e2cbf63173"
  },
  {
    "url": "assets/js/7.acb6374b.js",
    "revision": "3577d5661b56ae7c650ab613e74e4554"
  },
  {
    "url": "assets/js/8.134e508f.js",
    "revision": "edfdb5e929c7d9fdb93fb5a8d93db25e"
  },
  {
    "url": "assets/js/9.4c8b2c5d.js",
    "revision": "c4d0659369c4b36358f4499e7841220b"
  },
  {
    "url": "assets/js/app.5a246534.js",
    "revision": "d3a011313272e74b75d297304e62feec"
  },
  {
    "url": "gallery/index.html",
    "revision": "bce0ea92cf7ce4a78ced1fdd2a75f727"
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
    "revision": "4d5a0a170a415fdd88d817252664bb08"
  },
  {
    "url": "posts/index.html",
    "revision": "eeb160200e8c1a8cbff59a91feb66458"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "7300139d2da0b9f7680a528a15489e4a"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "161b084e03b6db7a81050fa125baaab7"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "aa66554209856655d89be4ab25e172e4"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "f61197a9059d9fc217afa60f18d3d370"
  },
  {
    "url": "story/index.html",
    "revision": "529c0939eade0008fadb92e1cc751ae1"
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
