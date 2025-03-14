import client from './apolloClient.js';
import { DocumentNode } from 'graphql';
import { get_homepage_set, get_portfolio_set, get_global_set, get_contact_set } from './queries.js';

const loadData = async (query : DocumentNode, key : string) => {
  try {
    const { data } = await client.query({ query });
    return { [key]: data, error : null };
  } catch (error) {
    return { [key]: null, error : true };
  }
};

export const globalLoader = () => loadData(get_global_set, 'globalData');

export const homePageLoader = () => loadData(get_homepage_set, 'homepageData');

export const portfolioPageLoader = () => loadData(get_portfolio_set, 'portfolioData');

export const contactPageLoader = () => loadData(get_contact_set, 'contactData');
