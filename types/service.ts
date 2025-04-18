import type { SeoImage, Translation } from './sanity';

export type Service = {
    _id: string;
    name: Translation;
    image: SeoImage;
    points: Translation[];
};
