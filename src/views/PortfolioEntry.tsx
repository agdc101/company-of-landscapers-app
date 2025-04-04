import React from "react";
import { useParams, useLoaderData, useLocation, Link } from "react-router-dom";
import Hero from "../components/Hero.js";
import Error from "./Error.js";
import { motion } from "framer-motion";
import framerAnimations from "../utils/framer-anims.js";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "../components/ui/carousel.js";
import Autoplay from "embla-carousel-autoplay";
import { Image } from 'antd';
import { Card, CardContent } from "../components/ui/card.js";
import { PortfolioLoaderData } from "../utils/types.js";


const PortfolioEntry = () => {
   const { portfolioData } = useLoaderData() as PortfolioLoaderData;
   const { slug } = useParams();
   const location = useLocation();

   const entries = portfolioData.portfolioEntries;
   const currentIndex = entries.findIndex(entry => entry.slug === slug);
   const entry = entries[currentIndex];
   const nextEntry = entries[currentIndex + 1] || entries[0];
   const previousEntry = entries[currentIndex - 1] || entries[entries.length - 1];
   const heroImage = entry.portfolioImage ? entry.portfolioImage[0] : { url: '', alt: '' };

   return (
      <motion.section key={location.key}>
         <Hero image={heroImage} title={entry.title} />
         <motion.div key={slug} className="grid grid-cols-1 gap-10 lg:gap-4" {...framerAnimations.slideRightFadeIn}>
            <div className="container py-2 md:py-4 xl:py-12">
               <p className="text-xl lg:text-3xl xl:text-4xl text-center py-8 xl:pb-16">{entry.description}</p>
               <p className="text-center text-slate-600 lg:text-xl xl:text-2xl xl:mb-6">{entry.projectDescription}</p>
            </div>
            <div className="bg-[#fdf1e8] p-4 md:px-16 xl:px-20 md:mb-2 xl:mb-0 lg:py-12 lg:px-6 md:pt-8 flex">
               <Carousel plugins={[ Autoplay({ delay: 2500 }) as any ]}>
                  <p className="mb-4 xl:mb-6 lg:text-xl xl:text-2xl">{entry.title} in Pictures:</p>
                  <CarouselContent>
                     <Image.PreviewGroup>
                        {entry.portfolioImage?.map((image, index) => (
                           <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                              <Card className="mx-auto">
                                 <CardContent className="p-3">
                                    <figure className="">
                                       <Image className="rounded" src={image.url} alt={image.alt} />
                                       <figcaption className="italic mt-2 md:mb-2 text-sm xl:text-xl text-center">{image.title}</figcaption>
                                    </figure>
                                 </CardContent>
                              </Card>
                           </CarouselItem>
                        ))}
                     </Image.PreviewGroup>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
               </Carousel>
            </div>
            <div className="w-full px-1 md:px-4 xl:px-10 flex justify-between mb-6 md:mb-10 xl:mb-16 xl:mt-8">               
               <Link to={`/portfolio/${previousEntry.slug}`} className="text-center text-xs md:text-base xl:text-lg">
                  <i className="fa-solid fa-arrow-left"></i> {previousEntry.title}
               </Link>
               <Link to={`/portfolio/${nextEntry.slug}`} className="text-center text-xs md:text-base xl:text-lg">
                  {nextEntry.title} <i className="fa-solid fa-arrow-right"></i>
               </Link>
            </div>
         </motion.div>
      </motion.section>
   );
}

export default PortfolioEntry;