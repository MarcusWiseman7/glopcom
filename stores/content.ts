import type { ContactInfo } from '~/types/contact';
import type { Hero } from '~/types/hero';
import type { Partner } from '~/types/partner';
import type { Product } from '~/types/product';
import type { Service } from '~/types/service';

export const useContentStore = defineStore('content', () => {
    const hero = ref<Hero | null>(null);
    const services = ref<Service[] | null>(null);
    const partners = ref<Partner[] | null>(null);
    const products = ref<Product[] | null>(null);
    const contact = ref<ContactInfo | null>(null);

    const heroHasImage = computed(() => hero.value?.image?.media?.asset?._ref);

    return { hero, heroHasImage, services, partners, products, contact };
});
