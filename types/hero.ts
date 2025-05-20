import type { Translation } from './sanity';

export type SanityImage = {
    _key: string;
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    };
    size: number;
};

export type Hero = {
    _id: string;
    title: Translation;
    subtitle: Translation;
    images: SanityImage[];
};
