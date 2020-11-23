import React from 'react';
import { Container, Overlay, Sidebar, Wrapper } from './Menu.style';

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
				<Sidebar
					appContainerHeight={appContainerHeight}
					showMenu={sidebarOpen}
				></Sidebar>
			</Wrapper>
		</Container>
	);
}
