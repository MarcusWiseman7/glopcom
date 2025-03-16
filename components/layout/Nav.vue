<template>
    <v-list-item v-for="item in items" :key="item.id" class="nav-item">
        <NuxtLink :to="item.to">
            {{ item.title }}
        </NuxtLink>
    </v-list-item>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

const items = [
    { id: 1, title: t('nav.about_us'), type: 'link', to: { path: localePath('about-us') } },
    { id: 2, title: t('nav.product'), type: 'link', to: { path: localePath('product') } },
    { id: 3, title: t('nav.partners'), type: 'link', to: { path: localePath('index'), hash: '#partners' } },
    { id: 4, title: t('nav.contact'), type: 'link', to: { path: localePath('index'), hash: '#contact' } },
];
</script>

<style lang="scss" scoped>
.nav-item {
    a {
        text-decoration: none;
        color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
    }
}
</style>
