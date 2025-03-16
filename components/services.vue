<template>
    <section id="services" class="services">
        <div class="services__title">
            <h2>{{ $t('index.section_title.services') }}</h2>
        </div>
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
    display: flex;
    // background-color: rgb(var(--v-theme-primary));
    // color: #fff;
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
        flex-direction: column;

        @include functions.device(tablet) {
            flex-direction: row;
        }
    }
}
</style>
