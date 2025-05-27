<template>
    <LayoutSection v-if="services">
        <LayoutSectionTitle>{{ $t('index.section_title.services') }}</LayoutSectionTitle>
        <div ref="servicesRef" class="services__carousel">
            <ClientOnly>
                <Carousel v-bind="carouselConfig">
                    <Slide v-for="(service, index) in services" :key="service._id">
                        <Service
                            :service="service"
                            :showContent="showServices[`service_${index}` as keyof typeof showServices]"
                        />
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

const { services } = storeToRefs(useContentStore());

const carouselConfig = {
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
};
const servicesRef = ref<HTMLElement | null>(null);
const observer = ref<IntersectionObserver | null>(null);
const showServices = ref({
    service_0: false,
    service_1: false,
    service_2: false,
});

onMounted(() => {
    observer.value = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            const ratioInView = entry.intersectionRatio;

            showServices.value.service_0 = ratioInView > 0.5;
            showServices.value.service_1 = ratioInView > 0.7;
            showServices.value.service_2 = ratioInView > 0.9;
        },
        {
            threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        },
    );

    if (servicesRef.value) observer.value.observe(servicesRef.value);
});

onBeforeUnmount(() => {
    observer.value?.disconnect();
});
</script>

<style lang="scss" scoped>
.services {
    &__carousel {
        padding: 0 0.5rem;
        height: var(--height-carousel);

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
