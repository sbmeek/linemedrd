import { PropsWithChildren, useEffect } from 'react';
import { Container } from './styles';
import i18n from 'i18n';
import Title from 'shared/title';
import { useQuery } from '@apollo/client';
import { GET_SPECIALTIES } from 'graphql/queries/specialties/get-specialties';

const SearchDoctor = (props: PropsWithChildren<any>) => {
	const { data } = useQuery(GET_SPECIALTIES);

	return (
		<Container>
			<Title>{i18n.t('searchDr.title')}</Title>
		</Container>
	);
};

export default SearchDoctor;
