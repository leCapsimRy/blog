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
    "revision": "140606bb077771b0e9451f18c4918145"
  },
  {
    "url": "assets/css/0.styles.6831a93b.css",
    "revision": "35dfb739fc4c97d2ce9bc2b394e27237"
  },
  {
    "url": "assets/js/1.d69ae3e6.js",
    "revision": "2affca55b68b430dfcd31a5916699e72"
  },
  {
    "url": "assets/js/10.13b796b8.js",
    "revision": "e19ca28c091702a2747bcb63d26e1696"
  },
  {
    "url": "assets/js/11.aa579c53.js",
    "revision": "c6f4b043ba0db5342657a0a83a5a8bc1"
  },
  {
    "url": "assets/js/12.ed57d393.js",
    "revision": "d23e1c273089c8c675e36cc45081721a"
  },
  {
    "url": "assets/js/13.67178a4e.js",
    "revision": "a6bdf2b976ccd9281559aa1083c09992"
  },
  {
    "url": "assets/js/14.d7e874fa.js",
    "revision": "951b26dc467b34f95403beaa121579cd"
  },
  {
    "url": "assets/js/15.7e4ad7d4.js",
    "revision": "04cc8e202d2aabc7288b957e6291ba25"
  },
  {
    "url": "assets/js/16.3bfb7e04.js",
    "revision": "cd40de34debcc08a4944cba9dda3274d"
  },
  {
    "url": "assets/js/17.668f91ca.js",
    "revision": "34343f572b288805bce5b695169f9f63"
  },
  {
    "url": "assets/js/18.89393b55.js",
    "revision": "38ff5e6b58d9f419ac917d519d3de621"
  },
  {
    "url": "assets/js/19.7a69eea3.js",
    "revision": "69bae8cfb84e9d1b13f63e2f31a195ad"
  },
  {
    "url": "assets/js/2.82bb0719.js",
    "revision": "6c2fda076885cc102d0fc47c5f38d1fc"
  },
  {
    "url": "assets/js/20.db78f81d.js",
    "revision": "07f76e7ce29587f79db78d4b02838654"
  },
  {
    "url": "assets/js/21.36cfeb8b.js",
    "revision": "89933972eced9b1d9694062365ac0c51"
  },
  {
    "url": "assets/js/4.a71cbbd7.js",
    "revision": "d24420674f1c33e9a7aa870f4e159078"
  },
  {
    "url": "assets/js/5.9d5d10eb.js",
    "revision": "9e913cfe9e1c336cd997c4db83a85b8b"
  },
  {
    "url": "assets/js/6.05700f49.js",
    "revision": "d7b77758a391137d3b9f310acd6b01b1"
  },
  {
    "url": "assets/js/7.80dd6fbf.js",
    "revision": "43c2f8be11b2dc3108036126c3aa123e"
  },
  {
    "url": "assets/js/8.79f2af1d.js",
    "revision": "0170f011659259f1ff0960a06af2cba3"
  },
  {
    "url": "assets/js/9.6ac8f5c6.js",
    "revision": "64a5c0660dda170bd44800c818166391"
  },
  {
    "url": "assets/js/app.9dd62fcd.js",
    "revision": "3edea4a4fb68c40f0658fe6c64960041"
  },
  {
    "url": "gallery/index.html",
    "revision": "5fe022d83da8c7b54d207799a446ff08"
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
    "revision": "65efca36db76ed25d51e2d786425f816"
  },
  {
    "url": "posts/index.html",
    "revision": "93ec1e6fea147c6d463fde8dd214afab"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "8b201ac4c8a4a14e8109054de23e557a"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "26e590249550c29215491e61fa5b3c4f"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "3b4daaf8908435e96fa77fc6e54454ed"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "efd9a122315edf23833e8c249e133412"
  },
  {
    "url": "story/index.html",
    "revision": "d55a74928686448ebe4163dd9ad40277"
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
