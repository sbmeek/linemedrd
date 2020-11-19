import { createGlobalStyle } from 'styled-components';
import NunitoBold from 'assets/fonts/Nunito-Bold.ttf';
import NunitoExtraBold from 'assets/fonts/Nunito-ExtraBold.ttf';

export const GlobalStyle = createGlobalStyle`

	:root {
		--lmed-link-color: #5389E5;
		--lmed-green-00: #9ec8bf;
		--lmed-green-01: #85f2dc;
		--lmed-green-02: #66d2bc;
		--lmed-green-03: #005e4b;
	}

	@font-face {
		font-family: NunitoBold;
		src: url(${NunitoBold});
	}

	@font-face {
		font-family: NunitoExtraBold;
		src: url(${NunitoExtraBold});
	}

	* {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		font-family: NunitoBold, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		text-rendering: optimizeLegibility;
	}

	*:focus{
		outline: none;
	}

	body,
	#react-root {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 100vw;
		overflow: hidden;
		z-index: 0;
	}
`;
