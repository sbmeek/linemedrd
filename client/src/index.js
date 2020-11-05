import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyleSheetManager } from 'styled-components';

const reactRoot = document.querySelector('#react-root');

const calcVH = (() => {
	const vH = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight || 0
	);
	reactRoot.setAttribute('style', `height: ${vH}px;`);
})();

window.addEventListener('resize', calcVH, true);
window.addEventListener('orientationchange', calcVH, true);

ReactDOM.render(
	<React.StrictMode>
		<StyleSheetManager
			disableVendorPrefixes={process.env.NODE_ENV === 'development'}
		>
			<App />
		</StyleSheetManager>
	</React.StrictMode>,
	reactRoot
);

reportWebVitals();
