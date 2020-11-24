import React from 'react';
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

export default function Menu({
	sidebarOpen,
	setSidebarOpen,
	appContainerHeight
}) {
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
						<LinkStyled to="/login">Iniciar sesi&oacute;n</LinkStyled>
						<LinkStyled to="/register">Registrarse</LinkStyled>
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
