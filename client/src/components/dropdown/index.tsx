import SearchIcon from 'assets/icon/search_icon/SearchIcon';
import i18n from 'i18n';
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { ContentInput, Wrapper } from 'shared/input';
import { Icon, InputWithIcon } from 'shared/input-icon';
import { DropdownItem, DropdownItemValueType } from './dropdown-types';
import { DropdownOption, Overlay } from './styles';

type DropdownPropsType<T> = {
	dropdownItems: DropdownItem<T>[];
	placeholderI18n: string;
};

export const Dropdown = <T extends DropdownItemValueType>({
	dropdownItems,
	placeholderI18n
}: DropdownPropsType<T>) => {
	const [searchValue, setSearchValue] = useState('');
	const [overlayVisibility, setOverlayVisibility] = useState(false);
	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (overlayVisibility) {
			searchInputRef.current?.focus();
		}
	}, [overlayVisibility]);

	const handleSearchValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const target = evt.target as HTMLInputElement;
		setSearchValue(target.value);
	};

	const handleOverlayMouseDown = (evt: MouseEvent<HTMLInputElement>) => {
		evt.preventDefault();
	};

	return (
		<>
			<ContentInput>
				<Wrapper
					value={searchValue}
					placeholder={i18n.t(placeholderI18n)}
					onMouseDown={() => setOverlayVisibility(!overlayVisibility)}
				>
					<Icon>
						<SearchIcon />
					</Icon>
					<InputWithIcon
						ref={searchInputRef}
						aria-label={i18n.t(placeholderI18n)}
						value={searchValue}
						disabled={!overlayVisibility}
						onChange={handleSearchValueChange}
						onBlur={() => setOverlayVisibility(false)}
						type="text"
						autoComplete="false"
					/>
					{/* <Icon><ArrowRightIcon/></Icon> */}
				</Wrapper>
				<Overlay
					visible={overlayVisibility}
					onMouseDown={handleOverlayMouseDown}
				>
					{dropdownItems.map((item: DropdownItem<T>, idx: number) => (
						<DropdownItemOrGroup<T> key={idx} dropdownItem={item} />
					))}
				</Overlay>
			</ContentInput>
		</>
	);
};

type DropdownItemOrGroupPropsType<T> = {
	dropdownItem: DropdownItem<T>;
};

const DropdownItemOrGroup = <T extends DropdownItemValueType>({
	dropdownItem: item
}: DropdownItemOrGroupPropsType<T>) => {
	if (Array.isArray(item.value)) {
		return (
			<div>
				<div>{item.label}</div>
				<DropdownOption style={{ marginLeft: '10px' }}>
					{item.value.map((childItem: DropdownItem<T>, idx: number) => (
						<DropdownItemOrGroup<T> key={idx} dropdownItem={childItem} />
					))}
				</DropdownOption>
			</div>
		);
	}

	return <div>{item.label}</div>;
};
