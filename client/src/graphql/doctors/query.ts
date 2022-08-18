import { gql } from '@apollo/client';

export const GET_LIST_DOCTORS = gql`
	query ListItemDoctors {
		doctors {
			_id
			imageUrl
			user(populate: true) {
				name
				lastname
			}
			workday(populate: true) {
				adress(populate: true) {
					city
					province
				}
				days(populate: true) {
					fri
					mon
					sat
					sun
					thu
					tue
					wed
				}
			}
			ratingTotal
			specialties(populate: true) {
				description
			}
		}
	}
`;
