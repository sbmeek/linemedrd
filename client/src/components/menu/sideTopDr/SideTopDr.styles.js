import styled from '@emotion/styled';
import { Link as ComponentLink } from 'react-router-dom';
import SideTop, { ContentTop } from '@/shared/sideTop/SideTop';

export const SideDrTop = styled(SideTop)`
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentDr = ContentTop;

const fontStyle = ({ theme }) => ({
	fontFamily: theme.fonts.segoeuiBold,
	color: theme.colors.green5
});

export const NameBar = styled.h3`
	text-align: left;
	font-size: 1rem;
	font-weight: 500;
	letter-spacing: 0.009rem;
	${fontStyle}
`;

const TextLink = styled.div`
	text-decoration: unset;
	font-size: 1rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-top: 1rem;

	${fontStyle}

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
	}
`;

export default TextLink.withComponent(ComponentLink);
