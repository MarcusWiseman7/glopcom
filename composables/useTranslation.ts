import type { Translation } from '~/types/sanity';

export const useTranslation = (translation: Translation) => {
    const { locale } = useI18n();

    const entries = translation?.value ?? [];

    return computed(
        () =>
            entries.find((entry) => entry._key === locale.value)?.value ||
            entries.find((entry) => entry._key === 'en')?.value ||
            '',
    );
};
