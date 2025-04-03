export interface Image {
  alt: string;
  url: string;
}
export interface Link {
  title: string;
  slug: string;
}

export interface ContactDetailsData {
  id: string,
  email: string,
  streetAddress: string,
  phoneNumber: string,
}

export interface IHomeEntry {
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

export interface GlobalData {
  globalData: {
      entries: Link[];
      globalSet: ContactDetailsData;
  };
}

export interface Entry {
  title: string;
  description: string;
  slug: string;
}

// for portfolio.jsx 

interface PortfolioEntry extends Entry {
  portfolioImage: Image[];
}

interface PortfolioLoaderData {
  portfolioData: {
     portfolioEntries: PortfolioEntry[];
     portfolioHomeEntries: {
        title: string;
        description: string;
        heroImage: Image[];
     }[];
  };
  error: { hasError: boolean; message?: string };
  loading: boolean;
}