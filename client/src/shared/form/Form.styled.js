import styled from 'styled-components';

export default styled.form`
	display: grid;
	place-items: center;

	& > * {
		margin: 2.876px 0 !important;
	}
`;

export const FormTitle = styled.h2`
	text-transform: uppercase;
	color: var(--lmed-green-02);
	font-family: 'NunitoExtraBold';
`;
