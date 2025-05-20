import type { ContactInfo } from '~/types/contact';
import type { Hero } from '~/types/hero';
import type { Partner } from '~/types/partner';
import type { Product } from '~/types/product';
import type { SeoImage } from '~/types/sanity';
import type { Service } from '~/types/service';
import type { Testimonial } from '~/types/testimonial';

export const useContentStore = defineStore('content', () => {
    const hero = ref<Hero | null>(null);
    const services = ref<Service[] | null>(null);
    const partners = ref<Partner[] | null>(null);
    const products = ref<Product[] | null>(null);
    const testimonial = ref<Testimonial | null>(null);
    const contact = ref<ContactInfo | null>(null);
    const logo = ref<SeoImage | null>(null);

    const heroHasImage = computed(() => hero.value?.images && hero.value?.images.length > 0);

    return { hero, heroHasImage, services, partners, products, testimonial, contact, logo };
});
