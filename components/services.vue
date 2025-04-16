<template>
    <LayoutSection>
        <LayoutSectionTitle>{{ $t('index.section_title.services') }}</LayoutSectionTitle>
        <div class="services__list">
            <Service v-for="service in services" :key="service._id" :service="service" />
        </div>
    </LayoutSection>
</template>

<script setup lang="ts">
import type { Service } from '~/types/service';

defineProps<{ services: Service[] }>();
</script>

<style lang="scss" scoped>
.services__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    @include functions.device(tablet) {
        flex-direction: row;
        gap: 1rem;
    }
}
</style>
