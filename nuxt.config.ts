import { defineOrganization } from 'nuxt-schema-org/schema';

const DESCRIPTION =
    'At GLOPCOM - Global Optical Components, we believe in building long-term, trust-based partnerships that drive sustainable business success in the optical communication, sensing, semiconductor, and automotive industries. Our mission is to connect technology with market needs, helping companies optimize their sales strategies, expand their global presence, and access high-quality optical components.';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    modules: [
        '@nuxt/eslint',
        '@nuxtjs/i18n',
        'vuetify-nuxt-module',
        '@pinia/nuxt',
        '@nuxtjs/sanity',
        'nuxt-schema-org',
        'nuxt-seo-utils',
        'nuxt-link-checker',
    ],

    i18n: {
        locales: [
            { code: 'en', language: 'en-US' },
            { code: 'de', language: 'de-DE' },
        ],
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        baseUrl: import.meta.dev ? 'http://localhost:3000' : 'https://glopcom.com',
    },

    site: {
        url: import.meta.dev ? 'http://localhost:3000' : 'https://glopcom.com',
        name: 'Glopcom',
    },

    schemaOrg: {
        identity: defineOrganization({
            name: 'Glopcom',
            description: DESCRIPTION,
            url: 'https://glopcom.com',
            logo: '/logo.png',
        }),
    },

    vuetify: {
        vuetifyOptions: {
            defaults: {
                global: {
                    ripple: false,
                },
            },
            theme: {
                defaultTheme: 'light',
                themes: {
                    light: {
                        colors: {
                            primary: '#009688',
                        },
                    },
                },
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
            meta: [
                {
                    name: 'description',
                    content: DESCRIPTION,
                },
                { name: 'msapplication-TileColor', content: '#ffffff' },
                { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
                { name: 'theme-color', content: '#ffffff' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
                { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
                { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
                { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
                { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
                { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
                { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
                { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
                { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/manifest.json' },
            ],
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/styles/functions.scss";
                        @use "@/assets/styles/typography.scss";
                    `,
                },
            },
        },
    },
});
