import TextLink, { ContentDr, SideDrTop, NameBar } from './SideTopDr.styles';
import routes from 'constants/routes';
import CalendarIcon from 'assets/icon/calendar_icon/CalendarIcon';
import UserIcon from 'assets/icon/user_icon/UserIcon';
import SettingIcon from 'assets/icon/setting_icon/SettingIcon';
import LogoutIcon from 'assets/icon/logout_icon/LogoutIcon';

const SideTopDr = (props: any) => {
	return (
		<SideDrTop>
			<ContentDr onClick={props.hideMenu}>
				<NameBar>¡Hola, Dr. Jeffrey Nicolás!</NameBar>
				<TextLink to={routes.login.path}>
					<div className="icon">
						<CalendarIcon />
					</div>
					<div className="name">Citas reservadas</div>
				</TextLink>
				<TextLink to={routes.signup.path}>
					<div className="icon">
						<UserIcon />
					</div>
					<div className="name">Ver perfil</div>
				</TextLink>
				<TextLink to={routes.home.path}>
					<div className="icon">
						<SettingIcon />
					</div>
					<div className="name">Configuración</div>
				</TextLink>
				<TextLink to={routes.home.path}>
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
