import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const apiUrls = {
	development: 'http://localhost:3000',
	production: location.origin
};

export const apiUrl = apiUrls[process.env.NODE_ENV];

export const client = new ApolloClient({
	uri: apiUrl + '/graphql',
	cache: new InMemoryCache()
});

client
	.query({
		query: gql`
			query {
				drs(filters: {}) {
					_id
					user(populate: true) {
						_id
						name
						lastname
					}
					specialties(populate: true) {
						_id
						description
					}
				}
			}
		`
	})
	.then(result => console.log(result));
