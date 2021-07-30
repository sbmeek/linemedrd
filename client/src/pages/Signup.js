import styled from '@emotion/styled';
import FormSignup from '@/components/FormSignup';

const Container = styled.div`
	width: 80%;
	margin: auto;
`;

const Titulo = styled.h2`
	${({ theme }) => ({
		['font-family']: theme.fonts.neufreit,
		color: theme.colors.green3
	})};
	text-align: left;
	font-size: 1.9rem;
	margin: 1.7rem 0;
`;

const LinkBottom = styled.div`
	text-align: center;
	${({ theme }) => ({
		color: theme.colors.green5,
		fontFamily: theme.fonts.segoeui
	})}
	font-size: 1.088rem;
`;

const Anclaje = styled.a`
	text-decoration: none;

	${({ theme }) => ({
		fontFamily: theme.fonts.segoeui,
		color: theme.calendarNotify.blue1
	})};

	transition: color 300ms ease-out;

	&:hover {
		color: ${({ theme }) => theme.calendarNotify.blue2};
	}
`;

const Signup = () => {
	return (
		<Container>
			<Titulo>Regístrate</Titulo>
			<FormSignup />
			<LinkBottom>
				¿Ya tienes una cuenta? <Anclaje href="#?">Iniciar Sesión</Anclaje>
			</LinkBottom>
		</Container>
	);
};

export default Signup;
