export type Messages = {
    en: { [key: string]: string };
    [language: string]: { [key: string]: string };
};

export type SanityTranslation = {
    _key: string;
    value: string;
    _type: string;
};

export type SanityTranslationEntry = {
    key: string;
    value: SanityTranslation[];
};
