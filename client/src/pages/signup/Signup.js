import FormSignup from '@/components/formSignup/FormSignup';
import { Container, Titulo, LinkBottom, Anclaje } from './Signup.styles';

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
