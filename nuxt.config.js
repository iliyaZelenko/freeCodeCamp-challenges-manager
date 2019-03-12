import pkg from "./package.json";

export default {
  mode: "universal",

  serverMiddleware: [
    // API middleware
    "./api/index"
  ],

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3b8070" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox"
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    debug: true,
    proxy: true
  },
  proxy: {
    "/api": {
      target: "https://oopwy1kv26.sse.codesandbox.io/api/",
      pathRewrite: {
        "^/api/": ""
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
