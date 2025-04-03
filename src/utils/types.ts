export interface Image {
  alt: string;
  url: string;
}
export interface ILinkEntry {
  title: string;
  slug: string;
}

export interface GlobalSetData {
  id: string,
  email: string,
  streetAddress: string,
  phoneNumber: string,
}

export interface PortfolioEntry {
  title: string;
  description: string;
  slug: string;
  portfolioImage: Image;
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

interface IQuickLinkProps {
  globalData: {
      entries: ILinkEntry[];
      globalSet: GlobalSetData;
  };
}

export interface GlobalData {
  globalData: {
      entries: ILinkEntry[];
      globalSet: GlobalSetData;
  };
}

interface IHeroProps {
  imageUrl: string;
  imageAlt: string;
  title?: string;
}

interface IIntroductionProps {
  homePageData: IHomeEntry;
}

interface IExperienceProps {
  homePage: IHomeEntry;
}

interface IContactEntry extends PortfolioEntry {
  heroImage: Image[];
}

interface IContactPageData {
  contactEntries: IContactEntry[],
  globalSet: GlobalSetData;
}

interface ContactLoaderData {
  contactData: IContactPageData;
  error: boolean;
  loading: boolean;
}