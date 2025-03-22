<template>
    <div
        class="partner__container"
        @mouseenter="flipped = true"
        @mouseleave="flipped = false"
        @touchend="flipped = !flipped"
    >
        <div :class="['partner__card', { 'partner__card--flipped': flipped }]">
            <div class="partner__card__side partner__card__front">
                <SanityImage
                    v-if="partner.logo?.media?.asset?._ref"
                    :asset-id="partner.logo.media.asset._ref"
                    :alt="partner.name"
                    auto="format"
                    class="partner__image"
                />
            </div>
            <NuxtLink :to="partner.url" external target="_blank" class="partner__card__side partner__card__back">
                <SanityImage
                    v-if="partner.logo?.media?.asset?._ref"
                    :asset-id="partner.logo.media.asset._ref"
                    :alt="partner.name"
                    auto="format"
                    class="partner__image--back"
                />
                <ul class="partner__info">
                    <li v-for="(point, index) in partner.points" :key="`point-${index}`" class="partner__info__point">
                        <span>{{ point }}</span>
                    </li>
                </ul>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Partner } from '~/types/partner';

defineProps<{ partner: Partner }>();

const flipped = ref(false);
</script>

<style lang="scss" scoped>
.partner {
    &__container {
        perspective: 1000px;
    }

    &__card {
        width: 100vw;
        height: 240px;
        max-width: calc(100vw - 2rem);
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.6s ease-in-out;

        @include functions.device(largeMobile) {
            max-width: 400px;
        }

        &--flipped {
            transform: rotateY(180deg);
        }

        &__side {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        &__front {
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__back {
            transform: rotateY(180deg);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
            color: inherit;
            text-decoration: none;
        }
    }

    &__image {
        width: auto;
        max-width: 360px;
        height: 80px;
        object-fit: cover;

        &--back {
            height: 40px;
        }
    }

    &__info {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 2rem;
        row-gap: 1rem;
        font-size: 1rem;
        list-style: none;
    }
}
</style>
