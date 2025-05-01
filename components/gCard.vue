<template>
    <div class="card">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.card {
    height: 160px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;

    @include functions.device(largeMobile) {
        height: 240px;
    }
}
</style>
