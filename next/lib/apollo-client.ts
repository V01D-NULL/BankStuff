// ./apollo-client.js

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getApiUrl } from '../util/config';

const apolloClient = new ApolloClient({
  uri: `http://${getApiUrl()}:8082/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
