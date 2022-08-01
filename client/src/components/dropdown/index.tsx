import i18n from 'i18n';
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { DropdownItem, DropdownItemValueType } from './dropdown-types';
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

type DropdownPropsType<T> = {
	dropdownItems: DropdownItem<T>[];
	placeholderI18n: string;
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
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
				<GroupTitle>{item.label}</GroupTitle>
				<DropdownOption style={{ marginLeft: '10px' }}>
					{item.value.map((childItem: DropdownItem<T>) => (
						<DropdownItemOrGroup<T>
							key={childItem.label}
							dropdownItem={childItem}
						/>
					))}
				</DropdownOption>
			</div>
		);
	}

	return <GroupData>{item.label}</GroupData>;
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
				{endIcon && <EndIcon visible={overlayVisibility}>{endIcon}</EndIcon>}
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
						<DropdownItemOrGroup<T> key={item.label} dropdownItem={item} />
					))}
			</Overlay>
		</ContainerInput>
	);
};
