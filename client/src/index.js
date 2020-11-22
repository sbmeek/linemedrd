import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyleSheetManager } from 'styled-components';
import ContextWrapper from 'global/context';
import { ThemeProvider } from '@material-ui/core';
import { muiTheme } from './shared/theme';

const reactRoot = document.querySelector('#react-root');

const calcVH = (() => {
	const vH = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight || 0
	);
	reactRoot.setAttribute('style', `height: ${vH}px;`);
})();

window.addEventListener('resize', calcVH);
window.addEventListener('orientationchange', calcVH);

ReactDOM.render(
	<React.StrictMode>
		<ContextWrapper>
			<StyleSheetManager
				disableVendorPrefixes={process.env.NODE_ENV === 'development'}
			>
				<ThemeProvider theme={muiTheme}>
					<App />
				</ThemeProvider>
			</StyleSheetManager>
		</ContextWrapper>
	</React.StrictMode>,
	reactRoot
);

reportWebVitals();
