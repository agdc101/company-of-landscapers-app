const framerAnimations = {
    // Define your framer animations here
    slideDown: {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.75, delay: 0.75 }
    },

    mobileNav: {
        initial: { x: -500 },
        animate: { x: 0 },
        exit: { x: -500 },
        transition: { duration: 0.75 }
    },

    slideRightFadeIn: {
        initial: { x: -25, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.75, ease: "easeInOut" }
    },

    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.75, ease: "easeInOut" }
    },   

    containerVariants: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between animations of each child
                delayChildren: 0.05, // Delay before children animations start
                duration: 1,
            },
        },
        exit: { opacity: 0 },
    },

    itemVariants: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.75 } },
        exit: { opacity: 0, y: -50 },
    }
}

export default framerAnimations;
