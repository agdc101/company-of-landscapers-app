import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHero from '../components/HomeHero.jsx';
import Introduction from "../components/Introduction.jsx";
import Experience from "../components/Experience.js";
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import { Image, HomePortfolioEntry } from '../utils/types.js';

interface HomepageData {
  homeEntries: {
    heroTitle: string;
    heroText: string;
    heroImage: Image[];
    introTitle: string;
    introDescription: string;
    introImage: Image[];
    experienceTitle: string;
    experienceDescription: string;
    experienceImage: Image[];
  }[],
  entries: HomePortfolioEntry[];
}

interface HomePageLoaderData {
  homepageData: HomepageData;
}

const Home = () => {
  const loaderData = useLoaderData() as HomePageLoaderData;

  const { homepageData } = loaderData;
  const { heroImage, heroTitle, heroText, introTitle, introDescription, introImage, experienceTitle, experienceDescription, experienceImage } = homepageData.homeEntries[0];
  const [ heroImg, introImg, experienceImg ] = [ heroImage[0], introImage[0], experienceImage[0] ];
  const featuredProjectsData = homepageData.entries;

  return (
    <>
      <HomeHero homeHeroContent={{ title: heroTitle, text: heroText, image: heroImg }} />
      <Introduction introContent={{ title: introTitle, description: introDescription, image: introImg }} />
      <Experience experienceContent={{ title: experienceTitle, description: experienceDescription, image: experienceImg }} />
      <FeaturedProjects projectsData={featuredProjectsData} />
    </>
  );
}

export default Home;
