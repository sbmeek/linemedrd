import { PropsWithChildren } from 'react';
import i18n from 'i18n';
import Title from 'shared/title/Title';
import { ContainerSearchDr } from './searchDr.style';

import ArrowRightIcon from '../../assets/icon/arrowRight_icon/ArrowRightIcon';
import Search from '../../assets/icon/search_icon/SearchIcon';

import {
	ContentDatalist,
	InputDataList,
	WrapperDatalist,
	Dropdown,
	IconListData,
	IconIdentify
} from 'shared/inputDatalist/inputDatalist';

import { useFields } from 'hooks/useFields';

const defaultUseField = {
	speciality: {
		value: ''
	},
	service: {
		value: ''
	},
	ubication: {
		value: ''
	}
};

const searchDr = (props: PropsWithChildren<any>) => {
	const { values, errors, handleChange } = useFields(defaultUseField);

	return (
		<ContainerSearchDr>
			<Title>{i18n.t('searchDr.title')}</Title>
			<form>
				<ContentDatalist>
					<WrapperDatalist
						value={values.speciality}
						error={errors.speciality}
						placeholder={i18n.t('searchDr.inputSpecility')}
					>
						<IconIdentify>
							<Search />
						</IconIdentify>
						<InputDataList
							role="combobox"
							list=""
							name="speciality"
							aria-label={i18n.t('searchDr.inputSpecility')}
							value={values.speciality}
							onChange={handleChange}
						/>
						<Dropdown id="speciality">
							<option value="Brave">GroupA</option>
							<option value="Firefox"></option>
							<option value="Safari"></option>
							<option className="groupOpt">GroupB</option>
							<option value="Internet Explorer"></option>
							<option value="Microsoft Edge"></option>
							<option value="Edge" />
						</Dropdown>
						<IconListData>
							<ArrowRightIcon />
						</IconListData>
					</WrapperDatalist>
				</ContentDatalist>
				<button>No recuerdo</button>
				<button>Filtro</button>

				<button type="submit">Submit</button>
			</form>
		</ContainerSearchDr>
	);
};

export default searchDr;
