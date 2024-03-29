import { FormEvent, useEffect, useState } from 'react';

import { CheckboxContainer } from 'shared/checkbox';
import { Input, InputHelper, Wrapper } from 'shared/input';
import { Icon, InputWithIcon } from 'shared/input-icon';
import { ContentLink, Link } from 'shared/link';
import { SharedContainer } from 'shared/shared-container';
import Submit from 'shared/submit';
import Title from 'shared/title';

import { appName } from 'constants/index';
import {
	emailValid,
	inputCheckboxPolityValidation,
	inputEmpty,
	inputPasswordValidation,
	someFieldInvalid
} from 'helpers/validators';
import { useFields } from 'hooks/useFields';
import i18n from 'i18n';

import ExclamationIcon from 'assets/icon/exclamation_icon/ExclamationIcon';
import EyeCloseIcon from 'assets/icon/eyeClose_icon/EyeCloseIcon';
import EyeIcon from 'assets/icon/eye_icon/EyeIcon';
import { ContentInputSignup } from './styles';
import { useMutation } from '@apollo/client';

import { CREATE_USER } from 'graphql/user/mutation';
import { MutationCreateUserArgs, UserData } from 'graphql/types';

const defaultFieldValues = {
	username: {
		value: '',
		validations: {
			validation: [inputEmpty]
		}
	},
	email: {
		value: '',
		validations: {
			validation: [inputEmpty, emailValid]
		}
	},
	pwd: {
		value: '',
		validations: {
			validation: [inputEmpty, inputPasswordValidation]
		}
	},
	polity: {
		value: 'true',
		validations: {
			validation: [inputCheckboxPolityValidation]
		}
	}
};

const Signup = () => {
	const [showPwd, setShowPwd] = useState<boolean>(true);

	const {
		values,
		errors,
		handleChange,
		handleChangeCheckBox,
		handleBlur,
		reset
	} = useFields(defaultFieldValues);

	const [createUser, { data, loading }] = useMutation<
		UserData,
		MutationCreateUserArgs
	>(CREATE_USER, {
		onError: errors => {
			console.error(errors);
		}
	});

	const handleSubmit = async (e: FormEvent<HTMLElement>): Promise<void> => {
		e.preventDefault();

		const anyInputEmpty = Object.values(values).some(
			(input: string) => input === ''
		);

		if (anyInputEmpty) {
			return;
		}

		await createUser({
			variables: {
				origin: window.location.origin,
				payload: {
					username: values.username,
					password: values.username,
					email: values.email
				}
			}
		});
	};

	useEffect(() => {
		if (data) {
			console.log(data);
			reset();
		}
	}, [data]);

	return (
		<SharedContainer>
			<Title>{i18n.t('Register.title')}</Title>
			{loading && <h4>loading...</h4>}
			<form onSubmit={handleSubmit}>
				<ContentInputSignup>
					<label htmlFor="username">
						{i18n.t('formRegister.label.inputName')}
					</label>
					<Wrapper
						value={values.username}
						error={errors.username}
						placeholder={i18n.t('formRegister.inputsPlaceholder.inputName')}
					>
						<Input
							aria-label={i18n.t('formRegister.inputsPlaceholder.inputName')}
							value={values.username || ''}
							aria-required="true"
							name="username"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Wrapper>
					<InputHelper hide={!errors.username}>
						<ExclamationIcon />
						<span>{errors.username}</span>
					</InputHelper>
				</ContentInputSignup>

				<ContentInputSignup>
					<label htmlFor="email">
						{i18n.t('formRegister.label.inputEmail')}
					</label>
					<Wrapper
						value={values.email}
						error={errors.email}
						placeholder={i18n.t('formRegister.inputsPlaceholder.inputEmail')}
					>
						<Input
							aria-label={i18n.t('formRegister.inputsPlaceholder.inputEmail')}
							value={values.email || ''}
							aria-required="true"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Wrapper>
					<InputHelper hide={!errors.email}>
						<ExclamationIcon />
						<span>{errors.email}</span>
					</InputHelper>
				</ContentInputSignup>

				<ContentInputSignup>
					<label htmlFor="pwd">
						{i18n.t('formRegister.label.inputPassword')}
					</label>
					<Wrapper
						value={values.pwd}
						error={errors.pwd}
						placeholder={i18n.t('formRegister.inputsPlaceholder.inputPassword')}
					>
						<InputWithIcon
							aria-label={i18n.t(
								'formRegister.inputsPlaceholder.inputPassword'
							)}
							type={showPwd ? 'password' : 'text'}
							value={values.pwd || ''}
							name="pwd"
							onChange={handleChange}
							onBlur={handleBlur}
							autoComplete="current-password"
						/>
						<Icon onClick={() => setShowPwd(prev => !prev)}>
							{showPwd ? <EyeIcon /> : <EyeCloseIcon />}
						</Icon>
					</Wrapper>
					<InputHelper hide={!errors.pwd}>
						<ExclamationIcon />
						<span>{errors.pwd}</span>
					</InputHelper>
				</ContentInputSignup>

				<CheckboxContainer htmlFor="polity" error={!!errors.polity}>
					<input
						type="checkbox"
						name="polity"
						id="polity"
						checked={!!values.polity}
						onChange={handleChangeCheckBox}
						onBlur={handleBlur}
					/>

					<span>
						Declaro que soy mayor de edad y acepto el
						<Link to="?#">Aviso de privacidad</Link>y los
						<Link to="?#">Términos y condiciones</Link>
						{`de uso de ${appName}.`}
					</span>
				</CheckboxContainer>

				<InputHelper hide={!!values.polity}>
					<ExclamationIcon />
					<span>{errors.polity}</span>
				</InputHelper>

				<Submit type="submit" disabled={someFieldInvalid(errors)}>
					Regístrate
				</Submit>
			</form>

			<ContentLink>
				¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
			</ContentLink>
		</SharedContainer>
	);
};

export default Signup;
