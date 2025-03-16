<template>
    <div v-if="hero?.assetId" class="hero">
        <SanityImage :asset-id="hero.assetId" :alt="hero.alt" auto="format" />
    </div>
    <PlaceholdersBanner v-else />
    <div class="content">
        <Services :services="services" />
        <Partners :partners="partners" />
        <section id="contact" class="section">
            <h2>{{ $t('index.section_title.contact') }}</h2>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { SeoImage } from '~/types/sanity';
import type { Partner } from '~/types/partner';
import type { Service } from '~/types/service';

type QueryResponse = {
    hero: SeoImage;
    services: Service[];
    partners: Partner[];
};
type Hero = {
    assetId: string;
    alt: string;
};

const heroQuery = `*[_type == "hero"][0].image`;
const servicesQuery = `*[_type == "service"] { title, image, points, position, _id } | order(position asc)`;
const partnersQuery = `*[_type == "partner"] { name, logo, points, url, _id }`;
const query = groq`{ "hero": ${heroQuery}, "services": ${servicesQuery}, "partners": ${partnersQuery} }`;
const { data } = await useSanityQuery<QueryResponse>(query);

const hero = computed<Hero | null>(() => {
    if (!data.value?.hero?.media) return null;

    return {
        assetId: data.value.hero.media.asset._ref,
        alt: data.value.hero.alt,
    };
});
const services = computed<Service[]>(() => data.value?.services || []);
const partners = computed<Partner[]>(() => data.value?.partners || []);
</script>

<style lang="scss" scoped>
.hero {
    :deep(img) {
        width: 100%;
        height: 500px;
    }
}

.content {
    display: flex;
    flex-direction: column;
    gap: 120px;
    margin-top: 40px;
}
</style>
