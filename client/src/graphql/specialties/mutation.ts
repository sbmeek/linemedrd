import { gql } from '@apollo/client';

export const mutation = gql`
	mutation createSpecialty($description: String!) {
		createSpecialty(description: $description) {
			_id
			description
		}
	}
`;
