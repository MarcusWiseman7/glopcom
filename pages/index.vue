<template>
    <Hero v-if="hero && heroHasImage" :hero="hero" />
    <PlaceholdersBanner v-else />
    <div class="content">
        <About id="about" />
        <Services id="services" :services="services" />
        <Partners id="partners" :partners="partners" />
        <Products id="products" :products="products" />
    </div>
</template>

<script setup lang="ts">
import type { Partner } from '~/types/partner';
import type { Service } from '~/types/service';
import type { Hero } from '~/types/hero';
import type { Product } from '~/types/product';

type QueryResponse = {
    hero: Hero;
    services: Service[];
    partners: Partner[];
    products: Product[];
};

const heroQuery = `*[_type == "hero"][0]`;
const servicesQuery = `*[_type == "services"][0].services`;
const partnersQuery = `*[_type == "partners"][0].partners`;
const productsQuery = `*[_type == "products"][0].products`;
const query = groq`{ "hero": ${heroQuery}, "services": ${servicesQuery}, "partners": ${partnersQuery}, "products": ${productsQuery} }`;
const { data } = await useSanityQuery<QueryResponse>(query, { cache: 'no_store' });

const hero = computed<Hero | null>(() => data.value?.hero || null);
const heroHasImage = computed(() => hero.value?.image?.media?.asset?._ref);
const services = computed<Service[]>(() => data.value?.services || []);
const partners = computed<Partner[]>(() => data.value?.partners || []);
const products = computed<Product[]>(() => data.value?.products || []);
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin: 4rem 0;
}
</style>
