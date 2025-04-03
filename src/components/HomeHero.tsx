import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import framerAnimations from "../utils/framer-anims.js";

interface IHeroProps {
    imageUrl: string;
    imageAlt: string;
    title?: string;
    text?: string;
}

const Hero = ({homeHeroContent}: any) => {
    return (
        <section className="bg-black hero">
            <motion.div {...framerAnimations.slideRightFadeIn}>
                <div className="overlay-content inset-0 z-10 relative px-6 lg:px-16 w-full">
                    <div className="absolute top-40 sm:top-40 w-2/3 2xl:w-1/2" >
                        <h2 className="leading-relaxed text-white text-5xl sm:text-6xl md:text-7xl xl:text-6xl font-light tracking-wider md:my-6 lg:my-18">{homeHeroContent.title}</h2>
                        <p className="hidden md:block leading-relaxed text-white text-lg md:text-xl xl:text-2xl font-light tracking-wider lg:mt-12">{homeHeroContent.text}</p>
                        <Link to={'/portfolio'} className="border-solid border-2 border-white rounded text-white font-bold absolute text-base p-3 md:text-lg mt-8 md:mt-12 w-1/2 lg:w-1/3 text-center">Explore</Link>
                    </div>
                </div>
                <div className="hero-image-container top-0">
                    <img src={homeHeroContent.imageUrl} alt={homeHeroContent.imageAlt} className="hero-image object-cover w-full h-screen inset-0" />
                </div>
            </motion.div>
        </section>
    );
}   

export default Hero;

