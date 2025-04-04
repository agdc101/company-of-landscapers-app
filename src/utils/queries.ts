import { gql } from '@apollo/client';

export const get_global_set = gql`
  query getGlobalSet {
    globalSet {
      ... on contactInformation_GlobalSet {
        email
        streetAddress
        phoneNumber
      }
    }
    entries(relatedToCategories: [{ slug: "featured" }]) {
      ... on portfolio_Entry {
        title
        description
        slug
      }
    }
  }`;

export const get_homepage_set  = gql`
  query getHomepage {
    homeEntries {
      ... on home_Entry {
        heroTitle
        heroText
        heroImage {
          alt
          url
        }
        introTitle
        introDescription
        introImage {
          alt
          url
        }
        experienceTitle
        experienceDescription
        experienceImage {
          alt
          url
        }
      }
    }
    entries(relatedToCategories: [{ slug: "featured" }]) {
      ... on portfolio_Entry {
        title
        description
        slug
        portfolioImage {
          url
          alt
        }
      }
    }
  }`;

export const get_portfolio_set = gql`
  query getPortfolio {
    portfolioEntries {
      ... on portfolio_Entry {
        id
        title
        description
        projectDescription
        slug
        portfolioImage {
          id
          title
          url
          alt
        }
      }
    }
    portfolioHomeEntries {
      ... on portfolioHome_Entry {
        title
        description
        heroImage {
          alt
          url
        }
      }
    }
  }`;

export const get_contact_set = gql`
  query MyQuery {
    contactEntries {
      ... on contact_Entry {
        title
        description
        heroImage {
          url
        }
      }
    }
    globalSet {
      ... on contactInformation_GlobalSet {
        id
        email
        streetAddress
        phoneNumber
      }
    }
  }`;