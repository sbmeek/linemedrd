import styled from '@emotion/styled';
import FormLogin from '../components/FormLogin/index';

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
	color: ${({ theme }) => theme.colors.green5};
	text-align: center;
`;

const Anclaje = styled.a`
	text-decoration: none;
	font-size: 1rem;
	${({ theme }) => ({
		fontFamily: theme.fonts.segoeui,
		color: theme.calendarNotify.blue1
	})};

	transition: color 300ms ease-out;

	&:hover {
		color: ${({ theme }) => theme.calendarNotify.blue2};
	}
`;

const Login = () => {
	return (
		<Container>
			<Titulo>Iniciar Sesión</Titulo>
			<FormLogin />
			<LinkBottom>
				<span>Nuevo en Concitmed</span>
				<Anclaje href="#?"> Crea una Cuenta</Anclaje>.
			</LinkBottom>
		</Container>
	);
};

export default Login;
