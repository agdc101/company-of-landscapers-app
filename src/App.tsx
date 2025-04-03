import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient.js';
import RootLayout from './components/Layout.jsx';
import Error from './views/Error.jsx';
import NotFound from './views/NotFound.jsx';
import { globalLoader, homePageLoader, portfolioPageLoader, contactPageLoader } from './utils/loaders.js';
import Loading from './views/Loading.js';  
import { Contact } from './views/Contact.js';
const Home = lazy(() => import('./views/Home.js'));
const Portfolio = lazy(() => import('./views/Portfolio.jsx'));
const PortfolioEntry = lazy(() => import('./views/PortfolioEntry.jsx'));

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      loader: globalLoader,
      children: [
        { 
          index: true, 
          element: <Home />,
          loader: homePageLoader
        },
        { 
          path: 'portfolio',
          children: [
            {
              index: true,
              element: <Portfolio />,
              loader: portfolioPageLoader
            },
            {
              path: ':slug', 
              element: <PortfolioEntry/>,
              loader: portfolioPageLoader
            }
          ]
        },
        {
          path: 'contact',
          index: true,
          element: <Contact/>,
          loader: contactPageLoader
        },
        {
          path: '*',
          element: <NotFound />
        }
      ],
    }
  ]);

  return (
    <ApolloProvider client={client}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
    </ApolloProvider>
  );
}

export default App;
