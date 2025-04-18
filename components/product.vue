<template>
    <div class="card">{{ useTranslation(product.name) }}</div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';
import { useTranslation } from '~/composables/useTranslation';

defineProps<{ product: Product }>();
</script>

<style lang="scss" scoped>
.card {
    height: 140px;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @include typography.font(body, l);

    @include functions.device(largeMobile) {
        height: 240px;
        padding: 2rem;

        @include typography.font(body, xl);
    }
}
</style>
