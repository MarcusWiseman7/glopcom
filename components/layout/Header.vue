<template>
    <v-app-bar :height="100" class="header">
        <template v-if="mobile" #prepend>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
        </template>
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
        <template v-if="!mobile" #append>
            <LayoutNav />
        </template>
    </v-app-bar>
    <v-navigation-drawer v-if="mobile" v-model="drawer">
        <LayoutNav />
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { debounce } from 'es-toolkit';
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();
const localePath = useLocalePath();
const { logo } = storeToRefs(useMediaStore());

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
    @media (min-width: 1200px) {
        max-width: 1200px;
        margin: 0 auto;
        left: calc(50% - 600px) !important;
    }

    &__logo {
        width: auto;
        height: 60px;
        object-fit: cover;
        transform: translate(calc(50% - 52px), 0);

        @include functions.device(tablet) {
            height: 80px;
            margin-left: 10px;
            transform: translate(0, 0);
        }

        &__wrapper {
            flex: 1;
        }
    }
}
</style>
