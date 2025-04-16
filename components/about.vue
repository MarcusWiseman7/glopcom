<template>
    <LayoutSection>
        <LayoutSectionTitle>{{ $t('index.section_title.about') }}</LayoutSectionTitle>
        <div class="about__text">
            <p v-html="$t('about.us.description')" />
        </div>
    </LayoutSection>
</template>

<style lang="scss" scoped>
.about {
    &__text {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @include typography.font(body, m);

        @include functions.device(tablet) {
            @include typography.font(body, l);
        }
    }
}
</style>
