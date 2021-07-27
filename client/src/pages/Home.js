// @ts-nocheck
import styled from '@emotion/styled';

const Prueba = styled.div`
	@font-face {
		font-family: letra1;
		src: url(${({ theme }) => theme.fonts.neufreit});
	}

	${({ theme }) => ({
		color: theme.colors.green2,
		background: theme.colors.green1
	})};
	font-family: letra1;
	font-size: large;
`;

export default function Home() {
	return <Prueba>Home</Prueba>;
}
