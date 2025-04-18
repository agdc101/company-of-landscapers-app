import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel.tsx";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card.tsx";
import { Link } from 'react-router-dom';
import React, { useRef, FC } from 'react';
import { useInView, motion } from 'framer-motion';
import { Entries } from "../utils/types.ts";

interface FeaturedProjectsProps {
    projectsData: Entries[];
}

const FeaturedProjects = ( {projectsData}: FeaturedProjectsProps ) => {
    const featProjects = useRef(null);
    const featProjectsTitle = useRef(null);
    const plugin = useRef(Autoplay({ delay: 5000 }) as any);

    const featProjectsIsInView = useInView(featProjects, { once: true });
    const featProjectsTitleIsInView = useInView(featProjects, { once: true });

    return (
        <section className="justify-around py-20 px-6 md:px-16 lg:px-14 xl:px-20 bg-[#fdf1e8]">
            <motion.h4 
                ref={featProjectsTitle}
                className="text-4xl text-center mb-12 md:mb-16" 
                style={{
                    opacity: featProjectsTitleIsInView ? 1 : 0,
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"
            }} >Featured Projects
            </motion.h4>
            <div className="flex flex-col justify-evenly text-center items-center">
                <Carousel plugins={[ plugin.current ]} >
                    <motion.div 
                        className="w-11/12 md:w-full mx-auto"
                        ref={featProjects}  
                        style={{
                        transform: featProjectsIsInView ? "none" : "translateY(100px)",
                        opacity: featProjectsIsInView ? 1 : 0,
                        transition: "all 0.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"}} >
                        <CarouselContent>
                            {projectsData.map((project, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
                                    <Card className="w-[70%] md:w-[100%] mx-auto">
                                        <CardContent>
                                            <h4 className="text-2xl mt-5">{project.title}</h4>
                                            <p className="text-slate-800 italic my-5 md:my-8 2xl:text-lg">{project.description}</p>
                                            <Link to={`/portfolio/${project.slug}`}>
                                                <img loading="lazy" className="rounded shadow-custom mx-auto" src={project.portfolioImage?.[0]?.url || 'https://placehold.co/400'} alt={project.portfolioImage?.[0]?.url || 'project image'} />
                                            </Link>
                                            <Link to={`/portfolio/${project.slug}`} className="mt-5 border italic block text-center rounded py-2 w-2/6 md:w-3/6 lg:w-3/6 m-auto xl:text-lg 2xl:mt-7">View project</Link>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </motion.div>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <Link to="/portfolio" className="mt-14 border border-gray-400 block text-center rounded py-2 xl:w-1/6 m-auto">View all our work</Link>
        </section>
    )

}

export default FeaturedProjects;