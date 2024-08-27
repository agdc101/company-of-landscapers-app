import React, { useState, Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import RootLayout from './components/Layout';
import Error from './views/Error';
import NotFound from './views/NotFound';
import { globalLoader, homePageLoader, portfolioPageLoader, contactPageLoader } from './utils/loaders';
import Loading from './views/Loading';  
import { Contact } from './views/Contact';
const Home = lazy(() => import('./views/Home'));
const Portfolio = lazy(() => import('./views/Portfolio'));
const PortfolioEntry = lazy(() => import('./views/PortfolioEntry'));

function App() {
  const [shouldLazyLoad, setShouldLazyLoad] = useState(false);

  useEffect(() => {
    // Check if the user is on a slow network, and if so will enable lazy loading
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
      const slowNetwork = connection.effectiveType === '2g' || connection.effectiveType === '3g' || connection.saveData;
      setShouldLazyLoad(slowNetwork);
    }

  }, []);

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
      {shouldLazyLoad ? ( //only show the loading component if user is on a slow network
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      ) : (
        <RouterProvider router={router} />
      )}
    </ApolloProvider>
  );
}

export default App;
