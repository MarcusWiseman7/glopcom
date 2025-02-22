<template>
    <div>
        <main :class="['layout', { 'layout--mobile': mobile }]">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
</script>

<style lang="scss" scoped>
.layout {
    margin: 0 auto;
    max-width: 1000px;

    &--mobile {
        padding: 1rem 0.5rem;
    }
}
</style>
