import type { SeoImage } from './sanity';

export type Service = {
    _id: string;
    title: string;
    image: SeoImage;
    points: string[];
    position: number;
};
