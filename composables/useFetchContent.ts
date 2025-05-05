import type { ContactInfo } from '~/types/contact';
import type { Hero } from '~/types/hero';
import type { Partner } from '~/types/partner';
import type { Product } from '~/types/product';
import type { Service } from '~/types/service';
import type { Testimonial } from '~/types/testimonial';

type QueryResponse = {
    hero: Hero;
    services: Service[];
    partners: Partner[];
    products: Product[];
    testimonial: Testimonial;
    contact: ContactInfo;
};

const heroQuery = `*[_type == "hero"][0]`;
const servicesQuery = `*[_type == "services"][0].services`;
const partnersQuery = `*[_type == "partners"][0].partners`;
const productsQuery = `*[_type == "products"][0].products`;
const testimonialQuery = `*[_type == "testimonial"][0]`;
const contactQuery = `*[_type == "contact"][0]`;
const query = groq`{ 
    "hero": ${heroQuery}, 
    "services": ${servicesQuery},
    "partners": ${partnersQuery},
    "products": ${productsQuery},
    "testimonial": ${testimonialQuery},
    "contact": ${contactQuery} }
`;

export const useFetchContent = async () => {
    const { hero, services, partners, products, testimonial, contact } = storeToRefs(useContentStore());

    if (hero.value && services.value && partners.value && products.value && testimonial.value && contact.value) {
        return;
    }

    const { data } = await useSanityQuery<QueryResponse>(query);

    if (data.value) {
        hero.value = data.value.hero;
        services.value = data.value.services;
        partners.value = data.value.partners;
        products.value = data.value.products;
        testimonial.value = data.value.testimonial;
        contact.value = data.value.contact;
    }
};
