interface IImage {
  alt: string;
  url: string;
}

interface IPortfolioEntry {
  title: string;
  description: string;
  slug: string;
  portfolioImage: IImage;
}

interface IHomeEntry {
  heroTitle: string;
  heroText: string;
  heroImage: IImage[];
  introTitle: string;
  introDescription: string;
  introImage: IImage;
  experienceTitle: string;
  experienceDescription: string;
  experienceImage: IImage;
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

export interface IContactPageData {
  contactEntries: IContactEntry[],
  globalSet: IGlobalSetData;
}

export interface IHomepageData {
  homeEntries: IHomeEntry[],
  entries: IPortfolioEntry[];
}