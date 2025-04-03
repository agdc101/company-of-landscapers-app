import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './output.css';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient.js';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
