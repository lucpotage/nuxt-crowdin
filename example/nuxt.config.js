import crowdinModule from '..'

export default {
  modules: [
    ['nuxt-i18n']
  ],
  buildModules: [
    [crowdinModule]
  ],
  crowdin: {
    token: process.env.CROWDIN_TOKEN
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          greeting: 'Hello'
        },
        fr: {
          greeting: 'Bonjour'
        }
      }
    }
  }
}