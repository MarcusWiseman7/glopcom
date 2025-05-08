import type { Messages, SanityTranslationEntry } from '../types/i18n';

const translateArrayToObject = (input: SanityTranslationEntry[]): Messages => {
    const output: Messages = { en: {} };

    input.forEach((item) => {
        const key = item.key;
        const translations = item.value;

        translations.forEach((translation) => {
            const lang = translation._key;
            const value = translation.value;

            if (!output[lang]) {
                output[lang] = {};
            }

            output[lang][key] = value;
        });
    });

    if (!import.meta.dev) {
        Object.entries(output).forEach(([language, translations]) => {
            if (language === 'en') return;

            output[language] = { ...output.en, ...translations };
        });
    }

    return output;
};

export default defineI18nConfig(async () => {
    const sanity = useSanity();
    const query = groq`*[_type == "message"] { key, value }`;
    let messages: Messages = { en: {} };

    const { data } = await useAsyncData('messages', () => sanity.fetch<SanityTranslationEntry[]>(query));

    if (data.value) {
        messages = translateArrayToObject(data.value);
    }

    return {
        legacy: false,
        messages,
    };
});
