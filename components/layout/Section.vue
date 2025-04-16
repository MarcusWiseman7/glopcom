<template>
    <section class="section">
        <slot />
    </section>
</template>

<style lang="scss" scoped>
.section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>
