import { gql } from '@apollo/client';

export const GET_SPECIALTIES = gql`
	query {
		specialties {
			_id
			description
		}
	}
`;
