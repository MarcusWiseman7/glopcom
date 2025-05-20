<template>
    <picture v-if="sources.length">
        <source
            v-for="(asset, index) in sources"
            :key="asset._key || index"
            :srcset="asset.image"
            type="image/webp"
            :media="`(min-width: ${asset.size}px)`"
        />
        <img :src="fallbackImage.image" alt="Blue circles" />
    </picture>
</template>

<script setup lang="ts">
import type { SanityImage } from '~/types/hero';

const props = defineProps<{
    images: SanityImage[];
}>();

const { $urlFor } = useNuxtApp();

// Sort images by ascending size and map to include image URL
const sortedSrcsets = computed(() =>
    props.images
        .filter((img) => img && img.image && typeof img.size === 'number')
        .slice() // clone to avoid mutating original
        .sort((a, b) => a.size - b.size)
        .map((asset) => ({
            ...asset,
            image: $urlFor(asset.image).url(),
        })),
);

// All but the smallest image, reversed for correct media evaluation order
const sources = computed(() => (sortedSrcsets.value.length > 1 ? sortedSrcsets.value.slice(1).reverse() : []));

// Smallest image used as fallback <img>
const fallbackImage = computed(() => sortedSrcsets.value[0] ?? { image: '', size: 0 });
</script>
