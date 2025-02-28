<template>
    <v-container>
        <div v-if="hero?.assetId" class="hero">
            <SanityImage :asset-id="hero.assetId" :alt="hero.alt" auto="format" />
        </div>
        <PlaceholdersBanner v-else />
        <div class="content">
            <section>
                <h2>{{ $t('index.section_title.services') }}</h2>
                <div class="services">
                    <Service v-for="service in services" :key="service._id" :service="service" />
                </div>
            </section>
            <section id="partners">
                <h2>{{ $t('index.section_title.partners') }}</h2>
                <div class="partners">
                    <Partner v-for="partner in partners" :key="partner._id" :partner="partner" />
                </div>
            </section>
            <section id="contact">
                <h2>{{ $t('index.section_title.contact') }}</h2>
            </section>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import type { Partner } from '~/types/partner';
import type { SeoImage } from '~/types/sanity';
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
const servicesQuery = `*[_type == "service"] { title, icon, description, _id }`;
const partnersQuery = `*[_type == "partner"] { image, name, description, url, _id }`;
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
    gap: 40px;
    margin-top: 40px;
}

.hero {
    :deep(img) {
        width: 100%;
        height: 500px;
    }
}

.services {
    display: flex;
    gap: 20px;
}

.partners {
    display: flex;
    gap: 20px;
}
</style>
