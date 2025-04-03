import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { IHomeEntry } from "../utils/types.js";

interface IExperienceProps {
    homePage: IHomeEntry;
}

const Experience = ({ experienceContent }: any ) => {
    const expTextRef = useRef<HTMLDivElement>(null);
    const expTextIsInView = useInView(expTextRef, { once: true });
    const expImageRef = useRef<HTMLImageElement>(null);

    return (
        <section className="flex flex-col items-center xl:flex-row-reverse justify-around py-20 px-2 xl:px-10 2xl:py-28 bg-slate-200">
            <div ref={expTextRef} className="text-center w-full lg:w-4/5 xl:w-2/5" style={{
                transform: expTextIsInView ? "none" : "translateX(100px)",
                opacity: expTextIsInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <h4 className="text-4xl xl:text-5xl">{experienceContent.title}</h4>
                <p className="text-slate-700 my-14 text-xl xl:my-20 xl:text-2xl 2xl:text-3xl">{experienceContent.description}</p>
            </div>
            <div className="xl:block px-4 md:w-3/6 max-w-screen-md">
                <img ref={expImageRef} className="rounded shadow-custom" src={experienceContent.image.url} alt={experienceContent.image.alt}
                    style={{
                        transform: expTextIsInView ? "none" : "translateX(-100px)",
                        opacity: expTextIsInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                />
            </div>
        </section>
    );
}

export default Experience;