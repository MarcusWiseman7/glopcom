import type { SeoImage } from './sanity';

export type Partner = {
    _id: string;
    name: string;
    logo: SeoImage;
    url: string;
    points: string[];
};
