import ArrowRightIcon from 'assets/icon/arrowRight_icon/ArrowRightIcon';
import Search from 'assets/icon/search_icon/SearchIcon';
import i18n from 'i18n';
import { Fragment, useState } from 'react';
import { Input } from 'shared/input';
import { Icon } from 'shared/input-icon';
import {
	ContainerInput,
	EndIcon,
	InputSearch,
	StartIcon,
	WrapperDrowndown
} from './style';

export const DropdownSelect = ({}) => {
	const [searched, setSearched] = useState<string>('');

	return (
		<Fragment>
			<ContainerInput>
				<WrapperDrowndown
					value={searched}
					placeholder={i18n.t('searchDr.inputSpecility')}
				>
					<StartIcon>
						<Search />
					</StartIcon>
					<InputSearch
						aria-label={i18n.t('searchDr.inputSpecility')}
						value={searched}
						onChange={e => setSearched(e.target.value)}
						name="specialty"
					/>
				</WrapperDrowndown>
				<EndIcon>
					<ArrowRightIcon />
				</EndIcon>
			</ContainerInput>
		</Fragment>
	);
};
