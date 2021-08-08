import styled from '@emotion/styled';
import Input from '@/shared/inputForm/InputForm';

function iconLabel(props) {
	return props.label ? '1.4rem' : '50%';
}

export const Icon = styled.div`
	position: absolute;
	right: 0.5rem;
	top: ${iconLabel};
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.green5};
`;

export default styled(Input)`
	position: relative;
	& input {
		padding-right: 2rem;
	}
`;
