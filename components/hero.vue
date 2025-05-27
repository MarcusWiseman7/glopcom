<template>
    <div v-if="hero" class="hero">
        <GPicture :images="hero.images" />
        <div class="hero__text">
            <h1 class="hero__text__title">{{ useTranslation(hero.title) }}</h1>
            <h3 class="hero__text__subtitle">{{ useTranslation(hero.subtitle) }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation';

const { hero } = storeToRefs(useContentStore());
</script>

<style lang="scss" scoped>
.hero {
    --max-hero-height: calc(100vh - var(--height-header));

    position: relative;
    margin-top: var(--height-header);
    width: 100%;
    aspect-ratio: var(--aspect-ratio-hero-mobile);

    @include functions.device(tablet) {
        max-height: var(--max-hero-height);
        aspect-ratio: var(--aspect-ratio-hero-desktop);
    }

    &__text {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        max-width: var(--content-max-width);
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

    :deep(img) {
        width: 100%;
        aspect-ratio: var(--aspect-ratio-hero-mobile);
        object-fit: cover;

        @include functions.device(tablet) {
            aspect-ratio: var(--aspect-ratio-hero-desktop);
            max-height: var(--max-hero-height);
        }
    }
}
</style>
