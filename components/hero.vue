<template>
    <div class="hero">
        <SanityImage :asset-id="hero.assetId" :alt="hero.alt" auto="format" />
        <div class="hero__text">
            <h1 class="hero__text__title">{{ $t('hero.title') }}</h1>
            <h3 class="hero__text__subtitle">{{ $t('hero.subtitle') }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Hero } from '~/types/hero';

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

        @include functions.device(tablet) {
            padding: 0 2rem;
        }

        &__title {
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-shadow: 1px 1px 2px #000;

            @include functions.device(tablet) {
                font-size: 3rem;
                line-height: 4rem;
            }
        }

        &__subtitle {
            font-size: 0.875rem;
            line-height: 2rem;
            font-weight: 400;
            text-shadow: 1px 1px 2px #000;

            @include functions.device(tablet) {
                font-size: 20px;
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
