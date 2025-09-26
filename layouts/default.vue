<template>
    <v-app>
        <LayoutHeader />
        <v-main>
            <Hero v-if="heroHasImage" />
            <PlaceholdersBanner v-else />
            <div class="main">
                <slot />
            </div>
        </v-main>
        <ClientOnly>
            <LayoutFooter />
        </ClientOnly>
    </v-app>
</template>

<script setup lang="ts">
const { heroHasImage } = storeToRefs(useContentStore());

await useFetchContent();

const { seo } = storeToRefs(useContentStore());

useHead({
    title: seo.value?.title,
    meta: [
        {
            name: 'description',
            content: seo.value?.description ? useTranslation(seo.value.description) : '',
        },
    ],
});
</script>

<style lang="scss" scoped>
.main {
    max-width: var(--content-max-width);
    margin: 0 auto;
    color: rgb(var(--v-theme-text));
}
</style>
