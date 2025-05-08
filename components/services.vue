<template>
    <LayoutSection v-if="services">
        <LayoutSectionTitle>{{ $t('index.section_title.services') }}</LayoutSectionTitle>
        <div class="services__carousel">
            <ClientOnly>
                <Carousel v-bind="carouselConfig">
                    <Slide v-for="service in services" :key="service._id">
                        <Service :service="service" />
                    </Slide>

                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
            </ClientOnly>
        </div>
    </LayoutSection>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { ClientOnly } from '#components';

const { services } = storeToRefs(useContentStore());

const carouselConfig = ref({
    itemsToShow: 1.25,
    gap: 12,
    breakpoints: {
        600: {
            itemsToShow: 3,
            mouseDrag: false,
            touchDrag: false,
        },
        1280: {
            itemsToShow: 3,
            gap: 16,
            mouseDrag: false,
            touchDrag: false,
        },
    },
});
</script>

<style lang="scss" scoped>
.services {
    &__carousel {
        padding: 0 0.5rem;

        @include functions.device(largeMobile) {
            padding: 0 1rem;
        }

        @include functions.device(desktop) {
            padding: 0;
        }
    }
}

.carousel {
    --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
    --vc-pgn-active-color: rgba(255, 255, 255, 1);
    --vc-pgn-border-radius: 9999px;
    --vc-pgn-height: 8px;
    --vc-pgn-width: 8px;
    --vc-pgn-gap: 8px;

    &__pagination {
        @include functions.device(largeMobile) {
            display: none;
        }
    }
}
</style>
