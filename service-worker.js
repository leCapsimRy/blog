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
    "revision": "d39de02af85bb365414c48ee456cc162"
  },
  {
    "url": "assets/css/0.styles.f3a62bef.css",
    "revision": "6018c4150387c03ae008743f4d57e2a5"
  },
  {
    "url": "assets/js/10.d499a273.js",
    "revision": "3fb1fd81a3cc95ce1d768250d601b8c7"
  },
  {
    "url": "assets/js/11.be4966c1.js",
    "revision": "bc8a98fca0f05ee8ed1d726c38e053b5"
  },
  {
    "url": "assets/js/2.53b6c3fd.js",
    "revision": "34852e9a94f991b289b03d15b4de760f"
  },
  {
    "url": "assets/js/3.4bff7c09.js",
    "revision": "b2aea87a2baa2fffd51a0e4a271ce14c"
  },
  {
    "url": "assets/js/4.a6b7ec86.js",
    "revision": "f943e5417ca63bd7e8272caf400fd5f6"
  },
  {
    "url": "assets/js/5.37f3dbfa.js",
    "revision": "feba05414b3a5c3bcbf1cf56b7e024e3"
  },
  {
    "url": "assets/js/6.36a2f98d.js",
    "revision": "b874f21c35320c19d4363c1c60d64c2c"
  },
  {
    "url": "assets/js/7.ba6c1c08.js",
    "revision": "7f787b5c491081d7d1f3eeb7ea0585ef"
  },
  {
    "url": "assets/js/8.d4ff3086.js",
    "revision": "3bf938a94008cf00b6dfb358fe320b06"
  },
  {
    "url": "assets/js/9.a00fbf3b.js",
    "revision": "a4cccbc4501f937a1ab2ef084db4e701"
  },
  {
    "url": "assets/js/app.a20382b3.js",
    "revision": "8b651617fe0685bae9feb701b2c992d7"
  },
  {
    "url": "gallery/index.html",
    "revision": "97bccccd215fa27c6a37f38c0e177058"
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
    "revision": "ee8c3e9ab6bcf7ba11eaaff8bfba06dc"
  },
  {
    "url": "posts/index.html",
    "revision": "679cc7312e389ec987098f86dfcbb50c"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "94027fec321d525d0fcd2a0720927f02"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "e413909054f89873d774aecca3c078f3"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "a3978f0ed9393ed50f8e96781664831c"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "be0b2dc000d08fd648b9030e426f3d77"
  },
  {
    "url": "story/index.html",
    "revision": "5eb2a585b38fdcf9266fca332a1ac18e"
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
