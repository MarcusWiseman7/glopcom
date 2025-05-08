<template>
    <div class="card"><slot /></div>
</template>

<style lang="scss" scoped>
.card {
    width: 100%;
    height: 100%;
    border-radius: var(--card-border-radius);
    box-shadow: var(--card-shadow);
    overflow: hidden;
}
</style>
