import { Props } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import { ComponentProps, ElementType, JSXElementConstructor } from 'react';
import { Link as ComponentLink } from 'react-router-dom';
import { SideTop, ContentTop } from 'shared/sideTop/SideTop';

export const SideDrTop = styled(SideTop)`
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentDr = ContentTop;

const fontStyle = ({ theme }: Props) => ({
	fontFamily: theme.fonts.segoeuiBold,
	color: theme.colors.green5,
	fontSize: '1rem',
	letterSpacing: '0.006rem'
});

export const NameBar = styled.div`
	text-align: left;
	${fontStyle};
`;

const TextLink = styled.div`
	text-decoration: unset;
	font-size: 1rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 1rem;

	:hover {
		background-color: #adffc2;
	}

	.icon {
		height: 1.2rem;
		width: 1.2rem;
		fill: ${({ theme }) => theme.colors.green5};
	}

	.name {
		margin-left: 0.5rem;
		${fontStyle}
	}
`;

export const TextLinks = TextLink.withComponent(ComponentLink);
