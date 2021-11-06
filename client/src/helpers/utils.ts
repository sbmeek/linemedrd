type arrJsonType = {
	[key: string]: any;
};

export const inputEmailValidation = (email: string): boolean => {
	const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return !reg.test(email) ? false : true;
};

export const inputValidation = (input: string): boolean => {
	return input.length === 0 ? false : true;
};

export const inputNumberValidation = (input: string & number): boolean => {
	return isNaN(input) ? false : inputValidation(input);
};

export const validateForm = (form: arrJsonType): boolean => {
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
