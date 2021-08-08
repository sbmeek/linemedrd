import { useState } from 'react';

import Link, { ContentLink } from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import ContentInput from '@/shared/inputForm/InputForm';
import ContentInputIcon, { Icon } from '@/shared/inputIconForm/InputIconForm';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const FormLogin = () => {
	const [passwordIcon, setPasswordIcon] = useState(true);
	const { t } = useTranslation();
	const align = {
		left: true
	};

	return (
		<form>
			<ContentInput {...{ login: true }}>
				<input
					type="text"
					name="name"
					placeholder={t('forms.formLogin.inputEmail.placeholder')}
					aria-label={t('forms.formLogin.inputEmail.areaLabel')}
					aria-required="true"
					required
				/>
			</ContentInput>
			<ContentInputIcon {...{ login: true }}>
				<input
					type={passwordIcon ? 'password' : 'text'}
					name="password"
					placeholder={t('forms.formLogin.inputEmail.placeholder')}
					aria-label={t('forms.formLogin.inputEmail.placeholder')}
					aria-required="true"
					required
				/>
				<Icon
					onClick={() => setPasswordIcon(!passwordIcon)}
					{...{ label: true }}
				>
					{passwordIcon ? <IoIosEye /> : <IoIosEyeOff />}
				</Icon>
			</ContentInputIcon>
			<ContentLink {...align}>
				<Link to="#?">{t('forms.formLogin.forgetPassword')}</Link>
			</ContentLink>
			<Submit type="submit" aria-label={t('forms.formLogin.startSession')}>
				{t('forms.formLogin.startSession')}
			</Submit>
		</form>
	);
};

export default FormLogin;
