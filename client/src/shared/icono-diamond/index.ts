import styled from '@emotion/styled';

export const Diamond = styled.div`
	width: 1rem;
	height: 1rem;
	background-color: ${props => props.theme.colors.green5};
	border-radius: 0.2rem;
	transform: rotate(45deg);
`;
