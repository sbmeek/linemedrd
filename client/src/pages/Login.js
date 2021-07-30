import styled from '@emotion/styled';

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
	margin: 1.5rem 0;
`;

const Input = styled.input`
	width: 100%;
	max-width: 100%;
	margin: 0.6rem 0;
	padding: 0.7rem 0.5rem;
	border-radius: 0.4rem;
	border: none;
	${({ theme }) => ({
		backgroundColor: theme.colors.green1,
		color: theme.calendarNotify.blue1,
		fontFamily: theme.fonts.segoeui
	})}

	&::placeholder {
		color: ${({ theme }) => theme.iconPlaceholder.grayTraps1};
	}
`;

const Link = styled.div`
	text-align: left;
	color: ${({ theme }) => theme.colors.green5};
`;

const LinkBottom = styled(Link)('text-align:center');

const Anclaje = styled.a`
	text-decoration: none;
	font-size: 1rem;
	${({ theme }) => ({
		fontFamily: theme.fonts.segoeui,
		color: theme.calendarNotify.blue1
	})};
`;

const Submit = styled.button`
	border-radius: 0.4rem;
	width: 100%;
	max-width: 100%;
	padding: 0.5rem 0;
	margin: 2.5rem 0 1.3rem 0;
	text-align: center;
	border: none;
	font-size: 1.05rem;
	${({ theme }) => ({
		color: theme.colors.white,
		backgroundColor: theme.colors.green4,
		fontFamily: theme.fonts.segoeuiBold
	})}
`;

const Login = () => {
	return (
		<Container>
			<Titulo>Iniciar Sesión</Titulo>
			<form>
				<div>
					<Input
						type="text"
						className="textInput"
						name="name"
						placeholder="Ingresar correo electrónico o nombre de usuario"
						aria-label="Ingresar nombre de usuario o correo"
						aria-required="true"
						required
					/>
				</div>
				<div>
					<Input
						type="password"
						className="textInput"
						name="name"
						placeholder="Ingresar Contraseña"
						aria-label="Ingresar nombre de usuario o correo"
						aria-required="true"
						required
					/>
				</div>
				<Link>
					<Anclaje href="#?	">¿Olvidaste la contraseña?</Anclaje>
				</Link>
				<Submit type="submit" aria-label="Iniciar Sesión">
					Iniciar Sesión
				</Submit>
			</form>
			<LinkBottom>
				<span>Nuevo en Concitmed</span>
				<Anclaje href="#?"> Crea una Cuenta</Anclaje>.
			</LinkBottom>
		</Container>
	);
};

export default Login;
