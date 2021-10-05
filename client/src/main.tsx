import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Main from './styles/index';
import { data } from './styles/Theme';
import App from './App';
import ThemeState from './context/theme/themeState';
import { AuthProvider } from './context/authContext';
import { AlertaState } from './context/alerta/alertaState';

import './i18n';

ReactDOM.render(
	<React.StrictMode>
		<AlertaState>
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
		</AlertaState>
	</React.StrictMode>,
	document.getElementById('root')
);
