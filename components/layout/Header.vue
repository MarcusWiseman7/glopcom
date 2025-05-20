<template>
    <v-app-bar :height="100" color="black" class="header">
        <template #default>
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
        </template>
        <template #append>
            <LayoutNav v-if="!mobile" />
            <v-app-bar-nav-icon v-else @click="drawer = !drawer" />
        </template>
    </v-app-bar>
    <v-navigation-drawer v-if="mobile" v-model="drawer" color="black">
        <LayoutNav @close="drawer = false" />
    </v-navigation-drawer>
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

    :deep(.v-toolbar__content) {
        max-width: var(--content-max-width);
        margin: 0 auto;
    }
}
</style>
