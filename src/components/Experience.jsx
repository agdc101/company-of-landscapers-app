import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Experience({homePage}) {
    const expTextRef = useRef(null);
    const expTextIsInView = useInView(expTextRef, { once: true });
    const expImageRef = useRef(null);

    return (
        <section className="flex flex-col items-center xl:flex-row-reverse justify-around py-20 px-2 xl:px-10 bg-slate-200">
            <div ref={expTextRef} className="text-center w-full lg:w-4/5 xl:w-2/5" style={{
                transform: expTextIsInView ? "none" : "translateX(100px)",
                opacity: expTextIsInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <h4 className="text-4xl">{homePage.experienceTitle}</h4>
                <p className="my-14 text-xl xl:text-2xl 2xl:text-3xl">{homePage.experienceDescription}</p>
            </div>
            <div className="xl:block w-4/5 sm:w-3/5 md:w-2/5 max-w-screen-md">
                <img ref={expImageRef} className="rounded shadow-custom" src={homePage.experienceImage[0].url} alt={homePage.experienceImage[0].alt}
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