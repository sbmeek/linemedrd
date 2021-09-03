import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiUrls = {
	development: 'http://localhost:3000',
	production: location.origin
};

export const apiUrl = apiUrls[process.env.NODE_ENV];

export const client = new ApolloClient({
	uri: apiUrl + '/graphql',
	cache: new InMemoryCache()
});
