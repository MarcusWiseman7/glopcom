<template>
    <v-app class="layout">
        <LayoutHeader />
        <v-main class="main">
            <slot />
        </v-main>
    </v-app>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout {
    max-width: 1200px;
    margin: 0 auto;
    color: rgb(var(--v-theme-text));
}
</style>
