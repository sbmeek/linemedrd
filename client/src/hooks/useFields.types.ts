import { ValueNameType } from 'helpers/validators.types';

export type FieldsType = {
	[key: string]: {
		value: string;
		error?: string;
		validations?: ((valueNameType: ValueNameType) => string | false)[];
	};
};

export type EventElements = HTMLInputElement | HTMLTextAreaElement;
