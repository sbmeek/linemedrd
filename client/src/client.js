import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	cache: new InMemoryCache(),
	headers: {
		authorization: localStorage.getItem('token') || ''
	}
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
