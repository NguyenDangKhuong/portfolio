import 'cross-fetch/polyfill'
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux'
import store from '../redux/store'

import Layout from '../components/organisms/_App/Layout'

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});


function KhuongApp({ Component, pageProps } : {Component: any, pageProps: any}) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    </ApolloProvider>
  )
}

export default KhuongApp