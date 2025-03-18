<template>
    <v-card
        :class="['service', { 'service--expanded': mobile && overlay }]"
        flat
        tile
        @mouseenter="overlay = true"
        @mouseleave="overlay = false"
        @touchstart="overlay = !overlay"
    >
        <v-card-title v-if="service.title" :class="['service__title', { 'service__title--active': overlay }]">{{
            service.title
        }}</v-card-title>
        <div :class="['overlay', { 'overlay--active': overlay }]">
            <v-list :class="{ active: overlay }">
                <v-list-item v-for="point in service.points" :key="point" variant="text">
                    <template #prepend>
                        <img src="/assets/icons/bolt.svg" alt="bolt" />
                    </template>
                    <v-list-item-title class="service__point">{{ point }}</v-list-item-title>
                </v-list-item>
            </v-list>
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
    height: 500px;
    background-color: gray;
    color: #fff;
    height: 120px;
    transition: height 0.3s ease-in-out;

    &--expanded {
        height: 400px;
    }

    @include functions.device(tablet) {
        flex: 1;
        height: 500px;
    }

    &__title {
        font-size: 1.65rem;
        font-weight: 700;
        white-space: pre-line;

        &--active {
            opacity: 0;
        }
    }

    &__point {
        white-space: pre-wrap;
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
    align-items: center;
    z-index: 1;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.1);
    transition: opacity 0.2s ease-in-out;

    &--active {
        opacity: 1;
    }

    :deep(.v-list) {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        gap: 0.25rem;
        opacity: 0;
        transition: opacity 0.6s ease-in-out;
        background-color: transparent;
        color: #fff;

        &.active {
            opacity: 1;
        }
    }

    :deep(.v-list-item) {
        gap: 0.5rem;
    }
}
</style>
