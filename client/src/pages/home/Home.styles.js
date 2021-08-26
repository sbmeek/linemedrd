import styled from '@emotion/styled';

export const Parrafo = styled.div`
	color: ${props => props.theme.colors.green5};
	text-align: left;
	font-family: ${props => props.theme.fonts.segoeui};
	font-weight: normal;
	display: block;
	padding: 0px;
	margin-bottom: 20px;
`;

export const Prueba = styled.div`
	${({ theme }) => ({
		color: theme.colors.green2,
		background: theme.colors.green1,
		fontFamily: theme.fonts.neufreit
	})};
`;

export const Button = styled.button`
	border: none;
	border-radius: 0.3rem;
	width: 100%;
	padding: 0.6rem;
	margin: 1rem 0rem;
	font-weight: 500;
	letter-spacing: 0.1rem;
	font-weight: 500;

	${props => ({
		backgroundColor: props.theme.colors.green4,
		color: props.theme.colors.white,
		fontFamily: props.theme.fonts.segoeui
	})}

	&:hover {
		background-color: ${props => props.theme.colors.green5};
	}
`;

const ContainerSection = props => {
	const {
		index,
		heigth,
		theme: {
			colors: { white, green6 }
		}
	} = props;

	return index % 2 === 0
		? {
				backgroundColor: white,
				zIndex: index,
				minHeight: heigth
		  }
		: {
				backgroundColor: green6,
				zIndex: index,
				minHeight: heigth
		  };
};

export const ContainerHome = styled.section`
	width: 100%;
	border-radius: 0rem 0rem 1rem 1rem;
	position: relative;

	&.hideTop {
		padding: 1rem 0rem;
		margin-top: -1rem;
	}
	${ContainerSection};
`;

export const HomeTitle = styled.h3`
	width: 100%;
	margin: 2rem 0rem;
	letter-spacing: 0.08rem;
	font-size: 1.4rem;
	word-break: break-all;

	${({ theme }) => ({
		color: theme.colors.white,
		fontFamily: theme.fonts.neufreit
	})}
`;

export const ContentCard = styled.div`
	min-height: 40vh;
	display: grid;
	gap: 1rem;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(2, 1fr);
`;

export const Card = styled.div`
	background-color: ${({ theme }) => theme.colors.green1};
	color: ${({ theme }) => theme.colors.white};
	border-radius: 0.5rem;
`;
