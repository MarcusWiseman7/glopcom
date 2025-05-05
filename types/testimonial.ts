import type { SeoImage, Translation } from './sanity';

export type Testimonial = {
    _id: string;
    author: {
        name: string;
        position: Translation;
        image: SeoImage;
    };
    quote: Translation;
};
