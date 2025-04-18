export type SeoImage = {
    _type: string;
    alt: string;
    media: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    };
};

export type Translation = {
    value: {
        _key: string;
        value: string;
        _type: string;
    }[];
};
