import { useState } from 'react';

/** @param {{ type: string, name: string }} params */
export const useField = ({ type, name }) => {
	const [fieldValue, setFieldValue] = useState('');

	const onChange = ({ target }) => {
		setFieldValue(target.value);
	};

	return { type, name, fieldValue, onChange };
};
