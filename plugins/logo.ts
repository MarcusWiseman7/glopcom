import { storeToRefs } from 'pinia';
import { useMediaStore } from '~/stores/media';
import type { SeoImage } from '~/types/sanity';

export default defineNuxtPlugin(async () => {
    const sanity = useSanity();
    const { logo } = storeToRefs(useMediaStore());

    if (!logo.value) {
        const logoQuery = groq`*[_type == "logo"][0].image`;
        logo.value = await sanity.fetch<SeoImage>(logoQuery);
    }
});
