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
    "revision": "090a8b8a318d5e5d0b1bed61ca52d7bb"
  },
  {
    "url": "assets/css/0.styles.52f414ce.css",
    "revision": "df59fa5088bdc019ba23a264b8cdc90d"
  },
  {
    "url": "assets/js/1.1670992d.js",
    "revision": "ce72cff7a5c282dcc703f5a8f8babd6d"
  },
  {
    "url": "assets/js/10.39b9d194.js",
    "revision": "400deceda9bb519a5eb06c81febbdb88"
  },
  {
    "url": "assets/js/11.2a3e62b5.js",
    "revision": "a619f30e29c3189b130ea2b9820a994f"
  },
  {
    "url": "assets/js/12.e1bf6ea0.js",
    "revision": "b2737d832cec93b943b15c8d8dd58a16"
  },
  {
    "url": "assets/js/13.04ee3bb6.js",
    "revision": "c3c132498919124108c5b240ee14ef68"
  },
  {
    "url": "assets/js/14.bdf3c5bf.js",
    "revision": "ad7c78c58e0b3391a1fd78ec4e13518a"
  },
  {
    "url": "assets/js/15.4a40f930.js",
    "revision": "d8cc26bb19a7126435b43dd239345dcb"
  },
  {
    "url": "assets/js/16.786b2a03.js",
    "revision": "bce65ba401274a11ed9c37a68101357d"
  },
  {
    "url": "assets/js/17.2d7e102a.js",
    "revision": "6aa08251deaa0971036b39f7500714db"
  },
  {
    "url": "assets/js/18.44238f55.js",
    "revision": "3d5355179f5d7346d5e1c509d5d15480"
  },
  {
    "url": "assets/js/19.87d3cf82.js",
    "revision": "5d5f47935d2602dddc8ddfc9f558134a"
  },
  {
    "url": "assets/js/2.a92484b9.js",
    "revision": "e69910f04603d976c548455191d1fe6c"
  },
  {
    "url": "assets/js/20.07709ecd.js",
    "revision": "3f5cf8d4c12dbe2ed46d522d84e9619e"
  },
  {
    "url": "assets/js/4.d3ae5b0d.js",
    "revision": "08e20797c2aa347614cc6b31f625836f"
  },
  {
    "url": "assets/js/5.b6bf14da.js",
    "revision": "6badf3e9f5d5cb696f3fd1df2b4411f2"
  },
  {
    "url": "assets/js/6.4b61c8db.js",
    "revision": "4cb35d9147ea4fa4babfaf76a990322a"
  },
  {
    "url": "assets/js/7.69c192a9.js",
    "revision": "d5519b2e1ceabe356a8c6b8103eb7f10"
  },
  {
    "url": "assets/js/8.53b75321.js",
    "revision": "de912bae96bf4945232a73d43cbe88ea"
  },
  {
    "url": "assets/js/9.fc656e43.js",
    "revision": "7ac0a1b1cd3e60a940bbb75554deadaa"
  },
  {
    "url": "assets/js/app.00d92730.js",
    "revision": "cc519998b633b2f35fcd619df69e7748"
  },
  {
    "url": "gallery/index.html",
    "revision": "86f5ffda8eaf313ea027746da740a26a"
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
    "revision": "de98bb11e9838b356858735a61486510"
  },
  {
    "url": "posts/index.html",
    "revision": "8b8a6818bdb291dc5d3a0eaefc32d191"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "54a108edc84fd120b4e433011866aa13"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "5fb45d491aa947e88f740e051fe7e6dd"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "3076e2f6802122ed7729a30a7f6ac393"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "3325d4568672b42893c3ea1d453f695b"
  },
  {
    "url": "story/index.html",
    "revision": "4037ae40a3ccf65a0c396b0381f9dd55"
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
