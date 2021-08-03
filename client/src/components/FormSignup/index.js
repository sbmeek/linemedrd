import styled from '@emotion/styled';

const ContentInput = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	margin-bottom: 0.5rem;

	& label {
		color: ${({ theme }) => theme.colors.green5};
		font-family: ${({ theme }) => theme.fonts.segoeuiBold};
		text-align: left;
		font-size: 0.88rem;
	}

	& input {
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
	}
`;

const CheckboxContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	vertical-align: middle;
	margin: 0.7rem 0;

	& label {
		text-align: justify;
		padding: 0rem 0.5rem;
		cursor: pointer;
		${({ theme }) => ({
			color: theme.colors.green5,
			fontFamily: theme.fonts.segoeui
		})}
	}

	& input[type='checkbox'] {
		cursor: pointer;
		border-color: ${({ theme }) => theme.colors.green5};
	}
`;

const Submit = styled.button`
	border-radius: 0.4rem;
	width: 100%;
	max-width: 100%;
	padding: 0.5rem 0;
	margin: 1.4rem 0;
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

const FormSignup = () => {
	return (
		<form>
			<ContentInput>
				<label htmlFor="signup-name">Nombre de usuario</label>
				<input
					type="text"
					name="signupName"
					aria-label="Ingresar nombre de usuario"
					placeholder="Ingresar nombre de usuario"
					aria-required="true"
					id="signup-name"
					required
				/>
			</ContentInput>

			<ContentInput>
				<label htmlFor="signup-email">Correo electrónico</label>
				<input
					type="text"
					name="signupEmail"
					aria-label="Ingresar correo electrónico"
					placeholder="Ingresar correo electrónico"
					aria-required="true"
					id="signup-email"
					required
				/>
			</ContentInput>
			<ContentInput>
				<label htmlFor="signup-password">Contraseña</label>
				<input
					type="text"
					name="signupPassword"
					aria-label="Ingresar contraseña"
					placeholder="Ingresar contraseña"
					aria-required="true"
					id="signup-password"
					required
				/>
			</ContentInput>
			<CheckboxContainer>
				<input type="checkbox" name="polity" />
				<label>
					Declaro que soy mayor de edad y acepto el{' '}
					<a href="#?">Aviso de privacidad</a> y los{' '}
					<a href="#?">Términos y condiciones</a> de uso de Concitmed.
				</label>
			</CheckboxContainer>
			<Submit type="submit">Regístrate</Submit>
		</form>
	);
};

export default FormSignup;
