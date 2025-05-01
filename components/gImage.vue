<template>
    <SanityImage :asset-id="image.media.asset._ref" :alt="image.alt" auto="format" />
</template>

<script setup lang="ts">
import type { SeoImage } from '~/types/sanity';

defineProps<{
    image: SeoImage;
}>();
</script>
