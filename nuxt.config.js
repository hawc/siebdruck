export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'siebdruck',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/siebe',
        components: {
          default: resolve(__dirname, 'pages/screens'),
        }
      }, {
        path: '/papier',
        components: {
          default: resolve(__dirname, 'pages/paper'),
        }
      }, {
        path: '/textilien',
        components: {
          default: resolve(__dirname, 'pages/textiles'),
        }
      }, {
        path: '/rakel',
        components: {
          default: resolve(__dirname, 'pages/squeegees'),
        }
      }, {
        path: '/beschichten',
        components: {
          default: resolve(__dirname, 'pages/coating'),
        }
      }, {
        path: '/entschichten',
        components: {
          default: resolve(__dirname, 'pages/decoating'),
        }
      }, {
        path: '/farben',
        components: {
          default: resolve(__dirname, 'pages/inks'),
        }
      }, {
        path: '/belichten-auswaschen',
        components: {
          default: resolve(__dirname, 'pages/exposure'),
        }
      }, {
        path: '/geraete',
        components: {
          default: resolve(__dirname, 'pages/devices'),
        }
      }, {
        path: '/drucken',
        components: {
          default: resolve(__dirname, 'pages/printing'),
        }
      }, {
        path: '/ueber',
        components: {
          default: resolve(__dirname, 'pages/about'),
        }
      }, {
        path: '/kontakt',
        components: {
          default: resolve(__dirname, 'pages/contact'),
        }
      })
    }
  }
}
