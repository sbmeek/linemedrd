import FormLogin from '../../components/formLogin/FormLogin';
import { Container } from './Login.styles';
import Link, { ContentLink } from '@/shared/link/Link';
import Title from '@/shared/title/Title';

const Login = () => {
	return (
		<Container>
			<Title>Iniciar Sesión</Title>
			<FormLogin />
			<ContentLink>
				<span>Nuevo en Concitmed</span>
				<Link to="./Signup">Crea una Cuenta</Link>.
			</ContentLink>
		</Container>
	);
};

export default Login;
