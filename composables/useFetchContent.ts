import type { ContactInfo } from '~/types/contact';
import type { Hero } from '~/types/hero';
import type { Partner } from '~/types/partner';
import type { Product } from '~/types/product';
import type { Service } from '~/types/service';

type QueryResponse = {
    hero: Hero;
    services: Service[];
    partners: Partner[];
    products: Product[];
    contact: ContactInfo;
};

const heroQuery = `*[_type == "hero"][0]`;
const servicesQuery = `*[_type == "services"][0].services`;
const partnersQuery = `*[_type == "partners"][0].partners`;
const productsQuery = `*[_type == "products"][0].products`;
const contactQuery = `*[_type == "contact"][0]`;
const query = groq`{ "hero": ${heroQuery}, "services": ${servicesQuery}, "partners": ${partnersQuery}, "products": ${productsQuery}, "contact": ${contactQuery} }`;

export const useFetchContent = async () => {
    const { hero, services, partners, products, contact } = storeToRefs(useContentStore());

    if (hero.value && services.value && partners.value && products.value && contact.value) {
        return;
    }

    const { data } = await useSanityQuery<QueryResponse>(query);

    if (data.value) {
        hero.value = data.value.hero;
        services.value = data.value.services;
        partners.value = data.value.partners;
        products.value = data.value.products;
        contact.value = data.value.contact;
    }
};
