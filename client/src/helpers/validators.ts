import i18n from 'i18n';
import { ValueNameType } from './validators.types';

export const emailValid = ({ value }: ValueNameType) => {
	const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return !reg.test(value) && i18n.t('errors.incorrectEmail');
};

export const inputEmpty = ({ value, name }: ValueNameType) => {
	return value.length === 0 && i18n.t(`errors.required.${name}`);
};

export const inputNumberValidation = ({ value }: ValueNameType) => {
	return isNaN(+value) && i18n.t('errors.incorrectNumber');
};
