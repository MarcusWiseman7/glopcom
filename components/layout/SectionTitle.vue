<template>
    <h2 class="title">
        <slot />
    </h2>
</template>

<style lang="scss" scoped>
.title {
    padding: 0 1rem;

    @include typography.font(headlines, h4);

    @include functions.device(tablet) {
        @include typography.font(headlines, h3);
    }
}
</style>
