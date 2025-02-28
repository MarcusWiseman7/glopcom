import type { SeoImage } from '~/types/sanity';

export const useMediaStore = defineStore('media', () => {
    const logo = ref<SeoImage | null>(null);

    return {
        logo,
    };
});
