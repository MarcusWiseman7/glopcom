<template>
    <LayoutSection>
        <LayoutSectionTitle>{{ $t('index.section_title.partners') }}</LayoutSectionTitle>
        <div class="partners__list">
            <Partner v-for="partner in partners" :key="partner._id" :partner="partner" />
        </div>
    </LayoutSection>
</template>

<script setup lang="ts">
import type { Partner } from '~/types/partner';

defineProps<{ partners: Partner[] }>();
</script>

<style lang="scss" scoped>
.partners {
    &__list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        padding: 0 1rem;

        @include functions.device(tablet) {
            padding: 0;
        }
    }
}
</style>
