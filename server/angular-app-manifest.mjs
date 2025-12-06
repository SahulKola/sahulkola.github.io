
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/v2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/v2"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 524, hash: 'fa885b32deb1557638a4b1c07ab077ca5a8c42a4672bbeaeef4c2a765be5abe8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: 'e965fed33c441a3f12ba6de37e8d0ac8e60d60c7cad25758ca25f9e059715cac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19696, hash: 'e7df4d1e55041ef0af95c3a8afe080ac0e7e77465aed09acb7ca1529bcd53c2a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
