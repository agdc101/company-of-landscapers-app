
import client from './apolloClient';
import { get_homepage_set, get_portfolio_set, get_global_set, get_contact_set } from './queries';

const loadData = async (query, key) => {
  try {
    const { data } = await client.query({ query });
    return { [key]: data };
  } catch (error) {
    return { error };
  }
};

export const globalLoader = () => loadData(get_global_set, 'globalData');

export const homePageLoader = () => loadData(get_homepage_set, 'homepageData');

export const portfolioPageLoader = () => loadData(get_portfolio_set, 'portfolioData');

export const contactPageLoader = () => loadData(get_contact_set, 'contactData');

