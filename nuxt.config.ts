// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    modules: ['@nuxtjs/seo', '@nuxt/eslint', '@nuxtjs/i18n', 'vuetify-nuxt-module', '@pinia/nuxt', '@nuxtjs/sanity'],

    robots: {
        groups: [
            {
                disallow: [],
            },
        ],
    },

    i18n: {
        locales: [
            { code: 'en', language: 'en-US' },
            { code: 'de', language: 'de-DE' },
        ],
        baseUrl: import.meta.dev ? 'http://localhost:3000' : 'https://glopcom.com',
        vueI18n: './i18n.config.ts',
    },

    vuetify: {
        vuetifyOptions: {
            theme: {
                // defaultTheme: 'dark',
            },
        },
    },

    sanity: {
        projectId: 'alvfsq58',
        dataset: 'production',
    },

    css: ['@/assets/styles/main.scss'],

    app: {
        head: {
            title: 'Glopcom',
            meta: [{ name: 'description', content: 'Glopcom' }],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },
});
