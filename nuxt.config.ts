// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    devtools: { enabled: true },

    modules: ['@nuxtjs/seo', '@nuxt/eslint', '@nuxtjs/i18n', 'vuetify-nuxt-module'],

    robots: {
        groups: [
            {
                disallow: [],
            },
        ],
    },

    i18n: {
        locales: [{ code: 'en', language: 'en-US' }],
        vueI18n: './i18n.config.ts',
    },

    vuetify: {
        vuetifyOptions: {
            theme: {
                // defaultTheme: 'dark',
            },
        },
    },
});
