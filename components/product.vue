<template>
    <GCard>
        <template #front>
            <div class="product">
                <div v-if="product.image" class="product__background-image">
                    <GImage :image="product.image" />
                </div>
                <div class="product__name">
                    {{ useTranslation(product.name) }}
                </div>
            </div>
        </template>
        <template #back>
            <div class="product">
                <div v-if="product.description" class="product__description">
                    {{ useTranslation(product.description) }}
                </div>
            </div>
        </template>
    </GCard>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';

defineProps<{ product: Product }>();
</script>

<style lang="scss" scoped>
.product {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;

    @include functions.device(largeMobile) {
        padding: 2rem;
    }

    &__name {
        z-index: 1;
        color: white;
        text-shadow: var(--text-shadow-black);

        @include typography.font(body, l);

        @include functions.device(largeMobile) {
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

    &__description {
        background-color: white;

        @include typography.font(body, s);
    }
}
</style>
