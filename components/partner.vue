<template>
    <v-card class="partner" :ripple="false" @click="show = !show">
        <div class="partner__image__wrapper">
            <SanityImage
                v-if="partner.image?.media?.asset?._ref"
                :asset-id="partner.image.media.asset._ref"
                :alt="partner.name"
                auto="format"
                class="partner__image"
            />
            <PlaceholdersPartner v-else />
        </div>
        <v-card-actions>
            <v-btn flat>
                <div v-if="partner.name" class="partner__name">{{ partner.name }}</div>
                <v-icon :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-if="partner.description || partner.url" v-show="show">
                <v-card-text v-if="partner.description">{{ partner.description }}</v-card-text>
                <v-card-actions>
                    <NuxtLink v-if="partner.url" :to="partner.url" target="_blank" external>{{ partner.url }}</NuxtLink>
                </v-card-actions>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script setup lang="ts">
import type { Partner } from '~/types/partner';

defineProps<{ partner: Partner }>();

const show = ref(false);
</script>

<style lang="scss" scoped>
.partner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    width: 260px;

    &__image {
        width: 100px;
        height: 100px;
        object-fit: cover;

        &__wrapper {
            height: 100px;
            width: 100px;
        }
    }

    &__name {
        margin-right: 1rem;
    }
}
</style>
