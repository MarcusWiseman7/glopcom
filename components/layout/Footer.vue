<template>
    <v-footer id="contact" color="black">
        <div class="footer__logo">
            <img src="~/assets/icons/logo_icon.svg" alt="logo icon" />
        </div>
        <div class="footer__content">
            <h2 class="footer__title">{{ $t('index.section_title.contact') }}</h2>
            <div class="footer__text footer__contact">
                <div class="footer__contact__info">
                    <div class="footer__text">
                        <p>GLOPCOM GmbH</p>
                        <p>Wylstrasse 11B, 6052 Hergiswil</p>
                        <p>Switzerland</p>
                    </div>
                    <div>
                        <a href="mailto:peter.rajec@glopcom.com">
                            <p>Email: peter.rajec@glopcom.com</p>
                        </a>
                        <a href="tel:+41797649020">
                            <p>Phone: +41 79 764 9020</p>
                        </a>
                        <p>VAT number: CHE-248.093.923 MWST</p>
                    </div>
                </div>
                <div class="footer__social">
                    <p>Follow us</p>
                    <img src="~/assets/icons/linkedin.svg" alt="linked in" />
                </div>
            </div>
        </div>
    </v-footer>
</template>

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
        max-width: 1000px;
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
        gap: 1rem;

        @include functions.device(tablet) {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
}
</style>
