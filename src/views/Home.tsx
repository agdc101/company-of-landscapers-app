import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHero from '../components/HomeHero.jsx';
import Introduction from "../components/Introduction.jsx";
import Experience from "../components/Experience.js";
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import Error from './Error.jsx';
import { IHomepageData } from '../utils/types.js';
interface HomePageLoaderData {
  homepageData: IHomepageData;
  error: boolean;
}

const Home = () => {
  const loaderData = useLoaderData() as HomePageLoaderData;

  const { homepageData, error } = loaderData;

  const homePage = homepageData.homeEntries[0];
  const featuredProjectsData = homepageData.entries;

  if (error) return <Error />;

  return (
    <>
      <HomeHero imageUrl={homePage.heroImage[0].url} imageAlt={homePage.heroImage[0].alt} title={homePage.heroTitle} text={homePage.heroText} />
      <Introduction homePageData={homePage} />
      <Experience homePage={homePage} />
      <FeaturedProjects projectsData={featuredProjectsData} />
    </>
  );
}

export default Home;
