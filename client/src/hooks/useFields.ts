import { ChangeEvent, useState } from 'react';

type FieldValueType = string | number | null;
type ChangeEventElements = HTMLInputElement | HTMLTextAreaElement;

export const useFields = <T extends { [key: string]: FieldValueType }>(
	fields: T
) => {
	const [values, setValues] = useState(fields);

	const handleChange = (e: ChangeEvent<ChangeEventElements>) => {
		const {
			target: { name, value }
		} = e;
		setValues({ ...values, [name]: value });
	};

	return { values, handleChange };
};
