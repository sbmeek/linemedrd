import i18n from 'i18n';
import Title from 'shared/title';
import { useQuery } from '@apollo/client';
// import { GET_SPECIALTIES } from 'graphql/queries/specialties/get-specialties';
import { Dropdown } from 'components/dropdown';
import { DropdownItem } from 'components/dropdown/dropdown-types';
import { Container } from './styles';
import { BoxNotify } from 'components/box-notify';
import Search from 'assets/icon/search_icon/SearchIcon';
import ArrowRightIcon from 'assets/icon/arrowRight_icon/ArrowRightIcon';
import { PropsWithChildren } from 'react';
import { ButtonNormal } from 'shared/button-normal';

interface ISearchDoctorForm {
	setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchDoctorForm = <T extends PropsWithChildren<ISearchDoctorForm>>({
	setIsSearch
}: T) => {
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
		},
		{
			label: 'parent 3',
			value: 'Hola'
		}
	];

	return (
		<Container>
			<Title>{i18n.t('searchDr.title')}</Title>
			<Dropdown
				dropdownItems={testData}
				placeholderI18n="searchDr.inputSpecility"
				startIcon={<Search />}
				endIcon={<ArrowRightIcon />}
				onChange={value => console.log(value)}
			/>

			<ButtonNormal onClick={() => setIsSearch(prev => !prev)}>
				Buscar
			</ButtonNormal>

			<BoxNotify
				title={i18n.t('searchDr.titleHelp')}
				subTitle={i18n.t('searchDr.infoHelp')}
				link="/"
			/>
		</Container>
	);
};

export default SearchDoctorForm;
