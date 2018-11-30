importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "app.bundle.3ece2e9d6f70d5479c2c.css",
    "revision": "4ab14748cddf7f1159acafad69efb20d"
  },
  {
    "url": "app.bundle.3ece2e9d6f70d5479c2c.js",
    "revision": "08cb128cb701dddc454e3185205b384d"
  },
  {
    "url": "fonts.css",
    "revision": "329dd04b3b38ff48c9688b7b4942138d"
  },
  {
    "url": "index.html",
    "revision": "128f622d813040fe75b6f0e2b47f1948"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
