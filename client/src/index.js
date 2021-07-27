import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Main from './styles/index';
import { data } from './styles/Theme';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Main theme={data}>
				<App />
			</Main>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// @ts-ignore
if (import.meta.hot) {
	// @ts-ignore
	import.meta.hot.accept();
}
