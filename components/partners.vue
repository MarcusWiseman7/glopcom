<template>
    <LayoutSection v-if="partners">
        <LayoutSectionTitle>{{ $t('index.section_title.partners') }}</LayoutSectionTitle>
        <div class="partners__list">
            <Partner v-for="partner in partners" :key="partner._key" :partner="partner" />
        </div>
    </LayoutSection>
</template>

<script setup lang="ts">
const { partners } = storeToRefs(useContentStore());
</script>

<style lang="scss" scoped>
.partners {
    &__list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 0.75rem;
        padding: 0 1rem;

        @include functions.device(largeMobile) {
            grid-template-columns: repeat(2, 1fr);
        }

        @include functions.device(tablet) {
            grid-template-columns: repeat(3, 1fr);
        }

        @include functions.device(desktop) {
            gap: 1rem;
            padding: 0;
        }
    }
}
</style>
