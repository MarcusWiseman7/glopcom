<template>
    <v-footer id="contact" color="black">
        <div class="footer__content">
            <h2 class="footer__title">{{ $t('index.section_title.contact') }}</h2>
            <div class="footer__text">
                <p>GLOPCOM GmbH</p>
                <p>VAT number: xxxxxxxxxxxx</p>
            </div>
            <div class="footer__text footer__contact">
                <div>
                    <p>Address: Wylstrasse 11B, 6052 Hergiswil, Switzerland</p>
                    <a href="mailto:peter.rajec@glopcom.com">
                        <p>Email: peter.rajec@glopcom.com</p>
                    </a>
                    <a href="tel:+41797649020">
                        <p>Phone: +41 79 764 9020</p>
                    </a>
                </div>
                <div class="footer__social">
                    <p>Follow us</p>
                    <v-icon icon="mdi-linkedin" size="x-large" />
                </div>
            </div>
        </div>
    </v-footer>
</template>

<style lang="scss" scoped>
.footer {
    &__content {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem 0;

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
            @include typography.font(headlines, h2);
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
