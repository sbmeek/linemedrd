import ValidationSignup from '@/components/formSignup/ValidationSignup';
import { ContentInput, InputWrapper, Wrapper } from '@/shared/Input/Input';

export const useFormSignup = ({ name, label, placeholder }) => {
	// console.log(username);

	const customInput = {
		value: '',
		content: placeholder
	};

	const Input = register => (
		<ContentInput>
			<label htmlFor={'signup-' + name}>{label}</label>
			<Wrapper>
				<InputWrapper
					ref={register(ValidationSignup[name])}
					name={name}
					id={'signup-' + name}
					aria-label={label}
					onChange={e => (customInput.value = e.target.value)}
					value={customInput.value}
				/>
			</Wrapper>
		</ContentInput>
	);

	const { value } = inputInf;

	return [Input, value];
};
