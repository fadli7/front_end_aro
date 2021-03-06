module.exports = {
// export default {
  /*Modules
  */
 modules: [
  '@nuxtjs/axios', '@nuxtjs/auth',
 ],

//  plugins: [
//   '~plugins/axios'
//   // { src: "~/plugins/virtual-table.js", ssr: false },
//   // // '~/plugins/virtual-table',
//   // {src: "~/plugins/star-rating", ssr:true},
//  ],

//  build: {

//  },

//  build: {
//   vendor: [
//     'vue-virtual-table'
//   ],
//   plugins: [
        // '~/plugins/axios',
//     { src: '~/plugins/vue-virtual-table.js', ssr: false }
//   ]
//  },

 axios: {
  // baseURL: "https://still-spire-77258.herokuapp.com/api/v1",

  baseURL: "http://localhost:8000/api/",
  //  baseURL: "http://10.14.36.125:8000/api",
  credentials: false
 },
 auth: {
  redirect: {
    login: '/login',
    logout: '/',
    callback: '/login',
    home: '/'
  },
  // login: {
  //   endpoint: 'user/login',
  //   propertyName: 'access_token'
  // },
  // logout: {
  //   endpoint: 'user/logout',
  //   method: 'POST',
  //   paramTokenName: '',
  //   appendToken: false
  // },
  strategies: {
    local: {
      endpoints: {
        login: { url: 'auth/login', method: 'post', propertyName: 'api_token' },
        logout: { url: 'auth/logout', method: 'post' },
        user: { url: 'user', method: 'get', propertyName: 'user' }
      },
    }
  },
  // storageTokenName: 'nuxt-auth-token',
  // tokenType: 'Bearer',
  // notLoggedInRedirectTo: '/admin/login',
  // loggedInRedirectTo: '/',
  // token: {
  //   prefix: 'Bearer '
  // },
  // cookie: {
  //   prefix: 'auth.',
  //   options: {
  //     path: '/'
  //   }
  // },
  },
  router: {
    middleware: ['auth']
  },


  /*
  ** Headers of the page
  */
  head: {

    title: 'Assignment Online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://unpkg.com/sweetalert/dist/sweetalert.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#42A5CC' },

  /**
   * Import CSS
   */
  css: [
    /* Import Font Awesome Icons Set */
    '~/node_modules/flag-icon-css/css/flag-icon.min.css',
    /* Import Font Awesome Icons Set */
    '~/node_modules/font-awesome/css/font-awesome.min.css',
    /* Import Simple Line Icons Set */
    '~/node_modules/simple-line-icons/css/simple-line-icons.css',
    /* Import Bootstrap Vue Styles */
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    /* Import Core SCSS */
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],

  /*
  ** Import Plugin
   */
  plugins: [
    // {src: "~/plugins/axios"},
    { src: '~/plugins/virtual-table.js', ssr: false },
    // '~/plugins/virtual-table',
    {src: '~/plugins/star-rating', ssr:false},

    { src: '~plugins/bootstrap-vue.js', ssr: true }
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      "vue-virtual-table",
      "vue-star-rating"
    ],
    /*
    ** Run ESLint on save
    */
  //  vendor: ['vue-virtual-table'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        const vueLoader = config.module.rules.find(
          ({loader}) => loader === 'vue-loader')
        const { options: {loaders} } = vueLoader || { options: {} }

        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }

        config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
      }
    }
  }
}

function changeLoaderOptions (loaders) {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets']
        })
      }
    }
  }
}
