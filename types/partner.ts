import type { SeoImage, Translation } from './sanity';

export type Partner = {
    _key: string;
    name: string;
    logo: SeoImage;
    url: string;
    description: Translation;
};
