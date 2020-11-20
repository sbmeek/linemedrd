import styled, { keyframes } from 'styled-components';
import TextField from '@material-ui/core/TextField';

const formHelperTextAnim = keyframes`
	0% {
		opacity: 0;
		transform: scaleY(0);
	}
	80%{
		transform: scaleY(1);
	}
	100% {
		opacity: 1;
	}
`;

export default styled(TextField)`
	margin-top: 2px !important;

	& .MuiInputLabel-formControl {
		color: var(--lmed-green-00);
		font-family: NunitoBold;
	}

	& .MuiInputBase-input {
		color: var(--lmed-black-00);
		padding: 6px 0 5px;
	}

	& .MuiInputLabel-shrink {
		transform: translate(0, 6.5px) scale(0.75);
	}

	& .MuiFormLabel-root.Mui-error {
		color: #ff1100;
	}

	& .MuiInput-underline:before,
	& .MuiInput-underline:after {
		border-bottom: 1px solid var(--lmed-green-00);
	}

	& .MuiInput-underline:hover:not(.Mui-disabled):before {
		border-bottom: 2px solid var(--lmed-green-00);
	}

	& .MuiFormHelperText-root {
		animation: ${formHelperTextAnim} 220ms;
	}
`;
