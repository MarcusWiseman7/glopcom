<template>
    <ul class="nav">
        <li v-for="(item, index) in items" :key="`nav-item-${index}`" class="nav__item" @click="navClick(item.id)">
            {{ $t(item.title) }}
        </li>
        <li class="nav__item">
            <LanguageSwitcher />
        </li>
    </ul>
</template>

<script setup lang="ts">
const { t } = useI18n();
const emit = defineEmits<{ (e: 'close'): void }>();

const items = [
    { title: 'nav.about_us', id: 'about' },
    { title: 'nav.services', id: 'services' },
    { title: 'nav.product', id: 'products' },
    { title: 'nav.partners', id: 'partners' },
    { title: 'nav.contact', id: 'contact' },
];

const navClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y - 120, behavior: 'smooth' });

        emit('close');
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
        align-items: center;
        gap: 2rem;
        padding: 0 2rem;
    }

    &__item {
        text-decoration: none;
        list-style: none;
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
