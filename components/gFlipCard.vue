<template>
    <div class="container" @mouseenter="flipped = true" @mouseleave="flipped = false" @touchend="atTouchend">
        <div :class="['card', { 'card--flipped': flipped }]">
            <div class="card__side card__front">
                <slot name="front" />
            </div>
            <div class="card__side card__back">
                <slot name="back" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const flipped = ref(false);

const atTouchend = () => {
    if (!flipped.value) flipped.value = true;
};
</script>

<style lang="scss">
.container {
    perspective: 1000px;
}

.card {
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in-out;

    @include functions.device(largeMobile) {
        height: 240px;
    }

    &--flipped {
        transform: rotateY(180deg);
    }

    &__side {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: var(--card-border-radius);
        box-shadow: var(--card-shadow);
        overflow: hidden;
    }

    &__back {
        transform: rotateY(180deg);
    }
}
</style>
