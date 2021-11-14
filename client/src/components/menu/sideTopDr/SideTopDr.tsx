import {
	TextLink,
	TextLinks,
	ContentDr,
	SideDrTop,
	NameBar
} from './SideTopDr.styles';
import routes from 'constants/routes';
import CalendarIcon from 'assets/icon/calendar_icon/CalendarIcon';
import UserIcon from 'assets/icon/user_icon/UserIcon';
import SettingIcon from 'assets/icon/setting_icon/SettingIcon';
import LogoutIcon from 'assets/icon/logout_icon/LogoutIcon';
import useAuth from 'context/auth/authContext';

type IProps = {
	hideMenu: () => void;
};

const SideTopDr = <T extends IProps>(props: T) => {
	const { hideMenu } = props;

	const { logout } = useAuth();

	return (
		<SideDrTop>
			<ContentDr onClick={hideMenu}>
				<NameBar>¡Hola, Dr. Jeffrey Nicolás!</NameBar>
				<TextLinks to={routes.login.path}>
					<div className="icon">
						<CalendarIcon />
					</div>
					<div className="name">Citas reservadas</div>
				</TextLinks>
				<TextLinks to={routes.signup.path}>
					<div className="icon">
						<UserIcon />
					</div>
					<div className="name">Ver perfil</div>
				</TextLinks>
				<TextLinks to={routes.home.path}>
					<div className="icon">
						<SettingIcon />
					</div>
					<div className="name">Configuración</div>
				</TextLinks>
				<TextLink onClick={() => logout()}>
					<div className="icon">
						<LogoutIcon />
					</div>
					<div className="name">Cerrar Sesion</div>
				</TextLink>
			</ContentDr>
		</SideDrTop>
	);
};

export default SideTopDr;
