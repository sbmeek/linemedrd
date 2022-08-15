import ExclamationIcon from 'assets/icon/exclamation_icon/ExclamationIcon';
import EyeCloseIcon from 'assets/icon/eyeClose_icon/EyeCloseIcon';
import EyeIcon from 'assets/icon/eye_icon/EyeIcon';
import ModalContainer from 'components/modal-container';
import {
	inputEmpty,
	passwordConfirmValid,
	someFieldInvalid
} from 'helpers/validators';
import { useFields } from 'hooks/useFields';
import i18n from 'i18n';
import { ContentInputSignup } from 'pages/signup/styles';
import { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentInput, Input, InputHelper, Wrapper } from 'shared/input';
import { Icon } from 'shared/input-icon';
import Submit from 'shared/submit';

const FieldValues = {
	pwd: {
		value: '',
		validations: {
			validation: [inputEmpty]
		}
	},
	pwdConfirmation: {
		value: '',
		validations: {
			validation: [inputEmpty],
			customValidation: [passwordConfirmValid]
		}
	}
};

const ChangePassword = () => {
	let history = useHistory();
	const [showPwd, setShowPwd] = useState<boolean>(false);

	//TODO: Implementar funcionalidad de confirmación de cambio de contraseña,
	//esto esta para probar diseño
	const [success, setSuccess] = useState<boolean>(true);

	const { values, errors, reset, handleChange, handleBlur } =
		useFields(FieldValues);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSuccess(false);
	};

	return (
		<Fragment>
			<ModalContainer
				onClose={() => history.replace('/home')}
				show={true}
				textIcon={success ? 'Cancelar' : 'Cerrar'}
				text={
					success
						? i18n.t('recoveryAccount.descriptionChangePassword')
						: i18n.t('recoveryAccount.descriptionSuccessChangePassword')
				}
				title={
					success
						? i18n.t('recoveryAccount.titleChangePassword')
						: i18n.t('recoveryAccount.titleSuccessChangePassword')
				}
			>
				{success && (
					<form onSubmit={handleSubmit}>
						<ContentInputSignup>
							<label htmlFor="pwd">
								{i18n.t('recoveryAccount.label.inputPassword')}
							</label>
							<Wrapper
								value={values.pwd}
								error={errors.pwd}
								placeholder={i18n.t(
									'recoveryAccount.inputsPlaceholder.inputPassword'
								)}
							>
								<Input
									aria-label={i18n.t(
										'recoveryAccount.inputsPlaceholder.inputPassword'
									)}
									type={showPwd ? 'password' : 'text'}
									autoComplete="off"
									value={values.pwd || ''}
									aria-required="true"
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

						<ContentInput>
							<Wrapper
								value={values?.pwdConfirmation}
								error={errors?.pwdConfirmation}
								placeholder={i18n.t(
									'recoveryAccount.inputsPlaceholder.inputNewPassword'
								)}
							>
								<Input
									aria-label={i18n.t(
										'recoveryAccount.inputsPlaceholder.inputNewPassword'
									)}
									type={'password'}
									autoComplete="new-password"
									value={values.pwdConfirmation || ''}
									name="pwdConfirmation"
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Wrapper>
							<InputHelper hide={!errors.pwdConfirmation}>
								<ExclamationIcon />
								<span>{errors.pwdConfirmation}</span>
							</InputHelper>
						</ContentInput>

						<Submit
							type="submit"
							disabled={
								someFieldInvalid(errors) ||
								(!!!values.pwd && !!!values.pwdConfirmation)
							}
						>
							{i18n.t('recoveryAccount.titleChangePassword')}
						</Submit>
					</form>
				)}
			</ModalContainer>
		</Fragment>
	);
};

export default ChangePassword;
