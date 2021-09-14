import { useForm } from 'react-hook-form';

const ValidationSignup = () => {
	const { register, watch } = useForm();

	return {
		username: {
			required: 'error message',
			maxLength: {
				value: 30,
				message: 'error message max'
			},
			minLength: {
				value: 10,
				message: 'error message min'
			}
		},
		password: {
			...register('userPassword', {
				required: 'error message',
				maxLength: {
					value: 30,
					message: 'error message max'
				},
				minLength: {
					value: 10,
					message: 'error message min'
				}
			}),
			type: 'text',
			value: watch('userName'),
			content: 'Ingresar username'
		}
	};
};

export default ValidationSignup;
