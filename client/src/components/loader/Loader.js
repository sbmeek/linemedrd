import React from 'react';
import crossIcon from 'assets/icons/cross.svg';

export default function Loader() {
	return (
		<div>
			<img src={crossIcon} alt="cross" />
		</div>
	);
}
