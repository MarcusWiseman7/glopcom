<template>
    <section id="partners" class="partners">
        <div class="partners__title">
            <h2>{{ $t('index.section_title.partners') }}</h2>
        </div>
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
    display: flex;
    flex-direction: column;

    @include functions.device(tablet) {
        flex-direction: row;
    }

    &__title {
        display: flex;
        align-items: center;
        font-size: 2.25rem;
        padding: 0 1rem;

        @include functions.device(tablet) {
            padding: 0;
            justify-content: center;
            width: 40%;
        }
    }

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
