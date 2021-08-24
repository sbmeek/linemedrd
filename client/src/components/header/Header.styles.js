import styled from '@emotion/styled';

const TopContentColor = props => {
	return props.location === '/'
		? {
				backgroundColor: 'white',
				color: props.theme.colors.green5
		  }
		: {
				backgroundColor: props.theme.colors.green5,
				color: 'white'
		  };
};

export const ContentHeader = styled.header`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	width: 100%;
	max-height: 100%;
	z-index: 5;
`;

export const ContainerTop = styled.div`
	display: flex;
	width: 100%;
	max-width: 100%;
	padding: 1rem;
	border: none;
	justify-content: space-between;
	z-index: 6;

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
