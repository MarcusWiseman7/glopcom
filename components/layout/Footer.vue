<template>
    <v-footer id="contact" color="black">
        <div class="footer__logo">
            <img src="~/assets/icons/logo_icon.svg" alt="logo icon" />
        </div>
        <div class="footer__content">
            <h2 class="footer__title">{{ $t('index.section_title.contact') }}</h2>
            <div v-if="contact" class="footer__text footer__contact">
                <div class="footer__contact__info">
                    <div class="footer__text">
                        <a :href="`mailto:${contact.email}`">
                            <p>Email: {{ contact.email }}</p>
                        </a>
                        <a :href="`tel:${contact.phone.replace(/\s/g, '')}`">
                            <p>Phone: {{ contact.phone }}</p>
                        </a>
                    </div>
                    <div class="footer__text">
                        <p>{{ contact.title }}</p>
                        <p>
                            {{ contact.address.street }}, {{ contact.address.zipcode }} {{ contact.address.city }},
                            {{ contact.address.country }}
                        </p>
                        <p>VAT number: {{ contact.vat }}</p>
                    </div>
                    <div class="footer__copyright">
                        <small>&copy; {{ new Date().getFullYear() }} {{ contact.title }}</small>
                    </div>
                </div>
                <div class="footer__social">
                    <p>Let's connect</p>
                    <div class="footer__social__icons">
                        <NuxtLink
                            v-for="social in filteredSocials"
                            :key="social.name"
                            :to="social.url"
                            class="footer__social__icon"
                            target="_blank"
                            external
                        >
                            <img :src="`./icons/${social.name}.svg`" :alt="social.name" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </v-footer>
</template>

<script setup lang="ts">
const { contact } = storeToRefs(useContentStore());

const INCLUDED_SOCIALS = ['linkedin', 'whatsapp', 'wechat'];

const filteredSocials = computed(
    () => contact.value?.social?.filter((social) => INCLUDED_SOCIALS.includes(social.name)) || [],
);
</script>

<style lang="scss" scoped>
.footer {
    &__logo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

        img {
            height: 100%;
            width: auto;
            max-width: 100%;
        }
    }

    &__content {
        width: 100%;
        max-width: var(--content-max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 0;
        z-index: 1;
        text-shadow: var(--text-shadow-black);

        @include functions.device(tablet) {
            padding: 3rem 1rem;
        }

        @include functions.device(desktop) {
            padding: 3rem 0;
        }
    }

    &__title {
        @include typography.font(headlines, h4);

        @include functions.device(tablet) {
            @include typography.font(headlines, h3);
        }
    }

    &__text {
        @include typography.font(body, s);

        @include functions.device(tablet) {
            @include typography.font(body, m);
        }
    }

    &__contact {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        @include functions.device(tablet) {
            flex-direction: row;
            justify-content: space-between;
        }

        a {
            text-decoration: none;
            color: #fff;
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    &__social {
        display: flex;
        align-items: center;
        gap: 2rem;

        @include functions.device(tablet) {
            flex-direction: column;
            margin-top: -4rem;
        }

        &__icons {
            display: flex;
            gap: 1rem;

            @include functions.device(tablet) {
                flex-direction: column;
                align-items: center;
            }
        }

        &__icon {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 42px;
                height: 42px;
            }

            @include functions.device(tablet) {
                img {
                    width: 52px;
                    height: 52px;
                }
            }
        }
    }
}
</style>
