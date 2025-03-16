<template>
    <v-card class="partner" :href="partner.url" target="_blank" :ripple="false">
        <SanityImage
            v-if="partner.logo?.media?.asset?._ref"
            :asset-id="partner.logo.media.asset._ref"
            :alt="partner.name"
            auto="format"
            class="partner__image"
        />
        <v-list class="partner__info">
            <v-list-item v-for="(point, index) in partner.points" :key="`point-${index}`" class="partner__info__point">
                <v-list-item-title>{{ point }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script setup lang="ts">
import type { Partner } from '~/types/partner';

defineProps<{ partner: Partner }>();
</script>

<style lang="scss" scoped>
.partner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1rem;
    min-width: 400px;
    min-height: 240px;

    @include functions.device(tablet) {
        flex-direction: row;
        align-items: center;
    }

    &__image {
        width: auto;
        max-width: 360px;
        height: 80px;
        object-fit: cover;
    }

    &__info {
        display: flex;
        flex-direction: row;

        @include functions.device(tablet) {
            flex-direction: column;
        }

        :deep(.v-list-item-title) {
            font-size: 1.25rem;
        }
    }
}
</style>
