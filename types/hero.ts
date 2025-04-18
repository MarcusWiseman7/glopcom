import type { SeoImage, Translation } from './sanity';

export type Hero = {
    _id: string;
    title: Translation;
    subtitle: Translation;
    image: SeoImage;
};
