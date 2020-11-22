import styled from 'styled-components';

export default styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-direction: column;
	${(props) => props.customStyles}
`;

export const FormTitle = styled.h2`
	text-transform: uppercase;
	color: var(--lmed-green-02);
	font-family: 'NunitoExtraBold' !important;
	font-size: 30px;
	text-align: center;
`;
