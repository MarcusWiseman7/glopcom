<template>
    <section id="partners" class="partners">
        <h2 class="partners__title">{{ $t('index.section_title.partners') }}</h2>
        <div class="partners__list">
            <Partner v-for="partner in partners" :key="partner._id" :partner="partner" />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Partner } from '~/types/partner';

defineProps<{ partners: Partner[] }>();
</script>

<style lang="scss" scoped>
.partners {
    &__title {
        padding: 0 1rem;

        @include typography.font(headlines, h4);

        @include functions.device(tablet) {
            @include typography.font(headlines, h2);
        }
    }

    &__list {
        margin-top: 2rem;
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
