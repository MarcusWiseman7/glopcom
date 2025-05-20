<template>
    <div class="quote">
        <div class="quote__icon quote__icon--top-left">
            <img src="~/assets/icons/quote.svg" alt="quote" />
        </div>
        <div class="quote__icon quote__icon--bottom-right">
            <img src="~/assets/icons/quote.svg" alt="quote" />
        </div>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.quote {
    position: relative;
    border-top-right-radius: var(--card-border-radius);
    border-bottom-left-radius: var(--card-border-radius);
    padding: 2rem 1rem;
    border: 3px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;

    &__icon {
        position: absolute;
        display: flex;
        align-items: center;
        background-color: #fff;
        height: 40px;

        img {
            height: 30px;
            width: 30px;
        }

        &--top-left {
            top: 0;
            left: -15px;
            rotate: 180deg;
        }

        &--bottom-right {
            bottom: 0;
            right: -15px;
        }
    }
}
</style>
