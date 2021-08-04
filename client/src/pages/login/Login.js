import FormLogin from '../../components/formLogin/FormLogin';
import { Container, Titulo } from './Login.styles';
import Link, { ContentLink } from '@/shared/link/Link';

const Login = () => {
	return (
		<Container>
			<Titulo>Iniciar Sesión</Titulo>
			<FormLogin />
			<ContentLink>
				<span>Nuevo en Concitmed</span>
				<Link to="./Signup">Crea una Cuenta</Link>.
			</ContentLink>
		</Container>
	);
};

export default Login;
