interface IImage {
  alt: string;
  url: string;
}

interface IContactEntry {
  id: string;
  title: string;
  description: string;
  heroImage: IImage[];
}

interface IGlobalSetData {
  id: string,
  email: string,
  streetAddress: string,
  phoneNumber: string,
}

interface IContactPageData {
  contactEntries: IContactEntry[],
  globalSet: IGlobalSetData;
}

export interface IPortfolioEntry {
  title: string;
  description: string;
  slug: string;
  portfolioImage: IImage;
}

export interface IHomeEntry {
  heroTitle: string;
  heroText: string;
  heroImage: IImage[];
  introTitle: string;
  introDescription: string;
  introImage: IImage[];
  experienceTitle: string;
  experienceDescription: string;
  experienceImage: IImage[];
}

export interface ContactLoaderData {
    contactData: IContactPageData;
    error: boolean;
    loading: boolean;
}

export interface IHomepageData {
  homeEntries: IHomeEntry[],
  entries: IPortfolioEntry[];
}