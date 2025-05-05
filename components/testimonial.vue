<template>
    <div v-if="testimonial" class="testimonial">
        <div class="testimonial__quote">
            <img src="~/assets/images/quote_frame.svg" alt="quote frame" class="testimonial__quote__frame" />
            <p>{{ useTranslation(testimonial.quote) }}</p>
        </div>
        <div v-if="testimonial.author" class="testimonial__author">
            <GImage v-if="testimonial.author.image" :image="testimonial.author.image" />
            <div class="testimonial__author__info">
                <p v-if="testimonial.author.name">{{ testimonial.author.name }}</p>
                <p v-if="testimonial.author.position">{{ useTranslation(testimonial.author.position) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { testimonial } = storeToRefs(useContentStore());
</script>

<style lang="scss" scoped>
.testimonial {
    width: 100%;
    padding: 0 1rem;
    position: relative;

    @include functions.device(largeMobile) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4rem;
        padding: 0;
    }

    &__quote {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        min-height: 148px;
        width: 80%;
        padding: 4rem 3rem;

        @include typography.font(body, xs);

        @include functions.device(largeMobile) {
            padding: 4rem 4.5rem;
        }

        @include functions.device(largeMobile) {
            height: 260px;
            width: 460px;

            @include typography.font(body, m);
        }

        &__frame {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            object-fit: contain;
        }
    }

    &__author {
        display: flex;
        justify-content: flex-end;
        margin-top: -3rem;

        @include typography.font(body, xs);

        line-height: 1;

        @include functions.device(largeMobile) {
            @include typography.font(body, xl);

            align-items: center;
            flex-direction: column;
            gap: 1rem;
            text-align: center;
            line-height: 1;
            margin: 0;
        }

        img {
            object-fit: cover;
            width: 114px;
            height: 114px;

            @include functions.device(largeMobile) {
                width: 158px;
                height: 158px;
            }
        }

        &__info {
            position: absolute;
            bottom: 1rem;
            left: 4rem;

            @include functions.device(largeMobile) {
                position: relative;
                left: 0;
            }
        }
    }
}
</style>
