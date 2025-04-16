<template>
    <v-card
        :class="['service', { 'service--expanded': mobile && overlay }]"
        flat
        tile
        @mouseenter="overlay = true"
        @mouseleave="overlay = false"
        @touchstart="overlay = !overlay"
    >
        <v-card-title v-if="service.title" class="service__title">
            {{ service.title }}
        </v-card-title>
        <template #image>
            <SanityImage :asset-id="service.image.media.asset._ref" :alt="service.image.alt" auto="format" />
        </template>
        <div :class="['overlay', { 'overlay--active': overlay }]">
            <ul>
                <li v-for="(point, index) in service.points" :key="`point-${index}`">
                    {{ point }}
                </li>
            </ul>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import type { Service } from '~/types/service';

defineProps<{
    service: Service;
}>();

const { mobile } = useDisplay();

const overlay = ref(false);
</script>

<style lang="scss" scoped>
.service {
    position: relative;
    padding: 1rem;
    color: #fff;
    height: 120px;
    transition: height 0.3s ease-in-out;
    text-shadow: var(--text-shadow-black);

    &--expanded {
        height: 400px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @include functions.device(tablet) {
        flex: 1;
        height: 600px;
        width: 100%;
    }

    &__title {
        white-space: pre-line;

        @include typography.font(headlines, h6);

        @include functions.device(tablet) {
            @include typography.font(headlines, h5);
        }
    }
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    align-items: flex-end;
    z-index: 1;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.1);
    transition: opacity 0.4s ease-in-out;

    &--active {
        opacity: 1;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        background-color: transparent;
        color: #fff;
        padding: 0 2rem 1rem;

        @include functions.device(tablet) {
            padding: 0 2.5rem 1rem;
        }
    }

    li {
        white-space: pre-wrap;

        @include typography.font(body, s);
    }
}
</style>
