import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
    uri: 'https://company-of-landscapers-app-git-master-agdc101s-projects.vercel.app', //change for production
});

// Create a middleware link to add the Authorization header
const authLink = setContext((_, { headers }) => {
  const token = '-I4MEf5_NhW247a8egnmxPqTq0PYHXro';
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
  
export default client;