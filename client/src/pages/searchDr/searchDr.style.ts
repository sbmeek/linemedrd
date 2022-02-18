import { Container } from 'shared/container/Container';
import styled from '@emotion/styled';
import { Wrapper } from 'shared/inputDatalist/inputDatalist';

export const ContainerSearchDr = styled(Container)`
	text-align: center;
`;

export const WrapperDatalist = styled(Wrapper)`
	background-color: white;

	datalist {
		background-color: white;
		border-color: ${({ theme }) => theme.colors.green3};
	}
`;
