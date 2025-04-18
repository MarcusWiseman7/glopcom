<template>
    <v-app>
        <LayoutHeader />
        <v-main class="main">
            <ClientOnly>
                <slot />
            </ClientOnly>
        </v-main>
        <LayoutFooter />
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
