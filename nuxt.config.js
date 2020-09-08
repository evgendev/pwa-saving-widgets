import data from "./static/storedata.json";
let dynamicRoutes = () => {
  return new Promise((resolve) => {
    resolve(data.map((el) => `product/${el.id}`));
  });
};

const IS_DEV = (process.env.NODE_ENV === 'development')
const scriptURL = !IS_DEV ? 'https://widgets.mobsted.com/w4pwa.js' : 'http://localhost:9000/w4pwa/w4pwa.js'

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Skyline Ivy",
    script: [
      { src: "https://js.stripe.com/v3/" },
      {
        src: "https://cdn.jsdelivr.net/npm/pwacompat",
        crossorigin: "anonymous",
        assets: true
      },
      {
        innerHTML: `
          (function(m,o,b,s,t,e,d){
            m[t]=m[t]||{},e=o.createElement(b),d=o.getElementsByTagName(b)[0],
              e.async=1,e.src=s,d.parentNode.insertBefore(e,d)
          })(window,document,"script","${scriptURL}","w4pwa");
          w4pwa.config = {
            accountId: "a7db574a",
            projectId: 94,
            clientId: 94,
          }
        `
      }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:300,600|PT+Serif&display=swap"
      }
    ],
    __dangerouslyDisableSanitizers: ["script"]
  },
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["normalize.css", { src: "~/assets/main.scss", lang: "sass" }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [`~/plugins/currency-filter.js`],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa"],
  pwa: {
    icon: {
      fileName: "icon512x512.png"
    },
    manifest: {
      name: "Skyline Ivy",
      short_name: "SI store",
      start_url: "/?source=pwa",
      description: "My firts PWA website",
      background_color: "#2b2b2b",
      theme_color: "#2b2b2b",
      display: "standalone"
    },
    workbox: {
      enabled: true
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
