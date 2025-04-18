<template>
    <div class="hero">
        <SanityImage :asset-id="hero.image.media.asset._ref" :alt="hero.image.alt" auto="format" />
        <div class="hero__text">
            <h1 class="hero__text__title">{{ useTranslation(hero.title) }}</h1>
            <h3 class="hero__text__subtitle">{{ useTranslation(hero.subtitle) }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Hero } from '~/types/hero';
import { useTranslation } from '~/composables/useTranslation';

defineProps<{ hero: Hero }>();
</script>

<style lang="scss" scoped>
.hero {
    position: relative;
    width: 100%;

    @include functions.device(tablet) {
        min-height: 500px;
    }

    &__text {
        position: absolute;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 1rem;
        text-shadow: var(--text-shadow-black);

        @include functions.device(tablet) {
            padding: 0 2rem;
        }

        &__title {
            @include typography.font(headlines, h6);

            line-height: 2rem;

            @include functions.device(tablet) {
                @include typography.font(headlines, h3);

                line-height: 4rem;
            }
        }

        &__subtitle {
            @include typography.font(body, xs);

            line-height: 2rem;

            @include functions.device(tablet) {
                @include typography.font(body, l);

                line-height: 4rem;
            }
        }
    }

    img {
        width: 100%;
        height: auto;
        margin-top: 1px;
    }
}
</style>
