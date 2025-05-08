<template>
    <GFlipCard>
        <template #front>
            <div class="partner">
                <SanityImage
                    v-if="partner.logo?.media?.asset?._ref"
                    :asset-id="partner.logo.media.asset._ref"
                    :alt="partner.name"
                    auto="format"
                    class="partner__image"
                />
            </div>
        </template>
        <template #back>
            <div class="partner partner--back">
                <SanityImage
                    v-if="partner.logo?.media?.asset?._ref"
                    :asset-id="partner.logo.media.asset._ref"
                    :alt="partner.name"
                    auto="format"
                    class="partner__image--back"
                />
                <div class="partner__info">
                    {{ useTranslation(partner.description) }}
                </div>
                <NuxtLink :to="partner.url" class="partner__link" target="_blank" external>
                    {{ partner.url }}
                </NuxtLink>
            </div>
        </template>
    </GFlipCard>
</template>

<script setup lang="ts">
import type { Partner } from '~/types/partner';

defineProps<{ partner: Partner }>();
</script>

<style lang="scss" scoped>
.partner {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    &--back {
        display: grid;
        grid-template-rows: 15% 1fr 15%;
        gap: 0.5rem;
        height: 100%;
        width: 100%;
        padding: 1rem;
    }

    &__image {
        width: auto;
        max-width: 360px;
        height: 80px;
        object-fit: cover;

        &--back {
            height: 100%;
        }
    }

    &__info {
        overflow: auto;
        max-height: 100%;

        @include typography.font(body, xs);
    }

    &__link {
        color: var(--color-primary);
        text-decoration: underline;

        @include typography.font(body, xs);
    }
}
</style>
