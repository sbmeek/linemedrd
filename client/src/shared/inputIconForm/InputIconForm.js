import styled from '@emotion/styled';
import { InputWrapper } from '../Input/Input';

export const Icon = styled.div`
	position: absolute;
	right: 0.6rem;
	top: 30%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 1.3rem;
	fill: ${({ theme }) => theme.colors.green5};
`;

export const IconLabel = styled(Icon)`
	top: 30%;
`;

export const InputWrapperIcon = styled(InputWrapper)`
	padding-right: 2rem;
`;
