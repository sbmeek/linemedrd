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

const Signup = () => {
	return (
		<Container>
			<Titulo>Regístrate</Titulo>
			<FormSignup />
			<div>
				¿Ya tienes una cuenta? <a href="#?">Iniciar Sesión</a>
			</div>
		</Container>
	);
};

export default Signup;
