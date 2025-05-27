<template>
    <div class="banner">Banner</div>
</template>

<style lang="scss" scoped>
.banner {
    width: 100%;
    aspect-ratio: var(--aspect-ratio-hero-mobile);
    display: flex;
    justify-content: center;
    align-items: center;

    @include functions.device(tablet) {
        aspect-ratio: var(--aspect-ratio-hero-desktop);
    }
}
</style>
