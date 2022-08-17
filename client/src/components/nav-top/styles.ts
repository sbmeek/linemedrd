import styled from '@emotion/styled';
import { Props } from '@emotion/react';

import { ContentTop, SideTop } from 'shared/side-top';

const defaultBackgroundColor = (props: Props & { levelColor?: string }) => {
	const { levelColor } = props;

	return `background-color: ${levelColor ?? 3};`;
};

export const WrapperNavTop = styled(SideTop)<{ levelColor?: string }>`
	background-color: ${defaultBackgroundColor};
`;

export const ContentNavTop = styled(ContentTop)`
	width: 80%;
`;

/*<{ show: boolean }>*/
export const ContainerNavTop = styled.nav`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.green3};
	z-index: 200;
	padding-top: 3.6rem;
	transform: translateY(0);
	/* position: fixed; */
	overflow-y: auto;
`;
