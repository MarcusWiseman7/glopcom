<template>
    <v-app-bar :height="100" class="header">
        <template v-if="mobile" v-slot:prepend>
            <v-app-bar-nav-icon @click="drawer = !drawer" />
        </template>
        <NuxtLink :to="{ path: localePath('index') }">
            <div v-if="logo?.media?.asset?._ref" class="logo">
                <SanityImage :asset-id="logo.media.asset._ref" :alt="logo.alt" auto="format" />
            </div>
            <PlaceholdersLogo v-else />
        </NuxtLink>
        <template v-if="!mobile" v-slot:append>
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
.logo {
    width: 100px;
    height: 100px;

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
}

.header {
    @media (min-width: 1200px) {
        max-width: 1200px;
        margin: 0 auto;
        left: calc(50% - 600px) !important;
    }
}
</style>
