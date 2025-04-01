<template>
    <ul class="nav">
        <NuxtLink v-for="item in items" :key="item.id" :to="item.to" class="nav__item">
            {{ item.title }}
        </NuxtLink>
    </ul>
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
.nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 100%;

    @include functions.device(tablet) {
        flex-direction: row;
        gap: 2rem;
        padding: 0 2rem;
    }

    &__item {
        text-decoration: none;
        color: #fff;
        white-space: pre-wrap;

        @include functions.device(tablet) {
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
}
</style>
