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
    "revision": "c1cca53a4f1a2113ffb381fa3262310b"
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
    "url": "assets/js/12.43b78652.js",
    "revision": "1b2611872d81af5bb8b4efce035078e1"
  },
  {
    "url": "assets/js/13.04ee3bb6.js",
    "revision": "c3c132498919124108c5b240ee14ef68"
  },
  {
    "url": "assets/js/14.ef2b1879.js",
    "revision": "193943658060ff47e710875e01cf3542"
  },
  {
    "url": "assets/js/15.4a40f930.js",
    "revision": "d8cc26bb19a7126435b43dd239345dcb"
  },
  {
    "url": "assets/js/16.baf4d9ac.js",
    "revision": "129f8a5fa5cb841d8b5fd48826f602f8"
  },
  {
    "url": "assets/js/17.2d7e102a.js",
    "revision": "6aa08251deaa0971036b39f7500714db"
  },
  {
    "url": "assets/js/18.cfc4ee8a.js",
    "revision": "f2577facac59b2d76d0ca1d9fb5c26e2"
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
    "url": "assets/js/app.4ff6b683.js",
    "revision": "f69a1c53480a09f51d302f9524fdfbf4"
  },
  {
    "url": "gallery/index.html",
    "revision": "1a2e117d3d7aa852100f0ee70dc96ce8"
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
    "revision": "9ae81ba5fb007917d623673936403c50"
  },
  {
    "url": "posts/index.html",
    "revision": "377b748cfb908d39d84f3ebb6bfece6f"
  },
  {
    "url": "posts/去年花-破城.html",
    "revision": "40321f2a6b4465d0d9d59eff1833fbe7"
  },
  {
    "url": "posts/尤克里里.html",
    "revision": "b095acfc75a08fc299b10c5b761ed0c1"
  },
  {
    "url": "posts/忆-远处近景的小楼.html",
    "revision": "17e65754306c6627eeeba81f9055ec20"
  },
  {
    "url": "posts/雨霖铃-乌衣有志.html",
    "revision": "c53e7451830f4f0b92eddd2375b6f81b"
  },
  {
    "url": "story/index.html",
    "revision": "97be170736ba244de7b641970494fad8"
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
