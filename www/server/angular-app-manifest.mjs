
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5JLVHVJJ.js"
    ],
    "route": "/course-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZILUKL63.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3DN4Q6L3.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KXHMNE6Y.js"
    ],
    "route": "/order-complete"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V7Q6YTNA.js"
    ],
    "route": "/order-faild"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-F5LBLHWQ.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3HE2NADT.js"
    ],
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "redirectTo": "/not-found-page",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6351, hash: 'b279ca5b0dcd4cad20877abb1fd0d02c77931d4ac860f1de7707cc813933b8f8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1277, hash: '33ca652411723699cb24e35776c4ef11ac72ca42e1db281fa6fc905e3908d7e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 7176, hash: 'd9ab1136be2a774d32175c2f3197cdf0a0267a0d926ed2028bf5209f61d05c39', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7123, hash: '13841d1177a4cff164c7e2f1d2d2b7a163bf1ee66693e414c912adc9aa4a7a1a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 7176, hash: 'd480fc4d3c9b2f087654c817afc4cbe1f3987446030a76b402e77fdbc3df4a7c', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'course-details/index.html': {size: 7176, hash: 'b74fb7f56d5b19eb8d85039921caae028284261b02536626623c1a7e289fd661', text: () => import('./assets-chunks/course-details_index_html.mjs').then(m => m.default)},
    'order-faild/index.html': {size: 7176, hash: 'aba87715f4395288fc789abdec5d9353048266e314377bc2400a3484c7bbea83', text: () => import('./assets-chunks/order-faild_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6690, hash: '4901c37ac92e2f084b57b904ac19ceab55ce4120f80310bf8c27dee3076d5e52', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 6696, hash: '1b72b60e36e9b0f05f573212fa5f7aff74a541fd085e25aee50933d0b104dae9', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'order-complete/index.html': {size: 7176, hash: '71cc99410afd68b96fdc80ff987661395547199092c7a1e7724734018b8e45b8', text: () => import('./assets-chunks/order-complete_index_html.mjs').then(m => m.default)},
    'styles-BYJ7CQOT.css': {size: 391247, hash: 'XSvcFJaKgco', text: () => import('./assets-chunks/styles-BYJ7CQOT_css.mjs').then(m => m.default)}
  },
};
