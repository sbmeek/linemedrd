import styled from '@emotion/styled';

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

// const topColor = props => {
// 	console.log(location);
// 	return location === '/' ? 'white' : 'theme.colors.green5';
// };

export const ContainerTop = styled.div`
	display: flex;
	width: 100%;
	max-width: 100%;
	padding: 1rem;
	border: none;
	justify-content: space-between;
	z-index: 6;

	${({ theme }) => ({
		backgroundColor: theme.colors.green5,
		fontFamily: theme.fonts.segoeui
	})}

	& h1 {
		font-size: 1rem;
	}
`;
