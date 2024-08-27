import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

export default function FeaturedProjects({projectsData}) {
    const featProjects = useRef(null);
    const featProjectsTitle = useRef(null);

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
                <Carousel plugins={[ Autoplay({delay: 2500}) ]} >
                    <motion.div 
                        ref={featProjects}  
                        style={{
                        transform: featProjectsIsInView ? "none" : "translateY(100px)",
                        opacity: featProjectsIsInView ? 1 : 0,
                        transition: "all 0.75s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s"}} >
                        <CarouselContent>
                            {projectsData.map((project, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
                                    <Card className="w-[90%] md:w-[100%] mx-auto">
                                        <CardContent>
                                            <h4 className="text-2xl mt-5">{project.title}</h4>
                                            <p className="my-5 md:my-8">{project.description}</p>
                                            <Link to={`/portfolio/${project.slug}`}>
                                                <img loading="lazy" className="rounded shadow-custom mx-auto" src={project.portfolioImage[0].url} alt={project.portfolioImage[0].alt} />
                                            </Link>
                                            <Link to={`/portfolio/${project.slug}`} className="mt-5 border italic block text-center rounded py-2 w-2/6 md:w-3/6 lg:w-3/6 m-auto">View project</Link>
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