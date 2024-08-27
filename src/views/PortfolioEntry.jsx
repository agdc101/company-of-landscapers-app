import { useParams, useLoaderData, useLocation, Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Error from "./Error";
import { motion } from "framer-motion";
import framerAnimations from "@/utils/framer-anims";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Image } from 'antd';

export default function PortfolioEntry() {
   const { portfolioData, error, loading } = useLoaderData();
   const { slug } = useParams();
   const location = useLocation();

   if (loading) return <p>Loading...</p>;
   if (error) return <Error/>;

   const entries = portfolioData.portfolioEntries;
   const currentIndex = entries.findIndex(entry => entry.slug === slug);
   const entry = entries[currentIndex];
   const nextEntry = entries[currentIndex + 1] || entries[0];
   const previousEntry = entries[currentIndex - 1] || entries[entries.length - 1];

   return (
      <motion.section key={location.key}>
         <Hero imageUrl={entry.portfolioImage[0].url} imageAlt={entry.portfolioImage[0].alt} title={entry.title} />
         <motion.div key={slug} className="grid grid-cols-1 gap-10 lg:gap-4" {...framerAnimations.slideRightFadeIn}>
            <div className="container py-2 md:py-4 xl:py-16">
               <p className="text-xl lg:text-3xl xl:text-4xl text-center py-8 xl:pb-16">{entry.description}</p>
               <p className="text-center lg:text-xl xl:text-2xl xl:mb-6">{entry.projectDescription}</p>
            </div>
            <div className="bg-[#fdf1e8] p-4 md:px-16 xl:px-20 md:mb-2 xl:mb-0 lg:py-12 lg:px-6 md:pt-8 flex">
               <Carousel plugins={[ Autoplay({ delay: 4000 }) ]}>
                  <p className="mb-4 xl:mb-6 lg:text-xl xl:text-2xl">{entry.title} in Pictures:</p>
                  <CarouselContent>
                     <Image.PreviewGroup>
                        {entry.portfolioImage.map((image, index) => (
                           <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                              <figure className="mt-auto">
                                 <Image className="rounded" src={image.url} alt={image.alt} />
                                 <figcaption className="italic mt-2 md:mb-2 text-sm xl:text-xl text-center">{image.title}</figcaption>
                              </figure>
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
