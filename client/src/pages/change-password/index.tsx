import ExclamationIcon from 'assets/icon/exclamation_icon/ExclamationIcon';
import ModalContainer from 'components/modal-container';
import { inputEmpty, someFieldInvalid } from 'helpers/validators';
import { useFields } from 'hooks/useFields';
import i18n from 'i18n';
import { ContentInputSignup } from 'pages/signup/styles';
import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentInput, Input, InputHelper, Wrapper } from 'shared/input';
import Submit from 'shared/submit';

const FieldValues = {
	pwd: {
		value: '',
		validations: [inputEmpty]
	},
	pwdConfirmation: {
		value: '',
		validations: [inputEmpty]
	}
};

const ChangePassword = () => {
	let history = useHistory();

	const handleCloseChangePassword = () => {
		history.push('/home');
	};

	const { values, errors, reset, handleChange, handleBlur } =
		useFields(FieldValues);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('handleSubmit');
	};

	return (
		<Fragment>
			<ModalContainer
				onClose={handleCloseChangePassword}
				show={true}
				text={i18n.t('recoveryAccount.descriptionChangePassword')}
				title={i18n.t('recoveryAccount.titleChangePassword')}
			>
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
								value={values.pwd || ''}
								aria-required="true"
								name="pwd"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
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
							placeholder={i18n.t('recoveryAccount.inputNewPassword')}
						>
							<Input
								aria-label={i18n.t('recoveryAccount.inputNewPassword')}
								value={values.pwdConfirmation || ''}
								name="pwdConfirmation"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Wrapper>
						<InputHelper hide={!errors?.pwdConfirmation}>
							<ExclamationIcon />
							<span>{errors?.pwdConfirmation}</span>
						</InputHelper>
					</ContentInput>

					<Submit type="submit" disabled={someFieldInvalid(errors)}>
						{i18n.t('recoveryAccount.titleChangePassword')}
					</Submit>
				</form>
			</ModalContainer>
		</Fragment>
	);
};

export default ChangePassword;
