import i18n from 'i18n';
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { DropdownItem, DropdownItemValueType } from './dropdown-types';
import { CloseIcon } from 'assets/icon/close-icon/close-icon';
import {
	ContainerInput,
	DropdownOption,
	EndIcon,
	GroupData,
	GroupTitle,
	InputSearch,
	Overlay,
	StartIcon,
	WrapperDrowndown
} from './styles';
import Search from 'assets/icon/search_icon/SearchIcon';

type DropdownPropsType<T> = {
	dropdownItems: DropdownItem<T>[];
	placeholderI18n: string;
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
};

type DropdownItemOrGroupPropsType<T> = {
	dropdownItem: DropdownItem<T>;
	setSelected: React.Dispatch<React.SetStateAction<DropdownItem<T> | null>>;
};

const DropdownItemOrGroup = <T extends DropdownItemValueType>({
	dropdownItem: item,
	setSelected: setSelected
}: DropdownItemOrGroupPropsType<T>) => {
	if (Array.isArray(item.value)) {
		return (
			<div>
				<GroupTitle>{item.label}</GroupTitle>
				<DropdownOption style={{ marginLeft: '10px' }}>
					{item.value.map((childItem: DropdownItem<T>) => (
						<DropdownItemOrGroup<T>
							key={childItem.label}
							dropdownItem={childItem}
							setSelected={setSelected}
						/>
					))}
				</DropdownOption>
			</div>
		);
	}
	return (
		<GroupData onMouseDown={() => setSelected(item)}>{item.label}</GroupData>
	);
};

export const Dropdown = <T extends DropdownItemValueType>({
	dropdownItems,
	placeholderI18n,
	startIcon,
	endIcon
}: DropdownPropsType<T>) => {
	const [searchValue, setSearchValue] = useState('');
	const [overlayVisibility, setOverlayVisibility] = useState(false);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const [selectedItem, setSelectedItem] = useState<DropdownItem<T> | null>(
		null
	);

	useEffect(() => {
		if (overlayVisibility) {
			searchInputRef.current?.focus();
		}
	}, [overlayVisibility]);

	const handleSearchValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
		const target = evt.target as HTMLInputElement;
		setSearchValue(target.value);
	};

	const handleCloseIconClick = () => {
		setOverlayVisibility(false);
		setSearchValue('');
	};

	const handleOverlayMouseDown = (evt: MouseEvent<HTMLInputElement>) => {
		evt.preventDefault();
		const target = evt.target as HTMLDivElement;
		setSearchValue(target.innerHTML);
		setOverlayVisibility(!overlayVisibility);
	};

	return (
		<ContainerInput>
			<WrapperDrowndown
				value={searchValue}
				placeholder={i18n.t(placeholderI18n)}
				onMouseDown={() => setOverlayVisibility(!overlayVisibility)}
			>
				{startIcon && <StartIcon>{startIcon}</StartIcon>}
				<InputSearch
					ref={searchInputRef}
					aria-label={i18n.t(placeholderI18n)}
					value={searchValue}
					disabled={!overlayVisibility}
					onChange={handleSearchValueChange}
					onBlur={() => setOverlayVisibility(false)}
					type="text"
					autoComplete="false"
				/>
				{/*TODO: Agregar el icono de clone y quitar el de search */}
				{endIcon && (
					<EndIcon onClick={handleCloseIconClick} visible={overlayVisibility}>
						{!searchValue ? endIcon : <CloseIcon />}
					</EndIcon>
				)}
			</WrapperDrowndown>
			<Overlay visible={overlayVisibility} onMouseDown={handleOverlayMouseDown}>
				{dropdownItems
					.filter((item: DropdownItem<T>) => {
						if (item.label.toLowerCase().includes(searchValue.toLowerCase())) {
							return true;
						} else if (Array.isArray(item.value)) {
							return item.value.some((valueSubGroup: DropdownItem<T>) =>
								valueSubGroup.label.includes(searchValue)
							);
						}
						return false;
					})
					.map((item: DropdownItem<T>) => (
						<DropdownItemOrGroup<T>
							key={item.label}
							dropdownItem={item}
							setSelected={setSelectedItem}
						/>
					))}
			</Overlay>
		</ContainerInput>
	);
};
