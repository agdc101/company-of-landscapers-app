export interface Images {
  id? : number;
  title? : string;
  alt: string;
  url: string;
}
export interface Links {
  title: string;
  slug: string;
}

export interface Entries {
  title: string;
  description: string;
  slug?: string; 
  projectDescription?: string;
  portfolioImage?: Images[];
  heroImage?: Images[];
}

export interface ContactDetailsData {
  id: string,
  email: string,
  streetAddress: string,
  phoneNumber: string,
}

export interface GlobalLoaderData {
  globalData: {
      entries: Links[];
      globalSet: ContactDetailsData;
  };
}

export interface PortfolioLoaderData {
  portfolioData: {
     portfolioEntries: Entries[];
     portfolioHomeEntries: Entries[];
  };
}
