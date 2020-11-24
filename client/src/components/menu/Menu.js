import React, { useContext } from 'react';
import {
	Container,
	Overlay,
	Sidebar,
	Header,
	Content,
	Wrapper,
	MediaContainer,
	SocialMedia,
	ImgStyle,
	Spacer,
	LinkStyled
} from './Menu.style';
import IG from 'assets/icons/instagram.svg';
import FB from 'assets/icons/facebook.svg';
import phoneIcon from 'assets/icons/emergency-call.svg';
import { MainContext, actionTypes } from 'global/context';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Menu({
	sidebarOpen,
	setSidebarOpen,
	appContainerHeight
}) {
	const {
		state: { user },
		dispatch
	} = useContext(MainContext);
	const history = useHistory();

	const handleLogoutClick = async () => {
		await axios.post('/user/logout');
		dispatch({
			type: actionTypes.SET_IS_AUTHENTICATED,
			payload: {
				isAuthenticated: false
			}
		});
		dispatch({
			type: actionTypes.SET_USER,
			payload: {
				user: null
			}
		});
		history.push('/login');
		setSidebarOpen(false);
	};

	return (
		<Container>
			<Overlay
				appContainerHeight={appContainerHeight}
				showOverlay={sidebarOpen}
				onMouseDown={() => setSidebarOpen(false)}
			/>
			<Wrapper>
				<Sidebar appContainerHeight={appContainerHeight} showMenu={sidebarOpen}>
					<Header>
						<img src={phoneIcon} alt="phone" />
					</Header>
					<Content>
						<LinkStyled onMouseUp={() => setSidebarOpen(false)} to="/">
							Inicio
						</LinkStyled>
						{user === null ? (
							<>
								<LinkStyled onMouseUp={() => setSidebarOpen(false)} to="/login">
									Iniciar sesi&oacute;n
								</LinkStyled>
								<LinkStyled
									onMouseUp={() => setSidebarOpen(false)}
									to="/register"
								>
									Registrarse
								</LinkStyled>
							</>
						) : user.Role === 0 ? (
							<>
								<LinkStyled
									onMouseUp={() => setSidebarOpen(false)}
									to="/reservedApnts"
								>
									Citas reservadas
								</LinkStyled>
							</>
						) : user.Role === 1 ? (
							<>
								<LinkStyled
									onMouseUp={() => setSidebarOpen(false)}
									to="/schedule"
								>
									Agenda
								</LinkStyled>
							</>
						) : user.Role === 2 ? (
							<>
								<LinkStyled
									onMouseUp={() => setSidebarOpen(false)}
									to="/admincp"
								>
									Administración
								</LinkStyled>
							</>
						) : null}
						{user !== null && user.Role >= 0 && (
							<LinkStyled to="/login" onMouseUp={handleLogoutClick}>
								Cerrar sesi&oacute;n
							</LinkStyled>
						)}
					</Content>
					<Spacer />
					<MediaContainer>
						<h2>Redes Sociales</h2>
						<SocialMedia
							href="https://www.instagram.com/linemedrd/"
							rel="noreferrer"
							target="_blank"
						>
							<ImgStyle src={IG} />
							LineMedRD-ig
						</SocialMedia>
						<SocialMedia
							href="https://www.facebook.com/Linemedrd-100328205260398"
							rel="noreferrer"
							target="_blank"
						>
							<ImgStyle src={FB} />
							LineMedRD-fb
						</SocialMedia>
					</MediaContainer>
				</Sidebar>
			</Wrapper>
		</Container>
	);
}
