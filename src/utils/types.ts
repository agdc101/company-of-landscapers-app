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

interface IQuickLinkProps {
  globalData: {
      entries: Link[];
      globalSet: ContactDetailsData;
  };
}

export interface GlobalData {
  globalData: {
      entries: Link[];
      globalSet: ContactDetailsData;
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

export interface Entry {
  title: string;
  description: string;
  slug: string;
}

interface IContactEntry extends Entry {
  heroImage: Image[];
}


interface IContactPageData {
  contactEntries: IContactEntry[],
  globalSet: ContactDetailsData;
}

interface ContactLoaderData {
  contactData: IContactPageData;
  error: boolean;
  loading: boolean;
}