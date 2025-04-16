<template>
    <ul class="nav">
        <div v-for="(item, index) in items" :key="`nav-item-${index}`" class="nav__item" @click="navClick(item.id)">
            {{ item.title }}
        </div>
    </ul>
</template>

<script setup lang="ts">
const { t } = useI18n();

const items = [
    { title: t('nav.about_us'), id: 'about' },
    { title: t('nav.services'), id: 'services' },
    { title: t('nav.product'), id: 'products' },
    { title: t('nav.partners'), id: 'partners' },
    { title: t('nav.contact'), id: 'contact' },
];

const navClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y - 120, behavior: 'smooth' });
    }
};
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
        cursor: pointer;

        @include functions.device(tablet) {
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
}
</style>
