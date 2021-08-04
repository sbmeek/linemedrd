import FormSignup from '@/components/formSignup/FormSignup';
import { Container, Titulo } from './Signup.styles';
import Link, { ContentLink } from '@/shared/link/Link';

const Signup = () => {
	return (
		<Container>
			<Titulo>Regístrate</Titulo>
			<FormSignup />
			<ContentLink>
				¿Ya tienes una cuenta?
				<Link to="/Login">Iniciar Sesión</Link>
			</ContentLink>
		</Container>
	);
};

export default Signup;
