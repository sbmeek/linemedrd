import { Fragment, PropsWithChildren } from 'react';

import i18n from 'i18n';

import Title from 'shared/title/Title';
import { ContainerSearchDr } from './searchDr.style';

const searchDr = (props: PropsWithChildren<any>) => {
	return (
		<Fragment>
			<ContainerSearchDr>
				<Title>{i18n.t('searchDr.title')}</Title>
				<form>
					<input list="browsers" name="browser" id="browser" />
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
					</datalist>
					<button>No recuerdo</button>
					<button>Filtro</button>

					<input type="submit">submit</input>
				</form>
			</ContainerSearchDr>
		</Fragment>
	);
};

export default searchDr;
