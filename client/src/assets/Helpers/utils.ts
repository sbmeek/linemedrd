export const inputEmailValidation = (email: string) => {
	const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return !reg.test(email) ? false : true;
};

export const inputValidation = (input: string) => {
	return input.length === 0 ? false : true;
};

export const inputNumberValidation = (input: any) => {
	return isNaN(input) ? false : inputValidation(input);
};

export const validateForm = (form: any) => {
	let isValid = true;
	for (let key in form) {
		if (form[key].validation) {
			if (!form[key].validation(form[key].value)) {
				isValid = false;
				break;
			}
		}
	}
	return isValid;
};
