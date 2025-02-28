<template>
    <v-app class="layout">
        <LayoutHeader />
        <v-container>
            <v-main class="main">
                <slot />
            </v-main>
        </v-container>
    </v-app>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
