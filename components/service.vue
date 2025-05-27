<template>
    <GCard>
        <div class="service">
            <div v-if="service.image" class="service__image">
                <GImage :image="service.image" />
            </div>
            <div class="service__title__wrapper">
                <div v-if="service.name" class="service__title">
                    {{ useTranslation(service.name) }}
                </div>
            </div>
            <div :class="['overlay', { 'overlay--show': showContent }]">
                <ul>
                    <li v-for="(point, index) in service.points" :key="`point-${index}`">
                        {{ useTranslation(point) }}
                    </li>
                </ul>
            </div>
        </div>
    </GCard>
</template>

<script setup lang="ts">
import type { Service } from '~/types/service';

defineProps<{
    service: Service;
    showContent: boolean;
}>();
</script>

<style lang="scss" scoped>
.service {
    position: relative;
    color: #fff;
    text-shadow: var(--text-shadow-black);
    height: var(--height-carousel);
    width: 100%;
    display: grid;
    grid-template-rows: 30% 1fr;

    &__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__title {
        white-space: pre-line;

        @include typography.font(body, xl);

        @include functions.device(tablet) {
            @include typography.font(headlines, h5);

            font-weight: 400;
        }

        &__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 2rem;

            @include functions.device(tablet) {
                padding: 0 4rem;
            }
        }
    }
}

.overlay {
    ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 1rem 2rem;
        list-style: none;
        transition: opacity 0.4s ease-in-out;

        @include functions.device(largeMobile) {
            opacity: 0;
        }
    }

    li {
        white-space: pre-wrap;

        @include typography.font(body, s);

        @include functions.device(tablet) {
            @include typography.font(body, m);
        }
    }

    @include functions.device(largeMobile) {
        &--show {
            ul {
                opacity: 1;
            }
        }
    }
}
</style>
