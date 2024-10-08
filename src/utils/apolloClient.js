import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL,
});

// Create a middleware link to add the Authorization header
const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_GRAPHQL_TOKEN;
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