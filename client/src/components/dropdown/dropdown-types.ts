export interface DropdownItem<T> {
	label: string;
	value: T | DropdownItem<T>[];
}

export type DropdownItemValueType = string | number | object;
