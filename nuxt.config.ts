// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  /*
  use of vuetify library
  */
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  /*
  links
  */
  runtimeConfig: {
    public:{
      bwmStaHttpUrl: process.env.BWM_STA_HTTP_URL || 'http://bauwerksmonitoring.gia.rwth-aachen.de:4002/FROST-Server/',
      bwmStaWsUrl: process.env.BWM_STA_WS_URL || 'ws://bauwerksmonitoring.gia.rwth-aachen.de:9876/mqtt',
      bwmSosaUrl: process.env.BWM_SOSA_URL || 'http://bauwerksmonitoring.gia.rwth-aachen.de:8080/',
      axios: {
        baseURL: process.env.BASE_URL || 'http://bauwerksmonitoring.gia.rwth-aachen.de:8081/'
      }
    } // Note: during the development the localhost is set to bauwerksmonitoring.gia.rwth-aachen.de
    
  }


})
