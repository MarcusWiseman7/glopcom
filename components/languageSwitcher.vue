<template>
    <v-menu v-model="menu" open-on-hover>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" theme="dark" @click.stop="menu = true">
                {{ locale.toUpperCase() }}
            </v-btn>
        </template>

        <v-list theme="dark">
            <v-list-item
                v-for="lang in locales.filter((l) => l.code !== locale)"
                :key="lang.code"
                @click="$i18n.setLocale(lang.code)"
            >
                {{ lang.code.toUpperCase() }}
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();

const menu = ref(false);
</script>

<style lang="scss" scoped></style>
