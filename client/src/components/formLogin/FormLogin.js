import Link, { ContentLink } from '@/shared/link/Link';
import Submit from '@/shared/submit/Submit';
import { Input } from './FormLogin.styles';
import { useTranslation } from 'react-i18next';

const FormLogin = () => {
	const { t } = useTranslation();
	const align = {
		left: true
	};

	return (
		<form>
			<div>
				<Input
					type="text"
					name="name"
					placeholder={t('forms.formLogin.inputEmail.placeholder')}
					aria-label={t('forms.formLogin.inputEmail.areaLabel')}
					aria-required="true"
					required
				/>
			</div>
			<div>
				<Input
					type="password"
					name="password"
					placeholder={t('forms.formLogin.inputEmail.placeholder')}
					aria-label={t('forms.formLogin.inputEmail.placeholder')}
					aria-required="true"
					required
				/>
			</div>
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
