import CalendarIcon from 'assets/icon/calendar_icon/CalendarIcon';
import { BoxNotify } from 'components/box-notify';
import { Dropdown } from 'components/dropdown';
import { DropdownItem } from 'components/dropdown/dropdown-types';
import { useBus } from 'context/event-bus';
import i18n from 'i18n';
import Title from 'shared/title';
import { Container, FilterButton, FilterButtonTitle } from './styles';

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

const SearchDoctor = () => {
	const bus = useBus();

	const handleDateFilterClick = () => {
		bus.emit('showHeaderNavControl',
			() => <FilterButtonTitle><CalendarIcon/> {i18n.t('general.date')}</FilterButtonTitle>);
	}

	return (
		<Container>
			<Title>{i18n.t('searchDr.title')}</Title>
			<Dropdown
				dropdownItems={testData}
				placeholderI18n="searchDr.inputSpecility"
			/>
			<FilterButton onClick={() => handleDateFilterClick()}>
				<FilterButtonTitle>
					<CalendarIcon/>
					{i18n.t('general.date')}
				</FilterButtonTitle>
			</FilterButton>
			<BoxNotify
				title={i18n.t('searchDr.titleHelp')}
				subTitle={i18n.t('searchDr.infoHelp')}
				link="/"
			/>
		</Container>
	);
};

export default SearchDoctor;
