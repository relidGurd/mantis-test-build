export const ANIMATION_SETTINGS = {
  transition: {
    duration: 0.6,
    delay: 0.15,
    ease: [0.215, 0.61, 0.355, 1],
  },
  viewport: { amount: 0.3, once: true },
} as const;

export const PRELOADER_DURATION_S = 4;
export const MAIN_PAGE_ANIMATION_DELAY = PRELOADER_DURATION_S + 0.5;
