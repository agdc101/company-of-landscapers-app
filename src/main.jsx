import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './output.css';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
);
