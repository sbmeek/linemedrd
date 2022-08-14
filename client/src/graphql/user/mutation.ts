import { gql } from '@apollo/client';

export const CREATE_USER = gql`
	mutation createUser($origin: String!, $payload: CreateUserInput!) {
		createUser(origin: $origin, payload: $payload) {
			_id
			email
			username
		}
	}
`;
