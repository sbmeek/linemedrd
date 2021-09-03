import { useState } from 'react';

export function useField({ name, type }) {
	const [fieldValue, setFieldValue] = useState('');

	const onChange = ({ target }) => {
		setFieldValue(target.value);
	};

	return { name, type, value: fieldValue, onChange };
}
