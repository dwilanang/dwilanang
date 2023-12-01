'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d18ee8e1b95a4c9b6a5f0f233fb1a8dc",
"index.html": "97089d79dc7fe974824730ccee572918",
"/": "97089d79dc7fe974824730ccee572918",
"main.dart.js": "be79d190bb554785bbececa047737c0c",
"flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9f60f779f889244c30b7612c5dc7c72a",
"assets/AssetManifest.json": "26983f3c6867b54a433de97ccab441ac",
"assets/NOTICES": "e63ca9b20b232c32a9879449036d8571",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "4d6b9d9e66ead352709b55ec37bd26ee",
"assets/fonts/MaterialIcons-Regular.otf": "e48b13cf2cec666494675b6fae58b7cb",
"assets/assets/audios/background.wav": "72339766f12d750df36a349d999bad4a",
"assets/assets/audios/ok.wav": "9f3e7faf2a25dac2b67b027a59d86d41",
"assets/assets/audios/fail.wav": "7195ed3125db31b648071a1ae2e0d71c",
"assets/assets/audios/click.wav": "89d7d084cbabf3a64285b29b2c840ddc",
"assets/assets/audios/collect-point.wav": "7c5bf6911ab20887d93770eb329ec4dd",
"assets/assets/images/matching/1/5.1.png": "b727efcdc541031f58325ed0cc477e4e",
"assets/assets/images/matching/1/3.1.png": "ef3e371d6bf0a28e6065d24450460e8f",
"assets/assets/images/matching/1/1.1.png": "c964f5779a0a6cc219cdc33d08dc6a70",
"assets/assets/images/matching/1/4.1.png": "6a7f7386cf661df1ba3c922cf76e39e7",
"assets/assets/images/matching/1/2.1.png": "5a35a6c797e71237d10dbb62b32882ef",
"assets/assets/images/matching/1/4.png": "70f2d6c456cba8f5c72673b599fd08d7",
"assets/assets/images/matching/1/5.png": "01e7f5c5ebe2844110b6b7cdd03e3324",
"assets/assets/images/matching/1/2.png": "ef7e1c339ae10df30d1d09b4bcb76b9c",
"assets/assets/images/matching/1/3.png": "55d045d583c6fc21aa9c71aa40501f62",
"assets/assets/images/matching/1/1.png": "b73f98544be150e672a3204c21fa0bf1",
"assets/assets/images/matching/3/7.2.png": "97d6d45e4421eb37a4d3544276816b56",
"assets/assets/images/matching/3/5.1.png": "e71c89df053fd722d9ea91e19978668f",
"assets/assets/images/matching/3/7.1.png": "2c30083001530470719359f9c1a8b366",
"assets/assets/images/matching/3/5.2.png": "1b19e516d9188af41c2574a3004b6e13",
"assets/assets/images/matching/3/1.2.png": "f174586de8fd149d15be22c068b1161d",
"assets/assets/images/matching/3/3.1.png": "b7fc1bfcab8af6968c0913c4013faa7d",
"assets/assets/images/matching/3/1.1.png": "2d73ed3defbf92f2c0c5f119624c36ca",
"assets/assets/images/matching/3/3.2.png": "8df3d14db73ed990baad47626b940021",
"assets/assets/images/matching/3/6.1.png": "652f79f707e17c3b324d27c0387ffe15",
"assets/assets/images/matching/3/4.2.png": "fa1832366d390bf37300e15d864e2e24",
"assets/assets/images/matching/3/6.2.png": "d0a35f9764874c79f5c1a6fe70a36f44",
"assets/assets/images/matching/3/4.1.png": "58b2e45618f66f2704e7934575c7ff9f",
"assets/assets/images/matching/3/2.2.png": "f57b24ddc6db7610fd7850e6e7d3f717",
"assets/assets/images/matching/3/2.1.png": "bf510a3398a2908af6cb7f92e15b49ca",
"assets/assets/images/matching/3/8.1.png": "ae845cb32e722e5a0486556766f8b76e",
"assets/assets/images/matching/3/8.2.png": "6c2d4c5b4d4ff0fb16a7620229de7e65",
"assets/assets/images/matching/3/9.2.png": "ceb0cbec1b3c401e585d7e42a0a2ed93",
"assets/assets/images/matching/3/9.1.png": "d3192875839a5c7dd71d88edc1164716",
"assets/assets/images/matching/2/5.1.png": "2b7fbd820ac5b81a97fd180c9546c545",
"assets/assets/images/matching/2/5.2.png": "f9af716ad964b892b6f19b4b96f20743",
"assets/assets/images/matching/2/1.2.png": "63ff48de5f22d221070bed2280d593ed",
"assets/assets/images/matching/2/3.1.png": "e64e4df6e96eba70e368226f311e449c",
"assets/assets/images/matching/2/1.1.png": "8f82dab582640df1cbf77355c8208b8e",
"assets/assets/images/matching/2/3.2.png": "a1cf938113924e0cb5f2a5c545b9b40c",
"assets/assets/images/matching/2/4.2.png": "0f2c98b17c91f05fb4fb181037d59379",
"assets/assets/images/matching/2/4.1.png": "f1ad6755215516244eb526c910429ae0",
"assets/assets/images/matching/2/2.2.png": "1af1c07ee5c0fd9cfddde6bf08b2bb59",
"assets/assets/images/matching/2/2.1.png": "d100fe67f429057238ba6337ed056cba",
"assets/assets/images/matching/2/4.png": "eb4d762351f7037a895f142d69b47cd9",
"assets/assets/images/matching/2/5.png": "70c753796761606599d0a5019d1f6809",
"assets/assets/images/matching/2/2.png": "3cb5ed1f932dcf6068480d6736c9813c",
"assets/assets/images/matching/2/3.png": "fb9ee7b8557b2a2b6fe6263729fa7df9",
"assets/assets/images/matching/2/1.png": "6bf7c089b0eb55490660342f3d36044d",
"assets/assets/images/memory/1/8.png": "9ef9dc171055aa68506c1b61c3d8f676",
"assets/assets/images/memory/1/9.png": "a691311d8a23f62c8e969de712e98c92",
"assets/assets/images/memory/1/12.png": "57528884f8e0b267124ddd08fad77231",
"assets/assets/images/memory/1/11.png": "08eed3051a714d4b7703cbbd4c273273",
"assets/assets/images/memory/1/10.png": "8d6596cf39639a0f99965fc9823d6db5",
"assets/assets/images/memory/1/4.png": "a57152e214daeb97de2ca37b74535557",
"assets/assets/images/memory/1/5.png": "ffb2ca35f51ff4e84170c21c0cb17d01",
"assets/assets/images/memory/1/7.png": "8c5cfba0b313aeb739072a8c5450ed25",
"assets/assets/images/memory/1/6.png": "9f5913dc73791ae9af2ae5566cf7f17f",
"assets/assets/images/memory/1/2.png": "7d597b054efe8ee1d1432a3e77beef52",
"assets/assets/images/memory/1/3.png": "561621ffe91c2fba885797617fcfa464",
"assets/assets/images/memory/1/1.png": "03385de6edf6c93c7a410ba643ed368f",
"assets/assets/images/grouping/8.png": "82d0fe31fa387ecdfed58d2f484617c7",
"assets/assets/images/grouping/9.png": "7d653bc6db3c485831b9636e2524e111",
"assets/assets/images/grouping/14.png": "669c250d68bffa23267f38a58bbcbf63",
"assets/assets/images/grouping/28.png": "63556940f7e2bf49bdbeba0a0d35df7b",
"assets/assets/images/grouping/29.png": "c73b0784dcdc62eade1ed30a7e2aa55b",
"assets/assets/images/grouping/15.png": "6e0f291d09f73f0b3d7fedc2fd0f6fc0",
"assets/assets/images/grouping/17.png": "fa28493851fc1c4aa81f4fbcc8ad4cdf",
"assets/assets/images/grouping/16.png": "ed54251ab76065bc62d96a9c1c2f612a",
"assets/assets/images/grouping/12.png": "57a45d206ff0c832a3e7e18fb17fd227",
"assets/assets/images/grouping/13.png": "ab5a98ac94e2f82800148713def5cbd8",
"assets/assets/images/grouping/11.png": "f80e950b3c3b4458986b6633f6b91756",
"assets/assets/images/grouping/10.png": "9226acc9b57ae99be7044f39ace49daf",
"assets/assets/images/grouping/21.png": "4bc115346724d2d88c7f453be8ce45a4",
"assets/assets/images/grouping/20.png": "0398b561f364aeb2735d606670c84e47",
"assets/assets/images/grouping/22.png": "926bbbf69193b597b257021e3205a689",
"assets/assets/images/grouping/23.png": "0cbe704b6931f26dc10f652454ec92bf",
"assets/assets/images/grouping/27.png": "1ed550cc30e092b18ed8c10bb4680067",
"assets/assets/images/grouping/26.png": "fbbfda475a8631692ed3487c89b5fd40",
"assets/assets/images/grouping/18.png": "04a201e54dfcd318f75c32039e7f1695",
"assets/assets/images/grouping/30.png": "4858869731dc374b362dc2b6af029dc8",
"assets/assets/images/grouping/24.png": "bc7786a9d4fda0dda96a4dd24b1e9057",
"assets/assets/images/grouping/25.png": "6d54a830426c127d5293f0ed62e6a9ae",
"assets/assets/images/grouping/19.png": "a4cef12b0ea4bd5b704307f074366289",
"assets/assets/images/grouping/4.png": "9d5013bae8730cff311f05e47946f860",
"assets/assets/images/grouping/5.png": "1d43e5cd9d4f126bbc85dc5722208bf4",
"assets/assets/images/grouping/7.png": "a3e12db991f4be22dd606770b1f66bfe",
"assets/assets/images/grouping/6.png": "47552f8f6328de0aa278781615feda0c",
"assets/assets/images/grouping/b3.png": "c35e043a5bced5fddd8438711569e99d",
"assets/assets/images/grouping/2.png": "11874dddc43c690c7532b047e76f14f5",
"assets/assets/images/grouping/3.png": "720b213e33500eca2e51d72e798b5a10",
"assets/assets/images/grouping/b2.png": "30c7b7c7c24c24d8691e6b1081a5bb2d",
"assets/assets/images/grouping/1.png": "4a9775c150d088cd4a3c24b72be75bc8",
"assets/assets/images/grouping/b1.png": "c82f48bbb9e47cf236fc53b68ca161e2",
"assets/assets/images/avatar/1.svg": "80f52145b9b247a28369c478c64ba50d",
"assets/assets/images/avatar/3.svg": "295409fac5dd80f9edb7a718bcc1755d",
"assets/assets/images/avatar/2.svg": "0a5f820e1cc2bb5e6574aae0209165d2",
"assets/assets/images/avatar/6.svg": "2af77e1663ef0e5188cc2ebc953f2c6b",
"assets/assets/images/avatar/5.svg": "da0fc37db5c8240fc09129be3830d9e6",
"assets/assets/images/avatar/4.svg": "e8332016c675c2812ba6a819079524f8",
"assets/assets/animation/ok.json": "91ada86935d1379465880f771b958835",
"assets/assets/animation/b1.1.json": "28461b7405a55a8b4693698115691c86",
"assets/assets/animation/confetti.json": "b443daf6a6b38e9f8d7849cca1798f2f",
"assets/assets/animation/loading.json": "4dc549e90d7ed2f5d7761c2cc938cc13",
"assets/assets/animation/b1.json": "1956a43992a24a029fd8ed7f1f332456",
"assets/assets/animation/sad.json": "48368c53df8cebfa296fa312b851d919",
"assets/assets/animation/%253F.json": "5c8acf589992cc75e517ed07a0e740d4",
"assets/assets/animation/game5-finish.json": "4163b1ebb4cd30a87f0608840c55a956",
"assets/assets/animation/great.json": "23a68abc907baf77f3877fc48d7928f8",
"assets/assets/animation/fail.json": "ce465f32af117198945026afc85849bb",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/skwasm.wasm": "4e8794ddf4a38d9d979502cced963d9f",
"canvaskit/chromium/canvaskit.js": "2829bb10a7eb9912e12b452dfd671141",
"canvaskit/chromium/canvaskit.wasm": "7a1bea507c76779850ab738ff5eb598f",
"canvaskit/canvaskit.js": "3bd93dfe6f74ec4261f82b4d4c2c63dc",
"canvaskit/canvaskit.wasm": "acffb57c88613883935113f62d3f1cef",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
