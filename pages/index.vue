<template>
    <Hero v-if="hero?.assetId" :hero="hero" />
    <PlaceholdersBanner v-else />
    <div class="content">
        <div class="about">
            <h2 class="about__title">About us</h2>
            <div class="about__text">
                <p>
                    At GLOPCOM - Global Optical Components, we believe in building long-term, trust-based partnerships
                    that drive sustainable business success in the optical communication, sensing, semiconductor, and
                    automotive industries.
                </p>
                <p>
                    Our mission is to connect technology with market needs, helping companies optimize their sales
                    strategies, expand their global presence, and access high-quality optical components.
                </p>
            </div>
        </div>
        <Services :services="services" />
        <Partners :partners="partners" />
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
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin: 4rem 0;
}

.about {
    &__title {
        padding: 0 1rem;

        @include typography.font(headlines, h4);

        @include functions.device(tablet) {
            @include typography.font(headlines, h2);
        }
    }

    &__text {
        padding: 30px 20px;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @include typography.font(body, m);

        @include functions.device(tablet) {
            @include typography.font(body, l);
        }
    }
}
</style>
