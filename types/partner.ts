import type { SeoImage } from './sanity';

export type Partner = {
    _id: string;
    name: string;
    description: string;
    image: SeoImage;
    url: string;
};
