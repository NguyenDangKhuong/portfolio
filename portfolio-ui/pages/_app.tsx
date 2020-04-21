import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import fetch from 'node-fetch'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from '@apollo/react-hooks';
import { OperationDefinitionNode } from 'graphql';

import Layout from '../components/_App/Layout'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
});

const terminatingLink = split(
  ({ query: { definitions } }) =>
    definitions.some(node => {
      const { kind, operation } = node as OperationDefinitionNode;
      return kind === 'OperationDefinition' && operation === 'subscription';
    }),
  wsLink,
  httpLink
);

const link = ApolloLink.from([terminatingLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

function KhuongApp({ Component, pageProps } : {Component: any, pageProps: any}) {
  return (
    <>
    <ApolloProvider client={client}>
      <Layout {...pageProps}/>
      <Component {...pageProps} />
    </ApolloProvider>
    </>
  )
}

export default KhuongApp