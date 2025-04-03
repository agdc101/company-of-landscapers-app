import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHero from '../components/HomeHero.jsx';
import Introduction from "../components/Introduction.jsx";
import Experience from "../components/Experience.js";
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import Error from './Error.jsx';
import { Image, Entry } from '../utils/types.js';

interface PortfolioEntry extends Entry {
  portfolioImage: Image;
}

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
  entries: PortfolioEntry[];
}

interface HomePageLoaderData {
  homepageData: HomepageData;
  error: { hasError: boolean; message?: string };
}

const Home = () => {
  const loaderData = useLoaderData() as HomePageLoaderData;

  const { homepageData, error } = loaderData;
  const { heroImage, heroTitle, heroText, introTitle, introDescription, introImage, experienceTitle, experienceDescription, experienceImage } = homepageData.homeEntries[0];
  const [ heroImg, introImg, experienceImg ] = [ heroImage[0], introImage[0], experienceImage[0] ];
  const featuredProjectsData = homepageData.entries;

  if (error) return <Error />;

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
