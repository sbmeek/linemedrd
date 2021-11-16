import { Fragment, PropsWithChildren } from 'react';

import i18n from 'i18n';

import Title from 'shared/title/Title';
import { ContainerSearchDr } from './searchDr.style';
import {
	ContentSelect,
	WraperSelect,
	InputSelect,
	ContentIconSelect
} from 'shared/inputSelect/inputSelect';
import ArrowRightIcon from '../../assets/icon/arrowRight_icon/ArrowRightIcon';
import Search from 'assets/icon/search_icon/SearchIcon';

const searchDr = (props: PropsWithChildren<any>) => {
	return (
		<Fragment>
			<ContainerSearchDr>
				<Title>{i18n.t('searchDr.title')}</Title>
				<form>
					<label htmlFor="browser">Choose your browser from the list:</label>
					<ContentSelect>
						<WraperSelect>
							<Search />
							<InputSelect
								name="cars"
								id="cars"
								placeholder="Buscar Especialidad"
							>
								<optgroup label="Swedish Cars">
									<option value="volvo">Volvo</option>
									<option value="saab">Saab</option>
								</optgroup>
								<optgroup label="German Cars">
									<option value="mercedes">Mercedes</option>
									<option value="audi">Audi</option>
								</optgroup>
							</InputSelect>
							<ContentIconSelect>
								<ArrowRightIcon />
							</ContentIconSelect>
						</WraperSelect>
					</ContentSelect>

					{/* <input list="browsers" name="browser" id="browser" />
					<datalist id="browsers">
						<option value="Edge" />
						<option value="Firefox" />
						<option value="Chrome" />
						<option value="Opera" />
						<option value="Safari" />
					</datalist>
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
