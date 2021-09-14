import { useTranslation } from 'react-i18next';

export const Translate = () => {
	const { t } = useTranslation();
	return t;
};
