<template>
    <LayoutSection v-if="products">
        <LayoutSectionTitle>{{ $t('index.section_title.product') }}</LayoutSectionTitle>
        <div class="products__list">
            <Product v-for="(product, index) in products" :key="`product-${index}`" :product="product" />
        </div>
    </LayoutSection>
</template>

<script setup lang="ts">
const { products } = storeToRefs(useContentStore());
</script>

<style lang="scss" scoped>
.products {
    &__list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
        padding: 0 1rem;

        @include functions.device(tablet) {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            padding: 0;
        }
    }
}
</style>
