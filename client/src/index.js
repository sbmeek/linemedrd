import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Main from './styles/index';
import { data } from './styles/Theme';
import App from './App';
import ThemeState from './context/theme/themeState';

import './i18next';

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<ThemeState>
				<Main theme={data}>
					<Suspense fallback={<div>Loading...</div>}>
						<App />
					</Suspense>
				</Main>
			</ThemeState>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// @ts-ignore
if (import.meta.hot) {
	// @ts-ignore
	import.meta.hot.accept();
}
