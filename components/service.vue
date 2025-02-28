<template>
    <v-card class="service" variant="outlined">
        <v-icon icon="mdi-web" size="x-large" />
        <v-card-title v-if="service.title">{{ service.title }}</v-card-title>
        <v-card-text v-if="service.description">{{ service.description }}</v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type { Service } from '~/types/service';

defineProps<{
    service: Service;
}>();
</script>

<style lang="scss" scoped>
.service {
    text-align: center;
    padding: 2rem 1rem;
    width: 260px;
}
</style>
