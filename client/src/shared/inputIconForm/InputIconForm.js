import styled from '@emotion/styled';
import Input from '@/shared/inputForm/InputForm';

export const Icon = styled.div`
	position: absolute;
	right: 0.5rem;
	top: 1.4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 1.3rem;
	fill: ${({ theme }) => theme.colors.green5};
`;

export const IconLabel = styled(Icon)`
	top: 50%;
`;

export default styled(Input)`
	position: relative;
	& input {
		padding-right: 2rem;
	}
`;
