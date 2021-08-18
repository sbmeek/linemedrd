import { ApolloClient, InMemoryCache, gql, makeVar } from '@apollo/client';
import AuthService from './services/auth';

export const typeDefs = gql`
	extend type Query {
		isLoggedIn: Boolean!
	}
`;

const apiUrls = {
	development: 'http://localhost:3000',
	production: location.origin
};

export const apiUrl = apiUrls[process.env.NODE_ENV];

export const isLoggedInVar = makeVar(false);
AuthService.isAuthenticated().then(isLoggedInVar);

export const client = new ApolloClient({
	uri: apiUrl + '/graphql',
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					isLoggedIn: {
						read() {
							return isLoggedInVar();
						}
					}
				}
			}
		}
	}),
	typeDefs
});
