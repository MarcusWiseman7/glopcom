<template>
    <GCard class="product">
        <div v-if="product.image" class="product__background-image">
            <GImage :image="product.image" />
        </div>
        <div class="product__content">
            {{ useTranslation(product.name) }}
        </div>
    </GCard>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';

defineProps<{ product: Product }>();
</script>

<style lang="scss" scoped>
.product {
    position: relative;

    &__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: 1;
        color: white;
        text-shadow: var(--text-shadow-black);
        padding: 1rem;

        @include typography.font(body, l);

        @include functions.device(largeMobile) {
            padding: 2rem;

            @include typography.font(body, xl);
        }
    }

    &__background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
