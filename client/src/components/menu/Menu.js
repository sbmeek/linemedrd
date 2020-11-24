import React from 'react';
import {
	Container,
	Overlay,
	Sidebar,
	Wrapper,
	MediaContainer,
	SocialMedia,
	ImgStyle,
	Spacer
} from './Menu.style';
import Link from 'shared/link/Link.styled';
import IG from 'assets/icons/instagram.svg';
import FB from 'assets/icons/facebook.svg';

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
					<Link to="/login">Iniciar sesi&oacute;n</Link>
					<Link to="/register">Registrarse</Link>
					<Spacer></Spacer>
					<MediaContainer>
						Nuestras Redes:
						<SocialMedia>
							<ImgStyle src={IG} />
							<a
								href="https://www.instagram.com/linemedrd/"
								rel="noreferrer"
								target="_blank"
							>
								LineMedRD-ig
							</a>
						</SocialMedia>
						<SocialMedia>
							<ImgStyle src={FB} />
							<a
								href="https://www.facebook.com/Linemedrd-100328205260398"
								rel="noreferrer"
								target="_blank"
							>
								LineMedRD-fb
							</a>
						</SocialMedia>
					</MediaContainer>
				</Sidebar>
			</Wrapper>
		</Container>
	);
}
