import styled, { Props } from '@emotion/styled';

export default styled.div<Props>`
	min-height: 55vh;
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
	color: ${({ theme }) => theme.colors.white};
	padding-top: 1.5rem;
`;
