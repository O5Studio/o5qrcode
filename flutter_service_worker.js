'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "38a0821c5ff31e53dda4c256c02d85e6",
"assets/AssetManifest.bin.json": "59e20d450607f93410dc0fb7a5a23201",
"assets/AssetManifest.json": "5bd34b8593e8ffb5b996ef51e649d770",
"assets/assets/fonts/Anta-Regular.ttf": "08dc1c5893bfab96b496642e402e21fa",
"assets/assets/fonts/Anton-Regular.ttf": "055c4df4e2f8c7a4d4675cdd8fa68da0",
"assets/assets/fonts/Oswald.ttf": "ca399fd2286e6d1e50bd65bd950b33ef",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/RobotoRegular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/icons/app_icon.png": "671f6a80363150a23c148bae4c02046d",
"assets/assets/icons/app_icon_o5_qr.png": "f8f8c8252506a32a281d3ecae23b0de1",
"assets/assets/icons/ic_app.png": "5daf4bb8d87262e7e2c6fd0628c5bc11",
"assets/assets/icons/ic_audiovideo.png": "c9d3f8e6c8229ebef2e7f850e5e05d11",
"assets/assets/icons/ic_awareness.png": "3a70f7baeedc157b63db82f5eaef5f5e",
"assets/assets/icons/ic_discount.png": "047b8e037a7d6b741604c1d863fa1ba7",
"assets/assets/icons/ic_email.png": "79b04374fe667befc243f2e0bea05482",
"assets/assets/icons/ic_events.png": "278991aa5d547c59601ed31f90a9765b",
"assets/assets/icons/ic_facebook.png": "cb379dfc746659a4cb2ecdfa91add3f0",
"assets/assets/icons/ic_feedback.png": "b9b04134e6a862137f06a657f2fb8bf0",
"assets/assets/icons/ic_fileshare.png": "271056c149432e26ea4293e57d32f0bb",
"assets/assets/icons/ic_free.png": "1dfcfaa9c23c1dd16427a48137e8af2c",
"assets/assets/icons/ic_hospital.png": "3c4cfbd6a8c27f50a59ade7213647bdc",
"assets/assets/icons/ic_html5.png": "69ae2e07ca6f84cc4659e82fb5e7e450",
"assets/assets/icons/ic_instagram.png": "3f4c2d1d88750dd543ecfe3b0760ea66",
"assets/assets/icons/ic_linkedin.png": "09869e011565f9b3a28773d5321c0b5b",
"assets/assets/icons/ic_linkinbio.png": "5ba1413a39cd6c63bfda028f5ae9a9a2",
"assets/assets/icons/ic_menu.png": "23dcccd588653379a1972c160e4bc949",
"assets/assets/icons/ic_pinterest.png": "a7156ebb84c6c3c36cbd44389080fe5c",
"assets/assets/icons/ic_playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/icons/ic_pro.png": "b9c03b801940982ec5b8b0c457369a56",
"assets/assets/icons/ic_products.png": "4517673debde4c1b09081049c0044a39",
"assets/assets/icons/ic_quote.png": "a6ca2ef3504a951556eaf683873e7ced",
"assets/assets/icons/ic_snapchat.png": "1a07342ec535234b9a8f813400a147ee",
"assets/assets/icons/ic_sorry.png": "093a91690945e70e35d15d8992982b25",
"assets/assets/icons/ic_tiktok.png": "e9d6dc3cff9b332ed074a282c98354d3",
"assets/assets/icons/ic_twitter.png": "ad2f2e8ad801f3b411bd902ee07b8007",
"assets/assets/icons/ic_url.png": "b522d43685f7dc5a0c0c3c9296776ab8",
"assets/assets/icons/ic_vcard.png": "6cef0154dd99279db6498021a70c4082",
"assets/assets/icons/ic_web.png": "bdd391d4a05d00f426b970e390d0cbc9",
"assets/assets/icons/ic_website.png": "ff486a001b551c21bc922b1939fc2105",
"assets/assets/icons/ic_whatsapp.png": "3724b5cd5e12f785611a880de9b3c6d1",
"assets/assets/icons/ic_youtube.png": "4b3db0f09b19fe83b576b64d3dc5257f",
"assets/assets/icons/scan_me.png": "1b47fb43b66a51711704c830b2db47bc",
"assets/assets/icons/splash_mob.png": "630be9460297390a3d17de99c6e0ae94",
"assets/assets/icons/splash_web.png": "207f0cd0ef5e4933120015ad9346328e",
"assets/assets/icons/zic_facebook.png": "9b57d807a057f2f920104f8a57a0dc6d",
"assets/assets/icons/zic_insta.png": "edee0823d947d8826751ea63299a2a3c",
"assets/assets/icons/zic_linkedin.png": "05bc8fe22da6164e7a06af93d74e328d",
"assets/assets/icons/zic_snapchat.png": "4a819825f542d90e59eb2255ec832c7d",
"assets/assets/icons/zic_twitter.png": "f948b78c9d1961a9d2d67b2d712de658",
"assets/assets/icons/zic_whatsapp.png": "247b861b68ebab2383325d1c83633921",
"assets/assets/icons/zic_youtube.png": "9bb53f815ee5d655ac4d0c7509c2597d",
"assets/assets/images/im_audio_video.jpg": "a311413b652d3728f6a9f3aeb78705ad",
"assets/assets/images/im_awareness.jpg": "723fbeae7f2efa01b383c3f1d5ce1fea",
"assets/assets/images/im_clinic.jpg": "9d4ac97e1070c6cf4c7cc80ce17c9243",
"assets/assets/images/im_discounts.jpg": "e3dbfa4f3276b1bead0ac7f319138213",
"assets/assets/images/im_email.jpg": "19ad5df50149b9be7d16641d5bca5195",
"assets/assets/images/im_events5.jpg": "36eaa2a3d77c8876c830347588a0667f",
"assets/assets/images/im_events6.jpg": "0510dede80ce063ce3e416d7482bb62e",
"assets/assets/images/im_feed_back.jpg": "03f2a45f6acf7806c791e7fc4192f2c8",
"assets/assets/images/im_file_share.jpg": "d86aa9de52e643860ebd2bd32b65a32f",
"assets/assets/images/im_get_apps.jpg": "95ce5d743b653d12560bc36b276c855a",
"assets/assets/images/im_hospital_cover.jpg": "c53587554ac8f1c463d2fcb9deacdd86",
"assets/assets/images/im_loading.jpg": "e817a3aee96790fa0060e6788e11eb34",
"assets/assets/images/im_loading1.jpg": "fa15ac8970c1f31c04d289964a6137e4",
"assets/assets/images/im_menu_cover.jpg": "03c7daecd23ac993bd681fbc51b5d1a4",
"assets/assets/images/im_menu_pdf.jpg": "21a45462773ec0bd0cf0dc8f356b2675",
"assets/assets/images/im_menu_single.jpg": "22ea2fd26a5f91488ec2bd14307410f7",
"assets/assets/images/im_menu_slider.jpg": "c7457b0b86b80ef9b4f367d1f7185127",
"assets/assets/images/im_messages.jpg": "ea190757f26d49577bf4088f477f5c4b",
"assets/assets/images/im_products.jpg": "810cac056764f8675a6e2bb4b6a43bef",
"assets/assets/images/im_social_links.jpg": "f761dd96a96ef0f4d99c610fa6685db6",
"assets/assets/images/im_url.jpg": "f9f36adc778c8969790b1b6469732a70",
"assets/assets/images/qr_starter_img.jpg": "ea23060073e8b2d8d6a061bb30c69a3d",
"assets/FontManifest.json": "b8cf472bc314b8c9015a255164a2bad6",
"assets/fonts/MaterialIcons-Regular.otf": "8fab53d635f6ad2120bc4fa5ce6c5ca7",
"assets/NOTICES": "42709784645ac432ff446225e6a93680",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "49c5174328b36f7e26c252e7cc17074d",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "027bc9d1cbc531e6b10a1df64cb1ae23",
"icons/Icon-512.png": "8ec78f8c935d7c3a373170a340cd0b97",
"icons/Icon-maskable-192.png": "506b150d5ab9e4f85c0fc91249ed1b42",
"icons/Icon-maskable-512.png": "109a3be27b1b782a6763d434485c4a12",
"index.html": "7366067582042fd8826ff968153a2f54",
"/": "7366067582042fd8826ff968153a2f54",
"main.dart.js": "08632efed597f98d15235600c554e7cb",
"manifest.json": "ca83618cc7679b01fcac7482ee4654b9",
"version.json": "0d47a12244d1901956b42df667447605"};
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
