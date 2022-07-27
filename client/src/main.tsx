import { ApolloProvider } from '@apollo/client';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BusProvider } from 'context/event-bus';
import App from './app';
import { client } from './client';
import { AuthProvider } from './context/auth';
import ThemeState from './context/theme/state';
import Main from './styles/index';
import { data } from './styles/theme';

import './i18n';

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<ApolloProvider client={client}>
				<ThemeState>
					<Main theme={data}>
						<Suspense fallback={<div>Loading...</div>}>
							<BusProvider>
								<App />
							</BusProvider>
						</Suspense>
					</Main>
				</ThemeState>
			</ApolloProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
