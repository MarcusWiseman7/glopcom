<template>
    <v-app>
        <LayoutHeader />
        <v-main>
            <Hero v-if="hero && heroHasImage" :hero="hero" />
            <PlaceholdersBanner v-else />
            <div class="main">
                <slot />
            </div>
        </v-main>
        <LayoutFooter />
    </v-app>
</template>

<script setup lang="ts">
import type { Hero } from '~/types/hero';

type QueryResponse = {
    hero: Hero;
};

const heroQuery = `*[_type == "hero"][0]`;
const query = groq`{ "hero": ${heroQuery} }`;
const { data } = await useSanityQuery<QueryResponse>(query);
const hero = computed<Hero | null>(() => data.value?.hero || null);
const heroHasImage = computed(() => hero.value?.image?.media?.asset?._ref);
</script>

<style lang="scss" scoped>
.main {
    max-width: var(--content-max-width);
    margin: 0 auto;
    color: rgb(var(--v-theme-text));
}
</style>
