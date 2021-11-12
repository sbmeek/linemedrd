import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Main from './styles/index';
import { data } from './styles/theme';
import App from './App';
import ThemeState from './context/theme/themeState';
import { AuthProvider } from './context/auth/authContext';

import './i18n';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<ApolloProvider client={client}>
				<ThemeState>
					<Main theme={data}>
						<Suspense fallback={<div>Loading...</div>}>
							<App />
						</Suspense>
					</Main>
				</ThemeState>
			</ApolloProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
