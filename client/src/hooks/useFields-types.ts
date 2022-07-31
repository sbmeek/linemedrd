import { ValueNameType, ValueNameTypeCustom } from 'helpers/validators-types';

export interface validater {
	validation?: Array<(valueNameType: ValueNameType) => string | false>;
	customValidation?: Array<
		(valueNameType: ValueNameTypeCustom) => string | false
	>;
}

export type FieldsType = {
	[key: string]: {
		value: string;
		error?: string;
		validations?: validater;
	};
};

export type EventElements = HTMLInputElement | HTMLTextAreaElement;
