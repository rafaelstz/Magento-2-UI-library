importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([
  {
    "url": "actions-toolbar.html",
    "revision": "9cb1f0b4a9f405df30409b844c2d6ac7"
  },
  {
    "url": "Blank-Theme-Icons/Blank-Theme-Icons.eot",
    "revision": "c04659d68053ce5ae3a332093fb1d6f2"
  },
  {
    "url": "Blank-Theme-Icons/Blank-Theme-Icons.svg",
    "revision": "114861f18dc46d2c5173590378ca9ecb"
  },
  {
    "url": "Blank-Theme-Icons/Blank-Theme-Icons.ttf",
    "revision": "d85bcdde4ed030591b2dc4b11cddfc97"
  },
  {
    "url": "Blank-Theme-Icons/Blank-Theme-Icons.woff",
    "revision": "803c0d43a92217627762b84e7b00b3cc"
  },
  {
    "url": "Blank-Theme-Icons/Blank-Theme-Icons.woff2",
    "revision": "39ee9b8dcc219b105d138424cf3fb471"
  },
  {
    "url": "Blank-Theme-Icons/selection.json",
    "revision": "89065a1952954aa3fae2ace83eb5e0e8"
  },
  {
    "url": "breadcrumbs.html",
    "revision": "efc5743815e2fa35b2e55283ab7cc091"
  },
  {
    "url": "buttons.html",
    "revision": "c1827d183bc403236f090484d38770b5"
  },
  {
    "url": "components.html",
    "revision": "c0e77dc9ac039e867b8aca9de3ff4a30"
  },
  {
    "url": "docs.css",
    "revision": "4f4736cd3f4b3492c9e7d7dce28cce8c"
  },
  {
    "url": "docs.html",
    "revision": "eb4e4c46173fdf8395119ada15e46536"
  },
  {
    "url": "dropdowns.html",
    "revision": "74eb93b8d9523384ae0acdd22c655ed9"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "398b2a5452665241ca6a03c5490558f2"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "e89f09c80f8a035b34501f737f1d3234"
  },
  {
    "url": "favicon/apple-touch-icon-precomposed.png",
    "revision": "cbed95dcff4d5c03254b12f62fdfbdb9"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "03773206f9245f654d6c0345d8b3acfb"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "2a3f360b62f50c0ac7b03c9dfb539e5c"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "ab98b73360b7f6e7b0d8bb50243f10ca"
  },
  {
    "url": "favicon/mstile-144x144.png",
    "revision": "20f01917475ba6b1f4a5521dca9e8b0c"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "7da521237136647bfc6269935c92e94e"
  },
  {
    "url": "favicon/mstile-310x150.png",
    "revision": "16b8946ee75a509f8f6e1e7ac4e1686a"
  },
  {
    "url": "favicon/mstile-310x310.png",
    "revision": "d842edb72ac9523663ec3de619a4dd13"
  },
  {
    "url": "favicon/mstile-70x70.png",
    "revision": "6b734ecdc580736de3a13aaac631b34d"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "b5d32c651b9bacd7742ad9ecd48a53d5"
  },
  {
    "url": "forms.html",
    "revision": "3da7d92caf65667e5cab45cc6e14ddd3"
  },
  {
    "url": "icons.html",
    "revision": "0bc548221d22240936aabba8e25c2afe"
  },
  {
    "url": "images/bkg_gallery_thumbs.png",
    "revision": "778b15036c44978547e67b632783f37f"
  },
  {
    "url": "images/blank-theme-icons.png",
    "revision": "4128d16e7cfe05f99709593ce2b2b721"
  },
  {
    "url": "images/cards.png",
    "revision": "bc1c8890515d7cb502d0ef1e79f54fb3"
  },
  {
    "url": "images/debug_bkg.png",
    "revision": "fcb7b0f45e5ec773f95ea843b34dd0b3"
  },
  {
    "url": "images/desktop-pwa.png",
    "revision": "98d1e82b5062d15553018c3a2d0725a6"
  },
  {
    "url": "images/loader-1.gif",
    "revision": "2abd5f35f34f27ce4afc50e0da8966df"
  },
  {
    "url": "images/loader-2.gif",
    "revision": "e9409e128885acb4a1a1b7b4fd00cfe7"
  },
  {
    "url": "images/logo.svg",
    "revision": "ee913ebe6ce68a2a62c8b0cee2224185"
  },
  {
    "url": "images/magento-logo.svg",
    "revision": "8a3a26ff91a3c5afcba324bff97da142"
  },
  {
    "url": "images/mobile-pwa.png",
    "revision": "bea18185ea7defb6250f63c019258053"
  },
  {
    "url": "images/spacer.gif",
    "revision": "c926c92101fba43630294018ad615692"
  },
  {
    "url": "images/sprite-gallery.png",
    "revision": "f45c6e8cbeabda45dc7cf9904bc185ee"
  },
  {
    "url": "images/sprite-gallery.svg",
    "revision": "ad627d8af1623e85346ee61c422c12a7"
  },
  {
    "url": "index.html",
    "revision": "594b0c92f226ca09b1aefeaa42875262"
  },
  {
    "url": "layout.html",
    "revision": "cabe3a7cf7712313f0d52efcbf3d2e7b"
  },
  {
    "url": "lib.html",
    "revision": "b83f3d929daa2bd96e76146cabf895ae"
  },
  {
    "url": "loaders.html",
    "revision": "bfbcd399506a21f479c8f43c2ed864a6"
  },
  {
    "url": "manifest.json",
    "revision": "a846461bb4a014a1f2721988ccefa609"
  },
  {
    "url": "messages.html",
    "revision": "41fc60807b9d3d4d479a2ce3a67601b4"
  },
  {
    "url": "pages.html",
    "revision": "b2a07189e5b5cfc692fd84f19fc904a8"
  },
  {
    "url": "popups.html",
    "revision": "df52c0b284dadc417cc7e0ec57126630"
  },
  {
    "url": "rating.html",
    "revision": "5208f2cbb0584da30096328cb5a473c9"
  },
  {
    "url": "README.md",
    "revision": "d77a091eb93eed1dfeefb1f81e2736a0"
  },
  {
    "url": "resets.html",
    "revision": "a3662d3e863a40808bf797eb79837cfb"
  },
  {
    "url": "responsive.html",
    "revision": "ce42ab15b4b640669f4fe0fc88cd4f79"
  },
  {
    "url": "sections.html",
    "revision": "77e07256d757b29683d9158ebfebf8dd"
  },
  {
    "url": "sw-register.js",
    "revision": "4e9e6b51a7f56fbc46210d2e969348e4"
  },
  {
    "url": "tables.html",
    "revision": "6006b2ec260715b058fed6555ca55c1c"
  },
  {
    "url": "tooltips.html",
    "revision": "93c2ed470ac7839daf1f31181d2de740"
  },
  {
    "url": "typography.html",
    "revision": "2cd9269fecb72c95b6d78fb3268592db"
  },
  {
    "url": "ui.css",
    "revision": "5b8cbb65e37b50c98e8593783116a2f7"
  },
  {
    "url": "utilities.html",
    "revision": "b169496c443323108502b7133ee61959"
  },
  {
    "url": "variables.html",
    "revision": "157d6b4cc059ae262ec6a53c43fa188a"
  }
]);

  // Use the cache-first strategy and update the cache in the background
  workbox.routing.registerRoute(
      new RegExp('.*\\.(?:js|css|html|png|jpg|jpeg|svg|gif)'),
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'assets-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 50, // Maximum number of entries in the cache
            maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
          }),
        ],
      })
  );
}