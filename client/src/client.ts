import { ApolloClient, InMemoryCache } from '@apollo/client';

type EnvironmentType = 'development' | 'production';

const apiUrls: { [key in EnvironmentType]: string } = {
	development: 'http://localhost:3000',
	// eslint-disable-next-line no-restricted-globals
	production: location.origin
};

export const apiUrl = apiUrls[process.env.NODE_ENV as EnvironmentType];

export const client = new ApolloClient({
	uri: `${apiUrl}/graphql`,
	cache: new InMemoryCache()
});
