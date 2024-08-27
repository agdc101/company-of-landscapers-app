import { motion } from "framer-motion";
import framerAnimations from "@/utils/framer-anims";

export default function Hero({imageUrl, imageAlt, title}) {
    return (
        <section className="bg-black hero">
            <motion.div {...framerAnimations.slideRightFadeIn}>
                <div className="overlay-content inset-0 z-10 relative px-6 md:px-12 lg:px-20 xl:px-32 w-full">
                    <div className="absolute top-32 sm:top-44 xl:top-40 w-full md:px-1 xl:w-1/2" >
                        <h3 className="leading-relaxed text-white text-3xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-light tracking-wider md:my-6 lg:my-18 px-1">{title ? title : 'Projects'}</h3>
                    </div>
                </div>
                <div className="hero-image-container relative top-0">
                    <img src={imageUrl} alt={imageAlt} className="hero-image object-cover w-full max-h-[50dvh] md:max-h-[30dvh] xl:max-h-[50dvh] 2xl:max-h-[40dvh] inset-0" />
                </div>
            </motion.div>
        </section>
    );
}   