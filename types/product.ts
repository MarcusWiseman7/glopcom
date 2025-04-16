import type { SeoImage } from './sanity';

export type Product = {
    _id: string;
    title: string;
    image?: SeoImage;
};
