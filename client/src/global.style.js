import { createGlobalStyle } from 'styled-components';
import NunitoBold from 'assets/fonts/Nunito-Bold.ttf';
import NunitoExtraBold from 'assets/fonts/Nunito-ExtraBold.ttf';
import { lmedTheme } from 'shared/theme';

export const GlobalStyle = createGlobalStyle`

	:root {
		--lmed-link-color: ${lmedTheme.linkColor};
		--lmed-link-hover-color: ${lmedTheme.linkColorHover};
		--lmed-black-00: ${lmedTheme.black00};
		--lmed-green-00: ${lmedTheme.green00};
		--lmed-green-01: ${lmedTheme.green01};
		--lmed-green-02: ${lmedTheme.green02};
		--lmed-green-03: ${lmedTheme.green03};
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
		font-family: NunitoBold, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
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
