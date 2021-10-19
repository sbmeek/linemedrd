import { Props } from '@emotion/react';
import styled from '@emotion/styled';

type ContainerTopProp = { location: string };

const TopContentColor = (props: Props & ContainerTopProp) => {
	return props.location === '/'
		? {
				backgroundColor: props.theme.colors.white,
				color: props.theme.colors.green5
		  }
		: {
				backgroundColor: props.theme.colors.green5,
				color: props.theme.colors.white
		  };
};

export const ContentHeader = styled.header`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	max-height: 100%;
	z-index: 300;
`;

export const ContainerTop = styled.div<ContainerTopProp>`
	display: flex;
	width: 100%;
	max-width: 100%;
	padding: 1rem;
	border: none;
	justify-content: space-between;
	z-index: 300;

	${props => {
		const background = TopContentColor(props);
		return {
			...background,
			fontFamily: props.theme.fonts.segoeui
		};
	}}

	& h1 {
		font-size: 1rem;
	}
`;
