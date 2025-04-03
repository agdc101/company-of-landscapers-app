import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHero from '../components/HomeHero.jsx';
import Introduction from "../components/Introduction.jsx";
import Experience from "../components/Experience.js";
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import Error from './Error.jsx';
import { Image, PortfolioEntry } from '../utils/types.js';

interface HomeEntry {
  heroTitle: string;
  heroText: string;
  heroImage: Image[];
  introTitle: string;
  introDescription: string;
  introImage: Image[];
  experienceTitle: string;
  experienceDescription: string;
  experienceImage: Image[];
}

interface HomepageData {
  homeEntries: HomeEntry[],
  entries: PortfolioEntry[];
}
interface HomePageLoaderData {
  homepageData: HomepageData;
  error: { hasError: boolean; message?: string };
}

const Home = () => {
  const loaderData = useLoaderData() as HomePageLoaderData;

  const { homepageData, error } = loaderData;
  const featuredProjectsData = homepageData.entries;
  const { heroImage, heroTitle, heroText, introTitle, introDescription, introImage, experienceTitle, experienceDescription, experienceImage } = homepageData.homeEntries[0];
  const [heroImg, introImg, experienceImg] = [heroImage[0], introImage[0], experienceImage[0]];

  if (error) return <Error />;

  return (
    <>
      <HomeHero homeHeroContent={{ imageUrl: heroImg.url, imageAlt: heroImg.alt, title: heroTitle, text: heroText }} />
      <Introduction introContent={{ title: introTitle, description: introDescription, image: introImg }} />
      <Experience experienceContent={{ title: experienceTitle, description: experienceDescription, image: experienceImg }} />
      <FeaturedProjects projectsData={featuredProjectsData} />
    </>
  );
}

export default Home;
