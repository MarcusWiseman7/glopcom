<template>
    <LayoutSection v-if="services">
        <LayoutSectionTitle>{{ $t('index.section_title.services') }}</LayoutSectionTitle>
        <div class="services__list">
            <Service v-for="service in services" :key="service._id" :service="service" />
        </div>
    </LayoutSection>
</template>

<script setup lang="ts">
const { services } = storeToRefs(useContentStore());
</script>

<style lang="scss" scoped>
.services__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 1rem;

    @include functions.device(tablet) {
        flex-direction: row;
    }

    @include functions.device(desktop) {
        gap: 1rem;
        padding: 0;
    }
}
</style>
