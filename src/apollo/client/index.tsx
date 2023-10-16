import {ApolloClient, ApolloLink, InMemoryCache} from '@apollo/client';
import {httpLink, requestLink} from './client.helpers';

const link = ApolloLink.from([requestLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
