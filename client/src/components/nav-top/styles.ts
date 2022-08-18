import styled from '@emotion/styled';
import { Props } from '@emotion/react';

import { ContentTop, SideTop } from 'shared/side-top';

export const WrapperNavTop = styled(SideTop)`
	background-color: ${({ theme }) => theme.colors.green3};
	height: 100%;
	padding: 0.5rem 0rem 0.5rem 0rem;
`;

export const ContentNavTop = styled(ContentTop)`
	width: 80%;
`;

export const ContainerNavTop = styled.nav`
	width: 100%;
	min-height: 100%;
	height: 20vh;
	background-color: ${({ theme }) => theme.colors.green2};
	z-index: 200;
	padding-top: 3.6rem;
	transform: translateY(0);
	overflow-y: auto;
`;
