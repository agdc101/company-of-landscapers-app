import client from './apolloClient.js';
import { DocumentNode } from 'graphql';
import { get_homepage_set, get_portfolio_set, get_global_set, get_contact_set } from './queries.js';

const loadData = async (query : DocumentNode, key : string) => {
  try {
    const { data } = await client.query({ query });
    
    if (!data) throw new Error(`Error fetching ${key} data from Craft.`);
    return { [key]: data};

  } catch (error) {
    console.error(error);
    throw new Error('Error Fetching Data From Craft. Please Contact Developer');
  }
};

export const globalLoader = () => loadData(get_global_set, 'globalData');

export const homePageLoader = () => loadData(get_homepage_set, 'homepageData');

export const portfolioPageLoader = () => loadData(get_portfolio_set, 'portfolioData');

export const contactPageLoader = () => loadData(get_contact_set, 'contactData');
