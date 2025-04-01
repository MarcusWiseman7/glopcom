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
        <section id="contact" class="section">
            <h2>{{ $t('index.section_title.contact') }}</h2>
        </section>
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
    margin-top: 40px;
}

.about {
    &__title {
        font-size: 2.25rem;
        line-height: 33px;
        font-weight: 700;
        padding: 0 1rem;

        @include functions.device(tablet) {
            font-size: 4rem;
            line-height: 66px;
            letter-spacing: 0.5px;
            font-weight: 700;
        }
    }

    &__text {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.5px;
        font-weight: 400;
        padding: 30px 20px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
