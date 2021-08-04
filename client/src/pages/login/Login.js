import FormLogin from '@/components/formLogin/FormLogin';
import { Container, LinkBottom, Titulo } from './Login.styles';
import Link from '@/shared/link';
import { appName } from '@/constants';

const Login = () => {
	return (
		<Container>
			<Titulo>Iniciar Sesión</Titulo>
			<FormLogin />
			<LinkBottom>
				<span>Nuevo en {appName}</span>
				<Link to="#?"> Crea una Cuenta</Link>.
			</LinkBottom>
		</Container>
	);
};

export default Login;
