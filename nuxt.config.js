
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
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
        path: '/belichten-auswaschen',
        components: {
          default: resolve(__dirname, 'pages/exposure'),
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
