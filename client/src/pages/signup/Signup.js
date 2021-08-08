import FormSignup from '@/components/formSignup/FormSignup';
import { Container } from './Signup.styles';
import Link, { ContentLink } from '@/shared/link/Link';
import Title from '@/shared/title/Title';

const Signup = () => {
	return (
		<Container>
			<Title>Regístrate</Title>
			<FormSignup />
			<ContentLink>
				¿Ya tienes una cuenta? <Link to="/Login">Iniciar Sesión</Link>
			</ContentLink>
		</Container>
	);
};

export default Signup;
