import { PropsWithChildren, useEffect } from 'react';
import { Container } from './styles';
import i18n from 'i18n';
import Title from 'shared/title';
import { useQuery } from '@apollo/client';
import { GET_SPECIALTIES } from 'graphql/queries/specialties/get-specialties';
import { DropdownSelect } from 'element/dropdown-select';
import { Dropdown } from 'components/dropdown';
import { DropdownItem } from 'components/dropdown/dropdown-types';

const SearchDoctor = (props: PropsWithChildren<any>) => {
	// const { data } = useQuery(GET_SPECIALTIES);

	const testData: DropdownItem<string>[] = [
		{
			label: 'parent 1',
			value: [
				{ label: 'child 1.1', value: '1' },
				{ label: 'child 1.2', value: '2' }
			]
		},
		{
			label: 'parent 2',
			value: [
				{ label: 'child 2.1', value: '1' },
				{ label: 'child 2.2', value: '2' }
			]
		}
	];

	return (
		<Container>
			<Title>{i18n.t('searchDr.title')}</Title>
			<DropdownSelect />
			<Dropdown
				dropdownItems={testData}
				placeholderI18n="searchDr.inputSpecility"
			/>
		</Container>
	);
};

export default SearchDoctor;
