import { ValueNameType } from 'helpers/validators-types';
import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { EventElements, FieldsType, validater } from './useFields-types';

export const useFields = <T extends FieldsType>(fields: T) => {
	type FieldsKeys = keyof typeof fields;
	type KeyWithString = { [key in FieldsKeys]: string };
	const [values, setValues] = useState({} as KeyWithString);
	const [errors, setErrors] = useState({} as KeyWithString);

	useEffect(() => {
		const fieldsValues = Object.entries(fields).reduce(
			(result, [key, field]) => {
				result[key as FieldsKeys] = field.value;
				return result;
			},
			{} as KeyWithString
		);
		setValues(fieldsValues);
	}, []);

	const handleChange = (evt: ChangeEvent<EventElements>) => {
		const { name, value } = evt.target;
		setValues({ ...values, [name]: value });
	};

	const handleChangeCheckBox = (
		evt: ChangeEvent<EventElements & { checked: boolean }>
	) => {
		const { name, checked } = evt.target;
		setValues({ ...values, [name]: checked });

		const value = values[name];
		handleValidate(fields[name].validations, { value, name });
	};

	const handleBlur = (evt: FocusEvent<EventElements>) => {
		const { name, value } = evt.target;
		handleValidate(fields[name].validations, { value, name });
	};

	const handleValidate = (
		validations: validater = {},
		{ name, value }: ValueNameType
	) => {
		const validate = (validations?.validation || []).some(validate => {
			const errorMsg = validate({ name, value });
			setErrors(prevErrors => ({
				...prevErrors,
				[name as FieldsKeys]: errorMsg
			}));
			return !!errorMsg;
		});

		if (validate) return;

		return (validations?.customValidation || []).some(validate => {
			const errorMsgCustom = validate(values);

			setErrors(prevErrors => ({
				...prevErrors,
				[name as FieldsKeys]: errorMsgCustom
			}));

			return !!errorMsgCustom;
		});
	};

	const reset = () => {
		setValues({} as KeyWithString);
	};

	return {
		values,
		errors,
		reset,
		handleChange,
		handleChangeCheckBox,
		handleBlur
	};
};
