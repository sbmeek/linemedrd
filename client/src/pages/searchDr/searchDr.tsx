import { Fragment, PropsWithChildren } from 'react';

import i18n from 'i18n';

import Title from 'shared/title/Title';
import { ContainerSearchDr, WrapperDatalist } from './searchDr.style';
import {
	ContentSelect,
	WraperSelect,
	InputSelect,
	ContentIconSelect
} from 'shared/inputSelect/inputSelect';
import ArrowRightIcon from '../../assets/icon/arrowRight_icon/ArrowRightIcon';
import Search from 'assets/icon/search_icon/SearchIcon';
import { Wrapper } from 'shared/inputDatalist/inputDatalist';

const searchDr = (props: PropsWithChildren<any>) => {
	return (
		<Fragment>
			<ContainerSearchDr>
				<Title>{i18n.t('searchDr.title')}</Title>
				<form>
					<WrapperDatalist>
						<input list="browsers" name="browser" id="browser" />
						<datalist id="browsers">
							<option value="Brave">GroupA</option>
							<option value="Firefox"></option>
							<option value="Safari"></option>
							<option className="groupOpt">GroupB</option>
							<option value="Internet Explorer"></option>
							<option value="Microsoft Edge"></option>
							<option value="Edge" />
						</datalist>
					</WrapperDatalist>

					{/* 
					<input list="especility" name="especility" id="especility" />
					<datalist id="especility">
						<option value="Odontologo" />
						<option value="Cardiologo" />
					</datalist>
					<input list="servicio" name="servicio" id="servicio" />
					<datalist id="servicio">
						<option value="Nose" />
						<option value="Matar a yefri" />
						<option value="ESe culo de el que va hacer ese diseño" />
					</datalist> */}
					<button>No recuerdo</button>
					<button>Filtro</button>

					<button type="submit">Submit</button>
				</form>
			</ContainerSearchDr>
		</Fragment>
	);
};

export default searchDr;
