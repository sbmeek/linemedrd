import React from 'react';
import crossIcon from 'assets/icons/cross.svg';
import { CargandoTxt, LoaderContainer } from './Loader.style';

export default function Loader() {
	return (
		<LoaderContainer>
			<img src={crossIcon} alt="cross" />
			<CargandoTxt />
		</LoaderContainer>
	);
}
