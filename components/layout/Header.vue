<template>
    <header class="header">
        <div class="header__inner">
            <NuxtLink :to="{ path: localePath('index') }" class="header__logo__wrapper">
                <SanityImage
                    v-if="logo?.media?.asset?._ref"
                    class="header__logo"
                    :asset-id="logo.media.asset._ref"
                    :alt="logo.alt"
                    auto="format"
                />
                <PlaceholdersLogo v-else />
            </NuxtLink>
            <LayoutNav v-if="!mobile" />
            <img v-else src="~/assets/icons/menu.svg" alt="menu" class="header__menu-icon" @click="drawer = !drawer" />
        </div>
    </header>
    <ClientOnly>
        <v-navigation-drawer v-if="mobile" v-model="drawer" color="black">
            <LayoutNav @close="drawer = false" />
        </v-navigation-drawer>
    </ClientOnly>
</template>

<script setup lang="ts">
import { debounce } from 'es-toolkit';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const localePath = useLocalePath();
const { logo } = storeToRefs(useContentStore());

const drawer = ref(false);

const resetDrawer = debounce(() => {
    drawer.value = false;
}, 50);

onMounted(() => {
    window.addEventListener('resize', resetDrawer, false);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', resetDrawer);
});
</script>

<style lang="scss" scoped>
.header {
    height: var(--height-header);
    background-color: #000;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;

    &__inner {
        height: 100%;
        width: 100%;
        margin: 0 auto;
        max-width: var(--content-max-width);
        display: flex;
        align-items: center;
    }

    &__logo {
        width: auto;
        height: 40px;
        object-fit: cover;
        transform: translate(1rem, 0);

        @include functions.device(tablet) {
            height: 68px;
            transform: translate(0, 0);
        }

        &__wrapper {
            flex: 1;
            justify-content: start;
        }
    }

    &__menu-icon {
        cursor: pointer;
        padding: 2rem;
    }

    :deep(.v-toolbar__content) {
        max-width: var(--content-max-width);
        margin: 0 auto;
    }
}

.v-navigation-drawer {
    margin-top: var(--height-header);
}
</style>
