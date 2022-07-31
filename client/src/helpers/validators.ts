import i18n from 'i18n';
import { ValueNameType, ValueNameTypeCustom } from './validators-types';

export const emailValid = ({ value }: ValueNameType) => {
	const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	return !reg.test(value) && i18n.t('errors.incorrectEmail');
};

export const passwordConfirmValid = (inputs: ValueNameTypeCustom) => {
	const { pwd, pwdConfirmation } = inputs;
	return pwd !== pwdConfirmation && i18n.t('errors.passwordNotMatch');
};

export const inputEmpty = ({ value, name }: ValueNameType) =>
	value.length === 0 && i18n.t(`errors.required.${name}`);

export const inputNumberValidation = ({ value }: ValueNameType) =>
	Number.isNaN(+value) && i18n.t('errors.incorrectNumber');

export const inputPasswordValidation = ({ value, name }: ValueNameType) =>
	value.length < 6 && i18n.t(`errors.required.${name}`);

export const dateValidation = ({ value }: ValueNameType) => {
	const date = new Date(value);
	const currentDate = new Date();
	return date < currentDate && i18n.t('errors.incorrectDate');
};

export const inputCheckboxPolityValidation = ({ value, name }: ValueNameType) =>
	!!value && i18n.t(`errors.required.${name}`);

export const someFieldInvalid = (errors: { [key: string]: string }) =>
	Object.values(errors).reduce(
		(accumulator, values) => accumulator || !!values,
		false as boolean
	);
