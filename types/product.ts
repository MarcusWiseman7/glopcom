import type { SeoImage, Translation } from './sanity';

export type Product = {
    _id: string;
    name: Translation;
    image?: SeoImage;
};
