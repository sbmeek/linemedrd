import React, { useState } from 'react';
import { Container, Brand } from './Appbar.style';
import { IconButton } from '@material-ui/core';
import menuIcon from 'assets/icons/menu.svg';
import stethoscopeIcon from 'assets/icons/stethoscope.svg';
import Menu from 'components/menu/Menu';

export default function Appbar({ appContainerHeight }) {
	const [sidebarOpen, setSidebarOpen] = useState();

	return (
		<Container>
			<Brand to="/">
				<img style={{ width: 23.84 }} src={stethoscopeIcon} alt="stethoscope" />
				<h2>LineMedRD</h2>
			</Brand>
			<IconButton
				onMouseDown={() => setSidebarOpen(!sidebarOpen)}
				style={{ height: '100%' }}
				aria-label="menu"
			>
				<img style={{ width: 26, height: 21 }} src={menuIcon} alt="menu" />
			</IconButton>
			<Menu
				appContainerHeight={appContainerHeight}
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
			></Menu>
		</Container>
	);
}
