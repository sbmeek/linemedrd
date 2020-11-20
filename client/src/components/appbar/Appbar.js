import React from 'react';
import { Container, Brand } from './Appbar.style';
import { IconButton } from '@material-ui/core';
import menuIcon from 'assets/icons/menu.svg';
import stethoscopeIcon from 'assets/icons/stethoscope.svg';

export default function Appbar() {
	return (
		<Container>
			<Brand to="/">
				<img style={{ width: 23.84 }} src={stethoscopeIcon} alt="stethoscope" />
				<h2>LineMedRD</h2>
			</Brand>
			<IconButton style={{ height: '100%' }} aria-label="menu">
				<img style={{ width: 26 }} src={menuIcon} alt="menu" />
			</IconButton>
		</Container>
	);
}
