import React, { useState } from "react";
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationNext,
   PaginationPrevious,
 } from "../components/ui/pagination.js"
 import {
   Carousel,
   CarouselContent,
   CarouselItem,
} from "../components/ui/carousel.js"
import Autoplay from "embla-carousel-autoplay"
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card.js";
import Hero from "../components/Hero.js";
import { motion } from "framer-motion";
import framerAnimations from "../utils/framer-anims.js";
import { Entries } from "../utils/types.js";


interface PortfolioLoaderData {
  portfolioData: {
     portfolioEntries: Entries[];
     portfolioHomeEntries: Entries[];
  };
}


const Portfolio = () => {
   const loaderData = useLoaderData() as PortfolioLoaderData;
   const { portfolioData } = loaderData;
   const portfolioHomeData = portfolioData.portfolioHomeEntries[0];
   const portfolioEntries = portfolioData.portfolioEntries;
   const [startIndex, setStartIndex] = useState(0);
   const itemsPerPage = 3;
   const endIndex = Math.min(startIndex + itemsPerPage, portfolioEntries.length);
   const heroImage = portfolioHomeData.heroImage ? portfolioHomeData.heroImage[0] : { url: '', alt: '' };

   return (
      <>
         <Hero image={heroImage} title={portfolioHomeData.title} />
         <motion.section className="bg-[#fdf1e8]" {...framerAnimations.slideRightFadeIn} >
            <div className="py-2 text-center px-4 xl:px-8">
               {portfolioHomeData.description && <p className="text-lg xl:text-2xl xl:mb-16 max-w-5xl text-center mx-auto">{portfolioHomeData.description}</p>}
               <motion.div key={startIndex} 
                  className="mt-6 mb-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6" 
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={framerAnimations.containerVariants}
                  transition={{ duration: 0.5 }}>

                  {portfolioEntries.slice(startIndex, endIndex).map((entry, index) => (
                     <motion.div key={index} variants={framerAnimations.itemVariants}>
                        <Card>
                           <CardContent className="flex flex-col justify-between h-full pt-4 p-6">
                              <Link to={`/portfolio/${entry.slug}`} className="hover:text-black">
                                 <h2 className="text-xl xl:text-2xl font-medium text-center my-2">{entry.title}</h2>
                                 <p className="text-center xl:text-lg my-4 xl:my-6 italic">{entry.description}</p>
                                 <Carousel plugins={[ Autoplay({delay: 2500}) as any ]} >
                                    <CarouselContent>
                                          {entry.portfolioImage?.map((image, index) => (
                                             <CarouselItem key={index}>
                                                <img loading="lazy" className="rounded shadow-custom mx-auto" src={image.url} alt={image.alt} />
                                             </CarouselItem>
                                          ))}
                                    </CarouselContent>
                                 </Carousel>
                              </Link>
                              <Link to={`/portfolio/${entry.slug}`} className="mt-5 border italic block text-center rounded py-2 w-2/6 md:w-3/6 lg:w-3/6 m-auto xl:text-lg">View project</Link>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </motion.div>
               <Pagination>
                  <PaginationContent>
                     <PaginationItem>
                        <PaginationPrevious onClick={() => {
                           setStartIndex(Math.max(startIndex - itemsPerPage, 0));
                        }} 
                        className={startIndex === 0 ? "pointer-events-none opacity-50 xl:text-xl" : "xl:text-xl pointer-events-auto cursor-pointer"}  
                        />
                     </PaginationItem>

                     <PaginationItem>
                        <PaginationEllipsis />
                     </PaginationItem>

                     <PaginationItem>
                        <PaginationNext onClick={() => {
                           setStartIndex(Math.min(startIndex + itemsPerPage, portfolioEntries.length - itemsPerPage));
                        }} 
                        className={endIndex === portfolioEntries.length ? "pointer-events-none opacity-50 xl:text-xl" : "xl:text-xl pointer-events-auto cursor-pointer"} 
                        />
                     </PaginationItem>
                  </PaginationContent>
               </Pagination>
            </div>
         </motion.section>
      </>
   );
}

export default Portfolio;