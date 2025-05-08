import type { ContactInfo } from '~/types/contact';
import type { Hero } from '~/types/hero';
import type { Partner } from '~/types/partner';
import type { Product } from '~/types/product';
import type { SeoImage } from '~/types/sanity';
import type { Service } from '~/types/service';
import type { Testimonial } from '~/types/testimonial';

type QueryResponse = {
    hero: Hero;
    services: Service[];
    partners: Partner[];
    products: Product[];
    testimonial: Testimonial;
    contact: ContactInfo;
    logo: SeoImage;
};

const heroQuery = `*[_type == "hero"][0]`;
const servicesQuery = `*[_type == "services"][0].services`;
const partnersQuery = `*[_type == "partners"][0].partners`;
const productsQuery = `*[_type == "products"][0].products`;
const testimonialQuery = `*[_type == "testimonial"][0]`;
const contactQuery = `*[_type == "contact"][0]`;
const logoQuery = `*[_type == "logo"][0].image`;
const query = groq`{
    "hero": ${heroQuery}, 
    "services": ${servicesQuery},
    "partners": ${partnersQuery},
    "products": ${productsQuery},
    "testimonial": ${testimonialQuery},
    "contact": ${contactQuery},
    "logo": ${logoQuery}
}`;

export const useFetchContent = async () => {
    const { hero, services, partners, products, testimonial, contact, logo } = storeToRefs(useContentStore());

    if (
        hero.value &&
        services.value &&
        partners.value &&
        products.value &&
        testimonial.value &&
        contact.value &&
        logo.value
    ) {
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
        logo.value = data.value.logo;
    }
};
