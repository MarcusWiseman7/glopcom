<template>
    <v-app>
        <LayoutHeader />
        <v-main class="main">
            <slot />
        </v-main>
    </v-app>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main {
    max-width: 1000px;
    margin: 0 auto;
    color: rgb(var(--v-theme-text));
}
</style>
