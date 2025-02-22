// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    devtools: { enabled: true },

    modules: ['@nuxtjs/seo', '@nuxt/eslint', '@nuxtjs/i18n', 'vuetify-nuxt-module'],

    vuetify: {
        vuetifyOptions: {
            theme: {
                // defaultTheme: 'dark',
            },
        },
    },
});
