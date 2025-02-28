import type { RouterOptions } from '@nuxt/schema';

export default <RouterOptions>{
    scrollBehavior(to, _, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                    });
                }, 100);
            });
        } else {
            return { top: 0 };
        }
    },
};
