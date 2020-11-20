import styled, { css } from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const Container = styled.div`
	display: flex;
	width: 100%;
`;

export const formCustomStyles = css`
	& {
		max-height: 92%;
	}
`;

export const FormInnerContainer = styled.div`
	display: grid;
	place-items: center;
	overflow-y: auto;
	width: 99%;
	padding: 0 20px;

	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background: var(--lmed-green-00);
		border-radius: 10px;
	}
	scrollbar-width: thin;
	scrollbar-color: var(--lmed-green-00) transparent;
`;

export const MedInsuranceField = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 8px;

	& > h3 {
		color: var(--lmed-green-00);
		margin-top: 3px;
		margin-bottom: 5px;
	}

	& > div {
		width: 96%;
		margin-left: 4%;
	}

	& .MuiSelect-root {
		color: var(--lmed-black-00);
	}

	& .MuiInput-underline:before,
	& .MuiInput-underline:after {
		border-bottom: 1px solid var(--lmed-green-00);
	}
`;

export const TermsNConditionsCB = styled(FormControlLabel)`
	justify-content: flex-start;
	width: 100%;
`;
