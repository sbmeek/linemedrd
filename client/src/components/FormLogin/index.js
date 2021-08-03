import styled from '@emotion/styled';

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
	transition: background-color 300ms linear;

	&:hover {
		background-color: ${({ theme }) => theme.colors.green5};
	}
`;

const FormLogin = () => {
	return (
		<form>
			<div>
				<Input
					type="text"
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
					name="password"
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
	);
};

export default FormLogin;
