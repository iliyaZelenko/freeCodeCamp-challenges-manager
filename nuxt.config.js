import pkg from './package.json'

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

export default {
  mode: 'universal',

  serverMiddleware: [
    // API middleware
    './api/index'
  ],

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3b8070' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vuetify'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    debug: true,
    proxy: true
  },
  // proxy: {
  //   "/api": {
  //     target: "https://oopwy1kv26.sse.codesandbox.io/api/",
  //     pathRewrite: {
  //       "^/api/": ""
  //     }
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    watch: ['api'],
    plugins: [
      new MonacoWebpackPlugin()
    ],
    babel: {
      plugins: [
        '@babel/plugin-proposal-optional-chaining'
        // в babel 7 используется этот пакет, a не "transform-runtime"
        // '@babel/plugin-transform-runtime'
      ]
    },

    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
