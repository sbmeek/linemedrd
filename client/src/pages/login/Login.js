import React from 'react';
import { TextField } from '@material-ui/core';

export default function Login () {
	return (
		<div>
			<h2>Login</h2>
				<TextField label="Email" type="email" />
				<TextField label="Password" type="password" />
		</div>
	)
}
