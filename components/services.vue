<template>
    <section id="services" class="services">
        <h2 class="services__title">{{ $t('index.section_title.services') }}</h2>
        <div class="services__list">
            <Service v-for="service in services" :key="service._id" :service="service" />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Service } from '~/types/service';

defineProps<{ services: Service[] }>();
</script>

<style lang="scss" scoped>
.services {
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
        flex-direction: column;
        gap: 0.25rem;

        @include functions.device(tablet) {
            flex-direction: row;
            gap: 1rem;
        }
    }
}
</style>
