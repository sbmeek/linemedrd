import styled from '@emotion/styled';
import Input from '@/shared/inputForm/InputForm';

export const color = ({ theme }) => {
	return theme.colors.green4;
};

export const Icon = styled.div`
	position: absolute;
	right: 0%;
	color: ${color};
`;

export default styled(Input)`
	& input {
		padding-right: 10%;
	}
	position: relative;
`;
