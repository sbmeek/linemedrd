import { Fragment } from 'react';
import Link, { SideUserTop, Content } from './SideTopUser.styles';
import routes from 'constants/routes';

const SideContentUser = props => {
	return (
		<Fragment>
			<SideUserTop>
				<Content onClick={props.hideMenu}>
					<Link to={routes.login.path}>Iniciar sesión</Link>
					<Link to={routes.signup.path}>Regístrate</Link>
				</Content>
			</SideUserTop>
		</Fragment>
	);
};

export default SideContentUser;
