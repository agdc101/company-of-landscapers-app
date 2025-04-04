import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Images } from "../utils/types.tsx";

interface IntroductionProps {
    introContent: {
        title: string;
        description: string;
        image: Images;
    }
};

const Introduction = ( {introContent} : IntroductionProps ) => {
    const introTextRef = useRef(null);
    const introTextIsInView = useInView(introTextRef, { once: true });
    const introImageRef = useRef(null);

    return (
        <section className="flex flex-col items-center xl:flex-row justify-around py-20 px-2 xl:px-10 2xl:py-28">
            <div ref={introTextRef} className="text-center w-full lg:w-4/5 xl:w-2/5" 
                style={{
                    transform: introTextIsInView ? "none" : "translateX(-100px)",
                    opacity: introTextIsInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <h4 className="text-4xl 2xl:text-5xl">{introContent.title}</h4>
                <p className="text-slate-600 my-14 text-xl xl:my-20 xl:text-2xl 2xl:text-3xl">{introContent.description}</p>
            </div>
            <div className="xl:block px-4 md:w-3/6 max-w-screen-md">
                <img loading="lazy" ref={introImageRef} className="rounded shadow-custom" src={introContent.image.url} alt={introContent.image.alt}
                    style={{
                        transform: introTextIsInView ? "none" : "translateX(100px)",
                        opacity: introTextIsInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                />
            </div>
        </section>
    );
}

export default Introduction;