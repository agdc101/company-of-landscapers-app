import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Introduction({homePage}) {
    const introTextRef = useRef(null);
    const introTextIsInView = useInView(introTextRef, { once: true });
    const introImageRef = useRef(null);

    return (
        <section className="flex flex-col items-center xl:flex-row justify-around py-20 px-2 xl:px-10">
            <div ref={introTextRef} className="text-center w-full lg:w-4/5 xl:w-2/5" 
                style={{
                    transform: introTextIsInView ? "none" : "translateX(-100px)",
                    opacity: introTextIsInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <h4 className="text-4xl">{homePage.introTitle}</h4>
                <p className="my-14 text-xl xl:text-2xl 2xl:text-3xl">{homePage.introDescription}</p>
            </div>
            <div className="xl:block w-4/5 sm:w-3/5 md:w-2/5 max-w-screen-md">
                <img loading="lazy" ref={introImageRef} className="rounded shadow-custom" src={homePage.introImage[0].url} alt={homePage.introImage[0].alt}
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