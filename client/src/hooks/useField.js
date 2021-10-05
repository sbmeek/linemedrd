import { useState } from 'react';

export function useField(props) {
	const [values, setValues] = useState({
		email: '',
		pwd: ''
	});

	const onChange = e => {
		const {
			target: { name, value }
		} = e;
		setValues({ ...values, [name]: value });
	};

	return { values, onChange };
}
