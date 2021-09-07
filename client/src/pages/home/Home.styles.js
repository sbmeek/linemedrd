import styled from '@emotion/styled';

export const Parrafo = styled.div`
	color: ${props => props.theme.colors.green5};
	text-align: left;
	font-family: ${props => props.theme.fonts.segoeui};
	font-weight: normal;
	display: block;
	padding: 0;
`;

export const Prueba = styled.div`
	${({ theme }) => ({
		color: theme.colors.green2,
		background: theme.colors.green1,
		fontFamily: theme.fonts.neufreit
	})};
`;

const changeColorButton = props => {
	return props.children === 'Ver todas las especialidades'
		? { backgroundColor: props.theme.colors.green5 }
		: { backgroundColor: props.theme.colors.green4 };
};

export const Button = styled.button`
	border: none;
	border-radius: 0.3rem;
	width: 100%;
	padding: 0.6rem;
	margin: 2rem 0rem 1.5rem 0rem;
	font-weight: 500;
	letter-spacing: 0.1rem;
	font-weight: 500;

	${props => ({
		color: props.theme.colors.white,
		fontFamily: props.theme.fonts.segoeui
	})};

	${changeColorButton}

	.dark {
		background-color: ${props => props.theme.colors.green5};
	}
`;

const ContainerSection = props => {
	const {
		index,
		heigth,
		theme: {
			colors: { green6 },
			background: { content }
		}
	} = props;

	return index % 2 === 0
		? {
				backgroundColor: content,
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
	min-height: 30vh;
	display: grid;
	grid-gap: 1rem;
	grid-auto-columns: 6.3rem;
	grid-auto-rows: 7.3rem;
	grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
`;

export const Card = styled.div`
	${({ theme }) => ({
		backgroundColor: theme.colors.white,
		fontFamily: theme.fonts.neufreit,
		color: theme.colors.white
	})};

	border-radius: 0.5rem;

	.card-content {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 0.5rem;

		.card-body {
			/* height: 7.5rem; */
			height: 75%;
			width: 100%;
			border-radius: inherit;
			background-color: inherit;
			position: absolute;
			z-index: 12;
			background-color: ${({ theme }) => theme.colors.green1};
		}

		.card-footer {
			height: 30%;
			border-radius: 0rem 0rem 0.5rem 0.5rem;
			width: inherit;
			background-color: ${({ theme }) => theme.colors.green3};
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			bottom: 0;
			z-index: 10;
			letter-spacing: 1px;
		}
	}
`;
