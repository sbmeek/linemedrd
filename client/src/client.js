import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
	uri: process.env.API_URL,
	cache: new InMemoryCache()
});
client
	.query({
		query: gql`
			query {
				appointments {
					_id
					issueDate
				}
			}
		`
	})
	.then(result => console.log(result));
