import { ContentLink, Link } from 'shared/link/Link';
import Title from 'shared/title/Title';
import { Container } from 'shared/container/Container';
import Submit from 'shared/submit/Submit';
import { appName } from 'constants/index';
import { ContentInput, Wrapper, Input, InputHelper } from 'shared/input/Input';
import i18n from 'i18n';
import { useFields } from 'hooks/useFields';
import {
	emailValid,
	inputCheckboxPolityValidation,
	inputEmpty,
	inputPasswordValidation,
	validationAllInputs
} from 'helpers/validators';
import { CheckboxContainer } from 'shared/checkbox/checkbox';
import ExclamationIcon from 'assets/icon/exclamation_icon/ExclamationIcon';
import { FormEvent, useState } from 'react';
import { Icon, InputWithIcon } from 'shared/inputIcon/InputIcon';
import EyeIcon from 'assets/icon/eye_icon/EyeIcon';
import EyeCloseIcon from 'assets/icon/eyeClose_icon/EyeCloseIcon';
import { ContentInputSignup } from './Signup.styles';
import { RouteComponentProps, withRouter } from 'react-router';

const Signup = <T extends RouteComponentProps>({ history }: T) => {
	const [showPwd, setShowPwd] = useState<boolean>(true);

	const { values, errors, handleChange, handleChangeCheckBox, handleBlur } =
		useFields({
			username: {
				value: '',
				validations: [inputEmpty]
			},
			email: {
				value: '',
				validations: [inputEmpty, emailValid]
			},
			pwd: {
				value: '',
				validations: [inputEmpty, inputPasswordValidation]
			},
			polity: {
				value: 'true',
				validations: [inputCheckboxPolityValidation]
			}
		});

	const handleSubmit = (e: FormEvent<HTMLElement>): void => {
		e.preventDefault();

		if (validationAllInputs(errors)) {
			//TODO: Any: se debe presentar una ventena emergente de error
			return;
		}

		console.log(values);
		//history.push("/login");
	};

	return (
		<Container>
			<Title>{i18n.t('Register.title')}</Title>

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
							value={values.username}
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
							value={values.email}
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
							value={values.pwd}
							name="pwd"
							onChange={handleChange}
							onBlur={handleBlur}
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
						Declaro que soy mayor de edad y acepto el{' '}
						<Link to="?#">Aviso de privacidad</Link> y los{' '}
						<Link to="?#">Términos y condiciones</Link> de uso de {appName}.
					</span>
				</CheckboxContainer>

				<InputHelper hide={!!values.polity}>
					<ExclamationIcon />
					<span>{errors.polity}</span>
				</InputHelper>

				<Submit type="submit">Regístrate</Submit>
			</form>

			<ContentLink>
				¿Ya tienes una cuenta? <Link to="/Login">Iniciar Sesión</Link>
			</ContentLink>
		</Container>
	);
};

export default withRouter(Signup);
