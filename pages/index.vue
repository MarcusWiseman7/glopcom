<template>
    <Hero v-if="hero?.assetId" :hero="hero" />
    <PlaceholdersBanner v-else />
    <div class="content">
        <About id="about" />
        <Services id="services" :services="services" />
        <Partners id="partners" :partners="partners" />
        <Products id="products" :products="products" />
    </div>
</template>

<script setup lang="ts">
import type { SeoImage } from '~/types/sanity';
import type { Partner } from '~/types/partner';
import type { Service } from '~/types/service';
import type { Hero } from '~/types/hero';

type QueryResponse = {
    hero: SeoImage;
    services: Service[];
    partners: Partner[];
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
const products = [
    {
        title: 'Telecom & Datacom',
        _id: 'telecom-and-datacom',
    },
    {
        title: 'Quantum Communication',
        _id: 'quantum-communication',
    },
    {
        title: 'Test & Measurment',
        _id: 'test-and-measurement',
    },
    {
        title: 'Sensing',
        _id: 'sensing',
    },
    {
        title: 'Medical',
        _id: 'medical',
    },
    {
        title: 'Automotive',
        _id: 'automotive',
    },
];
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin: 4rem 0;
}
</style>
