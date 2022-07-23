import routes from 'constants/routes';
import { Fragment } from 'react';
import { Link } from 'shared/button-link';
import { Content, SideUserTop } from './styles';

type TProps = {
	hideMenu: () => void;
};

const SideContentUser = <T extends TProps>(props: T): JSX.Element => {
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
