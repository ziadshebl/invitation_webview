'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5a274fc7502143ce89fe356e292135aa",
"index.html": "765c9c5c34084136d8067f43f750d263",
"/": "765c9c5c34084136d8067f43f750d263",
"main.dart.js": "19f1d77f9707443129252af1488ce732",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/rings.png": "3c8be6cc7ddaef69da7c3bff7ad96912",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8aa37cd8f689a6455e437110ba43a323",
".git/config": "c0c8145e647461178dd40b3a82338962",
".git/objects/0d/4ac9e23d3975fa98c2c0379d4b813966b27cff": "a49e6d8c4101b97ea399c01f5fec0aef",
".git/objects/0d/241c9d3992d2aa4380c753141bc605ae4e6416": "26251178328027e330b6eab02489c8e6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/595c46e1e2abac93897434edea67a290b32d28": "90d992e5c236df0e8f916348eae06430",
".git/objects/95/eb1bb54db471e6ecb87f71e45824dee9c67261": "8dbc859d47df69bbd23828662b8447b0",
".git/objects/95/a34993946c81f0f191a8b9e956747dfdcdfa66": "e25d56f21269d81df9d550e8bdecdc6e",
".git/objects/0c/b487d70c95bb9ae95a00c4e1e1f448996695dd": "fa0759ac7e1af011f88652e06d3c131b",
".git/objects/3e/8929a2b53ea74a2995b0571479adfa8c22894a": "71ca78709915a12032b960020219d56f",
".git/objects/50/cf942317e36e40954a82397949c307464e975b": "ae89e06398f0d02f8389b6385b46444a",
".git/objects/57/32356745dc8d31ffd5d346030e3e276a30d007": "730d4828112e6691eb7b7c341410b01b",
".git/objects/35/afb60d1d9070fc48cc83628ee3901a2e728ab1": "a0972f99b3dac126e7580e06a1b5df23",
".git/objects/3d/4bab216893cbc194318d7db4cb995f4078e6ea": "5aec73bf9531bacbd4bf5febc272b104",
".git/objects/3d/55ba863e6b9fbfc9aac52162a4df05c50c1e73": "041ea4765ca766f5a9a4d182209ac7d0",
".git/objects/67/929889d19f0c5725a5da060815cd55f0d5717b": "934d3fb2b17ec36f632ddd955ea605e5",
".git/objects/94/2425e4f3dfafff969b14daffef21c6f368f97c": "eef09302d2b1ef0fb2a3752a10a5992e",
".git/objects/60/818712c7d22e566d958fac122cc6bca8b6d444": "8a3fc454ba523afaade7f13216248f86",
".git/objects/60/372f09c35820ce45dae9ba5053a9c854789f39": "1d9472359e9b648808198fb5836d1ee1",
".git/objects/34/faaf69e88d3a3253369150936d9bf9e8ded416": "405c7c55f9602d7197effd5d095f2997",
".git/objects/5f/e662c27f72c3d657e95eb8b4ac560950afd584": "6c5cee8eaf387626384a8453c78eb28b",
".git/objects/b5/f454fb92c295e2584ccb16e595ca2ec0d74663": "5d2daf716905425e7d3f014207861a5a",
".git/objects/ac/7d805f3104a259f9bc4d4c5f6d4dd3d811ae54": "5e5a4b19aaa3858e73f05865b547436c",
".git/objects/be/228477159128832bf753963fd93e3a9bc84ec1": "c1374b6c5c25e1b2dd8f4b1ffd2333f4",
".git/objects/b3/997fd50640fdda65841a7dddf1505a1a1b2732": "2b866c1412e97a1b717c9483e4f511ab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b1a6c8f4028410204560dbd5c337dca2556e14": "396099395860b67a325a3d7a852e2501",
".git/objects/bc/9a905f5e922eca1394f0ec28d1fd4e8302feb7": "f1ff08452be16b119baebe4162dc96d3",
".git/objects/d8/8e0c9084d4aecacaebfd0bb324ede53802d6c7": "9f8eec565aeabdcf4fd26697dd38b544",
".git/objects/d8/17aff19bc2e28d0064d5ea7fa2ea21404283b6": "f18e34177e1c506995585c9a61341658",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/e0541bc66417e22a54ce7786939aa2cc502f7c": "9ab406bfa3a0c32ab307b9ff527ef3c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c1/5cd3319f30e5f2f3edced6b6e80e0ad7d13f5c": "d5eefc1ec545a48dba2233fa8c150fcc",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/7d/77d4dfd40eea555258b7510dc9edd1949d7687": "ecb377a15ae6fcea82e3504cab0845a0",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/7c/7df86ba975a4b3d4cd1126e198d14c52477a10": "4c7131b4b3db292efdd992b17ff88b08",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/940a390b7464ed2e434baf18a6429621452f99": "a5d0dde14966e4cd9b83e94e649d9d3c",
".git/objects/4c/f0e655bcd0c6a2e0ce932b4650d43ac0117661": "00e7594845e1dbae0aef3b8dcb9673a1",
".git/objects/75/55ec5133106d1c9cd4da0c7dd479baaa2f41f1": "51ca58be97c7fec0ae673ec7dd62363f",
".git/objects/2a/684cbe6ed506b1f87bab52347380f55cee695b": "9567cba6a23201413ef48b3bc2f0691f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/21dfad7f236a3ac87e3dd86ad5588d441ac334": "9f2d156a7a80336ad705b046b9a58732",
".git/objects/65/c5fb94548e1bc0bba83e2cfe26fbc107bd5dc1": "eee4870ad6b2ca64fdb6004a3ddce49c",
".git/objects/54/c76f9c15e7e5f8a3cf29ce256cf24c2dd9c5cb": "1a3dd4e0cd55dba78a127ece3ba1f516",
".git/objects/97/aea0af1cef158e47ae65b70526328179dc7be5": "99d29ef6dcb73ca585eaa0425d1f5178",
".git/objects/0f/fac86b48d890ecd630bc6673ab3f44bedb19de": "d931bdd853c7f67033e1c34b74114b64",
".git/objects/bf/8496153f065efa01ec7179a0481b2bc5bdd98e": "077d30f454efe5932fd6aa9b54f5530a",
".git/objects/d3/f616419b19facd5c95bda5015e925fd06e9ab6": "a6953b3b7bc0a2001cf74dce8157535d",
".git/objects/a7/2ea8d6c6716de4b81e69d72f4ba0ebbc67024b": "76e886102905931139d23be9e41a82cf",
".git/objects/b6/8293746b6faf99679f6a322fb38e54658e9edf": "f7702d25a1139379652ab1327bd16adf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/9e7253005bfe3f0f9c169655a07d2367c0b150": "a8432a76ca187616abdfa764e77a5609",
".git/objects/a8/7da397f55da40d5630e64e906daedd293dfc50": "3b8dcb766c6924680af74c30c39fdf4a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/03aa5227461fd33e6112590782d3e6635689cf": "982c13d007c0f12b937bd669e9ec77e3",
".git/objects/f0/3fa084d5bc51762f68e0fe70422ecbd94072f5": "26ec3179385a600ec3ec06b8c9cdc8c7",
".git/objects/ff/05a20214ea2d172e39127cbe4467ec79f93abe": "4db9257104fb16d0679798242b59aaf5",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/a9a00d2bca65077420aa6637319463eab0822a": "e8e1dff84feee5c21437d0e51866c463",
".git/objects/e7/3c7d9a7a0c03dc9ea8e868a5cc6df1422d5aaf": "9df3f2c36e8c7b309dbbbf721c772ac3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/14/2e51984a50a9973978b11a38550007630ce7f1": "47a779ba009426c834dafd6ef3418331",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "86ed9b61020dc168cffc5c757b60bea9",
".git/logs/refs/heads/master": "86ed9b61020dc168cffc5c757b60bea9",
".git/logs/refs/remotes/origin/master": "b92487d22841d27b261c3d3dfc910c95",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "18829f304735614fcbe7163ffe7b6351",
".git/refs/remotes/origin/master": "18829f304735614fcbe7163ffe7b6351",
".git/index": "cb7e886d04ce40b94b74a2c12e2460f9",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "abb82c660dc24714822d3e324cf087ca",
"assets/AssetManifest.json": "b10b53137e2e996ec3e3a0252a4a5460",
"assets/NOTICES": "f22a68737e2a1e3cdc56ec81c04183ab",
"assets/FontManifest.json": "a2e3da3c09cab8e9fd129750527954fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/InvitationCard.png": "b2f04e8c5f3ef737dbe98205d9de3123",
"assets/assets/Container.png": "23399c85cd88d0619c6b68d4dbcc5d09",
"assets/assets/stylu.ttf": "051d8e8ba59a9c5d35dc52844c949f6a",
"assets/assets/Error.png": "e06bec55c4be53455b2d6c256e7c5be5",
"assets/assets/guests.json": "564d10a3f7180024654e42fdf0d3bf91",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
